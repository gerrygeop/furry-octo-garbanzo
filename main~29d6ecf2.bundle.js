!function(e){function r(r){for(var n,i,s=r[0],u=r[1],c=r[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(r);d.length;)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,s=1;s<t.length;s++){var u=t[s];0!==a[u]&&(n=!1)}n&&(o.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},a={3:0},o=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=u;o.push([26,2,0,1,4]),t()}([,function(e,r,t){"use strict";var n=t(5),a=t.n(n),o={showAlert:function(e){var r=e.title,t=e.message,n=e.icon;a.a.fire({icon:n,title:r,text:t,showConfirmButton:!1,timer:3e3,didOpen:function(e){e.addEventListener("mouseenter",a.a.stopTimer),e.addEventListener("mouseleave",a.a.resumeTimer)}})}};r.a=o},,,,,,,function(e,r,t){"use strict";r.a=function(e){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"1","#":"3"};return e.length>100&&(e=e.substring(0,100)),e.split("").map((function(e){return r[e]||e})).join("")}},,,,,function(e,r,t){"use strict";var n=t(14),a=t.n(n);function o(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}var i=function(){var e,r=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,a.a.register();case 3:return e.abrupt("return");case 4:console.log("Service Worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();r.a=i},,function(e,r,t){"use strict";var n=t(2),a=t(1);function o(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}var i={init:function(e){var r=e.data;this._data=r,this._validateData()},_validateData:function(){var e=this._data,r=e.name,t=e.review;""!==r||""!==t?this._sendReview(this._data):a.a.showAlert({title:"Hey!",message:"The input cannot be empty!",icon:"warning"})},_sendReview:function(e){return(r=regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n.a.postReview(e);case 3:t=r.sent,console.log(t),a.a.showAlert({title:"Success",message:"Thank you for your review",icon:"success"}),window.location.reload(),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),a.a.showAlert({title:"Oopss...",message:"Something went wrong!",icon:"error"}),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})),function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)}))})();var r}};r.a=i},function(e,r,t){"use strict";var n=t(2),a={parseAciveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(e);return this._urlCombiner(r)},parseAciveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var r=e.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"".concat(e.verb):"")}},o=t(1);t(25);function i(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function s(e){i(o,n,a,s,u,"next",e)}function u(e){i(o,n,a,s,u,"throw",e)}s(void 0)}))}}var u={init:function(e){var r=this;return s(regeneratorRuntime.mark((function t(){var n,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.likeButtonContainer,a=e.favoriteRestaurants,o=e.restaurant,r._likeButtonContainer=n,r._restaurant=o,r._favoriteRestaurants=a,t.next=6,r._renderButton();case 6:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return s(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e._restaurant.id,r.next=3,e._isRestaurantExist(t);case 3:if(!r.sent){r.next=7;break}e._renderLiked(),r.next=8;break;case 7:e._renderLike();case 8:case"end":return r.stop()}}),r)})))()},_isRestaurantExist:function(e){var r=this;return s(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._favoriteRestaurants.getRestaurant(e);case 2:return n=t.sent,t.abrupt("return",!!n);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n    <span class="material-icons">favorite_border</span>\n  </button>\n',document.getElementById("likeButton").addEventListener("click",s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e._favoriteRestaurants.putRestaurant(e._restaurant);case 3:e._renderButton(),o.a.showAlert({title:"Added to favorites",message:"",icon:"success"}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),o.a.showAlert({title:"Oopss..",message:"Can't be added to favorites",icon:"error"});case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <span class="material-icons">favorite</span>\n  </button>\n',document.getElementById("likeButton").addEventListener("click",s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._favoriteRestaurants.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return r.stop()}}),r)}))))}},c=t(3);function l(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){l(o,n,a,i,s,"next",e)}function s(e){l(o,n,a,i,s,"throw",e)}i(void 0)}))}}function d(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){d(o,n,a,i,s,"next",e)}function s(e){d(o,n,a,i,s,"throw",e)}i(void 0)}))}}function v(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}function g(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){v(o,n,a,i,s,"next",e)}function s(e){v(o,n,a,i,s,"throw",e)}i(void 0)}))}}var m={render:function(){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="hero">\n        <div class="hero-image"></div>\n        <div class="hero-text">\n          <h1 tabindex="0">Explore Restaurant</h1>\n          <p tabindex="0">Get a restaurant recommendation near your location</p>\n        </div>\n      </div>\n\n      <restaurant-list>\n        <h2 tabindex="0">Explore Restaurants</h2>\n        <loading-spinner></loading-spinner>\n      </restaurant-list>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return g(regeneratorRuntime.mark((function e(){var r,t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("loading-spinner"),t=document.querySelector("restaurant-list"),e.prev=2,e.next=5,n.a.listRestaurants();case 5:a=e.sent,t.restaurants=a,r.remove(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),o.a.showAlert({title:"Oops...",message:"Failed to load data",icon:"error"}),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()}},h={"/":m,"/home":m,"/detail/:id":{render:function(){return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div id="likeButtonContainer"></div>\n      <restaurant-detail class="restaurant">\n        <loading-spinner></loading-spinner>\n      </restaurant-detail>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return p(regeneratorRuntime.mark((function e(){var r,t,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("loading-spinner"),t=document.querySelector("restaurant-detail"),i=a.parseAciveUrlWithoutCombiner(),e.prev=3,e.next=6,n.a.detailRestaurant(i.id);case 6:s=e.sent,t.restaurant=s,u.init({likeButtonContainer:document.getElementById("likeButtonContainer"),favoriteRestaurants:c.a,restaurant:{id:s.id,name:s.name,rating:s.rating,city:s.city,description:s.description,pictureId:s.pictureId}}),r.remove(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),o.a.showAlert({title:"Oopss...",message:"Failed to display data!",icon:"error"}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})))()}},"/favorite":{render:function(){return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <restaurant-list>\n        <h2 tabindex="0">Favorite Restaurants</h2>\n        <loading-spinner></loading-spinner>\n      </restaurant-list>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return f(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("loading-spinner"),t=document.querySelector("restaurant-list"),e.prev=2,e.next=5,c.a.getAllRestaurant();case 5:0===(n=e.sent).length&&t.insertAdjacentHTML("beforeend",'\n  <div class="empty-favorite">\n    <span class="material-icons">folder_special</span>\n    <p>You haven\'t added your favorite restaurant yet</p>\n  </div>\n'),t.restaurants=n,r.remove(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),o.a.showAlert({title:"Oops...",message:"Failed to load data",icon:"error"});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))()}}},x={init:function(e){var r=this,t=e.button,n=e.drawer,a=e.iconMenu,o=e.iconClose,i=e.content;t.addEventListener("click",(function(e){r._toggleDrawer(e,n),r._renderIconMenu({drawer:n,button:t,iconMenu:a,iconClose:o})})),i.addEventListener("click",(function(e){r._closeDrawer(e,n),r._renderIconMenu({drawer:n,button:t,iconMenu:a,iconClose:o})}))},_toggleDrawer:function(e,r){e.stopPropagation(),r.classList.toggle("open")},_closeDrawer:function(e,r){e.stopPropagation(),r.classList.remove("open")},_renderIconMenu:function(e){var r=e.drawer,t=e.button,n=e.iconMenu,a=e.iconClose;r.classList.contains("open")?(n.style.display="none",a.style.display="inline",t.setAttribute("aria-label","Close hamburger menu")):(n.style.display="inline",a.style.display="none",t.setAttribute("aria-label","Open hamburger menu"))}};function b(e,r,t,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void t(e)}s.done?r(u):Promise.resolve(u).then(n,a)}function y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(r){var t=r.button,n=r.drawer,a=r.iconMenu,o=r.iconClose,i=r.content;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=t,this._drawer=n,this._iconMenu=a,this._iconClose=o,this._content=i,this._initialAppShell()}var r,t,n,i,s;return r=e,(t=[{key:"_initialAppShell",value:function(){x.init({button:this._button,drawer:this._drawer,iconMenu:this._iconMenu,iconClose:this._iconClose,content:this._content})}},{key:"renderPage",value:(i=regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.parseAciveUrlWithCombiner(),t=h[r],e.prev=2,e.next=5,t.render();case 5:return this._content.innerHTML=e.sent,e.next=8,t.afterRender();case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),o.a.showAlert({titile:"",message:"failed to load page",icon:"error"}),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[2,10]])})),s=function(){var e=this,r=arguments;return new Promise((function(t,n){var a=i.apply(e,r);function o(e){b(a,t,n,o,s,"next",e)}function s(e){b(a,t,n,o,s,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})}])&&y(r.prototype,t),n&&y(r,n),e}();r.a=_},,,,function(e,r,t){var n=t(21),a=t(22);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},,function(e,r,t){"use strict";t.r(r);var n=t(9),a=t.n(n),o=t(4),i=t.n(o),s=t(10),u=t(11),c=t(12),l=a()((function(e){return e[1]})),p=i()(s.a),d=i()(u.a),f=i()(c.a);l.push([e.i,':root{--gray-50:#f9fafb;--gray-100:#f3f4f6;--gray-300:#d1d5db;--gray-500:#6b7280;--gray-700:#374151;--gray-800:#1f2937;--gray-900:#111827;--yellow-100:#fef3c7;--yellow-200:#fde68a;--yellow-500:#f59e0b;--yellow-600:#d97706;--red-500:#ef4444;--font-primary:"Poppins",sans-serif;--font-second:"Lora",serif}*{margin:0;padding:0;box-sizing:border-box;font-family:var(--font-primary)}body{display:grid;font-size:14px;background-color:var(--gray-100)}img{width:100%;object-fit:cover}h1,h2,h3{font-family:var(--font-second)}a{text-decoration:none}.material-icons{color:var(--yellow-500);font-size:20px}loading-spinner{max-width:100%;margin:0 auto}.spinner{width:54px;height:54px}.skip-link{position:absolute;top:-50px;left:0;display:grid;place-items:center;background-color:var(--yellow-500);color:var(--gray-50);padding:8px;min-height:44px;z-index:10}.skip-link:focus{top:8px;left:8px}main{min-height:80vh}app-bar{background-color:var(--gray-900);color:var(--gray-50);display:flex;flex-direction:column;min-width:100%;padding:10px 0;text-align:center}.nav-brand{margin:10px 0;letter-spacing:2px;font-family:var(--font-second)}.nav-list{width:100%;display:grid;position:absolute;transform:translateY(-175px);background-color:var(--gray-900);transition:transform .3s ease-in-out;z-index:2}.nav-item{padding:15px 5px;min-height:44px;color:var(--gray-50);text-decoration:none;display:grid;place-items:center;border-bottom:2px solid var(--gray-900);transition:all .2s}.nav-item:hover{cursor:pointer;border-bottom:2px solid var(--yellow-500)}.hamburger{color:var(--gray-50);background:0 0;min-height:44px;display:grid;place-items:center;border:1px solid var(--gray-900);border-radius:4px}.hamburger .material-icons{font-size:24px;color:var(--gray-50)}.hamburger:focus{border:1px solid var(--yellow-500)}.icon-close{display:none}.nav-list.open{transform:translateY(100px)}.hero{height:80vh}.hero-image{background-color:var(--gray-300);background-image:url('+p+");background-position:center;background-repeat:no-repeat;background-size:cover;height:100%;filter:blur(2.5px);-webkit-filter:blur(2.5px)}.hero .hero-text{color:var(--gray-100);text-align:center;padding:20px;width:80%;position:absolute;top:45%;left:50%;z-index:1;transform:translate(-50%,-50%);filter:drop-shadow(2px 4px 8px rgba(41, 18, 18, .8))}.hero .hero-text h1{font-size:3em;letter-spacing:1px}.hero .hero-text p{font-size:1em;letter-spacing:.8px}restaurant-list{padding:50px 20px;display:grid;gap:30px}restaurant-list .empty-favorite,restaurant-list h2,restaurant-list loading-spinner{grid-column:1/-1;text-align:center;color:var(--gray-900)}.empty-favorite p{color:var(--gray-500);font-family:var(--font-primary)}.empty-favorite .material-icons{color:var(--gray-500);font-size:65px}.card{background-color:var(--gray-50);color:var(--gray-900);max-height:330px;text-align:left;overflow:hidden;position:relative;border-radius:8px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.card-location{background-color:var(--yellow-600);color:var(--gray-50);padding:10px 8px;display:flex;align-items:center;justify-content:space-between;gap:2px;position:absolute;top:0;left:0;border-bottom-right-radius:10px}.card-location .material-icons{color:var(--gray-50)}.card-image{height:200px;background-color:var(--gray-300)}.card-body{padding:10px 15px}.card-title{color:var(--gray-900);padding:10px 0;font-size:20px;font-weight:700;font-family:var(--font-second)}.card-desc p{color:var(--gray-700);margin-top:8px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.restaurant{display:grid;padding:16px}.restaurant img{max-height:450px}.restaurant__detail{padding:20px 0}.restaurant__detail h2{margin-bottom:10px;color:var(--gray-900)}.restaurant__address{display:flex;align-items:center}.restaurant__category{margin:10px 0}.restaurant__list__category{display:flex;align-items:center;gap:5px}.restaurant__list__category span{background-color:var(--yellow-200);color:var(--yellow-600);font-size:10.5px;font-family:var(--poppins);letter-spacing:.5px;margin:5px 0;padding:2px 8px;border-radius:99px}.restaurant__menu{padding:8px 0;margin:20px 0;background-color:var(--gray-50)}.restaurant__menu h3{color:var(--gray-800);text-align:center;margin-bottom:10px}.restaurant__menu__wrapper{display:flex;justify-content:space-evenly;flex-direction:column;gap:20px}.restaurant__menu__card{min-width:200px}.restaurant__menu__card h4{background-color:var(--yellow-100);color:var(--yellow-500);letter-spacing:.5px;padding:2px 8px}.restaurant__menu__card ul{padding-left:8px}.restaurant__menu__card ul li{list-style:circle inside;color:var(--gray-700);font-family:var(--poppins)}.restaurant__description{margin:20px 0}.restaurant__description h3{color:var(--gray-800)}.restaurant__description p{color:var(--gray-700)}.restaurant__customer__review h3{color:var(--gray-800);padding-bottom:5px;border-bottom:1px solid var(--gray-300)}.restaurant__customer__review form{display:grid;gap:10px;margin:15px 0;padding-bottom:15px;border-bottom:1px solid var(--gray-300)}.restaurant__customer__review button,.restaurant__customer__review input,.restaurant__customer__review textarea{min-height:44px;padding:8px 10px;border:1px solid var(--gray-300)}.restaurant__customer__review button{font-size:15px;border:none;color:var(--gray-50);background-color:var(--yellow-500)}.restaurant__customer__review button:hover{filter:brightness(95%)}.restaurant__review__box{max-width:100%;border-bottom:1px solid var(--gray-300);padding-bottom:10px;margin-bottom:10px}.restaurant__review__box h4{color:var(--gray-800);font-family:var(--poppins)}.restaurant__review__box p{color:var(--gray-700);word-wrap:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.restaurant__review__box i{color:var(--gray-500);font-size:12px;font-family:var(--poppins)}.rating{display:flex;align-items:center}.like{width:55px;height:55px;cursor:pointer;border:0;border-radius:50%;background-color:var(--red-500);display:flex;align-items:center;justify-content:center;position:fixed;right:16px;bottom:16px;box-shadow:0 3px 8px rgba(0,0,0,.4)}.like .material-icons{font-size:24px;color:var(--gray-50)}footer{background-color:var(--gray-900);color:var(--gray-50);text-align:center;min-width:100%;padding:20px}@media screen and (min-width:510px){.hero .hero-text h1{font-size:4em}.hero .hero-text p{font-size:1.5em}restaurant-list{grid-template-columns:repeat(2,1fr);gap:30px}.restaurant__customer__review form button{max-width:200px}}@media screen and (min-width:768px){app-bar{display:grid;align-items:center;grid-template-columns:1fr 1fr;padding:16px 32px}.nav-brand{margin:0;text-align:left;font-size:2em}.nav-list{display:flex;justify-content:flex-end;position:static;transform:translateY(0)}.nav-item{padding:0 4px;margin:0 15px;font-size:16px}.hamburger{display:none}.hero-image{background-image:url("+d+")}.hero .hero-text h1{font-size:5em}.hero .hero-text p{font-size:1.5em}restaurant-list{padding:50px 30px;gap:30px}.restaurant__menu__wrapper{flex-direction:row}}@media screen and (min-width:1000px){restaurant-list{grid-template-columns:repeat(3,1fr)}.restaurant{padding:16px 55px}}@media screen and (min-width:1500px){body{max-width:1500px;margin:0 auto}.hero-image{background-image:url("+f+")}restaurant-list{grid-template-columns:repeat(4,1fr)}}",""]),r.default=l}]);