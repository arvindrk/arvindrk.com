(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(e,t,n){},260:function(e,t,n){"use strict";var i=n(259);n.n(i).a},262:function(e,t,n){"use strict";n.r(t);var i={companies:[{name:"Mercor",period:"2026 - Present",role:"Principal Engineer",intro:"Leading the Talent Experience Platform team at the fastest-growing company in history — $1M to $2B ARR in 24 months, $10B valuation.",points:["Lead the Talent Experience Platform: the surface through which a 300,000+ expert network is matched, onboarded, evaluated, and paid","Own systems supporting $2M+ in daily contractor payouts across 30,000+ weekly active experts","Build enterprise agent workflows for the AI labs and Fortune-scale customers Mercor serves, including OpenAI, Anthropic, and Meta","Drive architecture decisions for a platform scaling through a revenue ramp with no precedent in software","Partner directly with founders and product leadership on roadmap and technical strategy"]},{name:"Vapi",period:"March 2025 - 2026",role:"Founding Lead Product Engineer",intro:"Joined at Series A and helped scale Vapi to a $500M+ valuation, 1B+ calls, and 1M+ developers as voice AI went mainstream.",points:["Owned the product surface through 10x enterprise revenue growth and a $130M to $500M+ valuation run","Led end-to-end design and development of Vapi's real-time dashboard using React, TypeScript, Zustand, and Tailwind CSS","Built Vapi Workflows, the orchestration builder for multi-step voice agents, with per-call overrides, bulk editing, and live debugging","Led architecture and implementation of the Evaluations (Evals) engine for testing agent behavior before production","Shipped live transcript visualization with animated node traversal, making multi-step agent runs debuggable","Rebuilt logging and observability with component-level tracing across STT/LLM/TTS pipelines","Contributed to core voice pipeline reliability: advanced voice activity detection, adaptive endpointing, and streaming speech-recognition filters that cut false interruptions","Redesigned dashboard architecture for reliability and performance, reducing page load times by 30%","Implemented flexible data exports via webhooks and S3, improving production monitoring and incident resolution","Platform served customers including Amazon Ring, Intuit, New York Life, and ServiceTitan"]},{name:"AsynchRetro",period:"2020 - 2024",role:"Founder",intro:"Founded and ran an opinionated async retrospective tool for distributed agile teams. Built and operated solo alongside full-time engineering roles; sunset in 2024.",points:["Designed an opinionated 4-step retrospective flow — comments, grouping, voting, discussion — that ran fully asynchronously across time zones","Built the complete SaaS: authentication, team and organization management, granular board permissions, and guest access","Shipped Stripe subscription billing end-to-end with free trials, annual plans, coupon codes, and win-back offers","Implemented real-time multi-user collaboration on Firebase with anonymity controls, vote limits, and per-team board configuration","Built on the MERN stack over Google Cloud Platform, shipped and operated as a single engineer"]},{name:"CapConnect+ Inc",period:"May 2024 - March 2025",role:"Director of Engineering",intro:"Led engineering for a digital marketplace serving fixed income primary markets.",points:["Built a digital marketplace reducing corporate paper issuance time by 30%","Increased platform adoption by 50% within a year through UX improvements","Improved operational transparency and efficiency for issuers, dealers, and investors","Contributed to 25% year-over-year growth in platform revenue"]},{name:"Suno Inc",period:"October 2023 - May 2024",role:"Engineering Manager",intro:"Led development of an AI-driven audiology software platform for healthcare providers.",points:["Developed an AI-driven platform streamlining patient management for audiologists","Spearheaded integration of real-time analytics and generative AI features","Achieved 30% increase in patient engagement through intelligent automation","Reduced administrative tasks by 25% for healthcare providers"]},{name:"HavenTech",period:"October 2021 - October 2023",role:"Team Lead, Senior Software Engineer",intro:"Led the design system team building accessible experiences for over a million users.",points:["Led a high-performing team building the Haven Design System (HDS) in React and TypeScript","Implemented a scalable micro-frontend architecture in Storybook","Componentized HTML elements to meet AA accessibility standards and RFC compliance","Transitioned the JavaScript codebase to a scalable TypeScript platform","Improved accessibility and performance metrics via Google Lighthouse integration","Started and led internal developer communities: FrontEnd Learning Talks and Performance Thursdays"]},{name:"Vistaprint",period:"November 2018 - October 2021",role:"Senior Software Engineer",intro:"Built tools and services helping small businesses expand their online presence.",points:["Migrated over 2 million users from the legacy site builder to the flagship website builder, and led the eventual sunset of the legacy platform","Designed database verification and data model mapping scripts to migrate without customer-facing disruption","Built revamped dashboards for domain management, email hosting, and customer statistics using Gatsby and GraphQL","Implemented localized URL routing across 26 languages and 22 locales"]}],technologies:["TypeScript","React","NodeJS","Next.js","Python","Postgres","GraphQL","Tailwind","Zustand","NestJS","Firebase","MongoDB"],otherProficiencies:["Agentic Frameworks","Voice AI Pipelines","STT/LLM/TTS Latency","Evals & Observability","Workflow Orchestration","Real-time Systems","Marketplace Systems","Design Systems","Micro-Frontend Architecture","Accessibility (AA)","0 to 1 Product","Engineering Leadership"]},a=n(102),r=n(0);let o,s,l,c=e=>e;const d=Object(r.b)(o||(o=c`
  position: relative;

  #main {
    max-width: unset;
    display: flex;
    padding-top: 6.7rem;
    padding-bottom: 6.7rem;
    position: relative;
    background-color: var(--bg-color);

    @media (max-width: 790px) {
      flex-direction: column;
      padding-right: var(--space);
    }

    @media (min-width: 1024px) {
      margin-top: 0;
    }

    @media (min-width: 1200px) {
      margin: calc(var(--space) * 1.2) 7vw;
    }
  }

  p,
  ul {
    color: rgba(71, 71, 71, 0.75);
  }

  ul li {
    position: relative;

    &:before {
      width: 0.4em;
      content: '';
      height: 0.4em;
      margin-right: 0.3em;
      vertical-align: 10%;
      display: inline-block;
      filter: contrast(1.2);
      background: currentColor;
    }
  }

  #name {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 4.5rem;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--electric-blue);
  }

  h3 {
    margin: 0;
  }

  .meta {
    position: absolute;
    right: 2em;
    top: 2em;
    display: flex;
    font-size: 0.9em;

    a {
      position: relative;
      align-items: center;
      font-weight: normal;
      color: rgba(71, 71, 71, 0.9);

      &:not([hidden]) {
        display: flex;

        @media (min-width: 791px) {
          &[href^='mailto:'] {
            display: none;
          }
        }
      }

      &:not(:last-of-type) {
        margin-right: 1em;
      }

      &.linkedin {
        color: #0077b5;
        ${0}
      }

      &:last-of-type svg {
        opacity: 0.8;
        margin-right: 0.3em;
      }

      svg {
        width: 1em;
        height: 1em;
        flex-shrink: 0;

        path {
          fill: currentColor;
        }
      }
    }
  }

  #resume-outlines {
    display: flex;
    flex-shrink: 0;
    position: relative;

    @media (max-width: 790px) {
      font-size: 0.9em;
      justify-content: space-between;

      ul {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        &:before {
          display: none;
        }

        &:not(:last-of-type):after {
          content: ',';
          margin-right: 0.2em;
        }
      }
    }

    @media (min-width: 791px) {
      flex-direction: column;
    }

    @media (min-width: 791px) and (max-width: 999px) {
      margin-right: 3rem;
    }

    @media (min-width: 1000px) {
      margin-right: 6rem;
    }

    section {
      position: relative;

      @media (max-width: 790px) {
        &:first-of-type {
          display: none;
        }

        &:last-of-type {
          margin-left: 1em;
        }
      }

      &:not(:last-of-type) {
        margin-bottom: 2em;
      }

      h3 {
        font-size: 1.2em;
      }

      span {
        display: block;
      }
    }
  }

  article {
    @media (min-width: 791px) {
      max-width: 80vw;
    }

    .company > p,
    > section > p,
    .company .points,
    #profile-summary > p {
      @media (min-width: 791px) and (max-width: 999px) {
        max-width: 90%;
      }

      @media (min-width: 1000px) {
        max-width: 70%;
      }
    }

    > section {
      position: relative;

      &:not(:last-of-type) {
        margin-bottom: 5em;
      }
    }

    p {
      font-size: 1.2em;
    }
  }

  #projects {
    margin-bottom: 14em;

    p {
      font-size: 1.1em;

      a {
        margin: 0 0.2em;
      }
    }
  }

  #profile-summary {
    position: relative;
    margin-bottom: 5rem;

    &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: var(--border-color);

      @media (min-width: 791px) {
        margin-left: -8%;
      }

      @media (min-width: 791px) and (max-width: 1199px) {
        width: 115%;
      }

      @media (min-width: 1200px) {
        width: 118%;
      }
    }

    h2 {
      margin: 0;
      font-weight: normal;
    }

    p {
      margin: 3em 0 2em;
    }
  }

  #companies {
    position: relative;
  }

  .company {
    position: relative;

    &:before {
      display: none;
    }

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    header {
      display: flex;

      @media (max-width: 790px) {
        flex-direction: column;
        margin-bottom: 1em;

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }

    .period {
      flex-shrink: 0;

      @media (min-width: 791px) {
        margin-left: auto;
        margin-right: 2em;
      }
    }

    h4 {
      margin-top: 0;
      line-height: 1.4;
      margin-right: 1em;

      span {
        font-weight: normal;
        color: rgba(71, 71, 71, 0.75);

        &:before {
          content: '— ';
        }
      }
    }

    p {
      margin: 0;
    }

    .outro,
    .points {
      font-size: 1.1em;
    }

    .points {
      margin-top: 1em;
      margin-left: 1em;

      li {
        text-indent: -0.97em;

        &:not(:last-of-type) {
          margin-bottom: 0.3em;
        }
      }
    }

    .outro {
      margin-top: 1em;
    }
  }

  #logo {
    position: absolute;
    width: 7em;
    bottom: 2em;

    @media (max-width: 790px) {
      left: 2.5em;
    }

    @media (min-width: 791px) {
      left: 4em;
    }

    path {
      fill: var(--electric-blue);
    }
  }
`),({isPDF:e})=>e&&Object(r.b)(s||(s=c`
            margin-right: 0;
          `)));Object(r.d)(l||(l=c`
  #skip-link {
    top: -9em;

    &:focus {
      top: -6em;
    }
  }
`));var m=Object.assign({name:"StyledResume"},Object(r.c)(a.a,{isPDF:Boolean})([d])),p=(n(66),n(1)),g=Object(p.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{height:"24",viewBox:"0 59.882 479.058 359.294",width:"24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[t("path",{attrs:{d:"M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"}})])}),[],!1,null,null,null).exports,h=(Object(p.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[t("path",{attrs:{d:"M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"}})])}),[],!1,null,null,null).exports,Object(p.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[t("path",{attrs:{d:"M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"}})])}),[],!1,null,null,null).exports,Object(p.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"}},this.$listeners),[t("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])}),[],!1,null,null,null).exports),u={name:"Résumé",data:()=>({data:i}),computed:{isPDF(){return"true"===this.$route.query.pdf},YOE:()=>(new Date).getFullYear()-2018},metaInfo:{title:"My Résumé"},components:{MailIcon:g,StyledResume:m,DownloadIcon:Object(p.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{height:"24",viewBox:"8 8.003 48 47.997",width:"24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[t("path",{attrs:{d:"M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"}}),t("path",{attrs:{d:"M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"}}),t("path",{attrs:{d:"M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"}})])}),[],!1,null,null,null).exports,LinkedInIcon:h}},v=(n(260),Object(p.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StyledResume",{attrs:{noBanners:"",id:"resume",isPDF:e.isPDF,title:"Arvind's Résumé",description:"Résumé of Arvind Ram Singh Kishore — Principal Engineer at Mercor, founding engineer at Vapi, and founder of AsynchRetro. "+e.YOE+" years building and scaling AI products."}},[n("aside",{staticClass:"meta"},[n("a",{staticClass:"no-marker linkedin",attrs:{target:"_blank",href:"https://linkedin.com/in/rkarvind/","aria-label":"Connect with Arvind on LinkedIn, opens a new tab."},on:{click:function(t){return e.$ga.event("Resume","click","LinkedIn Button")}}},[n("LinkedInIcon")],1),n("a",{staticClass:"no-marker",attrs:{href:"mailto:arvindrsk@gmail.com","aria-label":"Send Arvind a mail"},on:{click:function(t){return e.$ga.event("Resume","click","Mail Button")}}},[n("MailIcon")],1),n("a",{staticClass:"no-marker",attrs:{href:e.resumePDF,target:"_blank",hidden:e.isPDF,"aria-label":"Download a PDF copy of this resume, opens a new tab."},on:{click:function(t){return e.$ga.event("Resume","click","Download PDF Button")}}},[n("DownloadIcon"),e._v("\n      Download\n    ")],1)]),n("div",{attrs:{id:"resume-outlines"}},[n("section",[n("a",{attrs:{href:"https://arvindrk.com","aria-label":"arvindrk dot com"}},[e._v("arvindrk.com")]),n("span",[e._v("San Francisco, CA")]),n("a",{attrs:{href:"mailto:arvindrsk@gmail.com"},on:{click:function(t){return e.$ga.event("Resume","click","Mail Link in Sidebar")}}},[e._v("\n        arvindrsk@gmail.com\n      ")])]),n("section",[n("h3",[e._v("Core Technologies:")]),n("ul",e._l(e.data.technologies,(function(t,i){return n("li",{key:i},[e._v(e._s(t))])})),0)]),n("section",[n("h3",[e._v("Others:")]),n("ul",e._l(e.data.otherProficiencies,(function(t,i){return n("li",{key:i},[e._v(e._s(t))])})),0)])]),n("article",[n("header",{attrs:{id:"profile-summary"}},[n("h1",{attrs:{id:"name"}},[e._v("Arvind "),n("br"),e._v("Ram Singh Kishore")]),n("h2",[e._v("Principal Engineer, Mercor. Founder. AI Product Engineer.")]),n("p",[e._v("\n        I build and scale AI products at companies that compound fast. Founding\n        engineer at Vapi from Series A to a $500M+ valuation; now Principal Engineer\n        at Mercor, leading the Talent Experience Platform through the fastest revenue\n        ramp in software history. Ex-founder. I ship production agents on both ends of\n        the spectrum — real-time voice at consumer scale, and enterprise agents inside\n        regulated workflows.\n      ")])]),n("section",{attrs:{id:"experience"}},[n("h3",{staticClass:"heading"},[e._v("Experience")]),n("p",[e._v("\n        "+e._s(e.YOE)+" years building and scaling products, across founder, founding\n        engineer, and engineering leadership roles:\n      ")]),n("ul",{attrs:{id:"companies"}},e._l(e.data.companies,(function(t,i){return n("li",{key:i,staticClass:"company"},[n("header",[n("h4",[e._v(e._s(t.name)+" "),n("span",[e._v(e._s(t.role))])]),n("span",{staticClass:"period"},[e._v(e._s(t.period))])]),n("p",[e._v(e._s(t.intro))]),n("ul",{staticClass:"points"},e._l(t.points,(function(t,i){return n("li",{key:i},[e._v("\n              "+e._s(t)+"\n            ")])})),0),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"outro",domProps:{innerHTML:e._s(t.outro)}})])})),0)]),n("section",{attrs:{id:"projects"}},[n("h3",{staticClass:"heading"},[e._v("Open Source & Projects")]),n("p",[e._v("\n        Author of\n        "),n("a",{attrs:{href:"https://www.skills.sh/arvindrk/extract-design-system/extract-design-system"},on:{click:function(t){return e.$ga.event("Resume","click","Skill link",{transport:"beacon"})}}},[e._v("\n          extract-design-system\n        ")]),e._v("\n        , an AI agent skill with "),n("b",[e._v("126K+ installs")]),e._v(" across Claude, Cursor and Codex\n        that reverse-engineers design tokens from any public website.\n      ")]),n("p",[e._v("\n        I ship agents in the open on\n        "),n("a",{attrs:{href:"https://github.com/arvindrk"},on:{click:function(t){return e.$ga.event("Resume","click","GitHub link",{transport:"beacon"})}}},[e._v("\n          GitHub\n        ")]),e._v("\n        — including\n        "),n("a",{attrs:{href:"https://ycagent.ai"}},[e._v("ycagent.ai")]),e._v(" (deep-research agent over the Y\n        Combinator ecosystem), deep-research-agents (background agents with pgvector\n        semantic search), computer-use-agent (multimodal agent driving a live Linux VM),\n        and slack-agent (durable stateful agent infrastructure).\n      ")]),n("p",[e._v("\n        Hackathon judge at the "),n("b",[e._v("Y Combinator AI Agent Hackathon")]),e._v(" (2025). I write\n        about production AI engineering at\n        "),n("a",{attrs:{href:"https://blog.arvindrk.com"},on:{click:function(t){return e.$ga.event("Resume","click","Blog link",{transport:"beacon"})}}},[e._v("\n          blog.arvindrk.com\n        ")]),e._v("\n        .\n      ")])]),n("SauceDripLogo",{attrs:{id:"logo"}})],1)])}),[],!1,null,null,null));t.default=v.exports}}]);