import test from 'node:test';
import assert from 'node:assert/strict';
import { getPageBySegments, getChildren } from '../src/lib/content.ts';

test('only language roots are homepages, not section indexes', () => {
  for (const path of ['zh', 'cc']) assert.equal(getPageBySegments([path]).isHome, true);
  for (const path of ['zh/about', 'zh/news', 'zh/dev', 'cc/about', 'cc/post']) {
    const page = getPageBySegments(path.split('/'));
    assert.equal(page.isIndex, true);
    assert.equal(page.isHome, false, path);
  }
});
test('news section exposes real child routes or its body', () => {
  const page = getPageBySegments(['zh', 'news']);
  assert.ok(getChildren(page).length || page.html.trim());
});
