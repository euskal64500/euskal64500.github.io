(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});a(31);var i=a(0),r=a.n(i),s=a(1),n=a.n(s),o=a(201),l=a(205),d=function(e){var t=e.data.blogs.edges;return r.a.createElement("div",null,r.a.createElement(o.a,{title:"Blog"}),r.a.createElement("div",null,t.map(function(e){var t=e.node,a=t.fields.slug,i=Object.assign({slug:a},t.frontmatter);return r.a.createElement(l.a,Object.assign({key:t.id},i))})))};d.propTypes={data:n.a.shape({blogs:n.a.shape({edges:n.a.arrayOf(n.a.shape({node:n.a.shape({id:n.a.string.isRequired,fields:n.a.shape({slug:n.a.string.isRequired}),frontmatter:n.a.shape({category:n.a.string.isRequired,date:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired,cover:n.a.object.isRequired,tags:n.a.arrayOf(n.a.string).isRequired})})}).isRequired)})})},d.defaultProps={data:{}},t.default=d;var c="3341241026"},201:function(e,t,a){"use strict";var i=a(202),r=a(0),s=a.n(r),n=a(1),o=a.n(n),l=a(203),d=a.n(l),c=a(10),u="1025518380";function f(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,o=e.title;return s.a.createElement(c.StaticQuery,{query:u,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})},data:i})}f.defaultProps={description:"",lang:"en",meta:[],keywords:[]},f.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.shape({name:o.a.string,content:o.a.string})),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=f},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Olivier's website",description:"Olivier's personal website",author:"@euskal64500"}}}}},204:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(9)),n=i(a(41)),o=i(a(91)),l=i(a(92)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),g.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(g){var R=g;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},R))}}))}if(m){var I=m,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},s);return"inherit"===s.display&&delete q.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=b;t.default=S},205:function(e,t,a){"use strict";a(64);var i=a(1),r=a.n(i),s=a(0),n=a.n(s),o=a(10),l=a(204),d=a.n(l),c=a(206),u=a.n(c),f=function(e){var t=e.category,a=e.title,i=e.description,r=e.cover,s=e.slug;return n.a.createElement("div",{className:u.a.card},n.a.createElement(o.Link,{className:u.a.link,to:s},n.a.createElement("div",{className:u.a.content},n.a.createElement("div",{className:u.a.left},n.a.createElement("p",{className:u.a.category},t+" - posted 2 hours ago"),n.a.createElement("h1",{className:u.a.title},a),n.a.createElement("p",{className:u.a.description},i)),n.a.createElement("div",{className:u.a.right},n.a.createElement(d.a,{sizes:r.childImageSharp.sizes})))))};f.propTypes={category:r.a.string,title:r.a.string,description:r.a.string,slug:r.a.string,cover:r.a.string},f.defaultProps={category:"Lorem Ipsum",title:"Lorem Ipsum",slug:"/",cover:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},t.a=f},206:function(e,t,a){e.exports={card:"blog-post-module--card--3kOF2",content:"blog-post-module--content--8WD6x",left:"blog-post-module--left--1bNPM",right:"blog-post-module--right--3YPB3",category:"blog-post-module--category--1AaIB",title:"blog-post-module--title--11VLK",description:"blog-post-module--description--2vUEa",link:"blog-post-module--link--1hBYo"}}}]);
//# sourceMappingURL=component---src-templates-filtered-posts-js-55cb89f7cdceb82b0899.js.map