
var myChart = echarts.init(document.getElementById('Rresult'),'chalk');
var lineStyle1 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#d91625',
    }
};
var lineStyle2 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#d9d911',
    }
};
var lineStyle3 = {
    normal: {
        width: 1,
        opacity: 0.5,
        color:'#36d914',
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
        color:'#ff899f',
    }
};
option = {
    parallelAxis: [
        {
            dim: 0,
            name: '人员分类',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            type: 'category',
            data: ["会场人员", "特邀专家", "展厅人员", "工作人员","餐饮人员"]
        },
        {
            dim: 1,
            name: 'Area1',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            type: 'category',
            data: ["room5", "room6", "展厅", "主会场"]
        },
        {
            dim: 2,
            name: 'Area2',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            type: 'category',
            data: ["海报区", "餐厅", "出入口，签到处"]
        },
        {
            dim: 3,
            name: 'Aera3',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            type: 'category',
            data: ["休闲区", "room1\n\nroom3", "room2\n\nroom4", "主会场"]
        },
        {
            dim: 4,
            name: 'Area4',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            type: 'category',
            data: ["展厅", "分会场"]
        }
    ],
    series:[{

        type: 'parallel',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12
        },
        lineStyle: {
            normal:{
                width: 4,
                color:'#0fde32',
            }

        },
        data: [
            ["会场人员","主会场", "餐厅", "休闲区", "分会场"],

        ]
    },
        {

            type: 'parallel',
            lineStyle: {
                normal:{
                    width: 4,
                    color:'#181bde',
                }

            },
            data: [

                ["特邀专家","主会场", "餐厅", "room2\n\nroom4", "分会场"],

            ]
        },
        {

            type: 'parallel',
            lineStyle: {
                normal:{
                    width: 4,
                    color:'#eb3fff',
                }

            },
            data: [

                ["展厅人员","展厅", "海报区", "主会场"],

            ]
        },
        {

            type: 'parallel',
            lineStyle: {
                normal:{
                    width: 4,
                    color:'#8588ff',
                }

            },
            data: [

                ["工作人员","room6", "出入口，签到处", "主会场", "分会场"],

            ]
        },
        {

            type: 'parallel',
            lineStyle: {
                normal:{
                    width: 4,
                    color:'#fff3f1',
                }

            },
            data: [

                ["餐饮人员","room5", "餐厅", "room1\n\nroom3"]
            ]
        }]
};
myChart.setOption(option);