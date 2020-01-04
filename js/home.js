//回到顶部
		onscroll = function (){ 
		   	var topobj = document.getElementById("top");     	 //获取对象top
		  	var st = document.documentElement.scrollTop;         //获取屏幕滚动高度
		  	document.title = st;                             
			
			//判断滚动条件,滚动高度大于150px,图标显示,否则隐藏
		  	if( st >= 150 ){ 		
		  		topobj.style.display = 'block';
		  	}
		  	else{
		  	   	topobj.style.display = 'none';
		  	};

			 //图标点击函数
		  	topobj.onclick = function (){
		  		 var v = -40;
		  		//设置定时器对象
		  		var sobj = setInterval(function (){
		  			st += v;
		  			if( st <= 0 ){
		  				st = 0;
		  				clearInterval(sobj);     				//滚动高度为0时清除定时器
		  			};
		  			document.documentElement.scrollTop = st;  	//更新屏幕滚动高度
		  		}, 10);
		  	};
		  };



//轮播图
	var a = 0;
	var timer = null;
	//切换函数
	slide = function(){
		$(".m-pics img").eq(a).fadeIn(1500).siblings().hide();
		$(".buttons span").eq(a).addClass("on").siblings().removeClass("on");
		$(".u-intr").eq(a).addClass("active").siblings().removeClass("active");
	}
	//自动播放函数
	autoplay = function(){
		//定时器
		 timer = setInterval(function(){
			(a<5)?(a++):(a = 0);
			slide();
		},3000);	
	}
	
	autoplay();
	
	//鼠标移入移出函数
	$(".m-slide").hover(function(){
		clearInterval(timer);            //鼠标移入	清除定时播放
	},function(){
		autoplay();                      //鼠标移除，自动播放
	});
	
	//下标点击函数
	$(".buttons span").click(function(){
		a = $(this).index();
		slide();
	})
	
	
	//左右点击切换函数
	$("#pre").click(function(){
		(a>0)?(a--):(a = 4);
		slide();
	});
	$("#next").click(function(){
		(a<5)?(a++):(a = 0);
		slide();
	})







//播放区
	$("#btn1").attr({"times":"0"});                								  //按钮点击次数属性
	$("#btn1").click(function(){
		$(this).attr({"times": Number($(this).attr("times"))+1});                 //按钮点击次数更新
		if($(this).attr("times")%2==0){
				$(".m-video").fadeOut(1500);
			}
			else{
				$(".m-video").fadeIn(1500);
			}
	});
	//播放函数
	$("#btn2").click(function(){
		$("#video").trigger('play');
	});
	//停止函数
	$("#btn3").click(function(){
		$("#video").trigger('pause');
	});
	//隐藏函数
	$("#btn4").click(function(){
		$(".m-video").animate(
			{width: '0px', left: '0px'},2500);
		$(".m-video").fadeOut(1);	
	});





//推荐区
	$(".m-about img").mouseenter(function(){
		$(this).animate({width: '300px',height: '380px'},500);
	});
	$(".m-about img").mouseleave(function(){
		$(this).animate({width: '172px', height: '259px'});
	})
	
//闪电特效	
	var lightobj = document.getElementById("light");           		//获取canvas元素
	var ctx = lightobj.getContext("2d");					   		//创建context对象
	var LightWidth = lightobj.width;
	var LightHeight = lightobj.height;
	
	//定义坐标
	var x = LightWidth / 10;
	var y = 0;
	light = function() {
	    var r = 0;
	    ctx.beginPath();											//起始一条路径
	    ctx.moveTo(x, y);                                      		//线条开始坐标
	    r = Math.floor(Math.random() * 15);							//随机偏移量
	    if (r >= 3) {
	        x += r;
	    } else {
	        x -= r;
	    }
	    y += Math.floor(Math.random() * 15) ;	
	
	    ctx.lineTo(x, y);											//线条结束坐标
		ctx.closePath();											//创建从当前点回到起始点的路径
	    ctx.lineWidth = 1.5;
	    ctx.strokeStyle = "rgba(255, 255, 0, 0.7)";
	    ctx.stroke();                                           	//绘制已定义的路径
	    
		//判断纵坐标是否超出
	    if (y > LightHeight) {
	        ctx.clearRect(0, 0, LightWidth, LightHeight);           //清除矩形像素
	        x = LightWidth / 10;
	        y = 0;
	    }
	    requestAnimationFrame(light);                               //回调函数接口,调用动画帧
	};
	  
	light();
