// ==UserScript==
// @name        FutaScripts
// @namespace   a FutaScripts
// @match       https://www.ptt.cc
// @match       https://biggo.com.tw
// @grant       none
// @version     1.0
// @author      https://github.com/FutaGuard
// @description a FutaGuard team script collections.
// ==/UserScript==


// PTT 18 歲年齡驗證
if(!document.cookie.match(/over18=1/)){document.cookie='over18=1;path=/';location.reload()};

// BigGo
if(!document.cookie.match(/noad=\d+/)){document.cookie='noad=9999999999;path=/'};