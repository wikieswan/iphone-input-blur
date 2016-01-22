;(function($){
	if(typeof $ === 'undefined'){
		throw new Error('you should include jquery.js or zepto.js before');
		return false;
	}
	var cacheInput = null;
	var timer = null;
	if(!isApple()){
		return false;
	}
	$(document).on('focus','input',function(e){
		cacheInput = e.target;
	})
	$(document).on('focus','textarea',function(e){
		cacheInput = e.target;
	})
	$(document).on('touchend',function(e){
		if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){
			if(cacheInput!==null){
				//delay 300ms hide keyboard 
				timer = setTimeout(function(){
					cacheInput.blur();
					clearTimeout(timer);
				},300);
			}
		}
	})
	function isApple(){
		var ua = navigator.userAgent.toUpperCase();
		var 
		  ipad = ua.indexOf('IPAD')>-1,
	      ipod = ua.indexOf('IPOD')>-1,
	      iphone = ua.indexOf('IPHONE')>-1 ;
	    return   ipad || ipod || iphone ;
	}
})($)