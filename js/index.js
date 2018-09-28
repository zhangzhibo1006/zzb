window.onload = function(){
	
	$(".header").load("header.html");
	$(".footer").load("footer.html");
	//banner 轮播图
	
	
	var lis = $(".banner>ul>li");
	var circles = $(".banner-change .middle>li");
	var n = 0;
	
	//进来先动一次
	bannerChange(0)
	
	$(".banner .next").on("click",function(){
		if(n<lis.length-1){
			n++;
		}else{
			n = 0;
		}
		bannerChange(n)
	})
	$(".banner .prev").on("click",function(){
		if(n>0){
			n--;
		}else{
			n = lis.length-1;
		}
		bannerChange(n)
	})
	
	circles.on("click",function(){
		n = $(this).index();
		bannerChange(n)
	})
	//切换li
	function bannerChange(index){
		lis.eq(index).fadeIn(200).siblings().fadeOut(200);
		circles.eq(index).addClass("now").siblings().removeClass("now");
		bannerImgChange(lis.eq(index));
	}
	//切换li内的二级效果
	function bannerImgChange(obj){
		obj.find(".img1").show().addClass("animated fadeInLeft");
		console.log(obj.find(".img1"))
		setTimeout(function(){
                obj.find(".img2").show().addClass("animated  bounceInRight");
                obj.find(".img3").show().addClass("animated  fadeIn");
            },300);
	}
	
	
	
	
//百叶窗
		$(".main-two .section>li").hover(function(){
		$(this).stop().animate({"height":500}).siblings().stop().animate({"height":100})
		
	},function(){
		$(".main-two .section>li").stop().animate({"height":200})
	})
		
	
    /*
    //图片预加载
    	var imgs = document.getElementsByTagName("img");
		var oBody = document.getElementsByTagName('body')[0];
		//	console.log(oBody.offsetParent);   null

		//为每一张图片添加自定义属性
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].setAttribute('data-src', imgs[i].src);
			imgs[i].src = '';
		}
		// 事件驱动程序
		window.onscroll = function () {

			//滚动高度
			var bodyScroll = document.body.scrollTop || document.documentElement.scrollTop;
			//可视区高度
			var bodyHeight = document.documentElement.clientHeight;
			var maxHeight = bodyScroll + bodyHeight;

			for (var i = 0; i < imgs.length; i++) {
				//如果条件满足，证明图片即将出现在可视区里
				if (offset(imgs[i]) < maxHeight - 70) {
					imgs[i].src = imgs[i].getAttribute("data-src");
				}
			}
		}
    // 封装获取图片顶部的距离
		function offset(obj) {
			var top = 0;
			// 如果当前元素具有定位的父级，那就加上父级的offsetTop
			while (obj.offsetParent) {
				top += obj.offsetTop;
				obj = obj.offsetParent;
			}
			return top;
		}*/
}
