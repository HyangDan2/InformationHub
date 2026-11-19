export default {
  layout: "post.njk",
  // The English edition mirrors the Korean URLs one level down: /en/posts/<slug>/
  permalink: "/en/posts/{{ page.inputPath | postSlug }}/index.html",
  channel: "china-ai",
  navSection: "china-ai",
  lang: "en",
  // "daily" is the evening eleven-name report; "spotlight" is the single-name feature.
  reportKind: "daily",
};
