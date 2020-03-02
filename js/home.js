var localIP = "127.0.0.1"

function sign() {
    alert("打卡成功！")
    var name = document.getElementById('name').value
    if (name == "")
    {
        document.getElementById('name').focus();
        alert("还没输入名字呢!");
        return false
    }
    var url = "http://"+localIP+":8080/sign?name="+name;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4){
            document.getElementById("showBox").innerHTML = xhr.responseText;
        }
    };
    xhr.open('get',url);
    xhr.send(null);
}

function leave() {
    alert("下班成功！")
    var name = document.getElementById('name').value
    if (name == "")
    {
        document.getElementById('name').focus();
        alert("还没输入名字呢!");
        return false
    }
    var url = "http://"+localIP+":8080/leave?name="+name;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4){
            document.getElementById("showBox").innerHTML = xhr.responseText;
        }
    };
    xhr.open('get',url);
    xhr.send(null);
}