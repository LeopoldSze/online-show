$(function(){
	var num = 0;                                                          //座位选中的个数
	var price = 0;														  //总价
	$(".m-seat span").attr({"i": "0" });                                  //设置座位属性：座位点击次数
	
	//座位点击函数
	$(".m-seat span").click(function(){
		$(this).attr({"i": Number($(this).attr("i"))+1});                 //座位点击次数更新
		//奇数次点击，座位被选中；偶数次点击，座位取消
		if($(this).attr("i")%2==0){
			$(this).removeClass("active");
			$(this).attr({"sel":"no"});
		}
		else{
			$(this).addClass("active");
			$(this).attr({"sel":"selected"});
		}
		
		//判断座位是否被选中
		if($(this).attr("sel")=="selected"){
			num++;
			price += 25;
			nums.value = num;
		}else{
			num--;
			price -= 25;
			nums.value = num;
		}
		
		totalprice.value = "￥" + price;								//总价格输出	
		
		//座位信息输出
		if(num<=4){
			$("#seats").text($("#seats").text()+((Number($(this).parent().index())-1)+" 排"+(Number($(this).index())+1)+" 座, "));
		}
		else{
			$("#seats").text("每人最多购买4张, 超出最大张数!");
		}
		
	})
	
	//座位信息输出
	for( var k=1;k<=$(".m-seat span").length-3; k++){
		if($(".m-seat span").attr("sel")=="selected"){
			$("#seats").text(((Number($(this).parent().index())-1)+" 排，"+(Number($(this).index())+1)+" 座"));
		}else{
			$("#seats").text();
		}
	}
	
//	alert($(".m-seat span").length-3);
	//时间段选择
	$("#clock>input").click(function(){
		$(this).addClass("active2").siblings().removeClass("active2");
	})
	
	
})



