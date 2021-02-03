
var myChart = echarts.init(document.getElementById('Route'),'chalk');
// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2


var schema = [
    {name: 'date', index: 0, },
    {name: 'AQIindex', index: 1,},
    {name: 'PM25', index: 2,},
    {name: 'PM10', index: 3, },
    {name: 'CO', index: 4, },
    {name: 'NO2', index: 5, },
    {name: 'SO2', index: 6, },
    {name: '等级', index: 7, },
    {name: '等级', index: 7, },
    {name: '等级', index: 7, },
    {name: '等级', index: 7, }
];

var lineStyle1 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#00efff',
    }
};
var lineStyle2 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#ffff11',
    }
};
var lineStyle3 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#02ff00',
    }
};
var lineStyle4= {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#d944ce',
    }
};
var lineStyle5= {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#ffafa9',
    }
};
var lineStyle6= {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#f9abff',
    }
};
var lineStyle7= {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#ffffb6',
    }
};
var data1=['服务台', '空白','room6','主会场','分会场','room2','room4','餐厅','休闲区','room5','room1','room3','展厅','海报区'];


option = {
    legend: {
        bottom: 30,
        data: ['参会人员', '特邀专家', '会场工作者','其他工作者','餐饮人员','展厅人员','游客'],
        itemGap: 20,
        textStyle: {
            color: '#71abff',
            fontSize: 14
        },
        selected:{
            '参会人员':true,
            '特邀专家':false,
            '会场工作者':false,
            '其他工作者':false,
            '餐饮人员':false,
                '展厅人员':false,
                    '游客':false,
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj[0].seriesName + ' ' + value[0] + '日期：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>'
                + schema[7].text + '：' + value[7] + '<br>'
                + schema[8].text + '：' + value[8] + '<br>'
                + schema[9].text + '：' + value[9] + '<br>'
                + schema[10].text + '：' + value[10] + '<br>';
        }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
        {dim: 0, name: schema[0].text,
            type: 'category', data:data1           },
        {dim: 1, name: schema[1].text,
            type: 'category', data:data1           },
        {dim: 2, name: schema[2].text,
            type: 'category', data: data1      },
        {dim: 3, name: schema[3].text,
            type: 'category', data: data1         },
        {dim: 4, name: schema[4].text,
            type: 'category', data: data1      },
        {dim: 5, name: schema[5].text,
            type: 'category', data: data1   },
        {dim: 6, name: schema[6].text,
            type: 'category', data: data1       },
        {dim: 7, name: schema[7].text,
            type: 'category', data: data1      },
        {dim: 8, name: schema[8].text,
            type: 'category', data:data1      },
        {dim: 9, name: schema[9].text,
            type: 'category', data:data1         },],
    /*   visualMap: {
           show: false,
           min: 0,
           max: 150,
           dimension: 2,
           inRange: {
               color: ['#d91625','#08106e','#1aff1c'].reverse(),
               // colorAlpha: [0, 1]
           },

       },*/
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 10,
            nameTextStyle: {
                color: "rgba(225, 42, 66, 0.5)",
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(225, 225, 225, 0.5)"
                }
            }
        }
    },
    series: [
        {
            name: '参会人员',
            type: 'parallel',
            lineStyle: lineStyle1,
            data: Datacanhuirenyuan
        },
        {
            name: '特邀专家',
            type: 'parallel',

            lineStyle: lineStyle2,
            data: Datazhuanjia
        },
        {
            name: '会场工作者',
            type: 'parallel',
            lineStyle: lineStyle3,
            data: Dataworker1
        },
        {
            name: '其他工作者',
            type: 'parallel',
            lineStyle: lineStyle4,
            data: Dataworker2
        },
        {
            name: '餐饮人员',
            type: 'parallel',
            lineStyle: lineStyle5,
            data:Dataworker3
        },
        {
            name: '展厅人员',
            type: 'parallel',
            lineStyle: lineStyle6,
            data:Dataexhi
        },
        {
            name: '游客',
            type: 'parallel',
            lineStyle: lineStyle7,
            data: Datavisitor
        }
    ]
};



myChart.setOption(option);
