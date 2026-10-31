export type HomeContent = {
  nav: Array<{ name: string; url: string }>;
  languageLabel: string;
  heroTitle: string;
  heroBody: string;
  primaryAction: string;
  secondaryAction: string;
  focusTitle: string;
  focusItems: string[];
  capabilityTitle: string;
  capabilities: Array<{ key: string; title: string; copy: string }>;
  stories: Array<{ eyebrow: string; title: string; copy: string; cta: string; url: string; image: string; tone?: "light" | "dark" }>;
  footerIntro: string;
  filingLabel: string;
  footerColumns: Array<{ title: string; items: Array<{ name: string; url: string }> }>;
};

export const HOME_CONTENT: Record<string, HomeContent> = {
  zh: {
    nav: [
      { name: "关于我们", url: "/zh/about/" },
      { name: "团队协作", url: "/zh/about/teamwork/" },
      { name: "公益项目", url: "/zh/showcase/" },
      { name: "公益资讯", url: "/zh/news/" },
      { name: "参与贡献", url: "/zh/about/contribute/" },
    ],
    languageLabel: "中文 / EN",
    heroTitle: "用技术的力量\n创造更公平的世界",
    heroBody: "airdb 通过数据、软件与协作，帮助非营利组织与社区更有效地解决迫切的社会问题，让每一份善意都产生更大的影响。",
    primaryAction: "了解我们的工作",
    secondaryAction: "查看公益项目",
    focusTitle: "我们关注",
    focusItems: ["公益寻人", "公益救援", "公益助农"],
    capabilityTitle: "我们的核心能力",
    capabilities: [
      { key: "data", title: "数据与洞见", copy: "将数据转化为可操作的洞见，支持更明智的决策。" },
      { key: "product", title: "数字产品与平台", copy: "构建开放、可扩展的数字工具，提升项目效率与透明度。" },
      { key: "cloud", title: "云与基础设施", copy: "提供安全、可靠的云能力，支持组织稳定运行。" },
      { key: "training", title: "能力建设与培训", copy: "通过培训与共创，提升团队的数字化能力。" },
      { key: "network", title: "协作与网络", copy: "连接多方伙伴，促进知识共享与协同创新。" },
      { key: "governance", title: "伦理与安全", copy: "坚守数据伦理与隐私保护，以技术向善为核心准则。" },
    ],
    stories: [
      { eyebrow: "项目资料", title: "AED 小搜", copy: "产品组资料介绍了 AED 小搜的项目背景与目标。", cta: "阅读项目介绍", url: "/zh/about/pm/", image: "/images/index/homepage-AED.jpg", tone: "light" },
      { eyebrow: "技术公益", title: "了解我们的方向", copy: "了解团队的技术公益理念，以及公益寻人、公益救援和公益助农等关注方向。", cta: "阅读团队介绍", url: "/zh/about/intro/", image: "/images/index/homepage-bbhj.jpg", tone: "dark" },
    ],
    footerIntro: "airdb 是一个技术公益团队，致力于通过数据、软件与协作，支持社会组织与社区解决复杂的社会与环境挑战。",
    filingLabel: "陕ICP备2022002988号-1",
    footerColumns: [
      { title: "了解我们", items: [{ name: "团队介绍", url: "/zh/about/intro/" }, { name: "团队协作", url: "/zh/about/teamwork/" }] },
      { title: "资料", items: [{ name: "公益项目", url: "/zh/showcase/" }, { name: "历史资讯", url: "/zh/news/" }, { name: "安全建议", url: "/zh/about/security/" }] },
      { title: "参与", items: [{ name: "参与贡献", url: "/zh/about/contribute/" }, { name: "GitHub", url: "https://github.com/airdb" }] },
    ],
  },
  cc: {
    nav: [
      { name: "About", url: "/cc/about/" },
      { name: "Resources", url: "/cc/post/" },
      { name: "Contact", url: "/cc/contact/" },
    ],
    languageLabel: "中文 / EN",
    heroTitle: "Using technology\nto build a fairer world",
    heroBody: "airdb combines data, software, and collaboration to help nonprofits and communities respond to urgent social challenges with greater clarity and impact.",
    primaryAction: "Explore resources",
    secondaryAction: "Contact and contribute",
    focusTitle: "What we focus on",
    focusItems: ["Finding missing people", "Public-interest rescue", "Supporting agriculture"],
    capabilityTitle: "Our core capabilities",
    capabilities: [
      { key: "data", title: "Data and insight", copy: "Turning data into actionable insight for better decisions." },
      { key: "product", title: "Digital products and platforms", copy: "Building open, scalable tools that improve delivery and transparency." },
      { key: "cloud", title: "Cloud and infrastructure", copy: "Providing secure and dependable infrastructure for mission teams." },
      { key: "training", title: "Capacity building", copy: "Strengthening teams through shared learning, training, and co-creation." },
      { key: "network", title: "Collaboration and networks", copy: "Connecting partners to unlock stronger coordination and shared knowledge." },
      { key: "governance", title: "Ethics and safety", copy: "Grounding every system in privacy, trust, and responsible technology." },
    ],
    stories: [
      { eyebrow: "Project documentation", title: "AED search", copy: "Read the product team's existing introduction to the AED search project. The source is in Chinese.", cta: "Read project introduction (Chinese)", url: "/zh/about/pm/", image: "/images/index/homepage-AED.jpg", tone: "light" },
      { eyebrow: "Technology for good", title: "Our direction", copy: "Explore the team's public-interest technology goals in the original Chinese introduction.", cta: "Read introduction (Chinese)", url: "/zh/about/intro/", image: "/images/index/homepage-bbhj.jpg", tone: "dark" },
    ],
    footerIntro: "airdb is a technology-for-good team using data, software, and collaboration to help communities solve complex social and environmental challenges.",
    filingLabel: "Shaanxi ICP 2022002988-1",
    footerColumns: [
      { title: "Explore", items: [{ name: "About", url: "/cc/about/" }, { name: "Resources", url: "/cc/post/" }] },
      { title: "Participate", items: [{ name: "Contact", url: "/cc/contact/" }, { name: "GitHub", url: "https://github.com/airdb" }] },
    ],
  },
};
