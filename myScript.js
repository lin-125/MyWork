function msj(e) {
    let j = document.getElementById(e).value;
    if (!j) {
        window.alert('请输入要查询的内容')
        return;
    }
    var t1 = 'https://www.baidu.com/s?ie=UTF-8&wd=' + j;
    open(t1, '_blank', '', false);
}
function tim(e) {
    var t1, t2, r;
    var d = new Date();
    t1 = '<b>' + d.toLocaleDateString() + '</b>';
    t2 = d.toLocaleTimeString();
    r = t1 + '<br>' + t2;
    document.getElementById(e).innerHTML = r;
}
function gob() {
    window.scroll(0, 10);
}