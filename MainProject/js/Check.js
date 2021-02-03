var CheckChart = echarts.init(document.getElementById('check'), 'chalk');
var data = [
    [16, 3276, 272],
    [18, 4176, 300],
    [19, 2715, 196]
];
var cities = ['Day1', 'Day2', 'Day3'];
option = {
    title: {
        text: '签到情况',
        textStyle: {
            color:'#fff'}
    },
    angleAxis: {
        type: 'category',
        data: ['Day1', 'Day2', 'Day3'],
        z: 10,

    },
    radiusAxis: {},
    polar: {},
    series: [{
        type: 'bar',
        data: [16, 18, 19],
        coordinateSystem: 'polar',
        textStyle:{
            color:'#fff',
        },
        name: '未签到',
        stack: 'a'
    }, {
        type: 'bar',
        data: [272, 300, 196],
        coordinateSystem: 'polar',
        textStyle:{
            color:'#fff',
        },
        name: '特邀专家',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3276, 4116, 2715],
        coordinateSystem: 'polar',
        name: '已签到',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['未签到', '特邀专家', '已签到'],
        selected:{
            '特邀专家':false,
            '签到':false,
        },
        textStyle:{
            color:'#fff',
        },
        top: 40,
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cities[id] + '<br>未签到：' + data[id][0] + '<br>已签到：' + data[id][1] + '<br>特邀专家：' + data[id][2];
        }
    }
};
CheckChart.setOption(option);


CheckChart.on('click', function clickFun(param) {
    if(param.seriesName == '未签到'){
        switch (param.name) {
            case 'Day1':
                $.getJSON('data/未签到/Day1.json', function (data) {
                    var arr = data;
                    var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">Day1未签到</span>' + '<br><hr>';
                    for (var i = 0; i < arr.length; i++) {
                        str = str + "<a class='map' href='javascript:void(0)' onclick=map1('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
                    }
                    document.getElementById('ID').innerHTML = str + '</tbody>';
                });
                break;
            case 'Day2':
                $.getJSON('data/未签到/Day2.json', function (data) {
                    var arr = data;
                    var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">Day2未签到</span>' + '<br><hr>';
                    for (var i = 0; i < arr.length; i++) {
                        str = str + "<a class='map' href='javascript:void(0)' onclick=map2('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
                    }
                    document.getElementById('ID').innerHTML = str + '</tbody>';
                });
                break;
            case 'Day3':
                $.getJSON('data/未签到/Day3.json', function (data) {
                    var arr = data;
                    var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">Day3未签到</span>' + '<br><hr>';
                    for (var i = 0; i < arr.length; i++) {
                        str = str + "<a class='map' href='javascript:void(0)' onclick=map3('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
                    }
                    document.getElementById('ID').innerHTML = str + '</tbody>';
                });
                break;
            default:
        }
    }
});


