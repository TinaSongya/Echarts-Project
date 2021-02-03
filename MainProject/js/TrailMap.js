function drawmap(param, array, line) {
    var dataG = [[12, 1, 1], [13, 1, 1], [15, 1, 1], [16, 1, 1], [17, 1, 1], [18, 1, 1], [19, 1, 1], [20, 1, 1], [21, 1, 1], [22, 1, 1], [23, 1, 1], [24, 1, 1], [25, 1, 1], [26, 1, 1], [27, 1, 1], [28, 1, 1], [19, 0, 1], [6, 2, 1], [7, 2, 1], [8, 2, 1], [9, 2, 1], [10, 2, 1], [11, 2, 1], [6, 3, 1], [9, 3, 1], [10, 3, 1], [11, 3, 1], [6, 4, 1], [9, 4, 1], [6, 5, 1], [9, 5, 1], [6, 6, 1], [9, 6, 1], [6, 7, 1], [9, 7, 1], [6, 8, 1], [9, 8, 1], [6, 9, 1], [9, 9, 1], [6, 10, 1], [7, 10, 1], [8, 10, 1], [9, 10, 1], [6, 11, 1], [7, 11, 1], [8, 11, 1], [9, 11, 1], [1, 12, 1], [1, 14, 1], [5, 12, 1], [6, 12, 1], [7, 12, 1], [8, 12, 1], [9, 12, 1], [10, 12, 1], [11, 12, 1], [12, 12, 1], [0, 13, 1], [13, 12, 1], [14, 1, 1], [14, 12, 1], [1, 13, 1], [2, 13, 1], [5, 13, 1], [6, 13, 1], [7, 13, 1], [8, 13, 1], [9, 13, 1], [10, 13, 1], [11, 13, 1], [12, 13, 1], [13, 13, 1], [14, 13, 1], [15, 13, 1], [16, 13, 1], [17, 13, 1], [18, 13, 1], [19, 13, 1], [20, 13, 1], [21, 13, 1], [22, 13, 1], [23, 13, 1], [24, 13, 1], [25, 13, 1], [26, 13, 1], [27, 13, 1], [28, 13, 1], [1, 14, 1], [2, 14, 1], [3, 14, 1], [4, 14, 1], [5, 14, 1], [6, 14, 1], [7, 14, 1], [8, 14, 1], [9, 14, 1], [12, 14, 1], [13, 14, 1], [14, 14, 1], [15, 14, 1], [16, 14, 1], [17, 14, 1], [18, 14, 1], [2, 15, 1], [4, 15, 1], [5, 15, 1], [7, 15, 1], [15, 15, 1], [17, 15, 1], [15, 12, 1], [16, 12, 1], [17, 12, 1], [18, 12, 1], [19, 12, 1], [20, 12, 1], [21, 12, 1], [22, 12, 1], [23, 12, 1], [24, 12, 1], [25, 12, 1], [26, 12, 1], [27, 12, 1], [28, 12, 1], [6, 18, 1], [6, 19, 1], [6, 20, 1], [6, 21, 1], [6, 22, 1], [6, 23, 1], [6, 24, 1], [6, 25, 1], [6, 26, 1], [6, 27, 1], [6, 28, 1], [6, 29, 1], [6, 30, 1], [7, 18, 1], [7, 19, 1], [7, 20, 1], [7, 21, 1], [7, 22, 1], [7, 23, 1], [7, 24, 1], [7, 25, 1], [7, 26, 1], [7, 27, 1], [7, 28, 1], [7, 29, 1], [7, 30, 1], [8, 18, 1], [8, 19, 1], [8, 20, 1], [8, 21, 1], [8, 22, 1], [8, 23, 1], [8, 24, 1], [8, 25, 1], [8, 26, 1], [8, 27, 1], [8, 28, 1], [8, 29, 1], [8, 30, 1], [9, 18, 1], [9, 19, 1], [9, 20, 1], [9, 21, 1], [9, 22, 1], [9, 23, 1], [9, 24, 1], [9, 25, 1], [9, 26, 1], [9, 27, 1], [9, 28, 1], [9, 29, 1], [9, 30, 1], [10, 18, 1], [10, 19, 1], [11, 18, 1], [11, 19, 1], [10, 28, 1], [11, 28, 1], [10, 29, 1], [11, 29, 1]];
    var dataN = [[0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1], [0, 8, 1], [0, 9, 1], [0, 10, 1], [0, 11, 1], [0, 12, 1], [0, 13, 1], [0, 14, 1], [0, 15, 1], [0, 16, 1], [0, 17, 1], [0, 18, 1], [0, 19, 1], [0, 21, 1], [0, 22, 1], [0, 23, 1], [0, 24, 1], [0, 25, 1], [0, 26, 1], [0, 27, 1], [0, 28, 1], [0, 29, 1], [1, 0, 1], [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1], [1, 8, 1], [1, 9, 1], [1, 29, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [7, 0, 1], [8, 0, 1], [9, 0, 1], [9, 0, 1], [10, 0, 1], [11, 0, 1], [12, 0, 1], [14, 0, 1], [15, 0, 1], [10, 1, 1], [10, 2, 1], [10, 3, 1], [10, 4, 1], [10, 5, 1], [11, 1, 1], [11, 2, 1], [11, 3, 1], [11, 4, 1], [11, 5, 1], [2, 12, 1], [3, 12, 1], [4, 12, 1], [5, 12, 1], [6, 12, 1], [7, 12, 1], [8, 12, 1], [9, 12, 1], [10, 12, 1], [11, 12, 1], [2, 13, 1], [3, 13, 1], [4, 13, 1], [5, 13, 1], [6, 13, 1], [7, 13, 1], [8, 13, 1], [9, 13, 1], [10, 13, 1], [11, 13, 1], [2, 14, 1], [3, 14, 1], [4, 14, 1], [5, 14, 1], [6, 14, 1], [7, 14, 1], [8, 14, 1], [9, 14, 1], [10, 14, 1], [11, 14, 1], [2, 29, 1], [3, 29, 1], [4, 29, 1], [5, 29, 1], [6, 29, 1], [7, 29, 1], [8, 29, 1], [9, 29, 1], [10, 29, 1], [11, 29, 1], [12, 29, 1], [13, 29, 1], [14, 29, 1], [15, 29, 1], [15, 1, 1], [15, 3, 1], [15, 6, 1], [15, 8, 1], [15, 9, 1], [15, 10, 1], [15, 11, 1], [15, 12, 1], [15, 13, 1], [15, 14, 1], [15, 16, 1], [15, 18, 1]];

    var Data4 = [[[2, 15], [3, 12], [3, 8], [8, 12], [11, 4], [8, 6], [3, 8], [17, 15]], [[2, 15], [3, 12], [23, 7], [11, 20], [23, 7], [17, 7], [17, 7], [23, 7], [28, 14], [5, 15]]]
    var data1 = [[24, 7, 2]];//主会场位置
    var data2 = [[17, 7, 2]];//展厅位置
    var data3 = [[2, 15], [4, 15], [7, 15]];//箭头入口的位置
    var data4 = [[5, 15], [15, 15], [17, 15]];//箭头出口的位置
    var data5 = [[0, 13, 2]];//向右箭头
    var data6 = [[19, 0, 2]];//y轴箭头
    var data7 = [[3, 3, 2]];//分会场A
    var data8 = [[3, 5, 2]];//分会场B
    var data9 = [[3, 7, 2]];//分会场C
    var data10 = [[3, 9, 2]];//分会场D
    var data11 = [[7, 7, 2]];//海报区的位置
    var data12 = [[11, 5, 2]];//厕所1
    var data13 = [[11, 8, 2]];//room1
    var data14 = [[11, 11, 2]];//room2
    var data15 = [[4, 13, 2]];//签到处
    var dataA = [[11, 14, 3]];//下扶梯
    var dataB = [[11, 1, 3]];//上扶梯
    var dataC = [[20, 15, 2]];//服务台
    var dataD = [[23, 15, 2]];//room3
    var dataE = [[26, 15, 2]];//room4
    var dataF = [[28, 15, 2]];//厕所2
    var dataa = [[3, 22, 2]];//餐厅
    var datab = [[3, 27, 2]];//room5
    var datac = [[11, 21, 2]];//厕所1
    var datad = [[11, 23, 2]];//room6
    var datae = [[2, 30, 2]];//休闲区
    var dataf = [[11, 30, 3]];//下扶梯
    var datag = [[11, 17, 3]];//上扶梯



    // 轨迹加工
    var links = Data4.map(function (item, index) {
        return {
            source: index,
            target: index + 2,
        };
    });

    links.pop();

    console.log(line.length);

    for(var n=0;n<line.length;n++){
        if(line[n].id == param.name){
            break;
        }
    }//定位

    // for (var n = 0; n < Object.keys(Line).length; n++) {
    //     if (Object.keys(Line)[n] == param.name) {
    //         break;
    //     }
    // }//定位

    // 数据加工
    var arr = eval(array[n].xy);
    line = eval(line[n].xy);

    option = {
        title: {
            text: param.name + '的轨迹图',
        },
        tooltip: {
            show: true,
            formatter: function (param) {
                return param.data[3];
            }
        },

        grid:
            {
                backgroundColor: '#b1b5bc',
                show: dataN,
            },

        xAxis: {//图中的y坐标
            show: true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
            //网格样式
            name: 'y',
            axisTick: {
                show: false,

            },
            axisLabel: {
                show: true,
                interval: "auto",
                margin: 8,
            },
            nameLocation: 'end',
            position: 'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse: false,//是否反向坐标


            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            //网格样式
            name: 'x',
            nameLocation: 'end',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: "auto",
            },
            position: 'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse: true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        toolbox: {
            feature: {
                dataZoom: {}
            }
        },
        series: [
            {
                name: [param.name],
                coordinateSystem: 'cartesian2d',
                type: 'lines',
                polyline: true,
                symbol: ['circle', 'arrow'],
                zlevel: 1,
                effect: {
                    show: true,
                    constantSpeed: 100,
                    trailLength: 0.05,
                    symbolSize: 6,
                    symbol: 'arrow',
                    loop: true
                },
                lineStyle: {
                    normal: {
                        color: '#ff0b00',
                        opacity: 0.08,
                        curveness: 0.2
                    },
                    symbolSize: ["circle", "arrow"],
                },

                cursor: "pointer",
                emphasis: {  //高亮配置
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#ff1a1e',
                    label: {
                        show: true,
                    },
                },
                // polyline: true,
                blendMode: 'lighter',
                data: [{
                    coords: line,
                }]

            },
            {
                name: [param.name],
                type: 'scatter',
                zlevel: 1,
                symbol: 'circle',
                itemStyle: {
                    color: function (params) {
                        var time = params.data[2];
                        // console.log(time);
                        var color = "";
                        var colorList = ['#11ff65', '#fff500', '#ff7300', '#ff1300'];
                        if (time < 0) {

                        } else if (time >= 0 && time < 60) {
                            color = colorList[0];
                            // console.log('hidden');
                        } else if (time >= 60 && time < 1800) {
                            color = colorList[1];
                            // console.log(color);
                        } else if (time>= 1800 && time < 3600) {
                            color = colorList[2];
                            // console.log(color);
                        } else{
                            color = colorList[3];
                            // console.log(color);
                        }
                        return color;
                    },
                },
                data: arr,

            },
            // 灰色区域
            {
                name: 'Punch Card',
                type: 'heatmap',
                data: dataG,
                color:'#fff8eb',
                label:
                    {
                        normal: {
                            show: false,
                        }
                    }
                ,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor:
                            'rgba(1, 0, 0, 0)'
                    }
                }
            }
            ,
            /*主会场区域*/
            {
                name: '区域',
                data: data1,
                type: 'scatter',
                animation: false,
                symbol: "rectangle",
                symbolSize:
                    [160, 138],
                symbolOffset:
                    [-7, -7], //图标位置偏移
                itemStyle:
                    {
                        normal: {
                            borderWidth: 1,
                            borderColor: 'black',
                        }
                    }
                ,
                color:'#78c4ff',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '主会场',
                    color: 'black',
                    fontWeight: 'bold',
                }
            }
            ,
            /*展厅区域*/
            {
                name: '区域',
                data: data2,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [64, 138],
                symbolOffset:
                    [-7, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '展厅',
                        color: 'black',
                        fontWeight: 'bold',

                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,


            /*分会场A区域*/
            {
                name: '区域',
                data: data7,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [78, 28],
                symbolOffset:
                    [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '分会场A',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*分会场B区域*/
            {
                name: '区域',
                data: data8,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [78, 28],
                symbolOffset:
                    [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '分会场B',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*分会场C区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    },
                symbolKeepAspect: true,
                symbolSize:
                    [78, 28],
                symbolOffset:
                    [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '分会场C',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*分会场D区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [78, 28],
                symbolOffset:
                    [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position:
                            'inside',
                        formatter:
                            '分会场D',
                        color:
                            'black',
                        fontWeight:
                            'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*海报区*/
            {
                name: '区域',
                data: data11,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [33, 96],
                symbolOffset:
                    [8, -13], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '海\n\n报\n\n区',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*厕所1*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 26],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '厕所1',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*room1*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize:
                    [33, 55],
                symbolOffset:
                    [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room1',
                        color: 'black',
                        fontWeight: 'normal',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*room2*/
            {
                name: '区域',
                data: data14,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 26],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room2',
                        color: 'black',
                        fontWeight: 'normal',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*签到处*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [64, 25],
                symbolOffset: [-7, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '签到处',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                animation: false,
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    },
                symbolKeepAspect: true,
                symbolSize: [30, 13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color: 'rgba(149,82,17,0.8)',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [30, 13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*服务台*/
            {
                name: '区域',
                data: dataC,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    },
                symbolKeepAspect: true,
                symbolSize: [33, 28],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '服务台',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'
            }
            ,
            /*room3*/
            {
                name: '区域',
                data: dataD,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    },
                symbolKeepAspect: true,
                symbolSize: [64, 28],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room3',
                        color: 'black',
                        fontWeight: 'normal',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*room4*/
            {
                name: '区域',
                data: dataE,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 28],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room4',
                        color: 'black',
                        fontWeight: 'normal',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*厕所2*/
            {
                name: '区域',
                data: dataF,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 28],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '厕所2',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'
            }
            ,
            /*箭头入口的位置*/
            {
                name: '区域',
                data: data3,//箭头
                type: 'scatter',
                symbol: 'image://箭头朝上.png',
                symbolSize: [15, 18],
                symbolOffset: [0, '20%'], //图标位置偏移
            }
            ,
            /*箭头出口的位置*/
            {
                name: '区域',
                data:
                data4,//箭头
                type:
                    'scatter',
                symbol:
                    'image://箭头朝下.png',
                symbolSize:
                    [15, 18],
                symbolOffset:
                    [0, '20%'], //图标位置偏移
            }
            ,
            /*y轴箭头出口的位置*/
            {
                name: '区域',
                data:
                data6,//箭头
                type:
                    'scatter',
                symbol:
                    'image://箭头朝上.png',
                symbolSize:
                    [15, 18],
                symbolOffset:
                    [0, -5], //图标位置偏移
            }
            ,
            /*箭头朝右的位置*/
            {
                name: '区域',
                data:
                data5,//箭头
                type:
                    'scatter',
                symbol:
                    'image://箭头朝右.png',
                symbolSize:
                    [20, 22],
                symbolOffset:
                    [-5, 0], //图标位置偏移

            }
            ,
            /*餐厅区域*/
            {
                name: '区域',
                data: dataa,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [78, 110],
                symbolOffset: [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '餐厅',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*room5区域*/
            {
                name: '区域',
                data: datab,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [78, 28],
                symbolOffset: [0, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room5',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,


            /*厕所3*/
            {
                name: '区域',
                data: datac,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 28],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '厕所3',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,
            /*room6*/
            {
                name: '区域',
                data: datad,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [33, 26],
                symbolOffset: [-8, -7], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: 'room6',
                        color: 'black',
                        fontWeight: 'normal',
                    }
                // color:'rgba(165, 178, 223, 0)'

            }
            ,

            /*休闲区*/
            {
                name: '区域',
                data: datae,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color:'#78c4ff',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [98, 39],
                symbolOffset: [8, 1], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '休闲区',
                        color: 'black',
                        fontWeight: 'bold',
                    }

            }
            ,
            /*扶梯*/
            {
                name: '区域',
                data: dataf,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                animation: false,
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [30, 13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }

            }
            ,
            /*扶梯*/
            {
                name: '区域',
                data: datag,
                type: 'scatter',
                symbol: "rect",
                animation: false,
                color: 'rgba(149,82,17,0.8)',
                itemStyle:
                    {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                ,

                symbolKeepAspect: true,
                symbolSize: [30, 13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:
                    {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    },
            },
        ],
    };


}


