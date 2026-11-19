export default {
  layout: "post.njk",
  // Keep the date prefix in the URL: /posts/2026-11-19-chinaai-daily/
  permalink: "/posts/{{ page.inputPath | postSlug }}/index.html",
  channel: "china-ai",
  navSection: "china-ai",
  lang: "ko",
  // "daily" is the evening eleven-name report; "spotlight" is the single-name feature.
  reportKind: "daily",
};
