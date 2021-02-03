//通过Id显示轨迹

//1.搜索Id显示
function TrailDay1() {
    $.getJSON("data/TrailData/1minTrail/Day1.json", function (data) {
        // console.log(Data.list);
        //设置id列表
        var arr = data.list;
        var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">当日人员ID</span>' + '<br><hr>';
        for (var i = 0; i < arr.length; i++) {
            str = str + "<a class='map' href='javascript:void(0)' onclick=map1('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
        }
        document.getElementById('ID').innerHTML = str + '</tbody>';


        //搜索id号码,显示信息图
        document.getElementById('confirm').onclick = function () {
            var searchId = document.getElementById('search').value;
            var reg = new RegExp("^[0-9]{5}$");

            if (reg.test(searchId) && searchId < 20000) {
                var flag = 0;//判断是否找到
                for (var i = 0; i < arr.length; i++) {
                    if(searchId == arr[i].id){
                        flag = 1;
                    }
                }
                if(flag){
                    document.getElementById('light').style.display = 'block';
                    document.getElementById('fade').style.display = 'block';

                    var myChart = echarts.init(document.getElementById('Trail'), 'chalk');

                    var param = new Object();
                    param.name = searchId;
                    $.getJSON('data/TrailData/Line/Day1Line.json', function (line) {

                        drawmap(param, arr, line);
                        myChart.setOption(option);
                    })
                }else{
                    alert('Not Found!');
                }
            } else {
                alert('Wrong Format!');
            }
        };
    });
}

function TrailDay2() {
    $.getJSON("data/TrailData/1minTrail/Day2.json", function (data) {
        // console.log(Data.list);
        //设置id列表
        var arr = data.list;
        var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">当日人员ID</span>' + '<br><hr>';
        for (var i = 0; i < arr.length; i++) {
            str = str + "<a class='map' href='javascript:void(0)' onclick=map2('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
        }
        document.getElementById('ID').innerHTML = str + '</tbody>';


        //搜索id号码,显示信息图
        document.getElementById('confirm').onclick = function () {
            var searchId = document.getElementById('search').value;
            var reg = new RegExp("^[0-9]{5}$");

            if (reg.test(searchId) && searchId < 20000) {
                var flag = 0;//判断是否找到
                for (var i = 0; i < arr.length; i++) {
                    if(searchId == arr[i].id){
                        flag = 1;
                    }
                }
                if(flag){
                    document.getElementById('light').style.display = 'block';
                    document.getElementById('fade').style.display = 'block';

                    var myChart = echarts.init(document.getElementById('Trail'), 'chalk');

                    var param = new Object();
                    param.name = searchId;
                    $.getJSON('data/TrailData/Line/Day2Line.json', function (line) {

                        drawmap(param, arr, line);
                        myChart.setOption(option);
                    })
                }else{
                    alert('Not Found!');
                }
            } else {
                alert('Wrong Format!');
            }
        };
    });
}

function TrailDay3() {
    $.getJSON("data/TrailData/1minTrail/Day3.json", function (data) {
        // console.log(Data.list);
        //设置id列表
        var arr = data.list;
        var str = '&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff;">当日人员ID</span>' + '<br><hr>';
        for (var i = 0; i < arr.length; i++) {
            str = str + "<a class='map' href='javascript:void(0)' onclick=map3('" + i + "','" + arr[i].id + "')>&nbsp;&nbsp;&nbsp;&nbsp;●" + arr[i].id + '</a><br>';
        }
        document.getElementById('ID').innerHTML = str + '</tbody>';


        //搜索id号码,显示信息图
        document.getElementById('confirm').onclick = function () {
            var searchId = document.getElementById('search').value;
            var reg = new RegExp("^[0-9]{5}$");

            if (reg.test(searchId) && searchId < 20000) {
                var flag = 0;//判断是否找到
                for (var i = 0; i < arr.length; i++) {
                    if(searchId == arr[i].id){
                        flag = 1;
                    }
                }
                if(flag){
                    document.getElementById('light').style.display = 'block';
                    document.getElementById('fade').style.display = 'block';

                    var myChart = echarts.init(document.getElementById('Trail'), 'chalk');

                    var param = new Object();
                    param.name = searchId;
                    $.getJSON('data/TrailData/Line/Day3Line.json', function (line) {

                        drawmap(param, arr, line);
                        myChart.setOption(option);
                    })
                }else{
                    alert('Not Found!');
                }
            } else {
                alert('Wrong Format!');
            }
        };
    });
}

//2.点击Id显示
function map1(i, id) {
    $.getJSON("data/TrailData/1minTrail/Day1.json", function (data) {
        // 点击id列表,显示信息图
        document.getElementById('light').style.display = 'block';
        document.getElementById('fade').style.display = 'block';

        var myChart = echarts.init(document.getElementById('Trail'), 'chalk');
        var person = new Object();
        person.name = id;
        var arr = data.list;
        $.getJSON('data/TrailData/Line/Day1Line.json', function (line) {
            drawmap(person, arr, line);
            myChart.setOption(option);
        })
    });
}

function map2(i, id) {
    $.getJSON("data/TrailData/1minTrail/Day2.json", function (data) {
        // 点击id列表,显示信息图
        document.getElementById('light').style.display = 'block';
        document.getElementById('fade').style.display = 'block';

        var myChart = echarts.init(document.getElementById('Trail'), 'chalk');
        var person = new Object();
        person.name = id;
        var arr = data.list;
        $.getJSON('data/TrailData/Line/Day2Line.json', function (line) {
            drawmap(person, arr, line);
            myChart.setOption(option);
        })
    });
}

function map3(i, id) {
    $.getJSON("data/TrailData/1minTrail/Day3.json", function (data) {
        // 点击id列表,显示信息图
        document.getElementById('light').style.display = 'block';
        document.getElementById('fade').style.display = 'block';

        var myChart = echarts.init(document.getElementById('Trail'), 'chalk');
        var person = new Object();
        person.name = id;
        var arr = data.list;
        $.getJSON('data/TrailData/Line/Day3Line.json', function (line) {
            drawmap(person, arr, line);
            myChart.setOption(option);
        })
    });
}

