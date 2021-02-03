//树状图
document.getElementById('TreeChart').onclick = function () {
    document.getElementById('cover').style.display = 'block';
    document.getElementById('background').style.display = 'block';
    document.getElementById('cover').innerHTML = "<div id ='Tree' style='width:800px;height: 600px;background:rgba(9, 4, 88, 0.1)'></div>";
    var TreeChart = echarts.init(document.getElementById('Tree'),'chalk');

    TreeChart.setOption(option = {
        title: {
            text: '人员分类图', /*echarts.format.addCommas(dataCount) + ' Data',*/
            left: 10,
            textStyle: {
                color:'#fff'}
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },

        series: [
            {
                type: 'tree',
                roam: 'true',
                data: [tree],
                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',
                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 16,
                        color:'#fff',
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            fontSize: 15,
                            fontStyle: 'bold',
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left',
                        }
                    }
                },
                animationThreshold: 5000,
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 1000

            },
        ]
    });
};


//树状图点击弹窗
// $.getJSON("data/TrailData/1minTrail/Day1.json", function (data) {
//     TreeChart.on('click', function clickFun(param) {
//         var reg = new RegExp("^[0-9]{5}");
//         if(reg.test(param.name)){
//             document.getElementById('light').style.display = 'block';
//             document.getElementById('fade').style.display = 'block';
//
//             var myChart = echarts.init(document.getElementById('Trail'), 'vintage');
//
//             var arr = data.list;
//             drawmap(param,arr);
//             // draw(param);
//             myChart.setOption(option);
//         }
//     });
// });

// var container = document.getElementById('Tree');
//容器自适应大小
// myChart.on('click',function(params){
//     if(params.componentType === 'series'){
//         if(!params.value){
//             var elesArr = Array.from(new Set(myChart._chartsViews[0]._data._graphicEls));
//             var height = 700;
//             var currentHeight = 10*(elesArr.length - 1) || 10;
//             var newHeight = Math.max(currentHeight, height);
//             container.style.height = newHeight + 'px';
//             myChart.resize();
//         }
//     }
// });