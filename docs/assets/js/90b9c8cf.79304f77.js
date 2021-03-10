(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||s;return n?o.a.createElement(d,a(a({ref:t},l),{},{components:n})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<s;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(107)),c={id:"styles",title:"Styles",sidebar_label:"Styles",slug:"/styles"},a={unversionedId:"styles",id:"styles",isDocsHomePage:!1,title:"Styles",description:"styles \u662f\u4e2a\u666e\u901a\u7684\u5bf9\u8c61, \u5982\u679c\u4f60\u91c7\u7528 @emotion \u90a3\u6837\u7684 css in js \u65b9\u6848, \u4f60\u4f1a\u9700\u8981\u5b83. srh \u63a8\u8350\u4f7f\u7528 @emotion \u90a3\u6837\u7684",source:"@site/docs/styles.md",slug:"/styles",permalink:"/structured-react-hook/docs/styles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/styles.md",version:"current",sidebar_label:"Styles",sidebar:"docs",previous:{title:"Ref",permalink:"/structured-react-hook/docs/ref"},next:{title:"Hook",permalink:"/structured-react-hook/docs/hook"}},i=[],l={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"styles \u662f\u4e2a\u666e\u901a\u7684\u5bf9\u8c61, \u5982\u679c\u4f60\u91c7\u7528 @emotion \u90a3\u6837\u7684 css in js \u65b9\u6848, \u4f60\u4f1a\u9700\u8981\u5b83. srh \u63a8\u8350\u4f7f\u7528 @emotion \u90a3\u6837\u7684"),Object(s.b)("p",null,"css in js \u65b9\u6848\u6765\u7f16\u5199\u6837\u5f0f, \u8fd9\u6837\u53ef\u4ee5\u5728\u7ec4\u4ef6\u548c\u5e94\u7528\u5185\u5185\u805a\u6837\u5f0f, \u8ba9\u5e94\u7528/\u7ec4\u4ef6\u66f4\u6613\u4e8e\u6269\u5c55, \u540c\u65f6\u5c06 state \u4e2d\u7684 styles \u548c css"),Object(s.b)("p",null,"\u4e2d\u7684 styles \u8fdb\u884c\u7edf\u4e00, \u4f8b\u5982, \u5f53\u6211\u4eec\u70b9\u51fb\u67d0\u4e2a\u6309\u94ae, \u6309\u94ae\u9700\u8981\u4fee\u6539\u80cc\u666f\u8272\u548c\u8fb9\u6846\u7684\u65f6\u5019."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"initState:{\n    buttonClicked:0\n},\nstyles:{\n    button:{\n        background:'#fff',\n        border:'1px solid #fff'\n    }\n}\ncontroller:{\n    onButtonClick(){\n        this.styles.button.background = '#000',\n        this.styles.button.border = '1px solid #000'\n        this.rc.setButtonClicked(state=>state++)\n    }\n}\n")),Object(s.b)("p",null,"\u533a\u5206 styles \u548c state \u6709\u52a9\u4e8e\u907f\u514d\u6df7\u6dc6 initState \u4e2d\u7684\u72b6\u6001. \u540c\u65f6\u4e5f\u53ef\u4ee5\u964d\u4f4e\u590d\u6742\u52a8\u6001\u6837\u5f0f\u5b9e\u73b0\u7684\u96be\u5ea6, \u63d0\u5347\u6027\u80fd"))}u.isMDXComponent=!0}}]);