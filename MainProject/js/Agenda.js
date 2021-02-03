function DrawAgenda(data,time1,time2) {


    // 将标准时间转换为时间戳
    function time_to_sec(time) {
        var s;
        var hour = time.split(':')[0];
        var min = time.split(':')[1];
        var sec = time.split(':')[2];

        s = Number(hour * 3600) + Number(min * 60) + Number(sec);
        return s;
    }

    //将时间戳转换成标准时间
    function sec_to_time(s) {
        var t;
        if (s > -1) {
            var hour = Math.floor(s / 3600);
            var min = Math.floor(s / 60) % 60;
            var sec = s % 60;
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
            if (min < 10) {
                t += "0";
            }
            t += min + ":";
            if (sec < 10) {
                t += "0";
            }
            t += sec.toFixed(0);
        }
        // console.log(t);
        return t;
    }

    var startTime = time_to_sec(time1);
    var endTime = time_to_sec(time2);
    var person = [];
    var seriesdata1 = [];
    var seriesdata2 = [];
    var seriesdata3 = [];
    var seriesdata4 = [];
    var seriesdata5 = [];

    $.each(data, function (index, items) {
        person.push(items.id);
        var arr = items.properties;
        arr = $.parseJSON(arr);
        // console.log(arr);

        var baseTime = time_to_sec(arr[0].startTime);
        // console.log(baseTime);
        for (var i = 0; i < arr.length; i++) {
            var area = arr[i].item;
            var duration = arr[i].quantity;
            var bgColor;
            switch (arr[i].color) {
                case 13://主会场颜色
                    bgColor = '#ff290e';
                    seriesdata1.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,9,0,.4)';
                    break;
                case 2://分会场A得color
                    bgColor = '#fff408';
                    seriesdata2.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,113,2,.4)';
                    break;
                case 3://分会场B得颜色
                    bgColor = '#51ff19';
                    seriesdata3.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,115,115,.4)';
                    break;
                case 4://分会场C得颜色
                    bgColor = '#ffffff';
                    seriesdata4.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,207,107,.4)';
                    break;
                case 5://分会场D得颜色
                    bgColor = '#ffd2ef';
                    seriesdata5.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                // 'rgba(0,187,255,.4)';
            }

        }
    });
    var Agenda = echarts.init(document.getElementById('Agenda'), 'vintage');

    function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
        var height = api.size([0, 1])[1] * 1;
        var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });

        return rectShape && {
            type: 'rect',
            shape: rectShape,
            style: api.style()
        };
    }

    // console.log(seriesdata[2].name);
    var option = {
        tooltip: {
            formatter: function (params) {
                return params.marker + params.name + ": " + sec_to_time(params.value[3]);

            }
        },
        legend: {
            top:25,
            left: 'center',
            data: ['主会场', '分会场A', '分会场B', '分会场C', '分会场D'],
            textStyle:{
                color:'#fff',
                      },
        },
        title: {
            text: 'Day1日程安排',
            left: 'left',
            textStyle: {
                color:'#fff'}
        },

        grid: {
            // width:300,
            height: 250
        },
        xAxis: {
            min: startTime,
            max: endTime,
            scale: true,
            axisLabel: {
                formatter: function (val) {
                    return sec_to_time(val);
                }
            }
        },
        yAxis: {
            type: 'category',
            data: person,
        },
        dataZoom: [
            {
                type: 'inside',
                yAxisIndex: [0],
            },
            {
                type: 'inside',
                xAxisIndex: [0],
            },
            {

                type: 'slider',
                show: true,
                height: 20,
                xAxisIndex: [0],
                start: 0,
                end: 100,
                top: 350,
                labelFormatter: function (value) {
                    return sec_to_time(value);
                },
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
            {
                filter: 'empty',
                type: 'slider',
                show: true,
                yAxisIndex: 0,
                left: '93%',
                width: 20,
                start: 0,
                end: 100,
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
        ],

        series: [{
            type: 'custom',
            name: '主会场',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            encode: {
                x: [1, 2],
                y: 0
            },
            data: seriesdata1,
        },
            {
                type: 'custom',
                name: '分会场A',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata2,
            },
            {
                type: 'custom',
                name: '分会场B',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata3,
            },
            {
                type: 'custom',
                name: '分会场C',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata4,
            },
            {
                type: 'custom',
                name: '分会场D',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata5,
            }
        ],
    };

    Agenda.setOption(option);
}
function DrawAgenda1(data,time1,time2) {


    // 将标准时间转换为时间戳
    function time_to_sec(time) {
        var s;
        var hour = time.split(':')[0];
        var min = time.split(':')[1];
        var sec = time.split(':')[2];

        s = Number(hour * 3600) + Number(min * 60) + Number(sec);
        return s;
    }

    //将时间戳转换成标准时间
    function sec_to_time(s) {
        var t;
        if (s > -1) {
            var hour = Math.floor(s / 3600);
            var min = Math.floor(s / 60) % 60;
            var sec = s % 60;
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
            if (min < 10) {
                t += "0";
            }
            t += min + ":";
            if (sec < 10) {
                t += "0";
            }
            t += sec.toFixed(0);
        }
        // console.log(t);
        return t;
    }

    var startTime = time_to_sec(time1);
    var endTime = time_to_sec(time2);
    var person = [];
    var seriesdata1 = [];
    var seriesdata2 = [];
    var seriesdata3 = [];
    var seriesdata4 = [];
    var seriesdata5 = [];


    $.each(data, function (index, items) {
        person.push(items.id);
        var arr = items.properties;
        arr = $.parseJSON(arr);
        // console.log(arr);

        var baseTime = time_to_sec(arr[0].startTime);
        // console.log(baseTime);
        for (var i = 0; i < arr.length; i++) {
            var area = arr[i].item;
            var duration = arr[i].quantity;
            var bgColor;
            switch (arr[i].color) {
                case 13://主会场颜色
                    bgColor = '#ff290e';
                    seriesdata1.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,9,0,.4)';
                    break;
                case 2://分会场A得color
                    bgColor = '#fff408';
                    seriesdata2.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,113,2,.4)';
                    break;
                case 3://分会场B得颜色
                    bgColor = '#51ff19';
                    seriesdata3.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,115,115,.4)';
                    break;
                case 4://分会场C得颜色
                    bgColor = '#ffffff';
                    seriesdata4.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,207,107,.4)';
                    break;
                case 5://分会场D得颜色
                    bgColor = '#ffd2ef';
                    seriesdata5.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                // 'rgba(0,187,255,.4)';
            }

        }
    });
    var Agenda = echarts.init(document.getElementById('Agenda'), 'vintage');

    function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
        var height = api.size([0, 1])[1] * 1;
        var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });

        return rectShape && {
            type: 'rect',
            shape: rectShape,
            style: api.style()
        };
    }

    // console.log(seriesdata[2].name);
    var option = {
        tooltip: {
            formatter: function (params) {
                return params.marker + params.name + ": " + sec_to_time(params.value[3]);
            }
        },
        legend: {
            top:25,
            left: 'center',
            data: ['主会场', '分会场A', '分会场B', '分会场C', '分会场D'],
        },
        title: {
            text: 'Day2日程安排',
            left: 'left',
            textStyle: {
                color:'#fff'}
        },

        grid: {
            // width:300,
            height: 250
        },
        xAxis: {
            min: startTime,
            max: endTime,
            scale: true,
            axisLabel: {
                formatter: function (val) {
                    return sec_to_time(val);
                }
            }
        },
        yAxis: {
            type: 'category',
            data: person,
        },
        dataZoom: [
            {
                type: 'inside',
                yAxisIndex: [0],
            },
            {
                type: 'inside',
                xAxisIndex: [0],
            },
            {

                type: 'slider',
                show: true,
                height: 20,
                xAxisIndex: [0],
                start: 0,
                end: 100,
                top: 350,
                labelFormatter: function (value) {
                    return sec_to_time(value);
                },
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
            {
                filter: 'empty',
                type: 'slider',
                show: true,
                yAxisIndex: 0,
                left: '93%',
                width: 20,
                start: 0,
                end: 100,
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
        ],

        series: [{
            type: 'custom',
            name: '主会场',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            encode: {
                x: [1, 2],
                y: 0
            },
            data: seriesdata1,
        },
            {
                type: 'custom',
                name: '分会场A',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata2,
            },
            {
                type: 'custom',
                name: '分会场B',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata3,
            },
            {
                type: 'custom',
                name: '分会场C',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata4,
            },
            {
                type: 'custom',
                name: '分会场D',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata5,
            }
        ],
    };

    Agenda.setOption(option);
}
function DrawAgenda2(data,time1,time2) {


    // 将标准时间转换为时间戳
    function time_to_sec(time) {
        var s;
        var hour = time.split(':')[0];
        var min = time.split(':')[1];
        var sec = time.split(':')[2];

        s = Number(hour * 3600) + Number(min * 60) + Number(sec);
        return s;
    }

    //将时间戳转换成标准时间
    function sec_to_time(s) {
        var t;
        if (s > -1) {
            var hour = Math.floor(s / 3600);
            var min = Math.floor(s / 60) % 60;
            var sec = s % 60;
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
            if (min < 10) {
                t += "0";
            }
            t += min + ":";
            if (sec < 10) {
                t += "0";
            }
            t += sec.toFixed(0);
        }
        // console.log(t);
        return t;
    }

    var startTime = time_to_sec(time1);
    var endTime = time_to_sec(time2);
    var person = [];
    var seriesdata1 = [];
    var seriesdata2 = [];
    var seriesdata3 = [];
    var seriesdata4 = [];
    var seriesdata5 = [];


    $.each(data, function (index, items) {
        person.push(items.id);
        var arr = items.properties;
        arr = $.parseJSON(arr);
        // console.log(arr);

        var baseTime = time_to_sec(arr[0].startTime);
        // console.log(baseTime);
        for (var i = 0; i < arr.length; i++) {
            var area = arr[i].item;
            var duration = arr[i].quantity;
            var bgColor;
            switch (arr[i].color) {
                case 13://主会场颜色
                    bgColor = '#ff290e';
                    seriesdata1.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,9,0,.4)';
                    break;
                case 2://分会场A得color
                    bgColor = '#fff408';
                    seriesdata2.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,113,2,.4)';
                    break;
                case 3://分会场B得颜色
                    bgColor = '#51ff19';
                    seriesdata3.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,115,115,.4)';
                    break;
                case 4://分会场C得颜色
                    bgColor = '#ffffff';
                    seriesdata4.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                    // 'rgba(255,207,107,.4)';
                    break;
                case 5://分会场D得颜色
                    bgColor = '#ffd2ef';
                    seriesdata5.push({
                        name: area,
                        value: [
                            index,
                            baseTime,
                            baseTime += duration,
                            duration
                        ],
                        itemStyle: {
                            normal: {
                                color: bgColor,
                            }
                        }
                    });
                    if (i != arr.length - 1) {
                        baseTime += time_to_sec(arr[i + 1].startTime) - time_to_sec(arr[i].endTime);
                    }
                // 'rgba(0,187,255,.4)';
            }

        }
    });
    var Agenda = echarts.init(document.getElementById('Agenda'), 'vintage');

    function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
        var height = api.size([0, 1])[1] * 1;
        var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });

        return rectShape && {
            type: 'rect',
            shape: rectShape,
            style: api.style()
        };
    }

    // console.log(seriesdata[2].name);
    var option = {
        tooltip: {
            formatter: function (params) {
                return params.marker + params.name + ": " + sec_to_time(params.value[3]);
            }
        },
        legend: {
            top:25,
            left: 'center',
            data: ['主会场', '分会场A', '分会场B', '分会场C', '分会场D'],
        },
        title: {
            text: 'Day3日程安排',
            left: 'left',
            textStyle: {
                color:'#fff'}
        },

        grid: {
            // width:300,
            height: 250
        },
        xAxis: {
            min: startTime,
            max: endTime,
            scale: true,
            axisLabel: {
                formatter: function (val) {
                    return sec_to_time(val);
                }
            }
        },
        yAxis: {
            type: 'category',
            data: person,
        },
        dataZoom: [
            {
                type: 'inside',
                yAxisIndex: [0],
            },
            {
                type: 'inside',
                xAxisIndex: [0],
            },
            {

                type: 'slider',
                show: true,
                height: 20,
                xAxisIndex: [0],
                start: 0,
                end: 100,
                top: 350,
                labelFormatter: function (value) {
                    return sec_to_time(value);
                },
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
            {
                filter: 'empty',
                type: 'slider',
                show: true,
                yAxisIndex: 0,
                left: '93%',
                width: 20,
                start: 0,
                end: 100,
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
            },
        ],

        series: [{
            type: 'custom',
            name: '主会场',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            encode: {
                x: [1, 2],
                y: 0
            },
            data: seriesdata1,
        },
            {
                type: 'custom',
                name: '分会场A',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata2,
            },
            {
                type: 'custom',
                name: '分会场B',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata3,
            },
            {
                type: 'custom',
                name: '分会场C',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata4,
            },
            {
                type: 'custom',
                name: '分会场D',
                renderItem: renderItem,
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                encode: {
                    x: [1, 2],
                    y: 0
                },
                data: seriesdata5,
            }
        ],
    };

    Agenda.setOption(option);
}
function AgendaDay1() {
    $.getJSON('data/Agenda/Day1.json', function (data) {
        var time1 = "7:00:00";
        var time2 = "18:00:00";
        DrawAgenda(data,time1,time2);
    })
}

function AgendaDay2(){
    $.getJSON('data/Agenda/Day2.json', function (data) {
        var time1 = "7:30:00";
        var time2 = "18:01:00";
        DrawAgenda1(data,time1,time2);
    })
}

function AgendaDay3(){
    $.getJSON('data/Agenda/Day3.json', function (data) {
        var time1 = "7:31:00";
        var time2 = "12:32:00";
        DrawAgenda2(data,time1,time2);
    })
}

AgendaDay1();

