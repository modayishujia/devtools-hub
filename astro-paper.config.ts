import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dxtools.top",
    title: "DX Tools",
    description: "前端开发、后端架构、AI 工具、编程实践的技术博客。",
    author: "DX Tools",
    profile: "https://dxtools.top",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
    googleVerification: "oLq7eFw0EbN9G7mIQ1ot5XvoS4spOPXHCRFovdNek2U",
  },
  posts: {
    perPage: 10,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:support@dxtools.top" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
  ],
});
