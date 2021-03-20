// ==UserScript==
// @name        FutaScripts
// @namespace   a FutaScripts
// @match       https://www.ptt.cc
// @match       https://biggo.com.tw
// @grant       none
// @version     1.1
// @author      https://github.com/FutaGuard
// @description a FutaGuard team script collections.
// @installURL  https://script.futa.gg/futascripts.user.js
// @downloadURL https://script.futa.gg/futascripts.user.js
// @updateURL   https://script.futa.gg/futascripts.user.js
// ==/UserScript==


// PTT 18 歲年齡驗證
if(!document.cookie.match(/over18=1/)){document.cookie='over18=1;path=/';location.reload()};

// BigGo
if(!document.cookie.match(/noad=\d+/)||document.cookie.match('(^|;)\\s*' + "noad" + '\\s*=\\s*([^;]+)')[2]!=9999999999){document.cookie='noad=9999999999;path=/'};