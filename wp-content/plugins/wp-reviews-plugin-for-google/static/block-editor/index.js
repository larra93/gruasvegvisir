!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t,n){"use strict";n.r(t);var i=n(0),l=n(1),c=wp.blocks.registerBlockType,r=function(){return Object(i.createElement)(l.Icon,{icon:Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},Object(i.createElement)("path",{fill:"none",d:"M-1-1h52v52H-1z"}),Object(i.createElement)("path",{d:"M-.043 29.977c0 11.016 8.97 19.968 19.936 19.968H29.96c11.065 0 19.936-8.952 19.936-19.968V19.975C49.896 8.958 40.925.007 29.96.007H19.893C8.828.007-.043 8.958-.043 19.975v10.002z",fillRule:"evenodd",clipRule:"evenodd",fill:"#2aa8d7"}),Object(i.createElement)("path",{d:"M23.854 24.574l10.098-10.098c.714-.743 1.938-.743 2.754 0l2.754 2.71a1.982 1.982 0 010 2.71L25.996 33.335c0 .037-.102.111-.102.148l-2.754 2.71c-.408.372-.918.557-1.326.557-.51 0-1.02-.185-1.326-.556l-2.754-2.71c0-.038-.102-.075-.102-.149l-7.038-7.054a1.982 1.982 0 010-2.71l2.754-2.71c.714-.742 1.938-.742 2.754 0l5.304 5.309.51.483 5.406 5.383-3.468-7.462z",fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"}))})},d=function(){return Object(i.createElement)(l.Icon,{icon:Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 130 130"},Object(i.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FF4141",d:"M61.44 0c33.933 0 61.439 27.507 61.439 61.439s-27.506 61.439-61.439 61.439C27.507 122.879 0 95.372 0 61.439S27.507 0 61.44 0zm12.011 39.151a7.011 7.011 0 019.986-.027c2.764 2.776 2.775 7.292.027 10.083L71.4 61.445l12.076 12.249c2.729 2.77 2.689 7.257-.08 10.022-2.773 2.765-7.23 2.758-9.955-.013L61.446 71.54 49.428 83.728a7.011 7.011 0 01-9.986.027c-2.763-2.776-2.776-7.293-.027-10.084L51.48 61.434 39.403 49.185c-2.728-2.769-2.689-7.256.082-10.022 2.772-2.765 7.229-2.758 9.953.013l11.997 12.165 12.016-12.19z"}))})},o=function(){return Object(i.createElement)(l.Icon,{icon:Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 96 96"},Object(i.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#6BBE66",d:"M48 0c26.51 0 48 21.49 48 48S74.51 96 48 96 0 74.51 0 48 21.49 0 48 0zM26.764 49.277c.644-3.734 4.906-5.813 8.269-3.79.305.182.596.398.867.646l.026.025c1.509 1.446 3.2 2.951 4.876 4.443l1.438 1.291 17.063-17.898c1.019-1.067 1.764-1.757 3.293-2.101 5.235-1.155 8.916 5.244 5.206 9.155L46.536 63.366c-2.003 2.137-5.583 2.332-7.736.291-1.234-1.146-2.576-2.312-3.933-3.489-2.35-2.042-4.747-4.125-6.701-6.187-1.173-1.172-1.679-3.091-1.402-4.704z"}))})};c("trustindex/block-selector",{title:"Trustindex",description:"Trustindex widget plugin",icon:r(),category:"widgets",attributes:{widget_id:{type:"string"},widgets:{type:"object"},setted_up:{type:"boolean"},free_widget_id:{type:"string"},custom_id:{type:"boolean"}},edit:function(e){var t=e.attributes,n=e.setAttributes;function l(e){"type-select"===e.target.id&&"custom-id"===e.target.selectedOptions[0].id?(n({custom_id:!0}),n({widget_id:""})):"type-select"===e.target.id?(n({custom_id:!1}),n({widget_id:e.target.value})):n({widget_id:e.target.value})}return t.widgets||wp.apiFetch({path:"trustindex/v1/setup-complete"}).then((function(e){e&&"1"===e.result?n({setted_up:!0,free_widget_id:e.platform}):n({setted_up:!1,free_widget_id:e.platform}),t.widget_id||!0!==t.setted_up||(t.widget_id=t.free_widget_id),wp.apiFetch({path:"trustindex/v1/get-widgets"}).then((function(e){n({widgets:e})}))})),t.widgets?Object(i.createElement)("div",{className:"components-placeholder"},Object(i.createElement)("table",null,Object(i.createElement)("tr",null,Object(i.createElement)("td",null,Object(i.createElement)("span",{style:{fontSize:"35px"}},r()," Trustindex widget")),Object(i.createElement)("td",null)),Object(i.createElement)("tr",null,Object(i.createElement)("td",null,Object(i.createElement)("select",{id:"type-select",style:{fontSize:"13px",border:"1px solid",width:"100%"},onChange:l},Object(i.createElement)("optgroup",{label:"Free widget"},Object(i.createElement)("option",{disabled:!1===t.setted_up,value:t.free_widget_id},"Free "+t.free_widget_id+" review widget"+(t.setted_up?"":" - not configured yet"))),Object(i.createElement)("optgroup",{label:"Trustindex widgets"},t.widgets.length?t.widgets[0].widgets.map((function(e){return Object(i.createElement)("option",{selected:t.widget_id===e.id,value:e.id},e.name)})):Object(i.createElement)("option",{disabled:!0}," Not connected Trustindex ")),Object(i.createElement)("optgroup",{label:"Custom widget"},Object(i.createElement)("option",{selected:!0===t.custom_id,value:t.widget_id,id:"custom-id"},"Custom widget id")))),Object(i.createElement)("td",{style:{fontSize:"15px"}},Object(i.createElement)("span",{style:{display:"flex",alignItems:"center",lineHeight:"16px"}},t.setted_up?o():d(),Object(i.createElement)("span",{style:{marginLeft:"5px"}},"Free ",t.free_widget_id," review ",Object(i.createElement)("br",null)," widget configured. ",t.setted_up?"":Object(i.createElement)("a",{href:"/wp-admin/admin.php?page=wp-reviews-plugin-for-google%2Fsettings.php&tab=setup_no_reg"},"Solve"))),Object(i.createElement)("span",{style:{display:"flex",alignItems:"center",lineHeight:"16px"}},t.widgets.length?o():d(),Object(i.createElement)("span",{style:{marginLeft:"5px"}},"Trustindex connected. ",t.widgets.length?"":Object(i.createElement)("a",{href:"https://admin.trustindex.io/widget/select_layout/type/website"},"Solve"))))),Object(i.createElement)("tr",null,Object(i.createElement)("td",null,Object(i.createElement)("input",{onChange:l,value:t.widget_id,style:{border:"1px solid black",display:!0===t.custom_id?"inherit":"none"},class:"block-editor-plain-text blocks-shortcode__textarea",type:"text"}))))):Object(i.createElement)("div",{class:"components-placeholder"},"Loading...")},save:function(e){var t,n=e.attributes;return t=n.free_widget_id===n.widget_id?"no-registration="+n.widget_id:'data-widget-id="'+n.widget_id+'"',Object(i.createElement)("div",null,"[trustindex ",t,"]")}})}]);