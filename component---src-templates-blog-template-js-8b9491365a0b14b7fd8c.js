(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o}),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),i=n(153);function o(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,n.title),r.a.createElement("h2",null,n.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}}))))}var u="1579142440"},146:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(159)),i=a(n(160)),o=a(n(7)),u=a(n(52)),s=a(n(53)),l=a(n(4)),c=a(n(0)),d=n(22),p=n(147);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(d.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(146),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(148),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Olivier's website",menuLinks:[{name:"HOME",link:"/"},{name:"BLOG",link:"/blog"},{name:"GAMES",link:"/games"},{name:"ABOUT ME",link:"/about"}]}}}}},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){e.exports={menu:"header-module--menu--15oJi",activeLink:"header-module--activeLink--2YKR8",text:"header-module--text--3UAQj",link:"header-module--link--3k-9z"}},152:function(e,t,n){e.exports={banner:"layout-module--banner--1X862",header:"layout-module--header--aabB-",content:"layout-module--content--3B0uJ",site:"layout-module--site--1G-CH"}},153:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),u=n.n(o),s=n(147),l=(n(156),n(157),n(151)),c=n.n(l),d=function(e){e.siteTitle;var t=e.menuLinks;return i.a.createElement("nav",{className:c.a.menu},t.map(function(e,t){return i.a.createElement(s.Link,{key:t,activeClassName:c.a.activeLink,className:c.a.link,to:e.link},i.a.createElement("p",{className:c.a.text},e.name))}))};d.propTypes={siteTitle:u.a.string,menuLinks:u.a.arrayOf(u.a.object)},d.defaultProps={siteTitle:"",menuLinks:[]};var p=d,f=n(152),m=n.n(f),h=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"3436215879",render:function(e){return i.a.createElement("div",{className:m.a.site},i.a.createElement("div",{className:m.a.banner},i.a.createElement("div",{className:m.a.header},i.a.createElement(p,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}))),i.a.createElement("div",{className:m.a.content},t))},data:a})};h.propTypes={children:u.a.node.isRequired};t.a=h},156:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},157:function(e,t,n){"use strict";n(161)("link",function(e){return function(t){return e(this,"a","href",t)}})},159:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},160:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},161:function(e,t,n){var a=n(11),r=n(25),i=n(17),o=/"/g,u=function(e,t,n,a){var r=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-8b9491365a0b14b7fd8c.js.map