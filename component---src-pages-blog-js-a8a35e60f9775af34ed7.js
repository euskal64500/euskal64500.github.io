(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(t,e,a){"use strict";a.r(e);var n=a(7),o=a.n(n),r=a(39),i=a.n(r),s=a(0),c=a.n(s),l=a(163),u=a(1),d=a.n(u),p=a(203),m=a.n(p),g=function(t){function e(e){var a;return(a=t.call(this,e)||this).onSelection=a.onSelection.bind(i()(i()(a))),a.state={activeCategory:""},a}o()(e,t);var a=e.prototype;return a.onSelection=function(t){this.setState({activeCategory:t}),this.props.onSelect(t)},a.render=function(){var t=this;return c.a.createElement("nav",{className:m.a.nav},this.props.categories.map(function(e,a){return c.a.createElement("button",{key:a,className:t.state.activeCategory===e?m.a.activeButton:m.a.button,onClick:function(){return t.onSelection(e)}},e)}))},e}(c.a.Component);g.propTypes={categories:d.a.arrayOf(d.a.string)},g.defaultProps={categories:[]};var f=g,v=a(191),y=a(204),b=a.n(y),h=function(t){var e=t.posts.map(function(t){return c.a.createElement(v.a,{key:t.id,category:t.category,title:t.title,date:t.date,description:t.description})});return c.a.createElement("div",{className:b.a.posts},e)};h.propTypes={edges:d.a.arrayOf(d.a.object)},h.defaultProps={edges:{}};var E=h,w=a(168),k=a.n(w);a.d(e,"pageQuery",function(){return N});var S=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={activeCategory:""},a.onSelect=a.onSelect.bind(i()(i()(a))),a}o()(e,t);var a=e.prototype;return a.onSelect=function(t){this.setState({activeCategory:t})},a.render=function(){var t=this,e=this.props.data,a=e.categories.distinct,n=e.blogs.edges.map(function(t){return{id:t.node.id,author:t.node.frontmatter.author,date:t.node.frontmatter.date,category:t.node.frontmatter.category,title:t.node.frontmatter.title,description:t.node.frontmatter.description,path:t.node.frontmatter.path}}),o={};return o=this.state.activeCategory?n.filter(function(e){return e.category===t.state.activeCategory}):[].concat(n),c.a.createElement("div",null,c.a.createElement(l.a,{title:"Blog"}),c.a.createElement("div",{className:k.a.page},c.a.createElement("div",{className:k.a.blog},c.a.createElement(E,{posts:o})),c.a.createElement("div",{className:k.a.categories},c.a.createElement(f,{categories:a,onSelect:this.onSelect}))))},e}(c.a.Component),N="1596574902";e.default=S},163:function(t,e,a){"use strict";var n=a(164),o=a(0),r=a.n(o),i=a(1),s=a.n(i),c=a(166),l=a.n(c),u=a(20);function d(t){var e=t.description,a=t.lang,o=t.meta,i=t.keywords,s=t.title;return r.a.createElement(u.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},164:function(t){t.exports={data:{site:{siteMetadata:{title:"Olivier's website",description:"Olivier's personal website",author:"@euskal64500"}}}}},168:function(t,e,a){t.exports={page:"blog-module--page--2b4HF",blog:"blog-module--blog--2HMjS",categories:"blog-module--categories--1-Ty1"}},191:function(t,e,a){"use strict";a(79);var n=a(1),o=a.n(n),r=a(0),i=a.n(r),s=a(20),c=a(192),l=a.n(c),u=function(t){var e=t.category,a=t.title,n=(t.date,t.description),o=t.path;return i.a.createElement("div",{className:l.a.card},i.a.createElement(s.Link,{className:l.a.link,to:o},i.a.createElement("p",{className:l.a.category},e+" - posted 2 hours ago"),i.a.createElement("h1",{className:l.a.title},a),i.a.createElement("p",{className:l.a.description},n)))};u.propTypes={category:o.a.string,title:o.a.string,date:o.a.string,description:o.a.string,path:o.a.string},u.defaultProps={category:"Lorem Ipsum",title:"Lorem Ipsum",date:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},e.a=u},192:function(t,e,a){t.exports={card:"blog-post-module--card--3kOF2",category:"blog-post-module--category--1AaIB",title:"blog-post-module--title--11VLK",description:"blog-post-module--description--2vUEa",link:"blog-post-module--link--1hBYo"}},203:function(t,e,a){t.exports={nav:"blog-menu-module--nav--2H-hP",activeButton:"blog-menu-module--activeButton---m_pI",button:"blog-menu-module--button--2-cpY"}},204:function(t,e,a){t.exports={posts:"blog-list-module--posts--2n5ef"}}}]);
//# sourceMappingURL=component---src-pages-blog-js-a8a35e60f9775af34ed7.js.map