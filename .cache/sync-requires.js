const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js": hot(preferDefault(require("/Users/cwicaksono/Documents/labs/gatsbyjs/my-blog/node_modules/gatsby-theme-blog-core/src/templates/post-query.js"))),
  "component---node-modules-gatsby-theme-blog-core-src-templates-posts-query-js": hot(preferDefault(require("/Users/cwicaksono/Documents/labs/gatsbyjs/my-blog/node_modules/gatsby-theme-blog-core/src/templates/posts-query.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cwicaksono/Documents/labs/gatsbyjs/my-blog/.cache/dev-404-page.js")))
}

