//根据按钮显示指定天数的热力图
function Heatday1() {
    var Firstfloor = echarts.init(document.getElementById('HM1'), 'chalk');

    var xpoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    //分区图
    var data1 = [[24, 7]];//主会场位置
    var data2 = [[17, 7, 2]];//展厅位置
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

    var Graydata1 = GrayData1.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });


    var option1 = {
        baseOption: {
            timeline: {
                data: day1Time,
                autoPlay: false,
                axisType: 'category',
                label:
                    {
                      color:'#fff',
                    },
                tooltip: {
                    show: true,
                    color:'#fff',
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场一楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            // legend: {
            //     data: ['11396'],
            // },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
                color:'#fff'
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint1,
                name: 'y',
                color:'#fff',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint1,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },
            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata1,
                    color: '#80838a',
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                },
                /*主会场区域*/
                {
                    name: '区域',
                    data: data1,
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [211, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '主会场',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*展厅区域*/
                {
                    name: '区域',
                    data: data2,
                    type: 'scatter',
                    symbol: "rect",
                    symbolKeepAspect: false,
                    symbolSize: [86, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '展厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场A区域*/
                {
                    name: '区域',
                    data: data7,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场A',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场B区域*/
                {
                    name: '区域',
                    data: data8,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场B',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场C区域*/
                {
                    name: '区域',
                    data: data9,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场C',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场D区域*/
                {
                    name: '区域',
                    data: data10,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场D',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*海报区*/
                {
                    name: '区域',
                    data: data11,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [44, 130],
                    symbolOffset: [11, -18], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '海\n\n报\n\n区',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*厕所1*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所1',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room1*/
                {
                    name: '区域',
                    data: data13,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        color: 'rgba(165, 178, 223, 0.4)',
                        borderWidth: 3,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 72],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room1',
                        color:'#fff',
                        fontWeight: 'normal',

                    },


                },
                /*room2*/
                {
                    name: '区域',
                    data: data14,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room2',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*签到处*/
                {
                    name: '区域',
                    data: data15,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [84, 36],
                    symbolOffset: [-11, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '签到处',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*服务台*/
                {
                    name: '区域',
                    data: dataC,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '服务台',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room3*/
                {
                    name: '区域',
                    data: dataD,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [88, 36],
                    symbolOffset: [-11, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room3',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room4*/
                {
                    name: '区域',
                    data: dataE,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room4',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*厕所2*/
                {
                    name: '区域',
                    data: dataF,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所2',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },
                /*箭头入口的位置*/
                {
                    name: '区域',
                    data: [[2, 15], [4, 15], [7, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*箭头出口的位置*/
                {
                    name: '区域',
                    data: [[5, 15], [15, 15], [17, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝下.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*y轴箭头出口的位置*/
                {
                    name: '区域',
                    data: [[19, 0, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,-5], //图标位置偏移
                },
                /*箭头朝右的位置*/
                {
                    name: '区域',
                    data: [[0, 13, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝右.png',
                    symbolSize:[24,28],
                    symbolOffset: [0,-2], //图标位置偏移
                },
            ]
        },
        options: []
    };

    //对option进行数据循环导入
    for (var n = 0; n < Object.keys(day1floor1HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option1.options.push({
            title: {
                show: true,
                text: Object.keys(day1floor1HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day1floor1HeatMap[Object.keys(day1floor1HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }


    var SecondFloor = echarts.init(document.getElementById('HM2'), 'chalk');

    var xpoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    Graydata2 = GrayData2.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    //轨迹坐标点
    // var graphData = [[2, 15], [2, 14], [3, 14], [4, 14], [5, 14], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 14], [10, 14]];
    //
    // var links = graphData.map(function (item, index) {
    //     return {
    //         source: index,
    //         target: index + 1,
    //     };
    // });
    // links.pop();


    var option2 = {
        baseOption: {
            timeline: {
                data: day1Time,
                autoPlay: false,
                axisType: 'category',
                label:
                    {
                        color:'#fff',
                    },
                tooltip: {
                    show: true,
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场二楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            legend: {
                data: ['11396'],
            },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
                color:'#fff',
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint,
                name: 'y',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.3}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },

            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata2,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#80838a',
                        }
                    }
                },
                /*餐厅区域*/
                {
                    name: '区域',
                    data: [[3, 5]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 148],
                    symbolOffset: [0, 8], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '餐厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*room5*/
                {
                    name: '区域',
                    data: [[3, 11]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 38],
                    symbolOffset: [0, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room5',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*休闲区*/
                {
                    name: '区域',
                    data: [[3, 14]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [126, 56],
                    symbolOffset: [-10, 0], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '休闲区',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*厕所3*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所3',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room6*/
                {
                    name: '区域',
                    data: [[11, 7]],
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room6',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },

            ]
        },
        options: [],
    };

    for (n = 0; n < Object.keys(day1floor2HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option2.options.push({
            title:{
                show:true,
                text:Object.keys(day1floor2HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day1floor2HeatMap[Object.keys(day1floor2HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }
    Firstfloor.setOption(option1);

    SecondFloor.setOption(option2);

    echarts.connect([Firstfloor, SecondFloor]);
}

function Heatday2() {
    var Firstfloor = echarts.init(document.getElementById('HM1'), 'chalk');

    var xpoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    //分区图
    var data1 = [[24, 7]];//主会场位置
    var data2 = [[17, 7, 2]];//展厅位置
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

    Graydata1 = GrayData1.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });


    var option1 = {
        baseOption: {
            timeline: {
                data: day2Time,
                autoPlay: false,
                axisType: 'category',
                tooltip: {
                    show: true,
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场一楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            legend: {
                data: ['11396'],

            },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint1,
                name: 'y',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint1,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },
            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata1,
                    color: '#80838a',
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                },
                /*主会场区域*/
                {
                    name: '区域',
                    data: data1,
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [211, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '主会场',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*展厅区域*/
                {
                    name: '区域',
                    data: data2,
                    type: 'scatter',
                    symbol: "rect",
                    symbolKeepAspect: false,
                    symbolSize: [86, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '展厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场A区域*/
                {
                    name: '区域',
                    data: data7,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场A',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场B区域*/
                {
                    name: '区域',
                    data: data8,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场B',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场C区域*/
                {
                    name: '区域',
                    data: data9,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场C',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场D区域*/
                {
                    name: '区域',
                    data: data10,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场D',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*海报区*/
                {
                    name: '区域',
                    data: data11,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [44, 130],
                    symbolOffset: [11, -18], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '海\n\n报\n\n区',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*厕所1*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所1',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room1*/
                {
                    name: '区域',
                    data: data13,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        color: 'rgba(165, 178, 223, 0.4)',
                        borderWidth: 3,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 72],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room1',
                        color:'#fff',
                        fontWeight: 'normal',

                    },
                    color: 'rgba(165, 178, 223, 0.4)',

                },
                /*room2*/
                {
                    name: '区域',
                    data: data14,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room2',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*签到处*/
                {
                    name: '区域',
                    data: data15,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [84, 36],
                    symbolOffset: [-11, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '签到处',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*服务台*/
                {
                    name: '区域',
                    data: dataC,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '服务台',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room3*/
                {
                    name: '区域',
                    data: dataD,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [88, 36],
                    symbolOffset: [-11, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room3',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room4*/
                {
                    name: '区域',
                    data: dataE,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room4',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*厕所2*/
                {
                    name: '区域',
                    data: dataF,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所2',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },
                /*箭头入口的位置*/
                {
                    name: '区域',
                    data: [[2, 15], [4, 15], [7, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*箭头出口的位置*/
                {
                    name: '区域',
                    data: [[5, 15], [15, 15], [17, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝下.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*y轴箭头出口的位置*/
                {
                    name: '区域',
                    data: [[19, 0, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,-5], //图标位置偏移
                },
                /*箭头朝右的位置*/
                {
                    name: '区域',
                    data: [[0, 13, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝右.png',
                    symbolSize:[24,28],
                    symbolOffset: [0,-2], //图标位置偏移
                },
            ]
        },
        options: []
    };

    //对option进行数据循环导入
    for (var n = 0; n < Object.keys(day2floor1HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option1.options.push({
            title: {
                show: true,
                text: Object.keys(day2floor1HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day2floor1HeatMap[Object.keys(day2floor1HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }


    var SecondFloor = echarts.init(document.getElementById('HM2'), 'chalk');

    var xpoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    Graydata2 = GrayData2.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    var option2 = {
        baseOption: {
            timeline: {
                data: day2Time,
                autoPlay: false,
                axisType: 'category',
                tooltip: {
                    show: true,
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场二楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            legend: {
                data: ['11396'],
            },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint,
                name: 'y',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.3}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },

            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata2,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#80838a',
                        }
                    }
                },
                /*餐厅区域*/
                {
                    name: '区域',
                    data: [[3, 5]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 148],
                    symbolOffset: [0, 8], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '餐厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*room5*/
                {
                    name: '区域',
                    data: [[3, 11]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 38],
                    symbolOffset: [0, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room5',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*休闲区*/
                {
                    name: '区域',
                    data: [[3, 14]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [126, 56],
                    symbolOffset: [-10, 0], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '休闲区',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*厕所3*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所3',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room6*/
                {
                    name: '区域',
                    data: [[11, 7]],
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room6',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },

            ]
        },
        options: [],
    };

    for (n = 0; n < Object.keys(day2floor2HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option2.options.push({
            title:{
                show:true,
                text:Object.keys(day2floor2HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day2floor2HeatMap[Object.keys(day2floor2HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }
    Firstfloor.setOption(option1);

    SecondFloor.setOption(option2);

    echarts.connect([Firstfloor, SecondFloor]);
}

function Heatday3() {
    var Firstfloor = echarts.init(document.getElementById('HM1'), 'chalk');

    var xpoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint1 = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    //分区图
    var data1 = [[24, 7]];//主会场位置
    var data2 = [[17, 7, 2]];//展厅位置
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

    Graydata1 = GrayData1.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });


    var option1 = {
        baseOption: {
            timeline: {
                data: day3Time,
                autoPlay: false,
                axisType: 'category',
                tooltip: {
                    show: true,
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场一楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            legend: {
                data: ['11396'],

            },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint1,
                name: 'y',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint1,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },
            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata1,
                    color: '#80838a',
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                },
                /*主会场区域*/
                {
                    name: '区域',
                    data: data1,
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [211, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '主会场',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*展厅区域*/
                {
                    name: '区域',
                    data: data2,
                    type: 'scatter',
                    symbol: "rect",
                    symbolKeepAspect: false,
                    symbolSize: [86, 185],
                    symbolOffset: [-10, -9], //图标位置偏移
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '展厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场A区域*/
                {
                    name: '区域',
                    data: data7,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场A',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场B区域*/
                {
                    name: '区域',
                    data: data8,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场B',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场C区域*/
                {
                    name: '区域',
                    data: data9,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场C',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*分会场D区域*/
                {
                    name: '区域',
                    data: data10,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [105, 36],
                    symbolOffset: [0, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '分会场D',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*海报区*/
                {
                    name: '区域',
                    data: data11,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [44, 130],
                    symbolOffset: [11, -18], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '海\n\n报\n\n区',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },

                /*厕所1*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所1',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room1*/
                {
                    name: '区域',
                    data: data13,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        color: 'rgba(165, 178, 223, 0.4)',
                        borderWidth: 3,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 72],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room1',
                        color:'#fff',
                        fontWeight: 'normal',

                    },
                    color: 'rgba(165, 178, 223, 0.4)',

                },
                /*room2*/
                {
                    name: '区域',
                    data: data14,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room2',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*签到处*/
                {
                    name: '区域',
                    data: data15,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [84, 36],
                    symbolOffset: [-11, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '签到处',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*服务台*/
                {
                    name: '区域',
                    data: dataC,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '服务台',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room3*/
                {
                    name: '区域',
                    data: dataD,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [88, 36],
                    symbolOffset: [-11, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room3',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room4*/
                {
                    name: '区域',
                    data: dataE,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room4',
                        color:'#fff',
                        fontWeight: 'normal',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*厕所2*/
                {
                    name: '区域',
                    data: dataF,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -10], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所2',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },
                /*箭头入口的位置*/
                {
                    name: '区域',
                    data: [[2, 15], [4, 15], [7, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*箭头出口的位置*/
                {
                    name: '区域',
                    data: [[5, 15], [15, 15], [17, 15]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝下.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,'20%'], //图标位置偏移
                },
                /*y轴箭头出口的位置*/
                {
                    name: '区域',
                    data: [[19, 0, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝上.png',
                    symbolSize:[15,18],
                    symbolOffset: [0,-5], //图标位置偏移
                },
                /*箭头朝右的位置*/
                {
                    name: '区域',
                    data: [[0, 13, 8]],//箭头
                    type: 'scatter',
                    silent:true,
                    symbol: 'image://箭头朝右.png',
                    symbolSize:[24,28],
                    symbolOffset: [0,-2], //图标位置偏移
                },
            ]
        },
        options: []
    };

    //对option进行数据循环导入
    for (var n = 0; n < Object.keys(day3floor1HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option1.options.push({
            title: {
                show: true,
                text: Object.keys(day3floor1HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day3floor1HeatMap[Object.keys(day3floor1HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }


    var SecondFloor = echarts.init(document.getElementById('HM2'), 'chalk');

    var xpoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15', '', '17', ''
        , '19', '', '21', '', '23', '', '25', '', '27', '', '29'];
    var ypoint = ['', '1', '', '3', '', '5', '', '7', '', '9', '', '11', '', '13', '', '15'];

    Graydata2 = GrayData2.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    var option2 = {
        baseOption: {
            timeline: {
                data: day3Time,
                autoPlay: false,
                axisType: 'category',
                tooltip: {
                    show: true,
                },
                playInterval: 200,
                right: '23%',
                left: '14%'
            },
            title: [
                {
                    // text:'2019/3/1 7:00',
                    left: '79%',
                    top: '90%',
                },
                {
                    text: '会场二楼',
                    textStyle: {fontSize: 23,
                        color:'#fff'}
                },

            ],
            tooltip: {
                show: false, //是否显示浮动标签
                trigger: 'item', //浮动标签触发类型
                enterable: false, //鼠标进入悬浮框进行交互
            },
            legend: {
                data: ['11396'],
            },
            animation: false,
            grid: {
                show: false,
                height: '70%'
                // y: '10%'
            },
            visualMap: {
                min: 0,
                max: 323,
                range: [1, 100],
                show: true,
                calculable: true,
                orient: 'vertical',
                // inverse:true,//反转组件
                align: 'left',//手柄和文字的位置
                left: 'right',
                bottom: '12%',
                seriesIndex: 0,
                dimension: '2',
            },
            xAxis: { //对Y轴的设置
                type: 'category',//类别，类目轴
                data: xpoint,
                name: 'y',
                nameLocation: 'end',
                axisTick: {show: false},//是否显示刻度线
                axisLine: {
                    lineStyle: {width: 0.2}
                },
                splitLine: {            //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                },
                position: 'top'//y轴位于grid的上方还是下方，默认为bottom在下方
            },
            yAxis: { //对X轴的设置
                type: 'category',
                data: ypoint,
                name: 'x', //名称
                nameLocation: 'end',     //名称显示位置
                axisTick: {show: false}, //是否显示刻度线
                inverse: true,           //反向x轴方向
                axisLine: {
                    lineStyle: {width: 0.3}
                },
                splitLine: {             //坐标轴在grid区域内的分隔线
                    show: true,
                    lineStyle: {
                        color: ['black'],
                        width: 0.3,
                        type: 'solid'
                    }
                }
            },

            series: [
                //某一时间的人数
                {
                    name: 'person',
                    type: 'heatmap',
                    // data:day1Floor1tested,
                    // dimension:['y', 'x', 'total', 'day1Time'],
                    // encode:{
                    //     seriesName:['day1Time'],
                    // },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    z: 10
                },
                //不可通行区域
                {
                    type: 'heatmap',
                    data: Graydata2,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#80838a',
                        }
                    }
                },
                /*餐厅区域*/
                {
                    name: '区域',
                    data: [[3, 5]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 148],
                    symbolOffset: [0, 8], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '餐厅',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*room5*/
                {
                    name: '区域',
                    data: [[3, 11]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [106, 38],
                    symbolOffset: [0, -9], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room5',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*休闲区*/
                {
                    name: '区域',
                    data: [[3, 14]],
                    type: 'scatter',
                    symbol: "rectangle",
                    symbolSize: [126, 56],
                    symbolOffset: [-10, 0], //图标位置偏移
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'black',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },
                    color: 'rgba(165, 178, 223, 0.4)',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '休闲区',
                        color:'#fff',
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tooltip: {  //局部浮动窗口
                        show: false,
                    }
                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataA,
                    type: 'scatter',
                    symbol: "rect",
                    // color: 'rgba(149,82,17,0.8)',

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*扶梯*/
                {
                    name: '区域',
                    data: dataB,
                    type: 'scatter',
                    symbol: "rect",

                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [40, 18],
                    symbolOffset: [-10, 0], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '扶梯',
                        color: 'black',
                        fontWeight: 'bold',
                    }
                    // color:'rgba(165, 178, 223, 0)'

                },
                /*厕所3*/
                {
                    name: '区域',
                    data: data12,
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '厕所3',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'

                },
                /*room6*/
                {
                    name: '区域',
                    data: [[11, 7]],
                    type: 'scatter',
                    symbol: "rect",


                    itemStyle: {
                        borderWidth: 2,
                        borderColor: 'black',
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 2)'
                        }
                    },

                    symbolKeepAspect: true,
                    symbolSize: [41, 36],
                    symbolOffset: [-10, -9], //图标位置偏移

                    label: {
                        show: true,
                        position: 'inside',
                        formatter: 'room6',
                        color:'#fff',
                        fontWeight: 'bold',
                    },
                    color: 'rgba(165, 178, 223, 0.4)'
                },

            ]
        },
        options: [],
    };

    for (n = 0; n < Object.keys(day3floor2HeatMap).length; n++) {
        // option1.baseOption.timeline.data.push('2019/ 3/ 1 7:0' + n);
        option2.options.push({
            title:{
                show:true,
                text:Object.keys(day3floor2HeatMap)[n],//第n个对象名称
            },
            series: {
                type: 'heatmap',
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: day3floor2HeatMap[Object.keys(day3floor2HeatMap)[n]],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        });
    }
    Firstfloor.setOption(option1);

    SecondFloor.setOption(option2);

    echarts.connect([Firstfloor, SecondFloor]);
}


