const menuItems = [
  {
    label: '返回首頁',
    icon: 'home',
    isNotVisibleAt: ['/'],
    path: '/',
  },
  {
    label: '產品介紹',
    icon: 'reconciliation',
    isVisibleAt: ['/'],
    href: '#project-introduction',
  },
  {
    label: '設計理念',
    icon: 'team',
    isVisibleAt: ['/'],
    href: '#features',
  },
  {
    label: '活動紀錄',
    icon: 'picture',
    path: '/album',
  },
  {
    label: '中醫網絡',
    icon: 'reconciliation',
    path: '/network',
  },
  {
    label: '聯繫我們',
    icon: 'mail',
    href: '#contact-us',
  },
];

export default menuItems;
