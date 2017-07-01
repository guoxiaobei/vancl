$(function () {
    //*********************放大镜***************************
    //鼠标放到主图 放大区出现并放大
    $(".bowl").hover(
        function () {
            $("#tool").css("display", "block");
            $(".bigimg").css("display", "block")
        },
        function () {
             $("#tool").css("display", "none");
            $(".bigimg").css("display", "none")
        });
    //鼠标挪到slide上 主图的图片切换
    $.getJSON("../json/lunbo.json", function (data) {
        for (var k in data["images2"]) {
            $(".slide").append("<img src='../images/shirt" + data["images2"][k] + ".jpg'>")
        }
        $(".slide img").mouseover(function () {
            $(".bowl img")[0].src = $(this)[0].src;
            $(".bigimg img")[0].src = $(this)[0].src;
        })
        $(".slide img").hover(
            function () {
                $(this).css("borderColor", "#b11916");
            },
            function () {
                $(this).css("borderColor", "#B4B4B4");
            });

    })

    //放大区图片的定位
    $(".bowl").mousemove(function (e) {
        var _top = document.documentElement.scrollTop || document.body.scrollTop;
        var _left = document.documentElement.scrollLeft || document.body.scrollLeft;
        console.log(e.clientX , _left,this.offsetLeft,e.clientY , _top,this.offsetTop);
        if (e.clientX + _left-this.offsetLeft-$(".wrap").offset().left >= 50 && e.clientX + _left-this.offsetLeft-$(".wrap").offset().left <= 350) {
            $("#tool")[0].style.left = e.clientX - $(".bowl").offset().left - 50 + _left + "px";
            $(".bigimg img")[0].style.left = -4 * (e.clientX - $(".bowl").offset().left - 50 + _left) + "px";
        }else{
            if(e.clientX + _left-this.offsetLeft-$(".wrap").offset().left <= 50){
                $("#tool")[0].style.left="0px";
            }
            if(e.clientX + _left-this.offsetLeft-$(".wrap").offset().left >= 350){
                $("#tool")[0].style.left="300px";
            }
        }
        if (e.clientY + _top-this.offsetTop-313 >= 50 && e.clientY + _top-this.offsetTop-313 <= 350) {
            $("#tool")[0].style.top = e.clientY - $(".bowl").offset().top + _top - 50 + "px";
            $(".bigimg img")[0].style.top = -4 * (e.clientY - $(".bowl").offset().top - 50 + _top) + "px";
        }else{
            if(e.clientY + _top-this.offsetTop-313 <= 50){
                $("#tool")[0].style.top="0px";
            }
            if(e.clientY + _top-this.offsetTop-313 >=350){
                $("#tool")[0].style.top="300px";
            }
        }

    })
    //****************************slide****************************//
    $(".down").click(function () {
        $(".slide").animate({
            "top": "-250px",
        }, 1000);
        $(".down").css("backgroundPosition", "-3270px 0")
        $(".upper").css("backgroundPosition", "0 -136px")

    });
    $(".upper").click(function () {
        $(".slide").animate({
            "top": "-8px",
        }, 1000);
        $(".down").css("backgroundPosition", "0 -136px")
        $(".upper").css("backgroundPosition", "-3270px 0")
    });
    /********************放大镜右侧************************************/

    // for (var i = 0; i < $(".ul li").length; i++) {
    //     $(".ul .span").eq(i).css("backgroundPosition", "0 " + (-36 * i) + "px")
    // }





    $(".ul li").click(function () {
       var _index=$(this).index();
      // console.log(_index)
            var oid=$(this).get(0).id
       $(".ul em:eq("+_index+")").addClass("colorHoverok");
       $(".ul em").not($(".ul em:eq("+_index+")") ).removeClass("colorHoverok");


       $(".ul li:eq("+_index+")").addClass("Li");
       $(".ul li").not($(".ul li:eq("+_index+")") ).removeClass("Li");
       // $(".ul li:eq("+_index+")").css("border","2px solid #a10000")
       // $(".ul li").not(this).css("border","1px solid #B4B4B4")
        console.log(oid)
        $.getJSON("../json/detail.json",function (data) {
            $("#addToShoppingCar").click(function () {
                for (var k in data) {
                    console.log(k)
                    if(oid==k){
                        Cookie.setCookie(oid, 1, "/", new Date(new Date().getTime() + 7 * 24 * 3600 * 1000));
                    }
                }
                window.location.href="../html/shoppingcar.html";
            })

        })
    })

$.getJSON("../json/detail.json",function (data) {
    var _pri="";
    var _tu="";
    for(var k in data["1"]){
        _pri="<strong class='pri'>"+data["1"]["price"]+"</strong>"
        _tu="<p class='P'>"+data["1"]["size"]+"</p>"+"<p class='P'>"+data["3"]["size"]+"</p>"+"<p class='P'>"+data["2"]["size"]+"</p>"
    }
    $(".pR").append(_pri)
    $(".P").append(_tu)

})




       
        // window.location.href="../html/shoppingcar.html";
 

  













})