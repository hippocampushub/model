!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="829385f6-bdcd-486a-8cce-3c632c33879a",e._sentryDebugIdIdentifier="sentry-dbid-829385f6-bdcd-486a-8cce-3c632c33879a")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1162],{33176:function(e){e.exports=function(e){let n="[a-zA-Z-_][^\\n{]+\\{",a={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+n,end:/\}/,keywords:"facet",contains:[a,e.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+n,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",a,e.HASH_COMMENT_MODE]},{begin:"^"+n,end:/\}/,contains:[a,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_roboconf.46342c8d34186b78.js.map