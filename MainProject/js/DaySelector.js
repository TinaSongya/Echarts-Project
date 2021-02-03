//通过按钮选择指定天数的图表与数据
var arr = document.getElementsByTagName('button');
for (var i = 0; i < arr.length; i++) {
    arr[i].onclick = function () {
        if (this.id == 'Day_1') {
            LineDay1();
            Heatday1();
            TrailDay1();
            AgendaDay1();
        } else if (this.id == 'Day_2') {
            LineDay2();
            Heatday2();
            TrailDay2();
            AgendaDay2();
        } else if (this.id == 'Day_3') {
            LineDay3();
            Heatday3();
            TrailDay3();
            AgendaDay3();
        }
    };
}


// 默认情况
TrailDay1();
Heatday1();
LineDay1();


