(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports={container:"photopage_container__GUJqG",invisible:"photopage_invisible__3k6NC",floating:"photopage_floating__3-nOm"}},38:function(e,t,n){e.exports={container:"newphotopage_container__3u8Ys",invisible:"newphotopage_invisible__V0F9x",floating:"newphotopage_floating__HliyZ"}},39:function(e,t,n){e.exports={hidden:"addcomment_hidden__1gKDJ",addcomment:"addcomment_addcomment__DweRn"}},43:function(e,t,n){e.exports={small:"photo_small__2tgGO"}},56:function(e,t,n){},57:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),i=n.n(o),a=n(29),r=n.n(a),s=(n(56),n(57),n(6)),l=n(7),u=function(){var e=Object(l.b)(),t=e.loginWithRedirect,n=e.logout;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome to Photo Commentor"}),Object(c.jsx)("button",{type:"button",onClick:function(){return t()},children:"Login or Register"}),Object(c.jsx)("button",{type:"button",onClick:function(){return n()},children:"Logout"})]})})},d=(n(70),n(3)),j=n(5),h=n(9),b=n.n(h),g=n(23),O=n.n(g),m=n(30),p=function(){var e=Object(m.a)(O.a.mark((function e(t,n,c){var o,i,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t({});case 3:return i=e.sent,o=c?{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify(c)}:{method:"GET",headers:{Authorization:"Bearer ".concat(i)}},e.next=7,fetch("http://localhost:8002/api/"+n,o);case 7:return a=e.sent,e.abrupt("return",a.json());case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,c){return e.apply(this,arguments)}}(),f=n(43),x=n.n(f),v=function(e){var t=e.photo,n=t.path,o=t._id,i=t.ratings,a=t.comments,r=Object(s.c)();return Object(c.jsxs)("div",{className:x.a.small,onClick:function(){return r("/photos/"+o)},children:[Object(c.jsx)("img",{src:n,alt:"Comment-tagged"}),Object(c.jsx)("h5",{children:"Ratings"}),i&&i.map((function(e){return Object(c.jsxs)("p",{children:[e.user_id," - ",e.rating]})})),Object(c.jsx)("h5",{children:"Comments"}),a&&a.map((function(e){return Object(c.jsx)("p",{children:"".concat(e.user_id," (").concat(e.x,", ").concat(e.y,") - ").concat(e.comment)})}))]})},_=function(e){var t=Object(l.b)(),n=t.user,i=t.isLoading,a=t.getAccessTokenSilently,r=Object(o.useState)({}),u=Object(j.a)(r,2),h=u[0],g=u[1],O=Object(s.c)();Object(o.useEffect)((function(){i||g({gallery_name:"New gallery . . . ",authorized_user_ids:"List authorized users . . . "})}),[i]);return Object(c.jsxs)("div",{className:b.a.container,children:[Object(c.jsx)("button",{onClick:function(){return O("/loggedin/")},children:"Back to gallery list!"}),Object(c.jsx)("h2",{children:"Please enter information for your new gallery."}),Object(c.jsxs)("form",{className:b.a.floating,children:[Object(c.jsx)("input",{type:"text",name:"name",value:h.gallery_name,onChange:function(e){return g(Object(d.a)(Object(d.a)({},h),{},{gallery_name:e.target.value}))}}),Object(c.jsx)("label",{children:" Authorized Users (separate by commas): "}),Object(c.jsx)("input",{type:"text",name:"name",value:h.authorized_user_ids,onChange:function(e){return g(Object(d.a)(Object(d.a)({},h),{},{authorized_user_ids:e.target.value.toString().split(",")}))}}),Object(c.jsx)("button",{type:"button",name:"save",onClick:function(){var e={gallery_name:h.gallery_name,authorized_user_ids:h.authorized_user_ids,owner_id:n.sub};console.log(e),p(a,"gallery/new",e).then((function(e){O("/gallery/"+e._id)})).catch((function(e){return console.log(e)}))},children:"Save"})]})]})},y=n(38),w=n.n(y),C=function(e){var t=Object(l.b)(),n=t.isLoading,i=t.getAccessTokenSilently,a=e.togallery,r=Object(o.useState)({}),u=Object(j.a)(r,2),h=u[0],b=u[1],g=Object(s.c)();Object(o.useEffect)((function(){n||b({gallery_id:a}),console.log("Ran use effect")}),[n]);return Object(c.jsxs)("div",{className:w.a.container,children:[Object(c.jsx)("img",{src:h.path,alt:"User submitted with comments"}),Object(c.jsx)("button",{onClick:function(){p(i,"photos/add/"+a,h).then((function(e){console.log(e),g("/photos/"+e.photo[e.photo.length-1]._id)})).catch((function(e){return console.log(e)}))},children:"Save"}),Object(c.jsx)("form",{className:w.a.floating,children:Object(c.jsx)("input",{type:"text",name:"path",value:h.path,onChange:function(e){return b(Object(d.a)(Object(d.a)({},h),{},{path:e.target.value}))}})})]})},k=function(e){var t=Object(l.b)(),n=t.user,i=(t.isAuthenticated,t.isLoading),a=t.getAccessTokenSilently,r=Object(o.useState)([]),u=Object(j.a)(r,2),d=u[0],h=u[1],b=Object(s.c)();Object(o.useEffect)((function(){if(!i){console.log("Retrieving galleries!");var e=d;p(a,"photos/owner/"+n.sub).then((function(t){h(e=t),console.log("Galleries:",e)})).catch((function(e){return console.log(e)}))}}),[i]);return Object(c.jsxs)("div",{children:["You ARE currently logged in!",Object(c.jsxs)("h2",{children:[n.name," - ",n.user_id]}),"\\",Object(c.jsx)("p",{children:n.email}),Object(c.jsx)("button",{onClick:function(){if(!i){console.log("Retrieving galleries!");var e=d;p(a,"photos/owner/123").then((function(t){h(e=t),console.log("Galleries:",e)})).catch((function(e){return console.log(e)}))}},children:"Run retrieve again!"}),Object(c.jsx)("button",{name:"addnewgallery",onClick:function(){return b("/gallery/new")},children:"Add new gallery!"}),d&&d.map((function(e){return Object(c.jsxs)("div",{onClick:function(){return b("/gallery/"+e._id)},children:[Object(c.jsx)("h2",{children:e.gallery_name}),Object(c.jsxs)("p",{children:["Photo Count: ",e.photo.length]})]})}))]})},S=function(e){var t,n=Object(l.b)(),i=n.user,a=(n.isAuthenticated,n.isLoading),r=n.getAccessTokenSilently,u=e.id,h=Object(o.useState)({}),g=Object(j.a)(h,2),O=g[0],m=g[1],f=null!==(t=O.photo)&&void 0!==t?t:[],x=Object(o.useState)(!1),_=Object(j.a)(x,2),y=_[0],w=_[1],C=Object(s.c)();Object(o.useEffect)((function(){a||p(r,"photos/gallery/"+u).then((function(e){return m(e[0])})).catch((function(e){return console.log(e)}))}),[a]);return Object(c.jsxs)("div",{className:b.a.container,children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Welcome ",i.name]}),Object(c.jsx)("button",{onClick:function(){return C("/loggedin/")},children:"Back to gallery list!"}),Object(c.jsx)("h2",{children:O.gallery_name}),Object(c.jsxs)("p",{children:["Authorized Users: ",O.authorized_user_ids]}),Object(c.jsx)("button",{className:y?b.a.invisible:b.a.visible,type:"button",name:"editformgo",onClick:function(){return w(!0)},children:"Edit"}),Object(c.jsxs)("form",{className:y?b.a.floating:b.a.invisible,children:[Object(c.jsx)("input",{type:"text",name:"name",value:O.gallery_name,onChange:function(e){return m(Object(d.a)(Object(d.a)({},O),{},{gallery_name:e.target.value}))}}),Object(c.jsx)("label",{children:" Authorized Users (separate by commas): "}),Object(c.jsx)("input",{type:"text",name:"name",value:O.authorized_user_ids,onChange:function(e){return m(Object(d.a)(Object(d.a)({},O),{},{authorized_user_ids:e.target.value.toString().split(",")}))}}),Object(c.jsx)("button",{className:y?b.a.visible:b.a.invisible,type:"button",name:"save",onClick:function(){var e={gallery_name:O.gallery_name,authorized_user_ids:O.authorized_user_ids,owner_id:O.owner_id};p(r,"gallery/update/"+u,e).catch((function(e){return console.log(e)})),w(!1)},children:"Edit"}),Object(c.jsx)("button",{type:"button",name:"editformcancel",onClick:function(){return w(!1)},children:"Cancel"})]}),Object(c.jsx)("button",{onClick:function(){return C("/photos/new/"+O._id)},children:"Add new photo."})]}),Object(c.jsx)("div",{className:b.a.topalign,children:f&&f.map((function(e){return Object(c.jsx)(v,{photo:e})}))})]})},N=n(34),A=n(44),R=n(36),z=n.n(R),L=n(90),M=n(89),E=n(39),T=n.n(E),P=function(e){var t,n=e.xloc,o=e.yloc,i=e.diam,a=e.active,r=e.hidden,s=void 0!==r&&r,l=e.onClick,u=e.text,d=void 0===u?"":u,j=Math.max(i,10);return"number"!==typeof j&&(j=10),t=l||function(){},Object(c.jsx)("div",{style:{display:s?"none":"block",position:"absolute",border:a?"3px solid red":"3px dashed white",top:o-j/2+"px",left:n-j/2+"px",borderRadius:j+"px",width:j-3+"px",height:j-3+"px",padding:i/8+"px",margin:"0px",color:"white"},onClick:t,onMouseDown:function(e){return e.stopPropagation()},children:d})},Y=function(e){var t=e.photo,n=e.setPhoto,i=e.commentloc,a=e.setCommentLoc,r=e.setActiveComment,s=Object(l.b)(),u=s.user,h=s.getAccessTokenSilently,b=Object(o.useState)("Enter text here . . . "),g=Object(j.a)(b,2),O=g[0],m=g[1],f=null!==i&&void 0!==i?i:{},x=f.xloc,v=f.yloc,_=f.xpct,y=f.ypct,w=f.diam,C=f.diampct;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P,{xloc:x,yloc:v,diam:w,active:!0,hidden:null===i}),Object(c.jsx)("div",{className:i?T.a.addcomment:T.a.hidden,style:i?{position:"absolute",top:v+w/2+10,left:Math.max(x-300,0)}:null,children:Object(c.jsxs)("form",{name:"AddComment",children:[Object(c.jsx)("textarea",{rows:"4",cols:"75",name:"comment",value:O,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(e){var c;c=t.comments?Object(d.a)(Object(d.a)({},t),{},{comments:[].concat(Object(N.a)(t.comments),[{user_id:u.sub,user_name:u.name,x:_,y:y,diam:C,comment:O}])}):Object(d.a)(Object(d.a)({},t),{},{comments:[{user_id:u.sub,user_name:u.name,x:_,y:y,diam:C,comment:O}]}),n(c),console.log("Saving photo",c,"To path: ",t._id),p(h,"photos/update/"+t._id,c).then((function(e){return n(e.photo[0])})).catch((function(e){return console.log(e)})),a(null),m("Enter text here . . . "),r(null)},children:"Submit"}),Object(c.jsx)("button",{type:"button",onClick:function(){m("Enter text here . . . "),a(null)},children:"Cancel"})]})})]})},F=function(e){var t,n=Object(l.b)(),i=n.user,a=n.isLoading,r=n.getAccessTokenSilently,u=e.id,h=Object(o.useState)(),b=Object(j.a)(h,2),g=b[0],O=b[1],m=Object(o.useState)({}),f=Object(j.a)(m,2),x=f[0],v=f[1],_=Object(o.useState)(!1),y=Object(j.a)(_,2),w=y[0],C=y[1],k=Object(o.useState)(null),S=Object(j.a)(k,2),R=S[0],E=S[1],T=Object(o.useState)(null),F=Object(j.a)(T,2),B=F[0],U=F[1],G=Object(o.useState)(10),I=Object(j.a)(G,2),X=I[0],D=I[1],J=Object(o.useState)({xloc:0,yloc:0,diam:10,hidden:!0}),W=Object(j.a)(J,2),q=W[0],V=W[1],K=Object(o.useRef)(null),Z=Object(o.useRef)(null),H=Object(s.c)();Object(o.useEffect)((function(){a||p(r,"photos/"+u).then((function(e){v(Object(d.a)(Object(d.a)({},e.photo[0]),{},{gallery_name:e.gallery_name,gallery_id:e._id}));var t,n=Object(A.a)(e.photo[0].ratings);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(console.log("looking at",c.user_id),c.user_id===i.sub){O(c.rating);break}}}catch(o){n.e(o)}finally{n.f()}})).catch((function(e){return console.log(e)})),console.log("Ran use effect")}),[a]);return Object(c.jsxs)("div",{className:z.a.container,children:[Object(c.jsxs)("div",{ref:Z,id:"img_container",name:"imagecontainer",onMouseDown:function(e){var t={xloc:e.clientX+window.pageXOffset,yloc:e.clientY+window.pageYOffset,diam:X,hidden:!1};V(t),D(10),U(null)},onMouseUp:function(e){if(!q.hidden){t=K.current.getBoundingClientRect();var n=Math.round((q.xloc-t.left+window.pageXOffset)/t.width*100),c=Math.round((q.yloc-t.top+window.pageYOffset)/t.height*100),o=X/t.width*100;E(Object(d.a)(Object(d.a)({},q),{},{xpct:n,ypct:c,diam:o})),U(null),V({xloc:0,yloc:0,diam:10,hidden:!0})}},onMouseMove:function(e){if(!q.hidden){e.preventDefault();var t=Math.max(10,2*Math.sqrt(Math.pow(e.clientX+window.pageXOffset-q.xloc,2)+Math.pow(e.clientY+window.pageYOffset-q.yloc,2)));D(t)}},children:[Object(c.jsx)(P,{xloc:q.xloc,yloc:q.yloc,diam:X,active:!0,hidden:q.hidden},"selector"),Object(c.jsx)("img",{onLoad:function(){return U(27)},src:x.path,ref:K,alt:"User submitted with comments"}),x.comments&&x.comments.map((function(e){t=K.current.getBoundingClientRect();var n=e.x/100*t.width+t.left+window.pageXOffset,o=e.y/100*t.height+t.top+window.pageYOffset,i=e.diam/100*t.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(P,{onClick:function(t){t.stopPropagation(),U(e._id)},xloc:n,yloc:o,diam:i,active:B===e._id,hidden:!1},e._id)})}))]}),Object(c.jsx)("div",{className:"star",children:Object(c.jsx)(M.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(c.jsx)(L.a,{name:"simple-controlled",value:g,onChange:function(e,t){O(t),function(e){console.log(x);var t=!1,n=Object(d.a)(Object(d.a)({},x),{},{ratings:x.ratings.map((function(n){return n.user_id===i.sub?(t=!0,Object(d.a)(Object(d.a)({},n),{},{rating:e})):n}))});t||(n=Object(d.a)(Object(d.a)({},n),{},{ratings:[].concat(Object(N.a)(n.ratings),[{rating:e,user_id:i.sub}])})),v(n),p(r,"photos/update/"+u,n).catch((function(e){return console.log(e)}))}(t)}})})}),Object(c.jsx)("button",{onClick:function(){w&&p(r,"photos/update/"+u,x).then((function(e){return alert("Changes saved!")})).catch((function(e){return console.log(e)})),C(!w)},children:w?"Save":"Edit"}),Object(c.jsx)("form",{className:w?z.a.floating:" "+z.a.invisible,children:Object(c.jsx)("input",{type:"text",name:"path",value:x.path,onChange:function(e){return v(Object(d.a)(Object(d.a)({},x),{},{path:e.target.value}))}})}),Object(c.jsx)(Y,{comment:B,setActiveComment:U,commentloc:R,setCommentLoc:E,photo:x,setPhoto:v,id:u}),Object(c.jsx)("h5",{children:"Ratings"}),x.ratings&&x.ratings.map((function(e){return Object(c.jsxs)("p",{children:[e.user_id," - ",e.rating]})})),Object(c.jsx)("h5",{children:"Comments"}),x.comments&&x.comments.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{children:"".concat(e.user_id," (").concat(e.x,", ").concat(e.y,") - ").concat(e.comment)})})})),Object(c.jsx)("button",{onClick:function(){return H("/gallery/"+x.gallery_id)},children:"Go back to gallery!"})]})},B=function(e){var t=Object(l.b)(),n=t.isAuthenticated;return t.isLoading?Object(c.jsx)("div",{children:"Loading . . . "}):n?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(k,{path:"/loggedin"}),Object(c.jsx)(_,{path:"/gallery/new"}),Object(c.jsx)(S,{path:"/gallery/:id"}),Object(c.jsx)(C,{path:"/photos/new/:togallery"}),Object(c.jsx)(F,{path:"/photos/:id"})]})}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Not Logged In"}),Object(c.jsx)("p",{children:"You must be logged in to perform this action."}),Object(c.jsx)(u,{})]})},U=n(18),G=n(40),I=n(45),X=void 0,D=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/photos/owner/123");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=Object(o.useState)([]),n=Object(j.a)(t,2),i=n[0],a=n[1];return Object(o.useEffect)((function(){D().then((function(e){return a(e)}))})),Object(c.jsxs)("div",{className:"Main",style:{width:"auto"},children:[Object(c.jsx)("h1",{className:"UserName",children:"No login"}),Object(c.jsx)(G.a,{onClick:s.b.bind(X,"/gallery/new"),children:"Add gallery!"}),Object(c.jsx)(I.a,{children:i&&i.map((function(e){return Object(c.jsxs)(U.a,{children:[Object(c.jsx)(U.a.Img,{variant:"top",src:e.photo[0]&&e.photo[0].path}),Object(c.jsx)(U.a.Title,{children:e.gallery_name}),Object(c.jsxs)(U.a.Body,{children:[Object(c.jsx)(U.a.Title,{children:e.title}),Object(c.jsxs)("p",{children:["Photos: ",e.photo.length]})]}),Object(c.jsx)(U.a.Footer,{children:Object(c.jsx)(G.a,{onClick:s.b.bind(X,"/gallery/"+e._id),children:"View Gallery"})})]},e._id)}))})]})};var W=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(u,{path:"/"}),Object(c.jsx)(J,{path:"/nologin/"}),Object(c.jsx)(B,{path:"/*"})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l.a,{domain:"dev-08umzn2o.us.auth0.com",clientId:"76OKk6yoIt4f4W4ChvVmYytfgRcZqI1I",redirectUri:"http://localhost:3000/loggedin/",audience:"https://localhost:8000/api/",scope:"read:any",children:Object(c.jsx)(W,{})})}),document.getElementById("root")),q()},9:function(e,t,n){e.exports={container:"gallery_container__1zL05",invisible:"gallery_invisible__2g5X5",visible:"gallery_visible__gRXYO",floating:"gallery_floating__1MyD8",topalign:"gallery_topalign__2_RN5"}}},[[74,1,2]]]);
//# sourceMappingURL=main.67b79751.chunk.js.map