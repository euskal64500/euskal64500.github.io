(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(32);var i=a(0),r=a.n(i),n=a(1),o=a.n(n),s=a(193),c=a(197),l=function(e){var t=e.data.blogs.edges;return r.a.createElement("div",null,r.a.createElement(s.a,{title:"Blog"}),r.a.createElement("div",null,t.map(function(e,t){var a=e.node;return r.a.createElement(c.a,Object.assign({key:t},a.frontmatter))})))};l.propTypes={data:o.a.shape({blogs:o.a.shape({edges:o.a.arrayOf(o.a.shape({node:o.a.shape({frontmatter:o.a.shape({category:o.a.string.isRequired,date:o.a.string.isRequired,path:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired})})}).isRequired)})})},t.default=l;var u="3983508626"},193:function(e,t,a){"use strict";var i=a(194),r=a(0),n=a.n(r),o=a(1),s=a.n(o),c=a(195),l=a.n(c),u=a(9);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return n.a.createElement(u.StaticQuery,{query:p,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:i})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Olivier's website",description:"Olivier's personal website",author:"@euskal64500"}}}}},196:function(e,t,a){e.exports={post:"blog-post-module--post--2_FpR",title:"blog-post-module--title--11VLK",date:"blog-post-module--date--3QSo1"}},197:function(e,t,a){"use strict";a(64);var i=a(1),r=a.n(i),n=a(0),o=a.n(n),s=a(9),c=a(196),l=a.n(c),u=function(e){var t=e.category,a=e.title,i=(e.date,e.description),r=e.path;return o.a.createElement("div",{className:l.a.card},o.a.createElement(s.Link,{className:l.a.link,to:r},o.a.createElement("p",{className:l.a.category},t+" - posted 2 hours ago"),o.a.createElement("h1",{className:l.a.title},a),o.a.createElement("p",{className:l.a.description},i)))};u.propTypes={category:r.a.string,title:r.a.string,date:r.a.string,description:r.a.string,path:r.a.string},u.defaultProps={category:"Lorem Ipsum",title:"Lorem Ipsum",date:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},t.a=u}}]);
//# sourceMappingURL=component---src-templates-filtered-posts-js-8ff745136752a69267d3.js.map