!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2b1e79e8-e5b7-452e-a5c8-c9ef6084f361",e._sentryDebugIdIdentifier="sentry-dbid-2b1e79e8-e5b7-452e-a5c8-c9ef6084f361")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5755],{42387:function(e){e.exports=function(e){let n={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/\}/},{begin:/[$@]/+e.UNDERSCORE_IDENT_RE}]},a={endsWithParent:!0,keywords:{$pattern:"[a-z/_]+",literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{begin:e.UNDERSCORE_IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\{/,contains:[{className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|\\{",returnBegin:!0,contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:a}],relevance:0}],illegal:"[^\\s\\}]"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nginx.f8409eb501c9a29c.js.map