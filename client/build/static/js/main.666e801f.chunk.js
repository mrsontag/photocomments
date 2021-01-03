(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={container:"gallery_container__1zL05",invisible:"gallery_invisible__2g5X5",visible:"gallery_visible__gRXYO",floating:"gallery_floating__1MyD8",topalign:"gallery_topalign__2_RN5",halfsize:"gallery_halfsize__2MG5Z"}},26:function(e,t,n){e.exports={container:"photopage_container__GUJqG",invisible:"photopage_invisible__3k6NC",floating:"photopage_floating__3-nOm",active:"photopage_active__3lihy",regular:"photopage_regular__2qyBY"}},41:function(e,t,n){e.exports={container:"newphotopage_container__3u8Ys",invisible:"newphotopage_invisible__V0F9x",floating:"newphotopage_floating__HliyZ"}},42:function(e,t,n){e.exports={invisible:"galleries_invisible__6bZJt",visible:"galleries_visible__2LFml",gallery:"galleries_gallery__3WSy6",thumbnail:"galleries_thumbnail__wmdhg",topalign:"galleries_topalign__NkLNc"}},43:function(e,t,n){e.exports={hidden:"addcomment_hidden__1gKDJ",addcomment:"addcomment_addcomment__DweRn"}},44:function(e,t,n){e.exports={invisible:"gallerytile_invisible__1enRw",visible:"gallerytile_visible__ZDlQt",gallery:"gallerytile_gallery__1B3B6",thumbnail:"gallerytile_thumbnail__5zVpu",topalign:"gallerytile_topalign__ZTrHz"}},49:function(e,t,n){e.exports={small:"photo_small__2tgGO"}},52:function(e,t,n){e.exports={madeby:"madeby_madeby__2CIn4"}},65:function(e,t,n){},66:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),c=n.n(o),i=n(19),r=n.n(i),l=(n(65),n(5)),s=(n(66),n(7)),u=n(8),d=n(100),h=function(){var e=Object(u.b)().loginWithRedirect,t=Object(s.b)();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Welcome to Photo Comments"}),Object(a.jsx)("p",{children:"If this is your first visit, please feel free to browse anonymously - some galleries have been set by their owners to allow anonymous comments."}),Object(a.jsxs)("p",{children:["Also, you can register easily using your email address or your Google account.  Your information is always secure, as user administration is handled by the external service provider ",Object(a.jsx)("a",{href:"https://www.auth0.com",children:"Auth0"}),"."]}),Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",type:"button",onClick:function(){return e()},children:"Login or Register"}),Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",type:"button",onClick:function(){return t("/anon/")},children:"View as Anonymous User"})]})},j=(n(81),n(4)),b=n(13),g=n.n(b),m=n(40),p=n.n(m),O=n(48),f=function(){var e=Object(O.a)(p.a.mark((function e(t,n,a){var o,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t({});case 3:return c=e.sent,o=a?{method:"POST",headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"},body:JSON.stringify(a)}:{method:"GET",headers:{Authorization:"Bearer ".concat(c)}},e.next=7,fetch("http://localhost:8002/api/"+n,o);case 7:return i=e.sent,e.abrupt("return",i.json());case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a){return e.apply(this,arguments)}}(),_=n(49),y=n.n(_),x=function(e){var t=e.photo,n=t.path,o=t._id,c=t.ratings,i=t.comments,r=e.anon,l=Object(s.b)(),u=c.length?c.reduce((function(e,t){return e+t.rating}),0)/c.length:0;return Object(a.jsxs)("div",{className:y.a.small,onClick:function(){return l("/photos".concat(r?"_anon":"","/")+o)},children:[Object(a.jsx)("img",{src:n,alt:"Comment-tagged"}),Object(a.jsx)("h5",{children:c.length?"".concat(c.length," Rating(s), average ").concat(u):"No ratings"}),Object(a.jsx)("h5",{children:i.length?i.length+" Comments":"No comments"})]})},v=function(e){var t=Object(u.b)(),n=t.user,c=t.isLoading,i=t.getAccessTokenSilently,r=Object(o.useState)({}),d=Object(l.a)(r,2),h=d[0],b=d[1],m=Object(s.b)();Object(o.useEffect)((function(){c||b({gallery_name:"New gallery . . . ",authorized_user_ids:"List authorized users . . . "})}),[c]);return Object(a.jsxs)("div",{className:g.a.container,children:[Object(a.jsx)("button",{onClick:function(){return m("/loggedin/")},children:"Back to gallery list!"}),Object(a.jsx)("h2",{children:"Please enter information for your new gallery."}),Object(a.jsxs)("form",{className:g.a.floating,children:[Object(a.jsx)("input",{type:"text",name:"name",value:h.gallery_name,onChange:function(e){return b(Object(j.a)(Object(j.a)({},h),{},{gallery_name:e.target.value}))}}),Object(a.jsx)("label",{children:" Authorized Users (separate by commas): "}),Object(a.jsx)("input",{type:"text",name:"name",value:h.authorized_user_ids,onChange:function(e){return b(Object(j.a)(Object(j.a)({},h),{},{authorized_user_ids:e.target.value.toString().split(",")}))}}),Object(a.jsx)("button",{type:"button",name:"save",onClick:function(){var e={gallery_name:h.gallery_name,authorized_user_ids:h.authorized_user_ids,owner_id:n.sub};f(i,"gallery/new",e).then((function(e){m("/gallery/"+e._id)})).catch((function(e){return console.log(e)}))},children:"Save"})]})]})},w=n(41),k=n.n(w),C=function(e){var t=Object(u.b)(),n=t.isLoading,c=t.getAccessTokenSilently,i=e.togallery,r=Object(o.useState)({}),d=Object(l.a)(r,2),h=d[0],b=d[1],g=Object(s.b)();Object(o.useEffect)((function(){b({gallery_id:i}),console.log("Ran use effect")}),[n]);return Object(a.jsxs)("div",{className:k.a.container,children:[Object(a.jsx)("img",{src:h.path,alt:"User submitted with comments"}),Object(a.jsx)("button",{onClick:function(){f(c,"photos/add/"+i,h).then((function(e){console.log(e),g("/photos/"+e.photo[e.photo.length-1]._id)})).catch((function(e){return console.log(e)}))},children:"Save"}),Object(a.jsx)("form",{className:k.a.floating,children:Object(a.jsx)("input",{type:"text",name:"path",value:h.path,onChange:function(e){return b(Object(j.a)(Object(j.a)({},h),{},{path:e.target.value}))}})})]})},N=n(42),S=n.n(N),A=function(e){var t=Object(u.b)(),n=t.user,c=(t.isAuthenticated,t.isLoading),i=t.getAccessTokenSilently,r=Object(o.useState)([]),d=Object(l.a)(r,2),h=d[0],j=d[1],b=Object(s.b)(),g=e.setNavPath;Object(o.useEffect)((function(){if(!c){console.log("Retrieving galleries!");var e=h;f(i,"photos/owner/"+n.sub).then((function(t){j(e=t),console.log("Galleries:",e)})).catch((function(e){return console.log(e)})),g([{name:n.name+" Galleries",link:"/loggedin/"}]),console.log("User",n)}}),[c]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){if(!c){console.log("Retrieving galleries!");var e=h;f(i,"photos/owner/"+n.sub).then((function(t){j(e=t),console.log("Galleries:",e)})).catch((function(e){return console.log(e)}))}},children:"Run retrieve again!"}),Object(a.jsx)("button",{name:"addnewgallery",onClick:function(){return b("/gallery/new")},children:"Add new gallery!"})]}),h&&h.map((function(e){return Object(a.jsxs)("div",{className:S.a.gallery,onClick:function(){return b("/gallery/"+e._id)},children:[Object(a.jsx)("h2",{children:e.gallery_name}),Object(a.jsxs)("p",{children:["Photo Count: ",e.photo.length]}),e.photo.length&&e.photo.map((function(e,t){if(!(t>4))return Object(a.jsx)("img",{className:S.a.thumbnail,alt:"User submitted",src:e.path})}))]})}))]})},P=n(103),R=function(e){var t,n,c=Object(u.b)(),i=c.user,r=(c.isAuthenticated,c.isLoading),h=c.getAccessTokenSilently,b=e.id,m=e.anon,p=Object(o.useState)({}),O=Object(l.a)(p,2),_=O[0],y=O[1],v=null!==(t=_.photo)&&void 0!==t?t:[],w=Object(o.useState)(!1),k=Object(l.a)(w,2),C=k[0],N=k[1],S=Object(s.b)(),A=e.setNavPath;Object(o.useEffect)((function(){m?fetch("http://localhost:8002/api/photos/gallery_anon/"+b).then((function(e){return e.json()})).then((function(e){y(e[0]),A([{name:"Home",link:"/anon/"},{name:e[0].gallery_name,link:"/gallery_anon/"+b}])})).catch((function(e){return console.log(e)})):f(h,"photos/gallery/"+b).then((function(e){y(e[0]),A([{name:"Home",link:"/home/"+i.sub},{name:e[0].gallery_name,link:"/gallery/"+b}])})).catch((function(e){return console.log(e)}))}),[r]);return Object(a.jsxs)("div",{className:g.a.container,children:[Object(a.jsx)("h2",{children:_.gallery_name}),Object(a.jsx)(d.a,{variant:"contained",color:"primary",name:"editformgo",style:(i?i.sub:null)!==_.owner_id||C?{display:"none"}:{},onClick:function(){_.owner_id===i.sub&&N(!0)},children:"Edit Gallery"}),Object(a.jsx)(d.a,{variant:"contained",color:"primary",name:"backhome",style:m?{}:{display:"none"},onClick:function(){return S("/anon/")},children:"Go back to the gallery list!"}),Object(a.jsx)("div",{className:C?g.a.visible:g.a.invisible,children:Object(a.jsxs)("form",{className:g.a.floating,children:[Object(a.jsx)("input",{type:"text",name:"name",value:_.gallery_name,onChange:function(e){return y(Object(j.a)(Object(j.a)({},_),{},{gallery_name:e.target.value}))}}),Object(a.jsx)(P.a,{checked:null!==(n=_.show_anonymous)&&void 0!==n&&n,name:"show_anonymous",onChange:function(e){console.log(e.target.checked),y(Object(j.a)(Object(j.a)({},_),{},{show_anonymous:e.target.checked}))}}),Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",className:C?g.a.visible:g.a.invisible,type:"button",name:"save",onClick:function(){var e={gallery_name:_.gallery_name,authorized_user_ids:_.authorized_user_ids,owner_id:_.owner_id,show_anonymous:_.show_anonymous};f(h,"gallery/update/"+b,e).catch((function(e){return console.log(e)})),N(!1)},children:"Save"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),S("/photos/new/"+_._id)},children:"Add new photo."}),Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",name:"editformcancel",onClick:function(){return N(!1)},children:"Cancel"})]})]})}),Object(a.jsx)("div",{className:g.a.topalign,children:v&&v.map((function(e){return Object(a.jsx)(x,{photo:e,anon:m},e._id)}))})]})},L=n(37),z=n(51),M=n(26),T=n.n(M),E=n(104),B=n(102),F=n(43),G=n.n(F),U=function(e){var t,n=e.xloc,o=e.yloc,c=e.diam,i=e.active,r=e.hidden,l=void 0!==r&&r,s=e.onClick,u=e.text,d=void 0===u?"":u,h=Math.max(c,10);return"number"!==typeof h&&(h=10),t=s||function(){},Object(a.jsx)("div",{style:{display:l?"none":"block",position:"absolute",border:i?"3px solid red":"3px dashed white",top:o-h/2+"px",left:n-h/2+"px",borderRadius:h+"px",width:h-3+"px",height:h-3+"px",padding:c/8+"px",margin:"0px",color:"white"},onClick:t,onMouseDown:function(e){return e.stopPropagation()},children:d})},D=function(e){var t,n=e.photo,c=e.setPhoto,i=e.commentloc,r=e.setCommentLoc,s=e.setActiveComment,d=e.anon,h=Object(u.b)(),b=h.user,g=h.getAccessTokenSilently,m=Object(o.useState)("Enter text here . . . "),p=Object(l.a)(m,2),O=p[0],_=p[1],y=null!==i&&void 0!==i?i:{},x=y.xloc,v=y.yloc,w=y.xpct,k=y.ypct,C=y.diam,N=y.diampct,S=n._id;t=d?{user_id:"none",user_name:"anonymous"}:{user_id:b.sub,user_name:b.name};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U,{xloc:x,yloc:v,diam:C,active:!0,hidden:null===i}),Object(a.jsx)("div",{className:i?G.a.addcomment:G.a.hidden,style:i?{position:"absolute",top:v+C/2+10,left:Math.max(x-300,0)}:null,children:Object(a.jsxs)("form",{name:"AddComment",children:[Object(a.jsx)("textarea",{rows:"4",cols:"75",name:"comment",value:O,onChange:function(e){return _(e.target.value)}}),Object(a.jsx)("button",{type:"button",onClick:function(e){var a;a=n.comments?Object(j.a)(Object(j.a)({},n),{},{comments:[].concat(Object(L.a)(n.comments),[{user_id:t.user_id,user_name:t.user_name,x:w,y:k,diam:N,comment:O}])}):Object(j.a)(Object(j.a)({},n),{},{comments:[{user_id:t.user_id,user_name:t.user_name,x:w,y:k,diam:N,comment:O}]}),c(a),d?(console.log(a),fetch("http://localhost:8002/api/photos_anon/update/"+n._id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return c(e.photo.find((function(e){return e._id===S})))})).catch((function(e){return console.log(e)}))):f(g,"photos/update/"+n._id,a).then((function(e){return c(e.photo.find((function(e){return e._id===S})))})).catch((function(e){return console.log(e)})),r(null),_("Enter text here . . . "),s(null)},children:"Submit"}),Object(a.jsx)("button",{type:"button",onClick:function(){_("Enter text here . . . "),r(null)},children:"Cancel"})]})})]})},I=function(e){var t,n=Object(u.b)(),c=n.user,i=n.isLoading,r=n.getAccessTokenSilently,h=e.id,b=e.anon,g=void 0!==b&&b,m=Object(o.useState)(0),p=Object(l.a)(m,2),O=p[0],_=p[1],y=Object(o.useState)({}),x=Object(l.a)(y,2),v=x[0],w=x[1],k=Object(o.useState)({}),C=Object(l.a)(k,2),N=C[0],S=C[1],A=Object(o.useState)(!1),P=Object(l.a)(A,2),R=P[0],M=P[1],F=Object(o.useState)(null),G=Object(l.a)(F,2),I=G[0],W=G[1],Y=Object(o.useState)(null),J=Object(l.a)(Y,2),H=J[0],Z=J[1],q=Object(o.useState)(10),V=Object(l.a)(q,2),X=V[0],K=V[1],Q=Object(o.useState)({xloc:0,yloc:0,diam:10,hidden:!0}),$=Object(l.a)(Q,2),ee=$[0],te=$[1],ne=Object(o.useRef)(null),ae=Object(o.useRef)(null),oe=Object(s.b)(),ce=!(g||N.owner_id!==c.sub);Object(o.useEffect)((function(){g?fetch("http://localhost:8002/api/photos_anon/"+h).then((function(e){return e.json()})).then((function(e){w(Object(j.a)(Object(j.a)({},e.photo[0]),{},{gallery_name:e.gallery_name,gallery_id:e._id})),S({gallery_name:e.gallery_name,gallery_id:e._id,owner_id:e.owner_id})})).catch((function(e){return console.log(e)})):f(r,"photos/"+h).then((function(e){w(Object(j.a)(Object(j.a)({},e.photo[0]),{},{gallery_name:e.gallery_name,gallery_id:e._id})),S({gallery_name:e.gallery_name,gallery_id:e._id,owner_id:e.owner_id});var t,n=Object(z.a)(e.photo[0].ratings);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(console.log("looking at",a.user_id),a.user_id===c.sub){_(a.rating);break}}}catch(o){n.e(o)}finally{n.f()}})).catch((function(e){return console.log(e)})),console.log("Ran use effect")}),[i]);return Object(a.jsxs)("div",{className:T.a.container,children:[Object(a.jsxs)("div",{ref:ae,id:"img_container",name:"imagecontainer",onMouseUp:function(e){if(!ee.hidden){t=ne.current.getBoundingClientRect();var n=Math.round(ee.xloc/t.width*100),a=Math.round(ee.yloc/t.height*100),o=X/t.width*100;console.log("Imagebox: ",t,"Cursor",ee,"Pct",n,a,o),W(Object(j.a)(Object(j.a)({},ee),{},{xpct:n,ypct:a,diam:X,diampct:o})),Z(null),te({xloc:0,yloc:0,diam:10,hidden:!0})}},onMouseMove:function(e){if(t=ne.current.getBoundingClientRect(),!ee.hidden){e.preventDefault();var n=Math.max(10,2*Math.sqrt(Math.pow(e.clientX-t.left-ee.xloc,2)+Math.pow(e.clientY-t.top-ee.yloc,2)));K(n)}},children:[Object(a.jsx)(U,{xloc:ee.xloc,yloc:ee.yloc,diam:X,active:!0,hidden:ee.hidden},"selector"),Object(a.jsx)("img",{onLoad:function(){return Z(27)},src:v.path,ref:ne,onMouseDown:function(e){t=ne.current.getBoundingClientRect();var n={xloc:e.clientX-t.left,yloc:e.clientY-t.top,diam:X,hidden:!1};te(n),K(10),Z(null)},alt:"User submitted with comments"}),v.comments&&v.comments.map((function(e,n){t=ne.current.getBoundingClientRect();var o=e.x/100*t.width,c=e.y/100*t.height,i=e.diam/100*t.width;return Object(a.jsx)(U,{onClick:function(t){t.stopPropagation(),H===e._id?Z(null):Z(e._id)},xloc:o,yloc:c,diam:i,active:H===e._id,hidden:!1,text:n+1},e._id)}))]}),Object(a.jsx)("div",{className:g?"hidden":"star",children:Object(a.jsx)(B.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(a.jsx)(E.a,{name:"rating",value:O,onChange:function(e,t){_(t),function(e){var t,n=!1;v.ratings&&v.ratings.length?(t=Object(j.a)(Object(j.a)({},v),{},{ratings:v.ratings.map((function(t){return t.user_id===c.sub?(n=!0,Object(j.a)(Object(j.a)({},t),{},{rating:e,user_name:c.name})):t}))}),n||(t=Object(j.a)(Object(j.a)({},t),{},{ratings:[].concat(Object(L.a)(t.ratings),[{rating:e,user_id:c.sub,user_name:c.name}])}))):t=Object(j.a)(Object(j.a)({},v),{},{ratings:[{rating:e,user_id:c.sub,user_name:c.name}]}),w(t),f(r,"photos/update/"+h,t).catch((function(e){return console.log(e)}))}(t)}})})}),Object(a.jsx)(d.a,{style:ce?{display:"inline-block"}:{display:"none"},variant:"contained",color:"primary",onClick:function(){R&&f(r,"photos/update/"+h,v).then((function(e){w(e.photo.find((function(e){return e._id===h}))),S({gallery_name:e.gallery_name,gallery_id:e._id,owner_id:e.owner_id})})).catch((function(e){return console.log(e)})),M(!R)},children:R?"Save":"Edit"}),Object(a.jsxs)("form",{className:R?T.a.floating:" "+T.a.invisible,children:[Object(a.jsx)("input",{style:{width:"95%"},type:"text",name:"path",value:v.path,onChange:function(e){return w(Object(j.a)(Object(j.a)({},v),{},{path:e.target.value}))}}),Object(a.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return M(!1)},children:"Cancel"})]}),Object(a.jsx)(D,{comment:H,setActiveComment:Z,commentloc:I,setCommentLoc:W,photo:v,setPhoto:w,id:h,anon:g}),Object(a.jsx)("h5",{children:"Ratings"}),v.ratings&&v.ratings.map((function(e){return Object(a.jsxs)("p",{children:[e.user_name," - ",e.rating]})})),Object(a.jsx)("h5",{children:"Comments"}),v.comments&&v.comments.map((function(e,t){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{onClick:function(){H===e._id?Z(null):Z(e._id)},className:H===e._id?T.a.active:T.a.regular,children:"".concat(t+1,": ").concat(e.user_name," (").concat(e.x,", ").concat(e.y,") - ").concat(e.comment)})})})),Object(a.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return oe("/gallery".concat(g?"_anon":"","/")+N.gallery_id)},children:"Go back to gallery!"})]})},W=function(e){var t=e.user,n=t.name,o=t.picture,c=e.navpath,i=Object(s.b)(),r=Object(u.b)().logout;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{display:"inline-block",width:"700px",textAlign:"left",fontSize:"larger",fontWeight:"bold"},children:c.length&&c.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:e.link,onClick:function(t){t.preventDefault(),i(e.link)},children:e.name}),t<c.length-1?Object(a.jsx)("b",{children:" -> "}):""]})}))}),Object(a.jsxs)("div",{style:{display:"inline-block",width:"270px",textAlign:"right"},children:[Object(a.jsx)("h3",{children:n}),Object(a.jsx)("img",{style:{maxWidth:"40px",maxHeight:"40px",border:"1px solid darkgrey",borderRadius:"20px"},alt:"User",src:o}),Object(a.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return r({returnTo:"http://localhost:3000/"})},children:"Logout"})]})]})},Y=n(44),J=n.n(Y),H=function(e){var t=Object(s.b)(),n=e.gallery,o=e.anon;return Object(a.jsxs)("div",{className:J.a.gallery,onClick:function(){return t("/gallery".concat(o?"_anon":"","/")+n._id)},children:[Object(a.jsx)("h2",{children:n.gallery_name}),Object(a.jsxs)("p",{children:["Photo Count: ",n.photo.length]}),n.photo.length&&n.photo.map((function(e,t){return t>5?null:Object(a.jsx)("img",{className:J.a.thumbnail,alt:"User submitted",src:e.path},e._id)}))]},n._id)},Z=function(e){var t=Object(u.b)(),n=t.user,c=t.getAccessTokenSilently,i=e.setNavPath,r=e.newlogin,h=Object(o.useState)([]),j=Object(l.a)(h,2),b=j[0],g=j[1],m=Object(s.b)();if(Object(o.useEffect)((function(){f(c,"photos/").then((function(e){return g(e)})).catch((function(e){return console.log(e)})),i([{name:"Home",link:"/home/"+n.sub}])}),[]),r){var p={name:n.name,email:n.email,auth0_id:n.sub};return f(c,"users/addorupdate/"+n.sub,p).then((function(e){return m("/home/"+n.sub)})).catch((function(e){return console.log(e)})),Object(a.jsx)("div",{children:"Something went wrong."})}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{style:{display:"inline-block",marginRight:"40px"},children:"My galleries:"}),Object(a.jsx)(d.a,{style:{display:"inline-block"},variant:"contained",color:"primary",name:"addnewgallery",onClick:function(){return m("/gallery/new")},children:"Add new gallery!"})]}),b&&b.filter((function(e){return e.owner_id===n.sub})).map((function(e){return Object(a.jsx)(H,{gallery:e})})),Object(a.jsx)("h3",{children:"Other galleries:"}),b&&b.filter((function(e){return e.owner_id!==n.sub})).map((function(e){return Object(a.jsx)(H,{gallery:e})}))]})},q=function(e){var t=Object(u.b)(),n=t.user,c=t.isAuthenticated,i=t.isLoading,r=Object(o.useState)([]),d=Object(l.a)(r,2),j=d[0],b=d[1];return i?Object(a.jsx)("div",{children:"Logging you in . . . "}):c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W,{user:n,navpath:j}),Object(a.jsxs)(s.a,{children:[Object(a.jsx)(Z,{path:"/loggedin",setNavPath:b,newlogin:!0}),Object(a.jsx)(Z,{path:"/home/:id",setNavPath:b}),Object(a.jsx)(A,{path:"/galleries",setNavPath:b}),Object(a.jsx)(v,{path:"/gallery/new"}),Object(a.jsx)(R,{path:"/gallery/:id",setNavPath:b}),Object(a.jsx)(C,{path:"/photos/new/:togallery"}),Object(a.jsx)(I,{path:"/photos/:id",setNavPath:b})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Not Logged In"}),Object(a.jsx)("p",{children:"You must be logged in to perform this action."}),Object(a.jsx)(h,{})]})},V=function(e){var t=Object(o.useState)([]),n=Object(l.a)(t,2),c=n[0],i=n[1],r=(Object(s.b)(),Object(u.b)().loginWithRedirect);return Object(o.useEffect)((function(){fetch("http://localhost:8002/api/photos_anon/").then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Welcome to PhotoComments"}),Object(a.jsx)("p",{children:"The following galleries have been set by their users to allow anonymous views and comments.  Please consider registering for an account."}),Object(a.jsx)(d.a,{style:{margin:"5px"},variant:"contained",color:"primary",type:"button",onClick:function(){return r()},children:"Register for an account."})]}),c.length&&c.map((function(e){return console.log(e.name),Object(a.jsx)(H,{gallery:e,anon:!0},e._id)}))]})},X=n(52),K=n.n(X),Q=function(e){return Object(a.jsx)("div",{className:K.a.madeby,onClick:function(){return window.open("https://www.mrsontag.com","_blank")},children:Object(a.jsx)("p",{children:"\xa92021 Matt Sontag"})})};var $=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1]);return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(Q,{}),Object(a.jsxs)(s.a,{children:[Object(a.jsx)(h,{path:"/"}),Object(a.jsx)(V,{path:"/anon/"}),Object(a.jsx)(R,{path:"/gallery_anon/:id",anon:!0,setNavPath:n}),Object(a.jsx)(I,{path:"/photos_anon/:id",anon:!0,setNavPath:n}),Object(a.jsx)(q,{path:"/*"})]})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(u.a,{domain:"dev-08umzn2o.us.auth0.com",clientId:"76OKk6yoIt4f4W4ChvVmYytfgRcZqI1I",redirectUri:"http://localhost:3000/loggedin/",audience:"https://localhost:8000/api/",scope:"read:any",children:Object(a.jsx)($,{})})}),document.getElementById("root")),ee()}},[[83,1,2]]]);
//# sourceMappingURL=main.666e801f.chunk.js.map