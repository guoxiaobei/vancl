$(function () {

//吸顶盒
    function stable() {
        document.body.onmousewheel = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop)
            if (scrollTop > 287) {
                $("#fixed").css({
                    "position": "fixed",
                    "top": "0px",
                    "left": "112px",
                    "z-index": "9999"
                })
            }
            if (scrollTop < 287 && scrollTop > 0) {
                $("#fixed").css({
                    "position": "static"
                })
            }
        }
        /*$(window).scroll(function () {
         var _top=$(window).scrollTop();
         if(_top>135){
         $(nav).addClass("nav");
         }
         else{
         $(nav).removeClass("nav");
         }
         })*/
    }

    stable();

//list图片
    /* $.getJSON("../json/list.json", suggest)
     function suggest(_data) {
     for (var k in _data) {
     for (i = 0; i < _data[k].length; i++) {
     var newDiv = '<div class="top"><a class="topa" href="###"><img src="../images/' + _data["img"][i] + '.jpg"/>'
     + '</a><div class="bottom"><a id="bottoma" href="###"><span>【预售】</span>' + _data["decribe"][i] + '</a><p>售价 ￥<span>' + _data["price"][i] + '</span>      预售价 ￥<span>' + _data["PrePrice"][i] + '</span></p></div>'
     + '</div>'
     $(".Tshirt").append(newDiv)
     }
     }
     }*/

//点击返回顶部
    $("#backtop").click(function () {
        /* var _top= document.documentElement.scrollTop  || document.body.scrollTop;
         _top=0;
         document.body.scrollTop=_top;*/
        $(window).scrollTop(0)
    })
//瀑布流

    var _s = 0, _e = 30;
    createElement(_s, _e);
    function createElement(_s, _e) {
        $.getJSON("../json/list.json", function (_data) {
            var newDiv = "";
            var str = "";
            for (i = _s; i < _e ; i++) {
                console.log(i)
                str = '<div class="hide">'
                    + '<div class="tip1"> <img src="../images/' + _data["img"][i] + '.jpg" alt=""></div>'
                    + '<div class="tip2"> <span>' + _data["decribe"][i] + '</span> <em>产品编号：' + _data["ProNumber"][i] + '</em> </div>'
                    + '<ul class="tip3"> <li> <strong>售价：' + _data["price"][i] + '</strong> </li> <li>市场价：<del>' + _data["PrePrice"][i] + '</del> <span style="color: #333333"></span> </li> </ul>'
                    + '<p class="tip4"> <span>暂无评论</span> </p>'
                    + '<div class="tip5"></div> '
                    + '<div>'
                newDiv = '<div class="top"><a class="topa" href="###"><img src="../images/' + _data["img"][i] + '.jpg"/>'
                    + '</a><div class="bottom"><a id="bottoma" href="###"><span>【预售】</span>' + _data["decribe"][i] + '</a><p>售价 ￥<span>' + _data["price"][i] + '</span>      预售价 ￥<span>' + _data["PrePrice"][i] + '</span></p></div>'
                    + str
                    + '</div>'
                // $("#content .wrap" ).append('<div id="Tshirt">'+newDiv+'</div>')
                $("#content #Tshirt").append(newDiv)
            }
        })

       /* function sea() {
            /!**
             *
             lick*  $.getJSON("../json/list.json", function (_data) {
            var newDiv = "";
            var str = "";
            for (i = _s; i < _e ; i++) {

            //c(if(_data["price"][i]>a$$ _data["price"][i]<b)){
            if(data["detail"][i].indexof("衬衫")){
            }
             str = '<div class="hide">'
                    + '<div class="tip1"> <img src="../images/' + _data["img"][i] + '.jpg" alt=""></div>'
                    + '<div class="tip2"> <span>' + _data["decribe"][i] + '</span> <em>产品编号：' + _data["ProNumber"][i] + '</em> </div>'
                    + '<ul class="tip3"> <li> <strong>售价：' + _data["price"][i] + '</strong> </li> <li>市场价：<del>' + _data["PrePrice"][i] + '</del> <span style="color: #333333"></span> </li> </ul>'
                    + '<p class="tip4"> <span>暂无评论</span> </p>'
                    + '<div class="tip5"></div> '
                    + '<div>'
                newDiv = '<div class="top"><a class="topa" href="###"><img src="../images/' + _data["img"][i] + '.jpg"/>'
                    + '</a><div class="bottom"><a id="bottoma" href="###"><span>【预售】</span>' + _data["decribe"][i] + '</a><p>售价 ￥<span>' + _data["price"][i] + '</span>      预售价 ￥<span>' + _data["PrePrice"][i] + '</span></p></div>'
                    + str
                    + '</div>'
                // $("#content .wrap" ).append('<div id="Tshirt">'+newDiv+'</div>')
                $("#content #Tshirt").html(newDiv)
            // }
                console.log(i)


            }
             *!/

        }*/
    }

    function checkImgComplete(_s) {
        var _timer = 0;
        var _Tshirt = document.getElementById("Tshirt");

        function checking() {
            window.clearTimeout(_timer);
            var _complete = true;
            for (var i = _s - 1; i < _Tshirt.children.length; i++) {
                if (!_Tshirt.children[i].children[0].complete) {//complete：img标签自带的一个属性。图片加载完成该属性自动变为true，否则false
                    _complete = false;
                    break;
                } else {
                    _timer = setTimeout(checking, 30);
                }
            }
        }

        checking();
    }


    function isBottom() {
        var _h = document.documentElement.offsetHeight || document.body.offsetHeight;
        var s_t = document.body.scrollTop || document.documentElement.scrollTop;//获取滚动条滚动距离的时候使用document.body.scrollTop
        var c_t = document.documentElement.clientHeight;
        console.log(_h,s_t,c_t)
        if (_h <= s_t + c_t && _e < 120) {
            _s = _e + 1;
            _e = _e + 30;
            createElement(_s, _e);
        }
    }

    window.onscroll = function () {
        checkImgComplete();
        isBottom();
    }

//鼠标划过有图片框出现
    /* $.getJSON("../json/list.json", function (_data) {
     var str=""
     for(i=0;i<120;i++) {
     str = '<div class="tip1"> <img src="../images/' +_data["img"][i] + '.jpg" alt=""></div>'
     + '<div class="tip2"> <span>' + _data["decribe"][i] + '</span> <em>' + _data["ProNumber"][i] + '</em> </div>'
     + '<ul class="tip3"> <li> <strong>售价：' + _data["price"][i] + '</strong> </li> <li>市场价：<del>' + _data["PrePrice"][i] + '</del> <span style="color: #333333"></span> </li> </ul>'
     + '<p class="tip4"> <span>暂无评论</span> </p>'
     + '<div class="tip5"></div> '
     $(".contents").append('<div class="hide">'+str+'</div>');
     //console.log(str)
     }

     $("#Tshirt .top").mouseover(function () {
     var index=$(this).index();
     console.log($(this).offset().left);
     var _top=$(this).offset().top;
     if(($(this).offset().left)==112){
     $(".contents .hide:eq('"+index+"')").css({
     "position":"absolute",
     "left":"355px",
     "top":_top+"px",
     "display":"block"
     })
     }
     })
     })*/

    function aaaa() {
        $("#Tshirt .top").mouseover(function () {
            var index = $(this).index();
            console.log(index)
            $(".top .hide:eq('" + index + "')").css({
                "display": "block"
            })
        })
        $("#Tshirt .top").mouseleave(function () {
            var index = $(this).index();
            $(".top .hide:eq('" + index + "')").css({
                "display": "none"
            })
        })
    }



    /***************分页****************************************/
    var _button = document.getElementById("button")
        boundEvent(_button);
        function changeButtonText(_button, _current) {
            var _button = document.getElementById("button")
            var _length = _button.children.length;
            if (_current === _button.children[_length - 1]) {
                //console.log(_button.children[0])
                if (parseInt(_current.innerText) < 14) {
                    for (var i = 0; i < _length; i++) {
                        _button.children[i].innerText = parseInt(_current.innerText) - 2 + i;
                        if (parseInt(_button.children[i].innerText) > 14) {
                            _button.children[i].style.display = "none";
                        }
                    }
                }
            }
            if (_current === _button.children[0]) {
                var _value = parseInt(_current.innerText);
                if (_value - 2 > 0) {
                    for (var i = 0; i < _length; i++) {
                        _button.children[i].innerText = _value - 2 + i;
                        _button.children[i].style.display = "block";
                    }
                }
            }

        }

        function boundEvent(_button) {
            var _button = document.getElementById("button")
            for (var i = 0; i < _button.children.length; i++) {
                _button.children[i].onclick = function () {
                     //this.style.cssText="background:red"
                   //this.style.backgroundColor="red";
                     $(this).css("background","red")
                     $(this).siblings().css("background","#fff")


                    var _Tshirt = document.getElementById("Tshirt");
                    _Tshirt.innerHTML = "";
                    //loadImage((parseInt(this.innerText) - 1) * 120, parseInt(this.innerText) * 120);
                    changeButtonText(_button, this);
                }

            }
        }





})









