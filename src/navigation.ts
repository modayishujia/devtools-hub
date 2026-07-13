import { getPermalink, getBlogPermalink, getAsset, cleanSlug } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '关于',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '分类',
      links: [
        { text: 'AI观察', href: getPermalink(cleanSlug('AI观察'), 'category') },
        { text: '汽车', href: getPermalink(cleanSlug('汽车'), 'category') },
        { text: '半导体', href: getPermalink(cleanSlug('半导体'), 'category') },
        { text: '科技商业', href: getPermalink(cleanSlug('科技商业'), 'category') },
        { text: '营销', href: getPermalink(cleanSlug('营销'), 'category') },
      ],
    },
    {
      title: '关于',
      links: [
        { text: '关于莫说闲话', href: getPermalink('/about') },
        { text: '隐私政策', href: getPermalink('/privacy') },
        { text: '服务条款', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '隐私政策', href: getPermalink('/privacy') },
    { text: '服务条款', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/iGaves' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover bg-no-repeat inline-block align-middle mr-1.5" style="background-image: url(${getAsset('/favicon.svg')}); background-size: contain;"></span>
    &copy; ${new Date().getFullYear()} DX Tools &middot; by 莫说闲话
  `,
};
