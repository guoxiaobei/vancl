$(function () {
    $(".product").append("<div>数量:<span class='woshishuliang'></span></div>" +
        "<div>总价：<span class='woshizongjia'></span></div>")
    function createItem(){
        var _cookie=Cookie.readCookie();
        //console.log(_cookie)
        var _data=_cookie.split(/;\s*/g);
       // console.log(_data)
        var _item=""
        var _temp=null;
        $.getJSON("../json/detail.json",function (data) {
            for(var i=0;i<_data.length;i++) {
                if (_cookie.length != 0) {
                    _temp = _data[i].split("=");
                    //console.log(_temp[0])
                    console.log(typeof Number(data[_temp[0]]["price"].match(/\d+/)))
                    _item += '<ul class="import"><li style="margin-left: 20px"><input type="checkbox" id="checkbox"></li>'
                        + '<li><img src="../images/' + data[_temp[0]]["img"] + '.jpg"></li>'
                        + '<li><a href="###" >' + data[_temp[0]]["describe"] + '</a></li>'
                        + '<li><span>' + data[_temp[0]]["size"] + '</span></li>'
                        + '<li><span>' + data[_temp[0]]["price"] + '</span></li>'
                        + '<li><b class="lef" >-</b><input class="cen" type="text" value="'+_temp[1]+'"/><b class="rig">+</b></li>'
                        + '<li><span>-</span></li>'
                        + '<li><span class="zongjia" >' + Number(data[_temp[0]]["price"].match(/\d+/))*parseInt(_temp[1]) + '</span></li>'
                        + '<li id="find"><p class="' + _temp[0] + '">删除</p></li>'
                        +'</ul>'
                    //console.log(data[_temp[0]]["img"])
                }


            }
            $("#proall").html(_item);

            //aaa删除按钮
            var _spans=document.getElementById("proall").getElementsByTagName("p");
            var _rig = document.getElementsByClassName("rig");
            var _cen = document.getElementsByClassName("cen");
            var _lef = document.getElementsByClassName("lef");
            var _zongjia  = document.getElementsByClassName("zongjia");
            /**
             * 总数量，总价
             */
            var woshishuliang = 0;
            var woshizongjia = 0;
            for(var bbb=0;bbb<_spans.length;bbb++){
                woshishuliang += Number(_cen[bbb].value);
                woshizongjia += Number(_zongjia[bbb].innerHTML);
            }
            $(".woshishuliang").html(woshishuliang);
            $(".woshizongjia").html(woshizongjia);





            for(var t=0;t<$("#proall .import").length;t++){
               // console.log($("#proall .import").length)
                _rig[t].index = t;
                _lef[t].index = t;
                _spans[t].onclick=function(){
                    if(window.confirm("是否删除？")){
                        Cookie.deleteCookie(this.className,"/");
                        createItem();
                    }
                }
                _rig[t].onclick = function(){
                    var cont = _cen[this.index].value;
                    cont++;
                    Cookie.setCookie(_spans[this.index].className,cont,"/",new Date(new Date().getTime() + 7*24*3600*1000))
                    createItem();
                }
                _lef[t].onclick = function(){
                    var cont = _cen[this.index].value;
                    cont--;
                    if(cont<0){
                        cont=0;
                    }
                    Cookie.setCookie(_spans[this.index].className,cont,"/",new Date(new Date().getTime() + 7*24*3600*1000))
                    createItem();
                }
            }



           // eeeee   console.log($("#proall .import").length) 删除按钮到此结束















        })//getJSON到此结束
    }
    createItem();

    //数量加减
    function num(){

        var aaa = 0;
            $(".lef").click(function () {
                aaa++;
                $(".cen").val(aaa);
            })
            $(".rig").click(function () {
                aaa--;
                $(".cen").val(aaa);
            })
        //console.log($(".rig"))
  }
        num();


//选择 全选
    var _all=document.getElementById("all-ckb-top");
    var _boxes=document.getElementById("proall").getElementsByTagName("input");
    _all.onclick=function(){
        for(var i=0;i<_boxes.length;i++){
            console.log(_boxes.length)
            if(this.checked){
                _boxes[i]["checked"]=true;
            }else{
                _boxes[i]["checked"]=false;
            }
        }
    }
    for(var n=0;n<_boxes.length;n++){
        _boxes[n].onclick=function(){
            if(this.checked){
                var _flag=0;
                for(var m=0;m<_boxes.length;m++){
                    if(!_boxes[m].checked){
                        _flag=1;
                    }
                }
                if(_flag==0){
                    _all.checked=true;
                }
            }else{
                _all.checked=false;
            }
        }
    }
//选择 全选 到此结束



            //数量加减代码









})