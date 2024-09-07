"use strict";(self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[]).push([[7156],{7156:(o,t,e)=>{e.r(t),e.d(t,{default:()=>s});var n=e(7723),l=e(6087),i=e(6427),a=e(5573),u=e(790);const d=(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(a.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),g=(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(a.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),k=(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(a.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),s=(0,l.memo)((({attributes:o,setAttributes:t,device:e,advancedControl:l})=>{const{GkitTabs:a,GkitPanelBody:s,GkitSwitcher:r,GkitChoose:b,GkitSlider:c,GkitRangeUnit:B,GkitText:x,GkitBoxShadow:h,GkitColor:_,GkitTypography:v,GkitResponsive:j,GkitBackgrounGroup:w,GkitIconPicker:D,GkitAdvancedUrl:C,GkitBoxControl:p,GkitBorderControl:T,GkitSelect:m}=window.gutenkit.components,{gkitResponsiveValue:O,useFontFamilyinBlock:S,responsiveHelper:M}=window.gutenkit.helpers;return S([o?.gkitDoubleButtonOneTypography,o?.gkitDoubleButtonTwoTypography,o?.gkitDoubleButtonMiddletextTypography]),(0,u.jsx)(a,{type:"top-level",tabs:[{name:"content",title:(0,n.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,n.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,n.__)("Advanced","gutenkit-blocks-addon")}],children:S=>{switch(S.name){case"content":return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s,{title:(0,n.__)("Dual Button","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,u.jsx)(r,{label:(0,n.__)("Middle Text","gutenkit-blocks-addon"),value:o?.gkitShowButtonMiddleText,onChange:o=>t({gkitShowButtonMiddleText:o})}),o?.gkitShowButtonMiddleText&&(0,u.jsx)(x,{value:o?.gkitButtonMiddleText,label:(0,n.__)("Text","gutenkit-blocks-addon"),onChange:o=>t({gkitButtonMiddleText:o}),labelBlock:"block"}),(0,u.jsx)(j,{children:(0,u.jsx)(b,{label:(0,n.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,n.__)("Left","gutenkit-blocks-addon"),value:"flex-start",icon:d},{label:(0,n.__)("Center","gutenkit-blocks-addon"),value:"center",icon:g},{label:(0,n.__)("Right","gutenkit-blocks-addon"),value:"flex-end",icon:k}],onChange:o=>M("gkitDoubleButtonAlign",o,e,t),value:O(o,"gkitDoubleButtonAlign",e)})}),(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Button Width","gutenkit-blocks-addon"),value:O(o,"gkitDualButtonWidth",e),onChange:o=>M("gkitDualButtonWidth",o,e,t),units:{px:{min:300,max:1200,step:1},"%":{min:0,max:100,step:1}}})}),!o?.gkitShowButtonMiddleText&&(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Button Gap","gutenkit-blocks-addon"),value:O(o,"gkitDualButtonGap",e),onChange:o=>M("gkitDualButtonGap",o,e,t),units:{px:{min:0,max:100,step:1}}})})]}),(0,u.jsxs)(s,{title:(0,n.__)("Button One","gutenkit-blocks-addon"),children:[(0,u.jsx)(x,{value:o?.gkitButtonOneText,label:(0,n.__)("Text","gutenkit-blocks-addon"),onChange:o=>t({gkitButtonOneText:o}),labelBlock:"block"}),(0,u.jsx)(C,{label:(0,n.__)("Link","gutenkit-blocks-addon"),value:o?.gkitButtonOneLink,onChange:o=>t({gkitButtonOneLink:o})}),(0,u.jsx)(r,{label:(0,n.__)("Add icon?","gutenkit-blocks-addon"),value:o?.gkitButtonOneIconsShow,onChange:o=>t({gkitButtonOneIconsShow:o})}),o?.gkitButtonOneIconsShow&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(D,{label:(0,n.__)("Icon","gutenkit-blocks-addon"),value:o?.gkitButtonOneIcons,onChange:o=>t({gkitButtonOneIcons:o})}),(0,u.jsx)(m,{label:(0,n.__)("Icon Position","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneIconPosition,options:[{label:(0,n.__)("After","gutenkit-blocks-addon"),value:"after"},{label:(0,n.__)("Before","gutenkit-blocks-addon"),value:"before"}],onChange:o=>t({gkitDoubleButtonOneIconPosition:o}),__nextHasNoMarginBottom:!0}),(0,u.jsx)(c,{label:(0,n.__)("Icon Spacing","gutenkit-blocks-addon"),value:O(o,"gkitDoubleButtonOneIconSpecing",e),onChange:o=>M("gkitDoubleButtonOneIconSpecing",o,e,t),sizeUnits:["px"]})]})]}),(0,u.jsxs)(s,{title:(0,n.__)("Button Two","gutenkit-blocks-addon"),children:[(0,u.jsx)(x,{value:o?.gkitButtonTwoText,label:(0,n.__)("Text","gutenkit-blocks-addon"),onChange:o=>t({gkitButtonTwoText:o}),labelBlock:"block"}),(0,u.jsx)(C,{label:(0,n.__)("Link","gutenkit-blocks-addon"),value:o?.gkitButtonTwoLink,onChange:o=>t({gkitButtonTwoLink:o})}),(0,u.jsx)(r,{label:(0,n.__)("Add icon?","gutenkit-blocks-addon"),value:o?.gkitButtonTwoIconsShow,onChange:o=>t({gkitButtonTwoIconsShow:o})}),o?.gkitButtonTwoIconsShow&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(D,{label:(0,n.__)("Icon","gutenkit-blocks-addon"),value:o?.gkitButtonTwoIcons,onChange:o=>t({gkitButtonTwoIcons:o})}),(0,u.jsx)(m,{label:(0,n.__)("Icon Position","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoIconPosition,options:[{label:(0,n.__)("After","gutenkit-blocks-addon"),value:"after"},{label:(0,n.__)("Before","gutenkit-blocks-addon"),value:"before"}],onChange:o=>t({gkitDoubleButtonTwoIconPosition:o}),__nextHasNoMarginBottom:!0}),(0,u.jsx)(c,{label:(0,n.__)("Icon Spacing","gutenkit-blocks-addon"),value:O(o,"gkitDoubleButtonTwoIconSpecing",e),onChange:o=>M("gkitDoubleButtonTwoIconSpecing",o,e,t),sizeUnits:["px"]})]})]})]});case"style":return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{title:(0,n.__)("Button One","gutenkit-blocks-addon"),initialOpen:!0,children:(0,u.jsx)(a,{type:"normal",tabs:[{name:"normal",title:(0,n.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,n.__)("Hover","gutenkit-blocks-addon")}],children:l=>"normal"==l.name?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{label:(0,n.__)("Typography","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneTypography,onChange:o=>t({gkitDoubleButtonOneTypography:o})}),(0,u.jsx)(_,{label:(0,n.__)("Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneColor,onChange:o=>t({gkitDoubleButtonOneColor:o})}),(0,u.jsx)(T,{label:(0,n.__)("Border"),onChange:o=>t({gkitDoubleButtonOneBorder:o}),value:o?.gkitDoubleButtonOneBorder}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Border Radius","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonOneBorderRadius",e),onChange:o=>M("gkitDoubleButtonOneBorderRadius",o,e,t)})}),(0,u.jsx)(w,{label:(0,n.__)("Background","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneBackground,onChange:o=>t({gkitDoubleButtonOneBackground:o}),exclude:{video:!0}}),(0,u.jsx)(h,{label:(0,n.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneBoxShadow,onChange:o=>t({gkitDoubleButtonOneBoxShadow:o})}),(0,u.jsx)(i.__experimentalDivider,{}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Padding","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonOnePadding",e),onChange:o=>M("gkitDoubleButtonOnePadding",o,e,t)})}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Margin","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonOneMargin",e),onChange:o=>M("gkitDoubleButtonOneMargin",o,e,t)})}),(0,u.jsx)(j,{children:(0,u.jsx)(b,{label:(0,n.__)("Text Alignment","gutenkit-blocks-addon"),options:[{label:(0,n.__)("Left","gutenkit-blocks-addon"),value:"flex-start",icon:d},{label:(0,n.__)("Center","gutenkit-blocks-addon"),value:"center",icon:g},{label:(0,n.__)("Right","gutenkit-blocks-addon"),value:"flex-end",icon:k}],onChange:o=>M("gkitDoubleButtonOneAlign",o,e,t),value:O(o,"gkitDoubleButtonOneAlign",e)})})]}):"hover"===l.name?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_,{label:(0,n.__)("Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneHoverColor,onChange:o=>t({gkitDoubleButtonOneHoverColor:o})}),(0,u.jsx)(_,{label:(0,n.__)("Border Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneHoverBorderColor,onChange:o=>t({gkitDoubleButtonOneHoverBorderColor:o})}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Border Radius","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonOneHoverBorderRadius",e),onChange:o=>M("gkitDoubleButtonOneHoverBorderRadius",o,e,t)})}),(0,u.jsx)(w,{label:(0,n.__)("Background","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneHoverBackground,onChange:o=>t({gkitDoubleButtonOneHoverBackground:o}),exclude:{video:!0}}),(0,u.jsx)(h,{label:(0,n.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonOneHoverBoxShadow,onChange:o=>t({gkitDoubleButtonOneHoverBoxShadow:o})})]}):void 0})}),(0,u.jsx)(s,{title:(0,n.__)("Button Two","gutenkit-blocks-addon"),children:(0,u.jsx)(a,{type:"normal",tabs:[{name:"normal",title:(0,n.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,n.__)("Hover","gutenkit-blocks-addon")}],children:l=>"normal"==l.name?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{label:(0,n.__)("Typography","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoTypography,onChange:o=>t({gkitDoubleButtonTwoTypography:o})}),(0,u.jsx)(_,{label:(0,n.__)("Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoColor,onChange:o=>t({gkitDoubleButtonTwoColor:o})}),(0,u.jsx)(T,{label:(0,n.__)("Border"),onChange:o=>t({gkitDoubleButtonTwoBorder:o}),value:o?.gkitDoubleButtonTwoBorder}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Border Radius","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonTwoBorderRadius",e),onChange:o=>M("gkitDoubleButtonTwoBorderRadius",o,e,t)})}),(0,u.jsx)(w,{label:(0,n.__)("Background","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoBackground,onChange:o=>t({gkitDoubleButtonTwoBackground:o}),exclude:{video:!0}}),(0,u.jsx)(h,{label:(0,n.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoBoxShadow,onChange:o=>t({gkitDoubleButtonTwoBoxShadow:o})}),(0,u.jsx)(i.__experimentalDivider,{}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Padding","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonTwoPadding",e),onChange:o=>M("gkitDoubleButtonTwoPadding",o,e,t)})}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Margin","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonTwoMargin",e),onChange:o=>M("gkitDoubleButtonTwoMargin",o,e,t)})}),(0,u.jsx)(j,{children:(0,u.jsx)(b,{label:(0,n.__)("Text Alignment","gutenkit-blocks-addon"),options:[{label:(0,n.__)("Left","gutenkit-blocks-addon"),value:"left",icon:d},{label:(0,n.__)("Center","gutenkit-blocks-addon"),value:"center",icon:g},{label:(0,n.__)("Right","gutenkit-blocks-addon"),value:"right",icon:k}],onChange:o=>M("gkitDoubleButtonTwoAlign",o,e,t),value:O(o,"gkitDoubleButtonTwoAlign",e)})})]}):"hover"===l.name?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_,{label:(0,n.__)("Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoHoverColor,onChange:o=>t({gkitDoubleButtonTwoHoverColor:o})}),(0,u.jsx)(_,{label:(0,n.__)("Border Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoHoverBorderColor,onChange:o=>t({gkitDoubleButtonTwoHoverBorderColor:o})}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Border Radius","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonTwoHoverBorderRadius",e),onChange:o=>M("gkitDoubleButtonTwoHoverBorderRadius",o,e,t)})}),(0,u.jsx)(w,{label:(0,n.__)("Background","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoHoverBackground,onChange:o=>t({gkitDoubleButtonTwoHoverBackground:o}),exclude:{video:!0}}),(0,u.jsx)(h,{label:(0,n.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonTwoHoverBoxShadow,onChange:o=>t({gkitDoubleButtonTwoHoverBoxShadow:o})})]}):void 0})}),o?.gkitShowButtonMiddleText&&o?.gkitButtonMiddleText&&(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{title:(0,n.__)("Middle Text","gutenkit-blocks-addon"),children:[(0,u.jsx)(_,{label:(0,n.__)("Text Color","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonMiddletextColor,onChange:o=>t({gkitDoubleButtonMiddletextColor:o})}),(0,u.jsx)(v,{label:(0,n.__)("Typography","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonMiddletextTypography,onChange:o=>t({gkitDoubleButtonMiddletextTypography:o})}),(0,u.jsx)(T,{label:(0,n.__)("Border","gutenkit-blocks-addon"),onChange:o=>t({gkitDoubleButtonMiddletextBorder:o}),value:o?.gkitDoubleButtonMiddletextBorder}),(0,u.jsx)(j,{children:(0,u.jsx)(p,{label:(0,n.__)("Border Radius","gutenkit-blocks-addon"),values:O(o,"gkitDoubleButtonMiddletextBorderRadius",e),onChange:o=>M("gkitDoubleButtonMiddletextBorderRadius",o,e,t)})}),(0,u.jsx)(w,{label:(0,n.__)("Background","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonMiddletextBackground,onChange:o=>t({gkitDoubleButtonMiddletextBackground:o}),exclude:{video:!0}}),(0,u.jsx)(h,{label:(0,n.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.gkitDoubleButtonMiddletextBoxShadow,onChange:o=>t({gkitDoubleButtonMiddletextBoxShadow:o})}),(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Width","gutenkit-blocks-addon"),value:O(o,"gkitDoubleButtonMiddletextWidth",e),onChange:o=>M("gkitDoubleButtonMiddletextWidth",o,e,t),units:{px:{min:10,max:140,step:1}}})}),(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Height","gutenkit-blocks-addon"),value:O(o,"gkitDoubleButtonMiddletextHeight",e),onChange:o=>M("gkitDoubleButtonMiddletextHeight",o,e,t),units:{px:{min:10,max:140,step:1}}})})]})}),(0,u.jsxs)(s,{title:(0,n.__)("Icon","gutenkit"),children:[(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Font Size","gutenkit"),value:O(o,"iconFontSize",e),onChange:o=>M("iconFontSize",o,e,t),units:{px:{min:10,max:200,step:1},em:{min:.1,max:10,step:.1},rem:{min:.1,max:10,step:.1}}})}),(0,u.jsx)(j,{children:(0,u.jsx)(B,{label:(0,n.__)("Vertical Align","gutenkit"),value:O(o,"verticalAlignIcon",e),onChange:o=>M("verticalAlignIcon",o,e,t),units:{px:{min:-20,max:20,step:1},em:{min:-2,max:2,step:.1}}})})]})]});case"advanced":return(0,u.jsx)(u.Fragment,{children:l})}}})}))}}]);