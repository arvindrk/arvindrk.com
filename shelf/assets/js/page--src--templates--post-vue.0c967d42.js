(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{229:function(t,e,s){},230:function(t,e,s){},232:function(t,e,s){"use strict";var a=s(229);s.n(a).a},233:function(t,e,s){"use strict";var a=s(230);s.n(a).a},234:function(t,e,s){"use strict";var a=s(4),n={computed:{computedDate(){let t=new Date(this.post.date);if(!Number.isNaN(t.getDate()))return t.getDate()+" "+a.f[t.getMonth()]+" "+t.getFullYear()}},props:["post"]},r=(s(232),s(1)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-meta"},[s("time",{staticClass:"post-meta__date",attrs:{datetime:t.post.date,"aria-label":"Published on: "+t.computedDate}},[t._v(t._s(t.computedDate))]),t.post.timeToRead?[s("span",{staticClass:"post-meta__ttr"},[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)}),[],!1,null,null,null);e.a=o.exports},235:function(t,e,s){"use strict";var a={props:["post","withTitle"]},n=(s(233),s(1)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post__tags"},[t.withTitle?s("span",[t._v("Tags:")]):t._e(),t._l(t.post.tags,(function(e){return s("g-link",{key:e.id,staticClass:"post__tags-link color-off",attrs:{to:e.path}},[t._v("\n    "+t._s(e.title)+"\n  ")])}))],2)}),[],!1,null,null,null);e.a=r.exports},239:function(t,e,s){},240:function(t,e,s){},241:function(t,e,s){},242:function(t,e){},244:function(t,e,s){"use strict";var a=s(1),n=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{height:"24",viewBox:"0 59.882 479.058 359.294",width:"24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"}})])}),[],!1,null,null,null).exports,r=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[e("path",{attrs:{d:"M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"}})])}),[],!1,null,null,null).exports,o=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[e("path",{attrs:{d:"M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"}})])}),[],!1,null,null,null).exports,i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[e("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])}),[],!1,null,null,null).exports,c=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{height:"24",viewBox:"8 8.003 48 47.997",width:"24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"}}),e("path",{attrs:{d:"M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"}}),e("path",{attrs:{d:"M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"}})])}),[],!1,null,null,null).exports;s.d(e,"d",(function(){return n})),s.d(e,"e",(function(){return r})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return i})),s.d(e,"a",(function(){return c}))},248:function(t,e,s){"use strict";var a=s(239);s.n(a).a},249:function(t,e,s){"use strict";var a=s(240);s.n(a).a},250:function(t,e,s){"use strict";var a=s(241);s.n(a).a},251:function(t,e,s){"use strict";var a=s(242),n=s.n(a);e.default=n.a},255:function(t,e,s){"use strict";s.r(e);var a=s(4),n={props:["posts","post"],computed:{computedPosts(){return Object(a.h)(this.posts.edges,(t,e)=>t.concat(e.node),[])},nextPost(){return this.getPost(this.curPostIndex+1)},prevPost(){return this.getPost(this.curPostIndex-1)},curPostIndex(){return this.computedPosts.findIndex(t=>t&&t.id===this.post.id)}},methods:{getPost(t){let{path:e}=this.computedPosts[t]||{};return e?this.DEV?e:"/shelf"+e:null}}},r=(s(248),s(1)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"post-nav"},[s("a",{staticClass:"post-nav__previous",attrs:{rel:"prev",href:t.prevPost,"aria-hidden":!t.prevPost},on:{click:function(e){return t.$ga.event("Post","click","Previous Post Link")}}},[s("BowArrow",{attrs:{direction:"left"}}),s("span",[t._v("Previous")])],1),s("a",{staticClass:"post-nav__squares",attrs:{href:t.shelfURL,"aria-label":"Go to all posts"},on:{click:function(e){return t.$ga.event("Post","click","Post nav squares")}}},[s("svg",{attrs:{width:"36",height:"36",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:"#4c3eff",d:"M.5 15.194V.7h14.494v14.494zM21.006 15.194V.7H35.5v14.494zM.5\n        35.7V21.207h14.494V35.7zM21.006 35.7V21.207H35.5V35.7z"}})])]),s("a",{staticClass:"post-nav__next",attrs:{rel:"next",href:t.nextPost,"aria-hidden":!t.nextPost},on:{click:function(e){return t.$ga.event("Post","click","Next Post Link")}}},[s("span",[t._v("Next")]),s("BowArrow")],1)])}),[],!1,null,null,null).exports,i=s(234),c=s(235),l=s(244),p={props:["post"],components:{TwitterIcon:l.e,FacebookIcon:l.b},computed:{shareableURL(){return Object(a.j)(Object(a.j)(this.shelfURL)+this.$page.post.path)},fbShareURL(){const{title:t}=this.$page.post;return`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${this.shareableURL}&quote=${t}`)}`},twitterShareURL(){const{title:t}=this.$page.post;return`https://twitter.com/intent/tweet?${encodeURIComponent(`url=${this.shareableURL}&via=arvindrk&text=${t}`)}`}}},u=(s(249),Object(r.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post__share"},[s("a",{attrs:{target:"_blank",href:t.fbShareURL,"aria-label":"Share this post on Facebook."},on:{click:function(e){return t.$ga.event("Post","click","Facebook share button")}}},[s("FacebookIcon")],1),s("a",{attrs:{target:"_blank",href:t.twitterShareURL,"aria-label":"Share this post on Twitter."},on:{click:function(e){return t.$ga.event("Post","click","Twitter share button")}}},[s("TwitterIcon")],1)])}),[],!1,null,null,null).exports),h={components:{PostNav:o,PostMeta:i.a,PostTags:c.a,PostShare:u},metaInfo(){return{title:this.$page.post.title,meta:[{name:"twitter:card",content:this.$page.post.cover_image?"summary_large_image":"summary"},{name:"og:type",content:"article"},{name:"article:author",content:"Arvind Ram Singh Kishore"},{name:"article:published_time",content:this.$page.post.date}]}}},v=(s(250),s(251)),g=Object(r.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{id:"post-page",title:t.$page.post.title,description:t.$page.post.description}},[s("article",{attrs:{id:"post"}},[s("header",{staticClass:"post__header"},[s("PostMeta",{attrs:{post:t.$page.post}}),s("h1",{staticClass:"post__header-title"},[t._v(t._s(t.$page.post.title))])],1),t.$page.post.cover_image?s("div",{staticClass:"post__cover_image"},[t.$page.post.cover_image?s("g-image",{attrs:{alt:"Cover image",src:t.$page.post.cover_image}}):t._e()],1):t._e(),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),s("footer",{staticClass:"post__footer"},[s("div",{staticClass:"footer-meta"},[s("PostTags",{attrs:{post:t.$page.post,withTitle:!0}}),s("PostShare",{attrs:{post:t.$page.post}})],1),s("PostNav",{attrs:{post:t.$page.post,posts:t.$page.posts}})],1),s("Newsletter")],1)])}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(g);e.default=g.exports}}]);