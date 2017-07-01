// $(function(){
// 	/*************************head**********************************/ 
// 	$("#wei").hover(
// 		function(){
// 			$("#erweima").css("display","block")
// 		},
// 		function(){
// 			$("#erweima").css("display","none")
// 		}

// 		)
// 	$("#cafather").hover(
// 		function(){
// 			$("#car").css({
// 				"display":"block",
// 				"border-top":"none",


// 			}),
// 			$("#cafather").css({
// 				"background":"#fff",
// 				"color":"#b11916",
// 				"border":"1px solid #b11916",
// 				"height":"30px",

// 			}),
// 				$("#line").css({
// 				"display":"block",

// 			})
// 		},
// 		function(){
// 			$("#car").css("display","none"),
// 			$("#cafather").css({
// 				"background":"#b11916",
// 				"color":"#fff",

// 			}),
// 			$("#line").css({
// 				"display":"none",

// 			})
// 		}

// 		)
// 	})
/*****************banner************************************************/
$(function () {
    $.getJSON("../json/lunbo.json", suggest)
    function suggest(_data) {

        for (var k in _data["images"]) {
            //console.log(k)
            var _img = document.createElement("img");

            document.getElementById("img").appendChild(_img);
            _img.src = "../images/banner" + _data["images"][k] + ".jpg";

        }
        var imgs = document.getElementById("img").getElementsByTagName("img")
        //console.log(imgs)
        imgs[0].className = "imga";

        var index = 1;
        var timer = null;
        $('#dot span').eq(0).css('background', 'red')
        clearInterval(timer);
        timer = setInterval(change, 2000)
        function change() {
            if (index > $('#img img').length - 1) {
                index = 0;
            }
            if (index == -1) {
                index = $('#img img').length - 1;
            }
            $('#img img').eq(index).fadeIn().siblings().fadeOut();
            //console.log($('#img img').eq(index).fadeIn().siblings())
            $('#dot span').eq(index).css('background', 'red').siblings().css('background', '#ccc')
            index++;
        }

        $('#button1').click(function () {
            index -= 2;
            change();
            clearInterval(timer);
            timer = setInterval(change, 2000)
        })
        $('#button2').click(function () {
            change();
            clearInterval(timer);
            timer = setInterval(change, 2000)
        })
        $('#dot span').click(function () {
            index = $(this).index();
            change();
            clearInterval(timer);
            timer = setInterval(change, 2000)
        })

    }


})

/**************************search**********************************/
// $(function(){
// 		function suggest(data){
// 		//console.log(data)
// 		var _code="";
// 		for(var k in data["result"]){
// 			console.log(k)
// 			_code+="<sapn>"+data["result"][k][0]+"</span><br/>"			
// 		}
// 		$("#output").html(_code)
// 	}

// 		$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?",suggest)
// 		$("#text").on("input",function(){
// 			var _url="https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?"
// 			$.getJSON(_url,suggest),
// 			$("#output").css("display","block")


// 		})


// /*搜索框***/
// 		$("#output").mouseout(

// 			function(){

// 			$("#output").css("display","none")
// 		})


// 	})

/*********************navlist*******************************/
// $(function(){

/*$("#ul li").each(function(){
 $("#ul li").mouseenter(function(){
 $("#ul div").stop().slideDown(300,"linear",function(){})

 })

 })
 $("#ul li").each(function(){
 $("#ul li").mouseout(function(){
 $("#ul div").stop().slideUp(300,"linear",function(){})

 })

 })*/
			// $("#ul li").hover(function(){
			// 	$(this).find("div").stop().slideToggle(600)
			// })


// })


// $(function(){
// 	$("#T").mouseover(function(){
// 			$("#Tshirt").stop().slideDown(300,"linear",function(){});

// 		});
// 	$("#T").mouseout(function(){
// 			$("#Tshirt").slideUp(300,"linear",function(){});

// 		})
// 		$("#B").mouseover(function(){
// 			$("#blouse").stop().slideDown(300,"linear",function(){})

// 		}),
// 		$("#B").mouseout(function(){
// 			$("#blouse").stop().slideUp(300,"linear",function(){})

// 		})

// })


/*****************index页面里的里的列表图111**********************/
$(function () {
    var popular = [];
    $.getJSON("../json/index.json", suggest)

    function suggest(data) {
        popular = data;
        //alert(popular.length)
        for (var i = 0; i < popular.length; i++) {
            var newDiv = $('<div>'
                + '<a class="img" href="../html/detail.html"><img src="../images/' + popular[i].imgSrc + ' "/></a>'
                + '<h3><a href="###">' + popular[i].describe[0] + '&nbsp' + popular[i].describe[1] + '&nbsp' + popular[i].describe[2] + '&nbsp' + popular[i].describe[3] + '</a></h3>'
                + '<p class="p1"><span>售价:' + popular[i].price + '</span><span>&nbsp定金:' + popular[i].deposit + '</span>&nbsp预售价:<span class="presale">' + popular[i].presale + '</span></p><br/>'
                + '<p class="p2">充值购买相当于:<span class="discount">' + popular[i].discount + '</span></p>'
                + '</div>')
            $(".Shell").append(newDiv)
        }

    }

})
/****************index页面里的里的列表图222*****************************************************/
$(function () {

    $.getJSON("../json/index2.json", suggest)

    function suggest(_data) {
        var _arr=[];
        var i=0;
        for (var k in _data) {
            for (var i = 0; i < _data[k].length; i++) {
                //console.log(_arr[i])
                if (!_arr[i]) {
                    _arr[i] = "";
                }
                _arr[i] += '<div><a href="###"><img src="../images/' + _data[k][i][0] + '.jpg"/></a><h3><span>' + _data[k][i][1] + '</sapn><span id="changered">充值后相当于&nbsp;'+_data[k][i][2] + '元起</span></h3></div>';
            }

        }
       // console.log(_arr);
        $("#one").append(_arr[0])
        $("#two").append(_arr[1])
        $("#three").append(_arr[2])
        $("#four").append(_arr[3])

    }


})









//点击回到顶部
window.onload = function () {
    var oBtn = document.getElementById("blackTop")
    oBtn.onclick = function () {
        var top;
        var time = setInterval(function () {
            if (document.documentElement.scrollTop) {
                top = document.documentElement.scrollTop
            }
            else {
                top = document.body.scrollTop
            }
            var top1 = top
            if (top1 <= 0) {
                top1 = 0;
                clearInterval(time);
            }
            else {
                top1 -= 100;
            }
            document.documentElement.scrollTop = top1;
            document.body.scrollTop = top1;
        }, 5)
    }
}



   
      
      
          
            
 




























