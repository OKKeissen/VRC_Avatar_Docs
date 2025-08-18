const translations = {
  en: {
    siteTitle: "Documentation",
    tocTitle: "Table of Contents",
    tocTitle2: "Table of Contents",
    tocintro: "Essential Steps",
    products: "Products",
    product1: "Product 1",
    product2: "Product 2",
    product3: "Product 3",
    tutorials: "Tutorials",
    basicTut: "Basic Usage",
    advancedTut: "Advanced Features",
    reference: "Reference",
    apiRef: "API Documentation",
    faq: "FAQ",
    welcome: "Welcome to the Documentation",
    intro: "Select a topic from the table of contents to get started.",
    quickLinks: "External Links"
  },
  ko: {
    siteTitle: "문서",
    tocTitle: "목차",
    tocintro: "필수 단계",
    products: "제품",
    product1: "제품 1",
    product2: "제품 2",
    product3: "제품 3",
    tutorials: "튜토리얼",
    basicTut: "기본 사용법",
    advancedTut: "고급 기능",
    reference: "참고 자료",
    apiRef: "API 문서",
    faq: "자주 묻는 질문",
    welcome: "문서에 오신 것을 환영합니다",
    intro: "목차에서 주제를 선택하여 시작하세요.",
    quickLinks: "외부 링크"
  },
  zh: {
    siteTitle: "文档",
    tocTitle: "目录",
    tocintro: "必要步骤",
    products: "产品",
    product1: "产品 1",
    product2: "产品 2",
    product3: "产品 3",
    tutorials: "教程",
    basicTut: "基本用法",
    advancedTut: "高级功能",
    reference: "参考",
    apiRef: "API 文档",
    faq: "常见问题",
    welcome: "欢迎使用文档",
    intro: "请从目录中选择主题开始",
    quickLinks: "外部链接"
  },
  ja: {
    siteTitle: "ドキュメント",
    tocTitle: "目次",
    tocintro: "必須ステップ",
    products: "製品",
    product1: "製品 1",
    product2: "製品 2",
    product3: "製品 3",
    tutorials: "チュートリアル",
    basicTut: "基本的な使い方",
    advancedTut: "高度な機能",
    reference: "リファレンス",
    apiRef: "API ドキュメント",
    faq: "よくある質問",
    welcome: "ドキュメントへようこそ",
    intro: "目次からトピックを選択して始めてください",
    quickLinks: "外部リンク"
  }
};

function setLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Set initial language
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
  
  // TOC toggle functionality
  const tocToggle = document.querySelector('.toc-toggle');
  const tocContent = document.querySelector('.toc-content');
  
  tocToggle.addEventListener('click', () => {
    tocContent.classList.toggle('collapsed');
    tocToggle.textContent = tocContent.classList.contains('collapsed') ? '▶' : '▼';
  });
  
  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.toc-item').forEach(item => {
    const itemPage = item.getAttribute('href');
    if (itemPage === currentPage || 
        (currentPage === '' && itemPage === 'intro.html')) {
      item.classList.add('active');
    }
  });
});