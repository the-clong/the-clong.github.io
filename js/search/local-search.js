$(function(){function e(){var e;$("body").css({width:"100%",overflow:"hidden"}),$("#local-search .search-dialog").css("display","block"),$("#local-search-input input").focus(),$("#search-mask").fadeIn(),a||(e=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),e=$("#local-search-input input")[0],a=$("#local-hits")[0];e.addEventListener("input",function(){var d,u='<div class="search-result-list">',p=this.value.trim().toLowerCase().split(/[\s]+/);a.innerHTML="",this.value.trim().length<=0?$(".local-search-stats__hr").hide():(d=0,t.forEach(function(e){var a=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var s,t,c,i,n=e.title.trim().toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),l=e.url.startsWith("/")?e.url:GLOBAL_CONFIG.root+e.url,o=-1,h=-1;""!==n||""!==r?p.forEach(function(e,t){s=n.indexOf(e),o=r.indexOf(e),s<0&&o<0?a=!1:(o<0&&(o=0),0===t&&(h=o))}):a=!1,a&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=h&&(c=h+100,(e=h-30)<0&&(e=0),0===e&&(c=100),c>t.length&&(c=t.length),i=t.substring(e,c),p.forEach(function(e){var t=new RegExp(e,"gi");i=i.replace(t,'<span class="search-keyword">'+e+"</span>"),n=n.replace(t,'<span class="search-keyword">'+e+"</span>")}),u+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title">'+n+"</a>",d+=1,$(".local-search-stats__hr").show(),""!==r&&(u+='<p class="search-result">'+i+"...</p>")),u+="</div>")}),0===d&&(u+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),u+="</div>",a.innerHTML=u,window.pjax&&window.pjax.refresh(a))})}}),a=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(s(),document.removeEventListener("keydown",e))})}function t(){$("a.social-icon.search").on("click",e),$("#search-mask, .search-close-button").on("click",s)}var a=!1,s=function(){$("body").css({width:"",overflow:""}),$("#local-search .search-dialog").css({animation:"search_close .5s"}),setTimeout(function(){$("#local-search .search-dialog").css({animation:"",display:"none"})},500),$("#search-mask").fadeOut()};t(),window.addEventListener("pjax:complete",function(){$("#local-search .search-dialog").is(":visible")&&s(),t()})});