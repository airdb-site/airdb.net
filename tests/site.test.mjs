import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { getAllPages, getChildren, getLanguageOptions } from '../src/lib/content.ts';
import { HOME_CONTENT } from '../src/config/home.ts';
const root = path.resolve('dist');
const html = route => fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
const exists = route => fs.existsSync(path.join(root, route)) || fs.existsSync(path.join(root, route, 'index.html'));

test('built sections render content rather than hero', () => {
  for (const route of ['zh/news','zh/about','zh/dev','cc/about','cc/post']) {
    assert.ok(html(route).includes('article-shell'), route);
    assert.ok(!html(route).includes('class="home-hero '), route);
  }
  assert.match(html('zh/about'), /class="card-link" href="\/zh\/about\/pm\/"/);
  assert.ok(exists('zh/showcase'));
});
test('home and detail share navigation; every CTA has a meaningful target', () => {
  for (const lang of ['zh', 'cc']) {
    const home = html(lang), detail = html(`${lang}/about`);
    const nav = text => text.match(/<nav class="top-nav"[\s\S]*?<\/nav>/)[0].replace(/ class="active"/g, '');
    assert.equal(nav(home), nav(detail));
    assert.doesNotMatch(home, /type="email"|subscribe-form|social-row|120\+|210\+|900 万|9M\+/);
    for (const story of HOME_CONTENT[lang].stories) {
      assert.notEqual(story.url, `/${lang}/`);
      assert.ok(exists(story.url));
      assert.ok(home.includes(`href="${story.url}"`));
    }
    assert.doesNotMatch(home, /hreflang="cc"/);
    assert.doesNotMatch(home, /hero-family\.jpg|hero-solar\.jpg|bg-mountains\.jpg/, "do not restore composite images with baked-in claims");
  }
});
test('all built internal links and images resolve', () => {
  for (const file of fs.readdirSync(root, { recursive: true }).filter(f => f.endsWith('.html'))) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    for (const match of text.matchAll(/(?:href|src)="([^"#]+)"/g)) {
      const value = match[1];
      if (/^(?:[a-z]+:|\/\/)/i.test(value)) continue;
      const url = new URL(value, `https://test.invalid/${file}`);
      assert.ok(exists(decodeURIComponent(url.pathname)), `${file}: ${value}`);
    }
  }
});
test('reachable content and language fallback are honest', () => {
  for (const page of getAllPages()) {
    if (!page.isHome) assert.ok(page.body.replace(/<!--[\s\S]*?-->/g, '').trim() || getChildren(page).length, page.routePath);
    for (const child of getChildren(page)) assert.doesNotMatch(child.body, /建设中|Coming soon/i);
    for (const option of getLanguageOptions(page, { zh: '中文', cc: 'EN' })) {
      if (!option.active) assert.equal(option.url, `/${option.code}/`);
    }
  }
  assert.match(html('cc/contact'), /public|Public/);
  assert.match(html('zh/about/security'), /Argon2id/);
  assert.doesNotMatch(html('zh/about/security'), /使用非对称加密存储/);
});
