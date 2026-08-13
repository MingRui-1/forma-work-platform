const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.top-nav');
let activeLanguage = localStorage.getItem('forma-language') === 'zh' ? 'zh' : 'en';

menuToggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const viewModes = {
  grid: ['85%', '55%', '68%', '42%', '74%', '60%'],
  calendar: ['40%', '80%', '50%', '76%', '35%', '64%'],
  gallery: ['100%', '100%', '100%', '100%', '100%', '100%']
};

document.querySelectorAll('.view-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.view-tabs button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('#viewCanvas span').forEach((card, index) => {
      card.style.height = viewModes[button.dataset.view][index];
    });
  });
});

const tabs = {
  marketing: ['MARKETING', 'Plan, produce, and launch campaigns that land.', 'Keep briefs, assets, schedules, and results in a single living system—from first idea to final report.', 'Explore marketing solutions →'],
  product: ['PRODUCT', 'Build products customers cannot stop using.', 'Connect research, roadmaps, launches, and feedback so every product decision stays grounded in context.', 'Explore product solutions →'],
  operations: ['OPERATIONS', 'Make complex operations feel effortless.', 'Design reliable processes, automate routine handoffs, and see where work needs attention before it slows down.', 'Explore operations solutions →'],
  sales: ['SALES', 'Give every deal the context it needs.', 'Create a connected view of accounts, opportunities, and customer programs that your whole revenue team can trust.', 'Explore sales solutions →']
};

const tabsZh = {
  marketing: ['市场营销', '规划、制作并推出真正打动用户的营销活动。', '将简报、素材、日程和结果整合在同一个动态系统中——从最初构想到最终复盘。', '探索市场营销解决方案 →'],
  product: ['产品', '打造让客户爱不释手的产品。', '连接研究、路线图、发布和反馈，让每一个产品决策都有充分的背景依据。', '探索产品解决方案 →'],
  operations: ['运营', '让复杂运营变得简单顺畅。', '设计可靠流程、自动处理日常交接，并在工作受阻之前及时发现问题。', '探索运营解决方案 →'],
  sales: ['销售', '为每一笔交易提供完整背景。', '建立客户、商机和客户项目的统一视图，让整个营收团队都能放心使用。', '探索销售解决方案 →']
};

document.querySelectorAll('.tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const content = (activeLanguage === 'zh' ? tabsZh : tabs)[button.dataset.tab];
    const panel = document.querySelector('#tabPanel > div:first-child');
    panel.querySelector('.panel-overline').textContent = content[0];
    panel.querySelector('h3').textContent = content[1];
    panel.querySelector('p:not(.panel-overline)').textContent = content[2];
    panel.querySelector('a').textContent = content[3];
  });
});

const translations = {
  '.desktop-nav a:nth-child(1)': ['Platform <span>⌄</span>', '平台 <span>⌄</span>'],
  '.desktop-nav a:nth-child(2)': ['Solutions <span>⌄</span>', '解决方案 <span>⌄</span>'],
  '.desktop-nav a:nth-child(3)': ['Resources <span>⌄</span>', '资源 <span>⌄</span>'],
  '.desktop-nav a:nth-child(4)': ['Enterprise', '企业版'],
  '.desktop-nav a:nth-child(5)': ['Pricing', '价格'],
  '.nav-actions a:nth-child(1)': ['Book a demo', '预约演示'],
  '.nav-actions a:nth-child(2)': ['Sign up for free', '免费注册'],
  '.nav-actions a:nth-child(3)': ['Log in', '登录'],
  '.eyebrow': ['<span></span> One place for every team', '<span></span> 一个平台，服务每个团队'],
  '.hero h1': ['Move work forward<br>without the busywork.', '告别繁琐事务，<br>让工作持续向前。'],
  '.hero-copy': ['Forma connects your people, data, and workflows in one flexible platform—so teams can build what they need and change it as they grow.', 'Forma 在一个灵活的平台中连接人员、数据与工作流，让团队按需构建，并随着业务发展持续调整。'],
  '.hero .btn-primary': ['Start building for free <span>→</span>', '免费开始构建 <span>→</span>'],
  '.hero .btn-secondary': ['Book a demo', '预约演示'],
  '.microcopy': ['No credit card required · Set up in minutes', '无需信用卡 · 几分钟即可开始'],
  '.logo-section > p': ['Trusted by teams who make ambitious work happen', '深受推动卓越成果的团队信赖'],
  '.intro .section-kicker': ['THE WORK PLATFORM', '工作平台'],
  '.intro h2': ['Build the perfect way to work.', '打造最适合你的工作方式。'],
  '.intro-grid > p': ['Start with a familiar table, then shape it into powerful applications your whole organization can use. No code, no rigid process—just work that flows.', '从熟悉的表格开始，将其打造为整个组织都能使用的强大应用。无需代码，也无需僵化流程，让工作自然流动。'],
  '.signature-copy .section-kicker': ['BUILD WITH SPEED', '快速构建'],
  '.signature-copy h2': ['Turn your best ideas into working apps.', '把最好的想法变成真正可用的应用。'],
  '.signature-copy > p:not(.section-kicker)': ['Create tools for every workflow in hours, not months. Keep teams aligned while giving each person the view they need.', '只需几小时即可为各类工作流创建工具，而不是耗费数月。在保持团队协同的同时，为每个人提供所需视图。'],
  '.signature-copy .btn': ['Explore app building <span>→</span>', '探索应用构建 <span>→</span>'],
  '.feature-heading .section-kicker': ['EVERYTHING CONNECTED', '万物互联'],
  '.feature-heading h2': ['One source of truth.<br>Infinite ways to see it.', '一个可信数据源，<br>无限种呈现方式。'],
  '.cream-card h3': ['Bring every workflow together', '汇聚每一个工作流'],
  '.cream-card > p': ['Connect projects, assets, feedback, and goals so context never gets lost between tools.', '连接项目、素材、反馈与目标，让背景信息不再遗失于不同工具之间。'],
  '.mint-card h3': ['Put AI inside your work', '让 AI 融入工作'],
  '.mint-card > p': ['Summarize, categorize, and act on information directly inside every workflow.', '直接在每个工作流中汇总、分类信息并采取行动。'],
  '.feature-card-copy h3': ['Give everyone the right view', '为每个人提供合适的视图'],
  '.feature-card-copy > p': ['Turn the same trusted data into calendars, galleries, dashboards, or focused interfaces.', '将同一份可信数据转化为日历、画廊、仪表板或专注界面。'],
  '.use-case-intro .section-kicker': ['BUILT FOR YOUR BUSINESS', '为你的业务而生'],
  '.use-case-intro h2': ['Flexible enough for every team. Connected enough for all of them.', '足够灵活，适配每个团队；紧密连接，协同整个组织。'],
  '.tabs button:nth-child(1)': ['Marketing', '市场营销'],
  '.tabs button:nth-child(2)': ['Product', '产品'],
  '.tabs button:nth-child(3)': ['Operations', '运营'],
  '.tabs button:nth-child(4)': ['Sales', '销售'],
  '.dark-cta .section-kicker': ['ENTERPRISE READY', '企业级就绪'],
  '.dark-cta h2': ['Your most important work deserves a better system.', '最重要的工作，值得更好的系统。'],
  '.dark-cta > div:first-child > p:not(.section-kicker)': ['Give every team room to move, with the governance and scale your organization needs.', '为每个团队提供自由发挥的空间，同时具备组织所需的治理能力与扩展性。'],
  '.dark-cta .btn': ['Talk to our team <span>→</span>', '联系我们的团队 <span>→</span>'],
  '.final-cta .section-kicker': ['START TODAY', '立即开始'],
  '.final-cta h2': ['Make room for your best work.', '为最出色的工作腾出空间。'],
  '.final-cta .btn-primary': ['Sign up for free <span>→</span>', '免费注册 <span>→</span>'],
  '.final-cta .btn-secondary': ['Contact sales', '联系销售'],
  '.footer-bottom > span:first-child': ['© 2026 Forma', '© 2026 Forma'],
  '.footer-bottom > span:last-child': ['Built for teams who build.', '为创造者团队而生。']
};

function applyLanguage(language) {
  activeLanguage = language;
  const isZh = language === 'zh';
  document.documentElement.lang = isZh ? 'zh-CN' : 'en';
  document.title = isZh ? 'Forma — 让工作持续向前' : 'Forma — Build workflows that move work forward';
  Object.entries(translations).forEach(([selector, values]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = values[isZh ? 1 : 0];
  });
  const languageButton = document.querySelector('.language-toggle');
  languageButton.setAttribute('aria-label', isZh ? 'Switch to English' : '切换为中文');
  const activeTab = document.querySelector('.tabs button.active') || document.querySelector('.tabs button');
  if (activeTab) {
    const content = (isZh ? tabsZh : tabs)[activeTab.dataset.tab];
    const panel = document.querySelector('#tabPanel > div:first-child');
    panel.querySelector('.panel-overline').textContent = content[0];
    panel.querySelector('h3').textContent = content[1];
    panel.querySelector('p:not(.panel-overline)').textContent = content[2];
    panel.querySelector('a').textContent = content[3];
  }
  localStorage.setItem('forma-language', language);
}

document.querySelector('.language-toggle').addEventListener('click', () => {
  applyLanguage(activeLanguage === 'zh' ? 'en' : 'zh');
});

applyLanguage(activeLanguage);
