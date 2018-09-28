//配置页面布局
$(function(){

	//页面可视区域剩下的高度
	var h = $(window).innerHeight()-$(".header").height();
	$(".screen").height(h).children().find("li").height(h);
	
	
	//获取当前页面的地址栏
	var pageHash = window.location.hash.slice(1);
	console.log(pageHash)
	//如果存在哈希值，滑动到指定屏幕
	if(pageHash){
		$(".screen>ul").animate({"top":$(".screen").height()*-pageHash},800,"elasticOut",function(){
			flag = true;
		})
	}
	
	//多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	var screenIndex = 0;
	//节流阀
	var flag = true;
	MouseWheel($(document)[0],function(e,down){
		if(count > 1){
			//滚轮向上，页面向下
			if(down){
				console.log(count,screenIndex,flag)
				//如果当前屏数没到第一屏，允许滑动
				if(screenIndex > 0){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex--;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},800,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}else{
				console.log(count,screenIndex,flag)
				
				//如果当前屏数没到最后一屏，允许滑动
				if(screenIndex < $(".screen li").length-1){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex++;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},800,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}
		}
		count++;
	})
	
	var timer1 = null;
	var pic = 0;
	var xh = 0;
	$(".see>img:eq(0)").clone(true).appendTo(".see");
	/*声明阀值*/
	var flag = true;
	//点击事件
	$(".section>.arrow>.right").click(function(){
		if(flag){
			play();
			flag = false;
		}	
	})
	$(".section>.arrow>.left").click(function(){
		if(flag){
			if(pic==0){
				$(".screen-one>.section>.see").css("left","-5400px")
				pic = 6;
			}
			pic--;
			$(".screen-one>.section>.see").animate({"left":-900*pic,},500,function(){flag = true});
			if(xh==0){
				xh=6;
			}
			xh--;
			flag = false;
		}
		console.log($(".section>.arrow>.left"))
	})

	timer1 = setInterval(play,2000);
		$(".section").on({
		"mouseover":function(){$(".arrow").show(),
								clearInterval(timer1)},
		"mouseout":function(){$(".arrow").hide(), 
								clearInterval(timer1),
        						timer1 = setInterval(play,2000)}
	})
	function play(){
		if(pic>=6){
			$(".screen-one>.section>.see").css("left",0)
			pic = 0;
		}
		pic++;
		$(".screen-one>.section>.see").animate({"left":-900*pic},500,function(){flag = true});
		if(xh==6){
			xh=0;
		}
		xh++;
	}	
})
