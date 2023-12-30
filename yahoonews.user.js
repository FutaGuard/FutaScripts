// ==UserScript==
// @name        複製新聞連結
// @namespace   Violentmonkey Scripts
// @match       https://tw.news.yahoo.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      tdc
// @description 2023/12/30 上午11:37:33
// ==/UserScript==

let links = ''

if (document.querySelector('a.link.caas-button.noborder.caas-tooltip.mail.top') != null) {
    let title = document.querySelector('.caas-title-wrapper');
    let btn = document.createElement('button')
    GM_addStyle('.copy-url:hover {background-image: linear-gradient(90deg, #FA748B 0%, #f5a623 100%);color: #fff;box-shadow: 0px 10px 5px -2px rgba(0,0,0,0.3);transform: scale(1.2);}')
    btn.className = 'copy-url'
    btn.style.border = '1px solid red'
    btn.style.padding = '5px'
    btn.style.borderRadius = '16px'
    btn.style.margin = '5px'
    btn.textContent = '複製連結'
    title.appendChild(btn)

    btn.addEventListener('click', () => {
        let mailto = decodeURIComponent(document.querySelector('a.link.caas-button.noborder.caas-tooltip.mail.top').href);
        let links = mailto.match(/https:\/\/ynews\.page\.link\/[a-zA-Z0-9]+/);
        // 複製連結
        navigator.clipboard.writeText(links[0]);
        
        // 顯示提示
        btn.textContent = '連結已複製';

        // 延遲 2 秒後移除
        setTimeout(() => {
            btn.textContent = '複製連結';
        }, 2000);
    });
}