$(function(){
	/*************************head**********************************/ 
	$(".head1").load("publichead.html",function(){
		$("#wei").hover(
		function(){
			$("#erweima").css("display","block")
		},
		function(){
			$("#erweima").css("display","none")
		}

		)
	$("#cafather").hover(
		function(){
			$("#car").css({
				"display":"block",
				"border-top":"none",
			


			}),
			$("#cafather").css({
				"background":"#fff",
				"color":"#b11916",
				"border":"1px solid #b11916",
				"height":"30px",
				
			}),
				$("#line").css({
				"display":"block",
				
			})
		},
		function(){
			$("#car").css("display","none"),
			$("#cafather").css({
				"background":"#b11916",
				"color":"#fff",
				
			}),
			$("#line").css({
				"display":"none",
				
			})
		}

	)
/**************************search**********************************/
function suggest(data){
		//console.log(data)
		var _code="";
		for(var k in data["result"]){
			//console.log(k)
			_code+="<sapn>"+data["result"][k][0]+"</span><br/>"			
		}
		$("#output").html(_code)
	}

		$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?",suggest)
		$("#text").on("input",function(){
			var _url="https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?"
			$.getJSON(_url,suggest),
			$("#output").css("display","block")
			
			
		})
	/*搜索框**/
	$("#output").mouseout(
		
				function(){

				$("#output").css("display","none")
			})


/*********************navlist*******************************/
			$("#ul li").hover(function(){
				$(this).find("div").stop().slideToggle(600)
			})
		//登录地址栏
		var _url = window.location.search.match(/\w+=\w+/g);
        //console.log(_url)
		if(_url!=null){
            var uName=_url[0].match(/\w+/g)[1];
            //console.log(uName)
            $("#appear").html("你好"+uName+"   ...退出登录  |  更换用户")
            $("#helllo").html("")
            $("#regi").html("")
		}

        $("#appear").click(function () {
            window.location.href="../html/login.html"
        })
        $(".shouye").click(function () {
            window.location.href="../html/index.html"
        })























	})





        $("#qqq").click(function () {
            alert(1)
            window.location.href="../html/list.html";
        })


})


