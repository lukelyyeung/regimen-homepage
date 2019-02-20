const menuItems = [
  {
    label: '返回首頁',
    icon: 'home',
    notAvailableAt: ['/'],
    path: '/',
  },
  {
    label: '產品介紹',
    icon: 'reconciliation',
    availableAt: ['/'],
    href: '#project-introduction',
  },
  {
    label: '設計理念',
    icon: 'team',
    availableAt: ['/'],
    href: '#features',
  },
  {
    label: '活動紀錄',
    icon: 'picture',
    path: '/Album',
  },
  {
    label: '中醫網絡',
    icon: 'reconciliation',
    path: '/Network',
  },
  {
    label: '聯繫我們',
    icon: 'mail',
    href: '#contact-us',
  },
];

export default menuItems;
