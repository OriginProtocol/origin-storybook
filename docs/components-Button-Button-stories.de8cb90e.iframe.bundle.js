"use strict";(self.webpackChunk_originprotocol_origin_storybook=self.webpackChunk_originprotocol_origin_storybook||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OUSD:()=>OUSD,OriginProtocol:()=>OriginProtocol,Story:()=>Story,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _OriginProtocol$param,_OriginProtocol$param2,_OUSD$parameters,_OUSD$parameters2,_Story$parameters,_Story$parameters2,_home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Origin/Button",component:___WEBPACK_IMPORTED_MODULE_2__.z};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.z,args)};Template.displayName="Template";var OriginProtocol=Template.bind({});OriginProtocol.args={webProperty:"originprotocol",label:"Connect Wallet"};var OUSD=Template.bind({});OUSD.args={webProperty:"ousd",label:"Connect Wallet"},OUSD.parameters={backgrounds:{default:"dark"}};var Story=Template.bind({});Story.args={webProperty:"story",label:"Connect Wallet"},OriginProtocol.parameters=_objectSpread(_objectSpread({},OriginProtocol.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OriginProtocol$param=OriginProtocol.parameters)||void 0===_OriginProtocol$param?void 0:_OriginProtocol$param.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},null===(_OriginProtocol$param2=OriginProtocol.parameters)||void 0===_OriginProtocol$param2||null===(_OriginProtocol$param2=_OriginProtocol$param2.docs)||void 0===_OriginProtocol$param2?void 0:_OriginProtocol$param2.source)})}),OUSD.parameters=_objectSpread(_objectSpread({},OUSD.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OUSD$parameters=OUSD.parameters)||void 0===_OUSD$parameters?void 0:_OUSD$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},null===(_OUSD$parameters2=OUSD.parameters)||void 0===_OUSD$parameters2||null===(_OUSD$parameters2=_OUSD$parameters2.docs)||void 0===_OUSD$parameters2?void 0:_OUSD$parameters2.source)})}),Story.parameters=_objectSpread(_objectSpread({},Story.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Story$parameters=Story.parameters)||void 0===_Story$parameters?void 0:_Story$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},null===(_Story$parameters2=Story.parameters)||void 0===_Story$parameters2||null===(_Story$parameters2=_Story$parameters2.docs)||void 0===_Story$parameters2?void 0:_Story$parameters2.source)})})},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),_excluded=["type","webProperty","size","label","children","href","target","rel","className","style","disabled","background","isButton","onClick"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Button=function Button(_ref){var background,textColor,hoverStyles,textSize,padding,fontWeight,shadow,rounding,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,_ref$webProperty=_ref.webProperty,webProperty=void 0===_ref$webProperty?"originprotocol":_ref$webProperty,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,label=_ref.label,children=_ref.children,href=_ref.href,target=_ref.target,rel=_ref.rel,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,disabled=_ref.disabled,bg=_ref.background,isButton=_ref.isButton,onClick=_ref.onClick,props=(0,_home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);switch(webProperty){case"originprotocol":background="primary"===type?"bg-gradient-to-r from-origin-protocol-button-start to-origin-protocol-button-end":"",textColor="primary"===type?"text-white":"header"===type?"text-slate-800":"text-black",hoverStyles="primary"===type?"hover:text-gray-100":"hover:text-slate-600";break;case"ousd":background="primary"===type?"bg-gradient-to-r from-ousd-button-start to-ousd-button-end":"secondary"===type?"bg-gradient-to-r from-ousd-button-dark-start to-ousd-button-dark-end":"",textColor="text-white",hoverStyles="header"===type?"":"hover:text-gray-300";break;case"oeth":case"defi":background="primary"===type?"bg-gradient-to-r from-oeth-button-start to-oeth-button-end":"secondary"===type?"bg-gradient-to-r from-oeth-button-dark-start to-oethx  -button-dark-end":"",textColor="text-white",hoverStyles="header"===type?"":"hover:text-gray-300";break;case"story":background="primary"===type?"bg-gradient-to-r from-story-button-start to-story-button-end":"header"===type?"":"bg-white",textColor="primary"===type?"text-white":"header"===type?"text-black":"text-story-blue",hoverStyles="primary"===type?"hover:bg-gray-50 hover:text-gray-100":"hover:bg-gray-50"}switch(size){case"border":textSize="text-base font-normal",padding="px-0.5 py-0.5";break;case"nav":textSize="text-base font-normal",padding="px-7 py-1";break;case"small":textSize="text-base",padding="px-7 py-1";break;case"medium":textSize="text-base",padding="px-12 py-4";break;case"large":textSize="text-2xl",padding="px-12 py-6"}if("header"===type)fontWeight="font-normal",shadow="",rounding="",padding="px-4 py-1";else fontWeight="font-medium",shadow="shadow",rounding="rounded-full";var Component="_self"===target&&null!=href&&href.startsWith("/")?next_link__WEBPACK_IMPORTED_MODULE_1___default():"span";return __jsx("a",(0,_home_runner_work_origin_storybook_origin_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({href:href||"",target,rel,className:"\n        ".concat(background,"\n        ").concat(textColor,"\n        ").concat(textSize,"\n        ").concat(padding,"\n        ").concat(fontWeight,"\n        ").concat(shadow,"\n        ").concat(rounding,"\n        ").concat(hoverStyles,"\n        leading-7\n        font-sans\n        animate-gradient\n        background-gradient-oversized\n        cursor-pointer\n        whitespace-nowrap\n        ").concat(className,"\n      "),style,onClick:function handleClick(e){disabled?e.preventDefault():onClick&&onClick()}},props),__jsx(Component,{href:href||"",target},"ousd"===webProperty||"oeth"===webProperty||"defi"===webProperty?__jsx("div",{className:"relative rounded-[100px] w-full md:w-fit h-fit ".concat(isButton?"hover:opacity-90":"")},__jsx("button",{onClick,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.m)("relative bg-origin-bg-black rounded-[100px] w-full md:w-auto ".concat(isButton?"px-4 lg:px-6 hover:bg-[#1b1a1abb]":""," py-1 text-origin-white"),bg)},label,children)):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,label,children)))};Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'primary'",computed:!1},required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'header'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'header'"}]},description:"What type of button is this?"},webProperty:{defaultValue:{value:"'originprotocol'",computed:!1},required:!1,tsType:{name:"union",raw:"'originprotocol' | 'ousd' | 'oeth' | 'defi' | 'story'",elements:[{name:"literal",value:"'originprotocol'"},{name:"literal",value:"'ousd'"},{name:"literal",value:"'oeth'"},{name:"literal",value:"'defi'"},{name:"literal",value:"'story'"}]},description:"What property is this button for?"},size:{defaultValue:{value:"'medium'",computed:!1},required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'nav' | 'border'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'nav'"},{name:"literal",value:"'border'"}]},description:"How large should the button be?"},className:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:"What additional classes should be used?\nWill add onto classes derived from other props."},style:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"object"},description:"What additional styles should be used?\nWill override background colors/gradients derived from other props."},label:{required:!1,tsType:{name:"string"},description:"Button contents"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional children to use instead of a label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},href:{required:!1,tsType:{name:"string"},description:"Optional href"},target:{required:!1,tsType:{name:"string"},description:"Optional target"},rel:{required:!1,tsType:{name:"string"},description:"Optional rel"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button"},background:{required:!1,tsType:{name:"string"},description:"Tailwind background color class"},isButton:{required:!1,tsType:{name:"boolean"},description:"Whether button looks like button"}}};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{type:{defaultValue:{value:"primary"},description:"What type of button is this?",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"header"'}]}},webProperty:{defaultValue:{value:"originprotocol"},description:"What property is this button for?",name:"webProperty",required:!1,type:{name:"enum",value:[{value:'"story"'},{value:'"originprotocol"'},{value:'"ousd"'},{value:'"oeth"'},{value:'"defi"'}]}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"nav"'},{value:'"border"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional children to use instead of a label",name:"children",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}},href:{defaultValue:null,description:"Optional href",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Optional target",name:"target",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"Optional rel",name:"rel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"What additional classes should be used?\nWill add onto classes derived from other props.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"What additional styles should be used?\nWill override background colors/gradients derived from other props.",name:"style",required:!1,type:{name:"object"}},disabled:{defaultValue:null,description:"Disables the button",name:"disabled",required:!1,type:{name:"boolean"}},background:{defaultValue:null,description:"Tailwind background color class",name:"background",required:!1,type:{name:"string"}},isButton:{defaultValue:null,description:"Whether button looks like button",name:"isButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);