"use strict";(self.webpackChunkmoodly=self.webpackChunkmoodly||[]).push([[4801],{64801:function(g,d,s){s.r(d),s.d(d,{LoginEE:function(){return v}});var t=s(74081),i=s(84366),a=s(93415),E=s(10701),P=s(32370),O=s(87006),D=s(61020),M=s(40464),l=s(72450),o=s(30594),e=s(47796),r=s(15816),h=s(97442),_=s(13576),c=s(87830),m=s(47184),n=s(364),I=s(27279),T=s(59461),W=s(71563),K=s(49204),j=s(47853),f=s(75719),u=s(74919),y=s(29206),S=s(98934),$=s(43433);const L=(0,l.ZP)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,D.Z)(),{get:B}=(0,O.kY)(),{isLoading:U,data:R=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:A}=await B("/admin/providers");return A},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&R.length===0?(0,t.jsx)(o.L,{...C}):(0,t.jsx)(o.L,{...C,children:(0,t.jsx)(a.x,{paddingTop:7,children:(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,t.jsxs)(E.k,{children:[(0,t.jsx)(L,{}),(0,t.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,t.jsx)(L,{})]}),(0,t.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},47796:function(g,d,s){s.d(d,{S:function(){return o}});var t=s(74081),i=s(23298),a=s(74577),E=s(2981),P=s(10701),O=s(32370),D=s(61020),M=s(47533),l=s(72450);const o=({providers:_,displayAllProviders:c})=>{const{formatMessage:m}=(0,D.Z)();return c?(0,t.jsx)(i.r,{gap:4,children:_.map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid))}):_.length>2&&!c?(0,t.jsxs)(i.r,{gap:4,children:[_.slice(0,2).map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid)),(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(E.u,{label:m({id:"global.see-more"}),children:(0,t.jsx)(h,{as:M.rU,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(e,{justifyContent:"center",children:_.map(n=>(0,t.jsx)(r,{provider:n},n.uid))})},e=(0,l.ZP)(P.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,r=({provider:_})=>(0,t.jsx)(E.u,{label:_.displayName,children:(0,t.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(O.Z,{children:_.displayName})})}),h=l.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`}}]);
