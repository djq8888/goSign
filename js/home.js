var localIP = "127.0.0.1"

function sign() {
    var name = document.getElementById('name').value
    if (name == "")
    {
        document.getElementById('name').focus();
        alert("还没输入名字呢!");
        return false
    }
    if (name[0] == " ")
    {
        document.getElementById('name').focus();
        alert("名字不能以空格开头!");
        return false
    }
    var url = "http://"+localIP+":8080/sign?name="+name;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4){
            var res = xhr.responseText;
            if( res == "error" ){
                alert("上班失败，你忘了点下班了吧！");
                return;
            }
            alert("打卡成功！")
            document.getElementById("showBox").innerHTML = res;
        }
    };
    xhr.open('get',url);
    xhr.send(null);
}

function leave() {
    var name = document.getElementById('name').value
    if (name == "")
    {
        document.getElementById('name').focus();
        alert("还没输入名字呢!");
        return false
    }
    if (name[0] == " ")
    {
        document.getElementById('name').focus();
        alert("名字不能以空格开头!");
        return false
    }
    var url = "http://"+localIP+":8080/leave?name="+name;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4){
            var res = xhr.responseText;
            if( res == "error" ){
                alert("下班失败，未找到上班记录！");
                return;
            }
            alert("下班成功！");
            document.getElementById("showBox").innerHTML = res;
        }
    };
    xhr.open('get',url);
    xhr.send(null);
}