// Message.js
$.extend({message:function(e){var n={title:"",message:" 操作成功",time:"3000",type:"success",showClose:!0,autoClose:!0,onClose:function(){}};"string"==typeof e&&(n.message=e),"object"==typeof e&&(n=$.extend({},n,e));var i,o,s,t=n.showClose?'<div class="c-message--close">×</div>':"",a=""!==n.title?'<h2 class="c-message__title">'+n.title+"</h2>":"",c='<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--'+n.type+'"></i><div class="el-notification__group">'+a+'<div class="el-notification__content">'+n.message+"</div>"+t+"</div></div>",m=$("body"),d=$(c);o=function(){d.addClass("slideOutRight"),d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){s()})},s=function(){d.remove(),n.onClose(n),clearTimeout(i)},$(".c-message").remove(),m.append(d),d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass("messageFadeInDown")}),m.one("click",".c-message--close",function(e){o()}),n.autoClose&&(i=setTimeout(function(){o()},n.time))}});
