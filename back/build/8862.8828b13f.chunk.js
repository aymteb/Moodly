"use strict";(self.webpackChunkmoodly=self.webpackChunkmoodly||[]).push([[8862],{48862:function(U,n,t){t.r(n),t.d(n,{UserListPageEE:function(){return v}});var a=t(74081),e=t(48075),M=t(7199),D=t(87006),P=t(59461),l=t(12847),i=t(27279),L=t(40464),d=t(64797),o=t(85811),s=t(30594),E=t(15816),I=t(97442),O=t(13576),f=t(87830),r=t(47184),C=t(364),T=t(71563),_=t(49204),m=t(47853),R=t(75719),A=t(74919),c=t(29206),u=t(98934),B=t(43433),K=t(8175),W=t(11266),g=t(79211),h=t(70882),S=t(69439),y=t(66360);function v(){return(0,M.u)(),(0,a.jsx)(e.U,{})}},7199:function(U,n,t){t.d(n,{u:function(){return o}});var a=t(27279),e=t(87006),M=t(69439),D=t(61020),P=t(51447),l=t(66360);const i="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",d="https://strapi.io/billing/request-seats",o=()=>{const{formatMessage:s}=(0,D.Z)(),{license:E,isError:I,isLoading:O}=(0,l.u)(),f=(0,e.lm)(),{pathname:r}=(0,P.TH)(),{enforcementUserCount:C,permittedSeats:T,licenseLimitStatus:_,isHostedOnStrapiCloud:m}=E;a.useEffect(()=>{if(I||O)return;const R=!M(T)&&!window.sessionStorage.getItem(`${i}-${r}`)&&(_==="AT_LIMIT"||_==="OVER_LIMIT");let A;_==="OVER_LIMIT"?A="warning":_==="AT_LIMIT"&&(A="softWarning"),R&&f({type:A,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:_}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:_,enforcementUserCount:C,permittedSeats:T}),link:{url:m?L:d,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:m})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${r}`,"true")}})},[f,E,r,s,O,T,_,C,m,I])}},66360:function(U,n,t){t.d(n,{u:function(){return D}});var a=t(27279),e=t(87006),M=t(40464);function D({enabled:P}={enabled:!0}){const{get:l}=(0,e.kY)(),{data:i,isError:L,isLoading:d}=(0,M.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await l("/admin/license-limit-information");return E},{enabled:P}),o=a.useMemo(()=>i??{},[i]),s=a.useCallback(E=>(o?.features??[]).find(O=>O.name===E)?.options??{},[o?.features]);return{license:o,getFeature:s,isError:L,isLoading:d}}}}]);