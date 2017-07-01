window.onload=function(){

    document.getElementById("submit").onclick=function() {
        ajaxRequest("post", "../php/login.php", true, {
            "user": document.getElementById("txt").value,
            "pwd": document.getElementById("pwd").value
        }, function (data) {
            /**
             * {"user":"h51615","pwd":"123456"}
             * 向服务器传递参数，上面的两个key不可改变。
             */
            console.log(data)
            data=data.replace(/\s+/g,"");
            console.log(data)
            if(data!="0") {

                window.location.href="../html/index.html?user="+document.getElementById("txt").value;
               // document.getElementById("tip1").innerHTML = "欢迎："+data+"，登录";
            }else{
                alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
            }
        });
    }
}
/*
var _url = window.location.search.match(/\w+=\w+/g);
var uName=_url[0].match(/\w+/g)[1];
施改改 18:49:48
if(/^\w{6,20}$/g.test( $("#user")[0].value)&&/\w{6,20}/g.test($("#pwd")[0].value)&&/^1[3 4 5 7 8]\d{9}$/g
        .test($("#phoneNum")[0].value)){
    if($("#pwd")[0].value==$("#sure")[0].value) {
        ajaxRequest("post", "../php/regist.php", true, {
            "account": $("#user")[0].value,
            "secret": $("#pwd")[0].value,
            "mobile": $("#phoneNum")[0].value
        }, function (data) {
            data = data.replace(/\s+/g, "");
            if (data == "0") {
                alert("注册失败！！");
            } else{
                open();
            }
        });*/







/*
*  // 注册接口的正则判断
 var _txt=$("#txt").val();  //事件中的value值不能声明，因为其为异步
 var _psd=$("#psd").val();  //同上
 var _surePsd=$("#sure_psd").val();
 var _txtRep2=/^1[3578]\d{9}$/g;  //当输入的电话号码格式正确时,前面加非！，为号码格式不正确
 var _psdRep=/^\w{6,20}$/g;  //当输入的密码是对的时候
 //点击文本框的的聚焦的失焦，判断是否让后面的提示语出现
 // 判断手机号的正则
 $("#txt").focus(function(){
 $(".i1").css("display","block");
 $(".i11").css("display","none");
 $(".i2").css("display","none");
 });
 $("#txt").blur(function(){
 if($("#txt").val()==""){
 $(".i2").css("display","block");
 $(".i11").css("display","none");
 $(".i1").css("display","none");
 }else{
 if(!(_txtRep2.test($("#txt").val()))&&!($("#txt").val()=="")){
 $(".i11").css("display","block");
 $(".i1").css("display","none");
 $(".i2").css("display","none");
 }else{
 $(".none1").css("background","url(../img/u_shouye/duihao.png)")
 $(".i11").css("display","none");
 $(".i1").css("display","none");
 $(".i2").css("display","none");
 }
 }
 })
 //判断密码
 $("#psd").focus(function(){
 $(".i3").css("display","block");
 $(".i4").css("display","none");
 $(".i33").css("display","none");
 })
 $("#psd").blur(function(){
 if($("#psd").val()==""){
 $(".i4").css("display","block");
 $(".i3").css("display","none");
 $(".i33").css("display","none");
 }else{
 if(!(_psdRep.test($("#psd").val()))&&!($("#psd").val()=="")){
 $(".i4").css("display","none");
 $(".i3").css("display","none");
 $(".i33").css("display","block");
 }else{
 $(".none2").css("background","url(../img/u_shouye/duihao.png)")
 $(".i4").css("display","none");
 $(".i3").css("display","none");
 $(".i33").css("display","none");
 }
 }
 })
 //判断两次输入的密码是否一致
 $("#sure_psd").focus(function(){
 if($("#sure_psd").val()==""){
 $(".i5").css("display","block");
 $(".i6").css("display","none");
 $(".i55").css("display","none");
 }else{
 if($("#sure_psd").val()==$("#psd").val()){
 $(".none3").css("background","url(../img/u_shouye/duihao.png)")
 $(".i5").css("display","none");
 $(".i6").css("display","none");
 $(".i55").css("display","none");
 }else{
 $(".i5").css("display","none");
 $(".i6").css("display","block");
 $(".i55").css("display","none");
 }
 }
 })
 $("#sure_psd").blur(function(){
 if($("#sure_psd").val()==""){
 $(".i5").css("display","none");
 $(".i6").css("display","block");
 $(".i55").css("display","none");
 }else{
 if($("#sure_psd").val()==$("#psd").val()){
 $(".none3").css("background","url(../img/u_shouye/duihao.png)")
 $(".i5").css("display","none");
 $(".i6").css("display","none");
 $(".i55").css("display","none");
 }else{
 $(".i5").css("display","none");
 $(".i6").css("display","block");
 $(".i55").css("display","none");
 }
 }
 })

 * */