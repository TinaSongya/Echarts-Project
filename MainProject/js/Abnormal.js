function SFDay1(){
    var myChart = echarts.init(document.getElementById('SFloor'),'chalk');/*可通行：白色区域*/
    var data = [[2,6,1],[3,6,1],[4,6,1],[5,6,1],[6,6,1],[7,6,1],[8,6,1],[9,6,1],[10,6,1],[11,6,1],[12,6,1],[13,6,1],[14,6,1],[2,7,1],[3,7,1],[4,7,1],[5,7,1],[6,7,1],[7,7,1],[8,7,1],[9,7,1],[10,7,1],[11,7,1],[12,7,1],[13,7,1],[14,7,1],[2,8,1],[3,8,1],[4,8,1],[5,8,1],[6,8,1],[7,8,1],[8,8,1],[9,8,1],[10,8,1],[11,8,1],[12,8,1],[13,8,1],[14,8,1],[2,9,1],[3,9,1],[4,9,1],[5,9,1],[6,9,1],[7,9,1],[8,9,1],[9,9,1],[10,9,1],[11,9,1],[12,9,1],[13,9,1],[14,9,1],[2,10,1],[3,10,1],[2,11,1],[3,11,1],[12,10,1],[12,11,1],[13,10,1],[13,11,1]];
    var data9 = [[3,6,595]];//餐厅
    var data10 =[[3,11,595]];//room5
    var data12 = [[11,5,595]];//厕所1
    var data13 = [[11,7,595]];//room6
    var data15 = [[2,14,595]];//休闲区
    var dataA = [[11,14,3]];//下扶梯
    var dataB = [[11,1,3]];//上扶梯
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    option = {
        grid:
            {
                backgroundColor: '#96a2a0',
                show:dataN,
            },
        tooltip:{
            show:true,
            formatter: function (param) {
                return '人员id：'+param.data[2]+'停留时间：'+param.data[4];
            },
        },
        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 2000,
            calculable: true,

            color: ['#ff2c33','#ffd128','#284885','#fbfbff'],
            textStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },





            /*餐厅区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,100],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'餐厅',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*room5区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room5',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },




            /*厕所3*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所3',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room6*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,25],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room6',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*休闲区*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[98,37],
                symbolOffset: [8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'休闲区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            //一个区域上一个人

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,8,'10070','10:06:59',1400],[6,3,'11301','10:07:27',1362],[6,5,'11866','15:07:43',1316],[6,10,'12490','15:15:19',830],[6,6,'12799','10:16:47',802],[7,7,'12891','10:53:24',2065],[7,9,'13111','10:07:39',1380],[9,9,'15020','10:35:39',1220],[8,6,'13766','10:07:20',1359],[9,12,'13694','15:14:11',948],[7,3,'15634','15:07:25',1304],[8,9,'15779','15:31:44',1615],[8,5,'16482','15:07:15',1314],[7,4,'16703','10:08:02',1317],[9,13,'18298','10:07:24',1365],[7,10,'18831','10:10:07',1212],[7,2,'19053','10:08:06',1323],
                    [9,10,'11684','10:07:42',1337],[7,12,'16347','08:20:17',1512],[6,11,'19930','15:10:11',1148],[8,12,'18892','15:33:17',1352],
                    [6,4,'13573','09:01:39',1910],
                ],
                symbolOffset: [0,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
//两个接上面
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,10,'14394','15:06:51',1368],[7,12,'13321','10:34:51',1468],[6,11,'14164','10:07:46',1353],[8,12,'13670','15:32:46',1583],
                    [6,4,'11057','15:35:17',1422],
                ],
                symbolOffset: ['50%','50%'],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

            //三个接上面
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,4,'10465','10:08:21',1298]],
                symbolOffset: ['50%',0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
        ]


    };

    myChart.setOption(option);}
function SFDay2(){
    var myChart = echarts.init(document.getElementById('SFloor'),'chalk');/*可通行：白色区域*/
    var data = [[2,6,1],[3,6,1],[4,6,1],[5,6,1],[6,6,1],[7,6,1],[8,6,1],[9,6,1],[10,6,1],[11,6,1],[12,6,1],[13,6,1],[14,6,1],[2,7,1],[3,7,1],[4,7,1],[5,7,1],[6,7,1],[7,7,1],[8,7,1],[9,7,1],[10,7,1],[11,7,1],[12,7,1],[13,7,1],[14,7,1],[2,8,1],[3,8,1],[4,8,1],[5,8,1],[6,8,1],[7,8,1],[8,8,1],[9,8,1],[10,8,1],[11,8,1],[12,8,1],[13,8,1],[14,8,1],[2,9,1],[3,9,1],[4,9,1],[5,9,1],[6,9,1],[7,9,1],[8,9,1],[9,9,1],[10,9,1],[11,9,1],[12,9,1],[13,9,1],[14,9,1],[2,10,1],[3,10,1],[2,11,1],[3,11,1],[12,10,1],[12,11,1],[13,10,1],[13,11,1]];
    var data9 = [[3,6,595]];//餐厅
    var data10 =[[3,11,595]];//room5
    var data12 = [[11,5,595]];//厕所1
    var data13 = [[11,7,595]];//room6
    var data15 = [[2,14,595]];//休闲区
    var dataA = [[11,14,3]];//下扶梯
    var dataB = [[11,1,3]];//上扶梯
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    option = {
        grid:
            {
                backgroundColor: '#96a2a0',
                show:dataN,
            },
        tooltip:{
            show:true,
            formatter: function (param) {
                return '人员id：'+param.data[2]+'停留时间：'+param.data[4];
            },
        },
        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 2000,
            calculable: true,

            color: ['#ff2c33','#ffd128','#284885','#fbfbff'],
            textStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },





            /*餐厅区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,100],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'餐厅',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*room5区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room5',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },




            /*厕所3*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所3',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room6*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,25],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room6',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*休闲区*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[98,37],
                symbolOffset: [8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'休闲区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            //一个区域一个人

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[8,5,'14585','10:08:23',1346],[9,9,'14903','15:11:27',1092],[6,9,'14993','15:34:05',1074],[7,6,'15233','10:13:33',1006],[9,10,'15882','12:42:05',1974],[7,2,'15982','10:36:20',1369],[8,14,'10095','10:06:42',1437],[6,13,'19004','10:07:57',1352],[8,7,'10490','13:02:06',1583],[8,11,'19972','10:08:20',1349],[6,5,'18011','10:36:32',1377],[7,11,'18191','15:41:30',1049],[7,9,'12068','15:37:21',1338],[8,9,'12142','15:06:05',1384],[9,6,'12342','10:07:47',1362],[8,8,'12915','15:06:25',1354],[9,11,'16558','15:34:36',1483],
                    [6,7,'11447','10:07:14',1405],[6,2,'12682','10:13:44',995],[7,7,'16850','15:07:14',1305],
                    [9,3,'15552','10:39:46',1183],[9,13,'14996','13:06:28',1711]],
                symbolOffset: [0,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
//两个接上面
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,7,'18846','15:06:52',1377],[6,2,'17812','11:30:07',1942],[7,7,'17365','10:49:02',597],
                    [9,3,'13779','15:11:07',1102],[9,13,'15051','10:34:27',1482]],
                symbolOffset: ['50%','50%'],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            //三个接上面
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,3,'13123','10:13:26',1013],[9,13,'16612','13:20:49',2090]],
                symbolOffset: ['50%',0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

        ]


    };

    myChart.setOption(option);}
function SFDay3(){
    var myChart = echarts.init(document.getElementById('SFloor'),'chalk');/*可通行：白色区域*/
    var data = [[2,6,1],[3,6,1],[4,6,1],[5,6,1],[6,6,1],[7,6,1],[8,6,1],[9,6,1],[10,6,1],[11,6,1],[12,6,1],[13,6,1],[14,6,1],[2,7,1],[3,7,1],[4,7,1],[5,7,1],[6,7,1],[7,7,1],[8,7,1],[9,7,1],[10,7,1],[11,7,1],[12,7,1],[13,7,1],[14,7,1],[2,8,1],[3,8,1],[4,8,1],[5,8,1],[6,8,1],[7,8,1],[8,8,1],[9,8,1],[10,8,1],[11,8,1],[12,8,1],[13,8,1],[14,8,1],[2,9,1],[3,9,1],[4,9,1],[5,9,1],[6,9,1],[7,9,1],[8,9,1],[9,9,1],[10,9,1],[11,9,1],[12,9,1],[13,9,1],[14,9,1],[2,10,1],[3,10,1],[2,11,1],[3,11,1],[12,10,1],[12,11,1],[13,10,1],[13,11,1]];
    var data9 = [[3,6,595]];//餐厅
    var data10 =[[3,11,595]];//room5
    var data12 = [[11,5,595]];//厕所1
    var data13 = [[11,7,595]];//room6
    var data15 = [[2,14,595]];//休闲区
    var dataA = [[11,14,3]];//下扶梯
    var dataB = [[11,1,3]];//上扶梯
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    option = {
        grid:
            {
                backgroundColor: '#96a2a0',
                show:dataN,
            },

        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 2000,
            calculable: true,

            color: ['#ff2c33','#ffd128','#284885','#fbfbff'],
            textStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },





            /*餐厅区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,100],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'餐厅',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*room5区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room5',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },




            /*厕所3*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所3',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room6*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,25],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room6',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*休闲区*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[98,37],
                symbolOffset: [8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'休闲区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            //一个区域一个人

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,6,'10985','08:59:17',2152],[6,8,'11203','10:38:35',1844],[7,7,'13869','08:56:03',2126],[10,12,'13977','10:49:02',1917],[6,12,'15366','08:46:41',1808],[7,6,'16822','11:30:29',1300],[9,3,'18164','09:45:40',2009],[9,8,'18555','09:21:14',2055],[7,5,'19107','09:42:11',1698],[9,12,'19399','11:32:01',1208],[7,9,'19331','08:48:42',1807],
                    [7,14,'14233','09:27:16',2143]],
                symbolOffset: [0,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
//两个人
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[7,14,'10233','11:27:28',1481]],
                symbolOffset: ['50%','50%'],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
        ]


    };

    myChart.setOption(option);}

function FFDay1(){
    var myChart = echarts.init(document.getElementById('FFloor'),'chalk');/*可通行：白色区域*/
    var data = [[1,12,1],[1,13,1],[1,14,1],[1,15,1],[1,16,1],[1,17,1],[1,18,1],[1,19,1],[1,20,1],[1,21,1],[1,22,1],[1,23,1],[1,24,1],[1,25,1],[1,26,1],[1,27,1],[1,28,1],[0,19,1],[2,6,1],[2,7,1],[2,8,1],[2,9,1],[2,10,1],[2,11,1],[3,6,1],[3,9,1],[3,10,1],[3,11,1],[4,6,1],[4,9,1],[5,6,1],[5,9,1],[6,6,1],[6,9,1],[7,6,1],[7,9,1],[8,6,1],[8,9,1],[9,6,1],[9,9,1],[10,6,1],[10,7,1],[10,8,1],[10,9,1],[11,6,1],[11,7,1],[11,8,1],[11,9,1],[12,1,1],[12,5,1],[12,6,1],[12,7,1],[12,8,1],[12,9,1],[12,10,1],[12,11,1],[12,12,1],[12,13,1],[12,14,1],[13,0,1],[13,1,1],[13,2,1],[13,5,1],[13,6,1],[13,7,1],[13,8,1],[13,9,1],[13,10,1],[13,11,1],[13,12,1],[13,13,1],[13,14,1],[13,15,1],[13,16,1],[13,17,1],[13,18,1],[13,19,1],[13,20,1],[13,21,1],[13,22,1],[13,23,1],[13,24,1],[13,25,1],[13,26,1],[13,27,1],[13,28,1],[14,1,1],[14,2,1],[14,3,1],[14,4,1],[14,5,1],[14,6,1],[14,7,1],[14,8,1],[14,9,1],[14,12,1],[14,13,1],[14,14,1],[14,15,1],[14,16,1],[14,17,1],[14,18,1],[15,2,1],[15,4,1],[15,5,1],[15,7,1],[15,15,1],[15,17,1],[12,15,1],[12,16,1],[12,17,1],[12,18,1],[12,19,1],[12,20,1],[12,21,1],[12,22,1],[12,23,1],[12,24,1],[12,25,1],[12,26,1],[12,27,1],[12,28,1]];
    var data1 = [[24,7,2400]];//主会场位置
    var data2 = [[17,7,2400]];//展厅位置
    var data3 = [[2,15],[4,15],[7,15]];//箭头入口的位置
    var data4 = [[5,15],[15,15],[17,15]];//箭头出口的位置
    var data5 = [[0,13]];//向右箭头
    var data6 = [[19,0]];//y轴箭头
    var data7 = [[3,3,2400]];//分会场A
    var data8 = [[3,5,2400]];//分会场B
    var data9 = [[3,7,2400]];//分会场C
    var data10 = [[3,9,2400]];//分会场D
    var data11 = [[7,7,2400]];//海报区的位置
    var data12 = [[11,5,2400]];//厕所1
    var data13 = [[11,8,2400]];//room1
    var data14 = [[11,11,2400]];//room2
    var data15 = [[4,13,2400]];//签到处
    var dataA = [[11,14,147]];//下扶梯
    var dataB = [[11,1,147]];//上扶梯
    var dataC = [[20,15,2400]];//服务台
    var dataD = [[23,15,2400]];//room3
    var dataE = [[26,15,2400]];//room4
    var dataF = [[28,15,2400]];//厕所2
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    var series=[];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    option = {
        grid:
            {
                backgroundColor:'#96a2a0',
                show:dataN,

            },
        tooltip:{
            show:true,
            formatter: function (param) {
                return '人员id：'+param.data[2]+'停留时间：'+param.data[4];
            },
        },
        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            },
            series:series,
        },
        visualMap: {
            min: 0,
            max: 20000,
            calculable: true,

            color: ['#ff2c33','#ff4932','#ff6e2d','#ffd128','#ffeb2b','#fffe1f','#efff1c','#284885','#284885','#284885','rgba(255,255,255,0.8)'],
            textStyle: {
                color: '#000000'
            }
        },

        /* visualMap: {
             type:'piecewise',
      pieces:[
          {
             min: 1,
             max: 1,
             calculable: true,
             color: ['rgba(255,255,255,0.8)'],
         },
          {
              min: 2,
              max: 2,
              calculable: true,
              color: ['#285388'],
          },
          {   min: 3,
                   max: 10000,
                   calculable: true,
                   color: ['#66ff42'],
          },
          {   min: 10000,
              max: 15000,
              calculable: true,
              color: ['#fffb0f'],
          },
          {   min: 15000,
              max: 20000,
              calculable: true,
              color: ['#ff3119'],
          }
               ]


         },*/

        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },
            /*主会场区域*/
            {
                name: '区域',
                data: data1,
                type: 'scatter',
                silent:true,
                symbol: "rectangle",
                symbolSize: [160, 124],
                symbolOffset: [-7, -6], //图标位置偏移
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                },
                // color:'rgba(165, 178, 223, 0)'
                label:{
                    show:true,
                    position:'inside',
                    formatter:'主会场',
                    color:'black',
                    fontWeight:'bold',
                }
            },
            /*展厅区域*/
            {
                name: '区域',
                data: data2,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,124],
                symbolOffset: [-7,-6], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'展厅',
                    color:'black',
                    fontWeight:'bold',

                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场A区域*/
            {
                name: '区域',
                data: data7,
                type: 'scatter',
                symbol: "rect",
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },
                silent:true,
                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场A',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场B区域*/
            {
                name: '区域',
                data: data8,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场B',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场C区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场C',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场D区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场D',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*海报区*/
            {
                name: '区域',
                data: data11,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,85],
                symbolOffset: [8, -12], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'海\n\n报\n\n区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*厕所1*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",

                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },
                silent:true,
                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所1',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,50],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room1',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room2*/
            {
                name: '区域',
                data: data14,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room2',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*签到处*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[50,25],
                symbolOffset: [-15, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'签到处',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*服务台*/
            {
                name: '区域',
                data: dataC,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'服务台',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room3*/
            {
                name: '区域',
                data: dataD,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room3',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room4*/
            {
                name: '区域',
                data: dataE,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room4',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*厕所2*/
            {
                name: '区域',
                data: dataF,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所2',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'
            },
            /*箭头入口的位置*/
            {
                name: '区域',
                data: data3,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝上.png',
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*箭头出口的位置*/
            {
                name: '区域',
                data: data4,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝下.png',
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*y轴箭头出口的位置*/
            {
                name: '区域',
                data: data6,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝上.png',
                symbolSize:[15,18],
                symbolOffset: [0,-5], //图标位置偏移
            },
            /*箭头朝右的位置*/
            {
                name: '区域',
                data: data5,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝右.png',
                symbolSize:[24,28],
                symbolOffset: [0,-2], //图标位置偏移
            },
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[7,13,'11786','10:11:43',1106],[8,2,'12265','15:39:43',1006],[12,13,'12329','10:41:24',1065],[6,4,'12426','14:03:42',12147],[6,7,'12827','10:05:36',1463],[7,11,'12952','15:05:28',1441],[22,12,'13142','10:35:09',1450],[6,9,'13818','15:10:05',1164],[28,12,'14254','15:33:56',1533],[13,14,'15065','15:33:06',1533],[6,2,'15095','14:02:02',12037],[6,5,'15171','10:18:34',685],[9,10,'16067','10:05:52',1447],[16,14,'15204','15:40:56',743],[9,3,'15863','10:14:46',953],[7,2,'18653','08:25:47',2032],[23,12,'16278','15:32:45',1594],[9,7,'16284','10:35:04',1215],[6,3,'18341','10:35:14',1455],[28,13,'19360','15:38:15',1084]],

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            //一个区域上两个不同的人


            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,11,'10148','15:12:14',1025],[6,13,'16701','10:04:48',1471],[9,11,'17884','09:47:25',804],[15,14,'13339','12:14:15',18434],[9,2,'12362','10:35:27',1402],[1,13,'18123','12:44:58',16981],[8,14,'16387','15:05:42',1427],[17,14,'16290','12:13:14',19015],[2,14,'18689','12:43:53',16866],[9,10,'13438','14:43:01',1018],[8,11,'16603','10:05:12',1507],[7,12,'17381','15:33:33',1476],[26,12,'16084','10:07:47',1352],[9,8,'19910','15:05:36',1423],[4,14,'18347','11:10:18',1801],[9,4,'18627','10:37:42',1267],[5,14,'19627','12:24:12',18097],[6,8,'19917','15:33:30',1469],[18,12,'19845','15:12:48',981],[19,1,'16111','12:25:08',17821]],
                symbolOffset: [-3,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#000000',
                        borderWidth: 1
                    }
                }
            },
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,11,'16900','10:05:17',1482],[6,13,'10331','09:02:57',1142],[9,11,'13870','10:06:02',1437],[15,14,'11165','12:43:34',17045],[9,2,'11334','14:41:56',1093],[1,13,'11462','12:21:40',18519],[8,14,'11660','15:08:31',1238],[17,14,'12573','07:31:37',16712],[2,14,'12856','12:14:22',18347],[8,11,'14491','10:34:00',1489],[7,12,'15438','10:27:29',2000],[26,12,'15970','09:01:25',1654],[9,8,'17133','15:05:57',1412],[4,14,'18059','12:44:15',17084],[9,4,'16081','10:14:18',941],[5,14,'19027','07:32:44',16635],[6,8,'19682','14:03:55',12244],[18,12,'19426','15:41:32',1067],[19,1,'11396','12:44:20',16949]],
                symbolOffset: ['20%',0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

            //一个区域上三个不同的人
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,14,'17632','10:05:12',1517],[6,6,'14180','08:28:21',1488],[9,13,'18334','15:05:43',1436],[6,5,'15171','10:18:34',685]],
                symbolOffset: [-4,-3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#000000',
                        borderWidth: 1
                    }
                }
            },
            {
                name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data: [[6,14,'17830','15:05:10',1469],[6,6,'12206','14:02:45',12404],[9,13,'18032','15:05:43',1406],[6,5,'13975','15:06:34',1375]],
                symbolOffset: ['20%', -3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,14,'10255','15:04:59',1460],[6,6,'11584','10:44:06',893],[9,13,'11806','14:43:30',989],[6,5,'13177','10:05:38',1471]],
                symbolOffset: [0,3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#000000',
                        borderWidth: 1
                    }
                }
            },

            //一个区域上四个不同的人
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'12940','15:38:22',1067],[8,13,'16386','15:37:27',992],[7,14,'15890','10:42:07',1002]],
                symbolOffset: [-4,-3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },



            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'13303','10:05:59',1460],[8,13,'17582','10:06:15',1454],[7,14,'16372','15:05:01',1448]],
                symbolOffset: ['20%', -3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#000000',
                        borderWidth: 1
                    }
                }
            },
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'10695','10:39:43',1156],[8,13,'14434','10:06:12',1437],[7,14,'11143','12:43:11',17198]],
                symbolOffset: ['50%',0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[8,13,'13107','15:33:11',1398],[7,14,'11231','11:00:05',1994]],
                symbolOffset: [-4,3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#000000',
                        borderWidth: 1
                    }
                }
            },


            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[7,14,'13982','12:13:31',18468]],
                symbolOffset: ['20%',3],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

        ]


    };

    myChart.setOption(option);}
function FFDay2(){
    var myChart = echarts.init(document.getElementById('FFloor'),'chalk');/*可通行：白色区域*/
    var data = [[1,12,1],[1,13,1],[1,14,1],[1,15,1],[1,16,1],[1,17,1],[1,18,1],[1,19,1],[1,20,1],[1,21,1],[1,22,1],[1,23,1],[1,24,1],[1,25,1],[1,26,1],[1,27,1],[1,28,1],[0,19,1],[2,6,1],[2,7,1],[2,8,1],[2,9,1],[2,10,1],[2,11,1],[3,6,1],[3,9,1],[3,10,1],[3,11,1],[4,6,1],[4,9,1],[5,6,1],[5,9,1],[6,6,1],[6,9,1],[7,6,1],[7,9,1],[8,6,1],[8,9,1],[9,6,1],[9,9,1],[10,6,1],[10,7,1],[10,8,1],[10,9,1],[11,6,1],[11,7,1],[11,8,1],[11,9,1],[12,1,1],[12,5,1],[12,6,1],[12,7,1],[12,8,1],[12,9,1],[12,10,1],[12,11,1],[12,12,1],[12,13,1],[12,14,1],[13,0,1],[13,1,1],[13,2,1],[13,5,1],[13,6,1],[13,7,1],[13,8,1],[13,9,1],[13,10,1],[13,11,1],[13,12,1],[13,13,1],[13,14,1],[13,15,1],[13,16,1],[13,17,1],[13,18,1],[13,19,1],[13,20,1],[13,21,1],[13,22,1],[13,23,1],[13,24,1],[13,25,1],[13,26,1],[13,27,1],[13,28,1],[14,1,1],[14,2,1],[14,3,1],[14,4,1],[14,5,1],[14,6,1],[14,7,1],[14,8,1],[14,9,1],[14,12,1],[14,13,1],[14,14,1],[14,15,1],[14,16,1],[14,17,1],[14,18,1],[15,2,1],[15,4,1],[15,5,1],[15,7,1],[15,15,1],[15,17,1],[12,15,1],[12,16,1],[12,17,1],[12,18,1],[12,19,1],[12,20,1],[12,21,1],[12,22,1],[12,23,1],[12,24,1],[12,25,1],[12,26,1],[12,27,1],[12,28,1]];
    var data1 = [[24,7,2400]];//主会场位置
    var data2 = [[17,7,2400]];//展厅位置
    var data3 = [[2,15],[4,15],[7,15]];//箭头入口的位置
    var data4 = [[5,15],[15,15],[17,15]];//箭头出口的位置
    var data5 = [[0,13]];//向右箭头
    var data6 = [[19,0]];//y轴箭头
    var data7 = [[3,3,2400]];//分会场A
    var data8 = [[3,5,2400]];//分会场B
    var data9 = [[3,7,2400]];//分会场C
    var data10 = [[3,9,2400]];//分会场D
    var data11 = [[7,7,2400]];//海报区的位置
    var data12 = [[11,5,2400]];//厕所1
    var data13 = [[11,8,2400]];//room1
    var data14 = [[11,11,2400]];//room2
    var data15 = [[4,13,2400]];//签到处
    var dataA = [[11,14,147]];//下扶梯
    var dataB = [[11,1,147]];//上扶梯
    var dataC = [[20,15,2400]];//服务台
    var dataD = [[23,15,2400]];//room3
    var dataE = [[26,15,2400]];//room4
    var dataF = [[28,15,2400]];//厕所2
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    var series=[];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    option = {
        grid:
            {
                backgroundColor:'#96a2a0',
                show:dataN,

            },
        tooltip:{
            show:true,
            formatter: function (param) {
                return '人员id：'+param.data[2]+'停留时间：'+param.data[4];
            },
        },
        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            },
            series:series,
        },
        visualMap: {
            min: 0,
            max: 20000,
            calculable: true,

            color: ['#ff2c33','#ff4932','#ff6e2d','#ffd128','#ffeb2b','#fffe1f','#efff1c','#284885','#284885','#284885','rgba(255,255,255,0.8)'],
            textStyle: {
                color: '#000000'
            }
        },

        /* visualMap: {
             type:'piecewise',
      pieces:[
          {
             min: 1,
             max: 1,
             calculable: true,
             color: ['rgba(255,255,255,0.8)'],
         },
          {
              min: 2,
              max: 2,
              calculable: true,
              color: ['#285388'],
          },
          {   min: 3,
                   max: 10000,
                   calculable: true,
                   color: ['#66ff42'],
          },
          {   min: 10000,
              max: 15000,
              calculable: true,
              color: ['#fffb0f'],
          },
          {   min: 15000,
              max: 20000,
              calculable: true,
              color: ['#ff3119'],
          }
               ]


         },*/

        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },
            /*主会场区域*/
            {
                name: '区域',
                data: data1,
                type: 'scatter',
                symbol: "rectangle",
                silent:true,
                symbolSize: [160, 124],
                symbolOffset: [-7, -6], //图标位置偏移
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                },
                // color:'rgba(165, 178, 223, 0)'
                label:{
                    show:true,
                    position:'inside',
                    formatter:'主会场',
                    color:'black',
                    fontWeight:'bold',
                }
            },
            /*展厅区域*/
            {
                name: '区域',
                data: data2,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,124],
                symbolOffset: [-7,-6], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'展厅',
                    color:'black',
                    fontWeight:'bold',

                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场A区域*/
            {
                name: '区域',
                data: data7,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场A',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场B区域*/
            {
                name: '区域',
                data: data8,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场B',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场C区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场C',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场D区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场D',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*海报区*/
            {
                name: '区域',
                data: data11,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,85],
                symbolOffset: [8, -12], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'海\n\n报\n\n区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*厕所1*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所1',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,50],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room1',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room2*/
            {
                name: '区域',
                data: data14,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room2',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*签到处*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[50,25],
                symbolOffset: [-15, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'签到处',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移
                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*服务台*/
            {
                name: '区域',
                data: dataC,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'服务台',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room3*/
            {
                name: '区域',
                data: dataD,
                type: 'scatter',
                symbol: "rect",

                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room3',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room4*/
            {
                name: '区域',
                data: dataE,
                type: 'scatter',
                symbol: "rect",

                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room4',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*厕所2*/
            {
                name: '区域',
                data: dataF,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所2',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'
            },
            /*箭头入口的位置*/
            {
                name: '区域',
                data: data3,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝上.png',
                silent:true,
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*箭头出口的位置*/
            {
                name: '区域',
                data: data4,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝下.png',
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*y轴箭头出口的位置*/
            {
                name: '区域',
                data: data6,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝上.png',
                symbolSize:[15,18],
                symbolOffset: [0,-5], //图标位置偏移
            },
            /*箭头朝右的位置*/
            {
                name: '区域',
                data: data5,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝右.png',
                symbolSize:[24,28],
                symbolOffset: [0,-2], //图标位置偏移
            },


            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,8,'15575','13:12:13',1206],[9,6,'11937','13:02:15',1124]],
                symbolOffset: ['50%',0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            //两个
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'17935','15:09:25',1194],[6,4,'15112','13:00:15',714],[6,7,'17092','13:10:16',993],[8,11,'18797','09:38:50',1279],
                    [6,8,'11648','10:06:32',1427],[9,3,'11501','12:56:48',571],[6,6,'17524','13:19:08',971],[9,6,'12522','13:04:07',1512],
                    [9,4,'12045','13:00:28',1041],[9,5,'14161','12:48:00',1039],[6,3,'19195','12:57:57',822],[6,11,'18118','10:06:15',1444],[9,8,'18441','13:07:06',1283],[6,5,'13175','13:03:13',1106],
                    [9,2,'18221','15:06:20',1359],[6,9,'19056','13:12:41',948],[7,11,'19351','15:12:10',1009],[6,10,'19995','13:01:06',1003],
                    [15,14,'18809','10:40:54',995],[7,14,'13982','12:13:58',18691],[9,7,'12446','12:55:14',935]
                ],
                symbolOffset: [0,'-50%'],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            //三个

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'18593','10:05:54',1465],[6,4,'15131','11:43:40',1319],[6,7,'17786','13:07:32',1107],[8,11,'16595','10:06:07',1462],
                    [6,8,'11987','15:05:09',1470],[9,3,'18046','12:49:20',699],[6,6,'17508','13:20:54',1065],[9,6,'17209','09:21:08',1071],[9,4,'13777','12:42:42',1077],[9,5,'11763','15:08:30',1279],
                    [6,3,'17032','10:17:15',784],[6,11,'13762','15:04:23',1476],[9,8,'17903','12:57:21',1288],[6,5,'12145','10:35:20',1419],
                    [9,2,'17019','12:41:57',382],[6,9,'17249','13:22:35',614],[7,11,'12707','13:04:37',432],[6,10,'19015','13:03:38',561],
                    [15,14,'13339','12:16:07',27842],[7,14,'11368','15:04:34',1475],[9,7,'12831','12:49:03',1016],[5,14,'19027','12:44:45',25864],[4,14,'18347','12:14:04',18795],[27,12,'18843','08:51:18',2121],[26,13,'18478','15:11:33',1096],[9,13,'19676','10:06:13',1446],[2,14,'18689','12:44:05',16764],[7,2,'18944','13:09:19',400],
                    [17,14,'16290','12:14:13',27966],[6,12,'13593','10:05:23',1536],[8,12,'17035','10:34:36',1483],[1,13,'18123','12:44:28',17171],[8,13,'14710','15:05:28',1461],[19,1,'16111','12:14:55',27724],[8,10,'16787','12:59:01',1578],
                    [9,9,'12617','15:36:57',982],[8,14,'12520','15:04:02',1467],[6,2,'15820','09:41:59',1770]
                ],
                symbolOffset: ['50%','50%'],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            //四个
            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[9,11,'14235','15:04:24',1475],[6,4,'12426','14:03:50',12199],[6,7,'13585','12:49:35',1464],[8,11,'15287','10:34:41',1478],
                    [6,8,'19682','14:03:38',12211],[9,3,'19904','15:39:30',1179],[6,6,'12206','14:03:13',12476],[9,6,'18958','12:42:33',1266]
                        [9,4,'12202','13:20:52',1427],[9,5,'16201','10:35:46',1403],[6,3,'14924','12:45:52',827],[6,11,'18020','15:04:46',1483],[9,8,'15207','10:06:16',1463],[6,5,'10754','13:01:53',1466],
                    [9,2,'13028','12:38:26',663],[6,9,'12539','11:26:06',1813],[7,11,'12415','10:34:08',1251],[6,10,'11661','09:42:57',1052],
                    [15,14,'11165','12:43:45',25674],[7,14,'11143','12:50:52',16517],[9,7,'17316','13:08:48',1261],[5,14,'19627','12:23:37',26932],[4,14,'18059','11:33:05',2224],[27,12,'17607','10:08:28',1331],[26,13,'15629','10:15:15',924],[9,13,'13520','15:04:59',820],[2,14,'12856','11:08:43',1876],[7,2,'12796','10:06:29',1430],
                    [17,14,'12573','12:55:03',24966],[6,12,'12382','10:05:09',1530],[8,12,'12172','15:39:12',1187],[1,13,'11462','12:21:59',18480],[8,13,'11949','13:20:41',1748],[19,1,'11396','11:38:00',1959],
                    [8,10,'14377','12:58:05',1904],[9,9,'13857','14:43:06',1003],[8,14,'11878','15:04:45',1484],[6,2,'15095','14:02:29',12170],[5,14,'19627','12:23:37',26932],[4,14,'18059','11:33:05',2224],[27,12,'17607','10:08:28',1331],[26,13,'15629','10:15:15',924],[9,13,'13520','15:04:59',820],[2,14,'12856','11:08:43',1876],[7,2,'12796','10:06:29',1430],
                    [17,14,'12573','12:55:03',24966],[6,12,'12382','10:05:09',1530],[8,12,'12172','15:39:12',1187],[1,13,'11462','12:21:59',18480],[8,13,'11949','13:20:41',1748],[19,1,'11396','11:38:00',1959],
                    [8,10,'14377','12:58:05',1904],[9,9,'13857','14:43:06',1003],[8,14,'11878','15:04:45',1484],[6,2,'15095','14:02:29',12170]],
                symbolOffset: [0,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
        ]


    };

    myChart.setOption(option);}
function FFDay3(){
    var myChart = echarts.init(document.getElementById('FFloor'),'chalk');/*可通行：白色区域*/
    var data = [[1,12,1],[1,13,1],[1,14,1],[1,15,1],[1,16,1],[1,17,1],[1,18,1],[1,19,1],[1,20,1],[1,21,1],[1,22,1],[1,23,1],[1,24,1],[1,25,1],[1,26,1],[1,27,1],[1,28,1],[0,19,1],[2,6,1],[2,7,1],[2,8,1],[2,9,1],[2,10,1],[2,11,1],[3,6,1],[3,9,1],[3,10,1],[3,11,1],[4,6,1],[4,9,1],[5,6,1],[5,9,1],[6,6,1],[6,9,1],[7,6,1],[7,9,1],[8,6,1],[8,9,1],[9,6,1],[9,9,1],[10,6,1],[10,7,1],[10,8,1],[10,9,1],[11,6,1],[11,7,1],[11,8,1],[11,9,1],[12,1,1],[12,5,1],[12,6,1],[12,7,1],[12,8,1],[12,9,1],[12,10,1],[12,11,1],[12,12,1],[12,13,1],[12,14,1],[13,0,1],[13,1,1],[13,2,1],[13,5,1],[13,6,1],[13,7,1],[13,8,1],[13,9,1],[13,10,1],[13,11,1],[13,12,1],[13,13,1],[13,14,1],[13,15,1],[13,16,1],[13,17,1],[13,18,1],[13,19,1],[13,20,1],[13,21,1],[13,22,1],[13,23,1],[13,24,1],[13,25,1],[13,26,1],[13,27,1],[13,28,1],[14,1,1],[14,2,1],[14,3,1],[14,4,1],[14,5,1],[14,6,1],[14,7,1],[14,8,1],[14,9,1],[14,12,1],[14,13,1],[14,14,1],[14,15,1],[14,16,1],[14,17,1],[14,18,1],[15,2,1],[15,4,1],[15,5,1],[15,7,1],[15,15,1],[15,17,1],[12,15,1],[12,16,1],[12,17,1],[12,18,1],[12,19,1],[12,20,1],[12,21,1],[12,22,1],[12,23,1],[12,24,1],[12,25,1],[12,26,1],[12,27,1],[12,28,1]];
    var data1 = [[24,7,2400]];//主会场位置
    var data2 = [[17,7,2400]];//展厅位置
    var data3 = [[2,15],[4,15],[7,15]];//箭头入口的位置
    var data4 = [[5,15],[15,15],[17,15]];//箭头出口的位置
    var data5 = [[0,13]];//向右箭头
    var data6 = [[19,0]];//y轴箭头
    var data7 = [[3,3,2400]];//分会场A
    var data8 = [[3,5,2400]];//分会场B
    var data9 = [[3,7,2400]];//分会场C
    var data10 = [[3,9,2400]];//分会场D
    var data11 = [[7,7,2400]];//海报区的位置
    var data12 = [[11,5,2400]];//厕所1
    var data13 = [[11,8,2400]];//room1
    var data14 = [[11,11,2400]];//room2
    var data15 = [[4,13,2400]];//签到处
    var dataA = [[11,14,147]];//下扶梯
    var dataB = [[11,1,147]];//上扶梯
    var dataC = [[20,15,2400]];//服务台
    var dataD = [[23,15,2400]];//room3
    var dataE = [[26,15,2400]];//room4
    var dataF = [[28,15,2400]];//厕所2
    var dataN = [[0,0,1],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1],[0,10,1],[0,11,1],[0,12,1],[0,13,1],[0,14,1],[0,15,1],[0,16,1],[0,17,1],[0,18,1],[0,19,1],[0,21,1],[0,22,1],[0,23,1],[0,24,1],[0,25,1],[0,26,1],[0,27,1],[0,28,1],[0,29,1],[1,0,1],[1,1,1],[1,2,1],[1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],[1,29,1],[2,0,1],[3,0,1],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[14,0,1],[15,0,1],[10,1,1],[10,2,1],[10,3,1],[10,4,1],[10,5,1],[11,1,1],[11,2,1],[11,3,1],[11,4,1],[11,5,1],[2,12,1],[3,12,1],[4,12,1],[5,12,1],[6,12,1],[7,12,1],[8,12,1],[9,12,1],[10,12,1],[11,12,1],[2,13,1],[3,13,1],[4,13,1],[5,13,1],[6,13,1],[7,13,1],[8,13,1],[9,13,1],[10,13,1],[11,13,1],[2,14,1],[3,14,1],[4,14,1],[5,14,1],[6,14,1],[7,14,1],[8,14,1],[9,14,1],[10,14,1],[11,14,1],[2,29,1],[3,29,1],[4,29,1],[5,29,1],[6,29,1],[7,29,1],[8,29,1],[9,29,1],[10,29,1],[11,29,1],[12,29,1],[13,29,1],[14,29,1],[15,29,1],[15,1,1],[15,3,1],[15,6,1],[15,8,1],[15,9,1],[15,10,1],[15,11,1],[15,12,1],[15,13,1],[15,14,1],[15,16,1],[15,18,1]];
    var series=[];
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    option = {
        grid:
            {
                backgroundColor:'#96a2a0',
                show:dataN,

            },
        tooltip:{
            show:true,
            formatter: function (param) {
                return '人员id：'+param.data[2]+'停留时间：'+param.data[4];
            },
        },
        xAxis: {//图中的y坐标
            show:true,
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
            //网格样式
            name:'y',
            axisTick: {
                show: false,

            },
            axisLabel:{
                show:true,
                interval:"auto",
                margin:8,
            },
            nameLocation:'end',
            position:'top',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:false,//是否反向坐标

            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            }
        },
        yAxis: {//图中的x坐标
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
            //网格样式
            name:'x',
            nameLocation:'end',
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                interval:"auto",
            },
            position:'bottom',//x轴位于grid的上方还是下方，默认为bottom在下方
            inverse:true,//是否反向坐标
            splitLine: {
                show: true,
                interval: 0,
                lineStyle:{
                    color: ['black'],
                    width: 0.5,
                    type: 'solid'
                }
            },
            series:series,
        },
        visualMap: {
            min: 0,
            max: 20000,
            calculable: true,

            color: ['#ff2c33','#ff4932','#ff6e2d','#ffd128','#ffeb2b','#fffe1f','#efff1c','#284885','#284885','#284885','rgba(255,255,255,0.8)'],
            textStyle: {
                color: '#000000'
            }
        },

        /* visualMap: {
             type:'piecewise',
      pieces:[
          {
             min: 1,
             max: 1,
             calculable: true,
             color: ['rgba(255,255,255,0.8)'],
         },
          {
              min: 2,
              max: 2,
              calculable: true,
              color: ['#285388'],
          },
          {   min: 3,
                   max: 10000,
                   calculable: true,
                   color: ['#66ff42'],
          },
          {   min: 10000,
              max: 15000,
              calculable: true,
              color: ['#fffb0f'],
          },
          {   min: 15000,
              max: 20000,
              calculable: true,
              color: ['#ff3119'],
          }
               ]


         },*/

        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(1, 0, 0, 0)'
                }
            }
        },
            /*主会场区域*/
            {
                name: '区域',
                data: data1,
                type: 'scatter',
                symbol: "rectangle",
                silent:true,
                symbolSize: [160, 124],
                symbolOffset: [-7, -6], //图标位置偏移
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'black',
                    }
                },
                // color:'rgba(165, 178, 223, 0)'
                label:{
                    show:true,
                    position:'inside',
                    formatter:'主会场',
                    color:'black',
                    fontWeight:'bold',
                }
            },
            /*展厅区域*/
            {
                name: '区域',
                data: data2,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,124],
                symbolOffset: [-7,-6], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'展厅',
                    color:'black',
                    fontWeight:'bold',

                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场A区域*/
            {
                name: '区域',
                data: data7,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场A',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场B区域*/
            {
                name: '区域',
                data: data8,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场B',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场C区域*/
            {
                name: '区域',
                data: data9,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场C',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*分会场D区域*/
            {
                name: '区域',
                data: data10,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[78,25],
                symbolOffset: [0, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'分会场D',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*海报区*/
            {
                name: '区域',
                data: data11,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,85],
                symbolOffset: [8, -12], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'海\n\n报\n\n区',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },

            /*厕所1*/
            {
                name: '区域',
                data: data12,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所1',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room*/
            {
                name: '区域',
                data: data13,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,50],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room1',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room2*/
            {
                name: '区域',
                data: data14,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room2',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*签到处*/
            {
                name: '区域',
                data: data15,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {
                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[50,25],
                symbolOffset: [-15, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'签到处',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataA,
                type: 'scatter',
                symbol: "rect",
                color: 'rgba(149,82,17,0.8)',
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移
                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*扶梯*/
            {
                name: '区域',
                data: dataB,
                type: 'scatter',
                symbol: "rect",
                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[30,13],
                symbolOffset: [-8, 0], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'扶梯',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*服务台*/
            {
                name: '区域',
                data: dataC,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'服务台',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room3*/
            {
                name: '区域',
                data: dataD,
                type: 'scatter',
                symbol: "rect",

                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[64,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room3',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*room4*/
            {
                name: '区域',
                data: dataE,
                type: 'scatter',
                symbol: "rect",

                silent:true,
                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'room4',
                    color:'black',
                    fontWeight:'normal',
                }
                // color:'rgba(165, 178, 223, 0)'

            },
            /*厕所2*/
            {
                name: '区域',
                data: dataF,
                type: 'scatter',
                symbol: "rect",
                silent:true,

                itemStyle: {


                    borderWidth:1,
                    borderColor:'black',
                },

                symbolKeepAspect:true,
                symbolSize:[33,26],
                symbolOffset: [-8, -5], //图标位置偏移

                label:{
                    show:true,
                    position:'inside',
                    formatter:'厕所2',
                    color:'black',
                    fontWeight:'bold',
                }
                // color:'rgba(165, 178, 223, 0)'
            },
            /*箭头入口的位置*/
            {
                name: '区域',
                data: data3,//箭头
                type: 'scatter',
                symbol: 'image://../箭头朝上.png',
                silent:true,
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*箭头出口的位置*/
            {
                name: '区域',
                data: data4,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝下.png',
                symbolSize:[15,18],
                symbolOffset: [0,'20%'], //图标位置偏移
            },
            /*y轴箭头出口的位置*/
            {
                name: '区域',
                data: data6,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝上.png',
                symbolSize:[15,18],
                symbolOffset: [0,-5], //图标位置偏移
            },
            /*箭头朝右的位置*/
            {
                name: '区域',
                data: data5,//箭头
                type: 'scatter',
                silent:true,
                symbol: 'image://../箭头朝右.png',
                symbolSize:[24,28],
                symbolOffset: [0,-2], //图标位置偏移
            },
            /*一个区域上两个不同的人*/

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,9,'13752','10:18:49',1910],[9,7,'14423','11:33:00',699],[7,11,'14879','11:01:07',1922],[28,13,'18299','09:01:02',2137],[27,13,'18433','08:40:55',2024],
                    [6,3,'19469','11:27:48',751],[6,6,'12206','09:33:00',5259],[7,14,'13982','08:03:05',10624],[15,14,'13339','10:22:05',2314],[19,1,'16111','08:07:20',10379],[1,13,'18123','10:53:54',2165],[8,14,'14930','09:44:22',1777],[6,4,'17923','10:47:13',1986],
                    [17,14,'16290','08:03:59',10580],[2,14,'18689','08:02:29',12450],[6,2,'15375','10:32:56',1993],[4,14,'18347','08:02:33',10676],[5,14,'19627','08:02:32',10657]],
                symbolOffset: [0,0],
                symbolSize: 8,

                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },

            { name: 'id',
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                data:[[6,3,'10192','11:26:26',1543],[6,6,'11085','11:32:17',532],[7,14,'11143','10:56:57',1972],[15,14,'11165','08:07:33',12186],[19,1,'11396','08:04:26',12373],[1,13,'11462','08:10:30',10179],[8,14,'11666','09:30:36',2143],['12426',6,4,'09:35:06',5123],
                    [17,14,'12573','08:02:50',12419],[2,14,'12856','08:06:05',10454],[6,2,'15095','09:33:22',5217],[4,14,'18059','08:03:03',12416],[5,14,'19027','08:03:02',12417]],
                symbolOffset: ['50%','50%'],
                symbolSize: 8,

                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                },

        ]


    };

    myChart.setOption(option);}

document.getElementById('AbnormalChart').onclick = function () {
    document.getElementById('cover').style.display = 'block';
    document.getElementById('background').style.display = 'block';
    document.getElementById('cover').innerHTML = "<div id ='FFloor' style='width:600px;height:320px;'></div>" +
        "<div id ='SFloor' style='width:600px;height:320px;'></div>"+
        "<div><button type='button' class='B' id='Day_1'>Day1</button>" +
        "    <button type='button' class='B' id='Day_2'>Day2</button>" +
        "    <button type='button' class='B' id='Day_3'>Day3</button></div>";

    var arr = document.getElementsByClassName('B');
    for (var i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
            if (this.id == 'Day_1') {
                FFDay1();
                SFDay1()
            } else if (this.id == 'Day_2') {
                FFDay2();
                SFDay2()
            } else if (this.id == 'Day_3') {
                FFDay3();
                SFDay3()
            }
        };
    }

    FFDay1();
    SFDay1()
};