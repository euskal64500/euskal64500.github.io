(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(148),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(150),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var f=n(32);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(149),s=(n(159),n(158),n(154)),l=n.n(s),f=function(e){e.siteTitle;var t=e.menuLinks;return i.a.createElement("nav",{className:l.a.menu},t.map(function(e,t){return i.a.createElement(c.Link,{key:t,activeClassName:l.a.activeLink,className:l.a.link,to:e.link},i.a.createElement("p",{className:l.a.text},e.name))}))};f.propTypes={siteTitle:u.a.string,menuLinks:u.a.arrayOf(u.a.object)},f.defaultProps={siteTitle:"",menuLinks:[]};var d=f,p=n(155),m=n.n(p),x=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"3436215879",render:function(e){return i.a.createElement("div",{className:m.a.site},i.a.createElement("div",{className:m.a.banner},i.a.createElement("div",{className:m.a.header},i.a.createElement(d,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}))),i.a.createElement("div",{className:m.a.content},t))},data:a})};x.propTypes={children:u.a.node.isRequired};t.a=x},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Olivier's website",menuLinks:[{name:"HOME",link:"/"},{name:"BLOG",link:"/blog"},{name:"GAMES",link:"/games"},{name:"ABOUT ME",link:"/about"},{name:"POSTS",link:"/posts"}]}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){e.exports={menu:"header-module--menu--15oJi",activeLink:"header-module--activeLink--2YKR8",text:"header-module--text--3UAQj",link:"header-module--link--3k-9z"}},155:function(e,t,n){e.exports={banner:"layout-module--banner--1X862",header:"layout-module--header--aabB-",content:"layout-module--content--3B0uJ",site:"layout-module--site--1G-CH"}},156:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(160),s=n.n(c),l=n(149);function f(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,u=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=f;var d="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Olivier's website",description:"Olivier's personal website",author:"@euskal64500"}}}}},164:function(e,t,n){var a=n(186).Symbol;e.exports=a},165:function(e,t,n){e.exports={page:"blog-module--page--2b4HF",blog:"blog-module--blog--2HMjS",categories:"blog-module--categories--1-Ty1"}},169:function(e,t,n){var a=n(185);e.exports=function(e){return null==e?"":a(e)}},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=(n(158),n(178)),c=n(179),s=n.n(c),l=n(149),f=n(199),d=n.n(f),p=function(){return r.a.createElement(l.StaticQuery,{query:"978039966",render:function(e){return r.a.createElement("nav",{className:d.a.nav},e.categories.distinct.map(function(e,t){return r.a.createElement(l.Link,{key:t,activeClassName:d.a.activeLink,className:d.a.link,to:"/tags/"+s()(e)+"/"},r.a.createElement("p",{className:d.a.text},e))}))},data:u})};p.propTypes={categories:o.a.arrayOf(o.a.string)},p.defaultProps={categories:[]};var m=p,x=n(165),v=n.n(x),g=function(e){var t=e.children;return r.a.createElement("div",{className:v.a.page},r.a.createElement("div",{className:v.a.blog},t),r.a.createElement("div",{className:v.a.categories},r.a.createElement(m,null)))};g.propTypes={children:o.a.node.isRequired};t.a=g},178:function(e){e.exports={data:{categories:{distinct:["Cooking","Electronics","Software"]}}}},179:function(e,t,n){var a=n(180)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},180:function(e,t,n){var a=n(181),r=n(182),i=n(195),o=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(r(t).replace(o,"")),e,"")}}},181:function(e,t){e.exports=function(e,t,n,a){var r=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},182:function(e,t,n){var a=n(183),r=n(169),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,a).replace(o,"")}},183:function(e,t,n){var a=n(184)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},184:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},185:function(e,t,n){var a=n(164),r=n(188),i=n(189),o=n(190),u=1/0,c=a?a.prototype:void 0,s=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(o(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-u?"-0":n}},186:function(e,t,n){var a=n(187),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},187:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(73))},188:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},189:function(e,t){var n=Array.isArray;e.exports=n},190:function(e,t,n){var a=n(191),r=n(194),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&a(e)==i}},191:function(e,t,n){var a=n(164),r=n(192),i=n(193),o="[object Null]",u="[object Undefined]",c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:o:c&&c in Object(e)?r(e):i(e)}},192:function(e,t,n){var a=n(164),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,u=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var a=!0}catch(c){}var r=o.call(e);return a&&(t?e[u]=n:delete e[u]),r}},193:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},194:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},195:function(e,t,n){var a=n(196),r=n(197),i=n(169),o=n(198);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?o(e):a(e):e.match(t)||[]}},196:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},197:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},198:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+u+")",d="(?:"+l+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),x="(?:"+[i,c,s].join("|")+")"+m,v=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,l+f,"$"].join("|")+")",l+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},199:function(e,t,n){e.exports={nav:"blog-nav-module--nav--1S3aK",activeLink:"blog-nav-module--activeLink--24_Oh",link:"blog-nav-module--link--3ArPE",text:"blog-nav-module--text--OOIML"}}}]);
//# sourceMappingURL=1-3fe7b6df4aca76537ce9.js.map