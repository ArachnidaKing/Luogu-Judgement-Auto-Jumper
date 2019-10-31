// ==UserScript==
// @name         洛谷前端开发组吃屎吧
// @namespace    http://tampermonkey.net/
// @version      3.43
// @description  评测记录自动跳转至旧版页面，并让洛谷前端开发组吃屎
// @author       ArachnidaKing
// @match        https://www.luogu.org/record/*
// @match        https://www.luogu.org/recordnew/show/*
// @encoding     utf-8
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';
    //
    const old_pre_url="https://www.luogu.org/recordnew/show/"
	//
	if(location.href.indexOf("recordnew/show/")>=0)
	{
//			console.log("已进入新版页面");
		editForSpiders();
		return;
	}
    //
    var dq_url=location.href;
    var dq_pid=dq_url.substring(29);
    if(!allNum(dq_pid))
    {
//    		console.log("旧版列表页面");
	}
    else
    {
//    		console.log("旧版评测记录页面");
    	var to_url=old_pre_url+dq_pid;
    	window.location.replace(to_url);
	}
    //
    function editForSpiders()
    {
    	const new_sign="评测记录相关页面欢迎一切爬虫行为。我相信如果当初我们还有一丁点良心，一定能够公开允许个人适度使用的爬虫。请勿再放弃制作爬取任何内容的爬虫。——至于这里的原文，和洛谷运营、前端一起吃屎去了。";
		var goalSignElements=document.getElementsByTagName("p");
		var goal_num=goalSignElements.length;
		var goalSignElement;
		for(let i=0;i<goal_num;++i)
		{
			if(goalSignElements[i].parentNode.id=="app-old")
			{
				goalSignElement=goalSignElements[i];
				break;
			}
		}
		goalSignElement.innerHTML=new_sign;
	}
    //
    function allNum(s)
    {
    	var f=1,siz=s.length;
    	//
    	for(let i=0;i<siz;++i)
    	{
    		if(isNaN(s[i]))
    		{
    			f=0;
    			break;
			}
		}
		//
		if(f)
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
})();