window.onload=function(){
    document.getElementById("submit").onclick=function() {
        if(document.getElementById("pwd").value==document.getElementById("sure").value) {
            ajaxRequest("post", "../php/regist.php", true, {
                "account": document.getElementById("txt").value,
                "secret": document.getElementById("pwd").value,
                "mobile": document.getElementById("mobile").value
            }, function (data) {
                data = data.replace(/\s+/g, "");
                if (data == "0") {
                    alert("注册失败！！");
                } else {
                    alert("恭喜！！！成功！！！");
                }
            });
        }else{
            alert("两次输入的密码不一致，请重新输入！！");
        }
    }
}