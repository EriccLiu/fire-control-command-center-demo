$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();

    //echart_1 消防站及水源统计
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_left_1'));
        var station_data = ["永久站：10", "小型站：50", "微型站：200"];
        var water_data = ['水鹤:230', '天然水源:1200', '其他:3009'];
        option_1 = {
        	//标题组件
        	title:{
        		//组件ID
        		id:'left_1_title',
        		//显示标题组件
        		show: true,
        		left:'auto',
        		top:'auto',
        		right:'auto',
        		bottom:'auto',
        	},
        	//图里组建，展示不同系列标记、颜色、名字
        	legend: {
        		type:'plain',
        		id:'left_1_legend',
        		show:true,
        		left:'auto',
        		top:'20',
        		right:'auto',
        		bottom:'auto',
        		width:'auto',
        		height:'auto',
        		x: 'center',
                y: '15%',
                data: [station_data[0], station_data[1], station_data[2], water_data[0], water_data[1], water_data[2]],
    			icon:'circle',
                textStyle: {
                    color: '#fff',
                },
            },
            tooltip: {
            	trigger: 'item',
                formatter: "{a} <br/>{b} : {c}"
            },
            calculable: true,
            series: [{
                name: '消防站数量分析图',
                type: 'pie',
                //与图例联动，hover时高亮（线）
                legendHoverLink: false,
                //hover在扇区时联动高亮（图偏移）
                hoverAnimation:true,
                //高亮扇区偏移
                hoverOffset:15,
                //顺时针排布
                clockwise:true,
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [20, 80],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        position: 'outside',
                        formatter: '{b}',
                        color:'#fff',
                    },
                    emphasis: {
                        show: true,
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length1: 1,
                        length2: 5,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        value: 50,
                        name: station_data[0],
                        itemStyle: {
                            normal: {
                                color: '#f845f1'
                            }
                        }
                    },
                    {
                        value: 100,
                        name: station_data[1],
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 200,
                        name: station_data[2],
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: water_data[0],
                        hoverOffset: 0,
                        itemStyle: {
                            normal: {
                                color: '#f845f1'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: water_data[1],
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    	
                    },
                    {
                        value: 0,
                        name: water_data[2],
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },

                ],
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option_1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2湖南省地图
    function echart_2() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_2'));
           function showProvince() {
                   myChart.setOption(option = {
                       // backgroundColor: '#ffffff',
                       visualMap: {
                           show: false,
                           min: 0,
                           max: 100,
                           left: 'left',
                           top: 'bottom',
                           text: ['高', '低'], // 文本，默认为数值文本
                           calculable: true,
                           inRange: {
                               color: ['yellow', 'lightskyblue', 'orangered']
                           }
                       },
                       series: [{
                           type: 'map',
                           mapType: 'hunan',
                           roam: true,
                           label: {
                               normal: {
                                   show: true
                               },
                               emphasis: {
                                   textStyle: {
                                       color: '#fff'
                                   }
                               }
                           },
                           itemStyle: {
                               normal: {
                                   borderColor: '#389BB7',
                                   areaColor: '#fff',
                               },
                               emphasis: {
                                   areaColor: '#389BB7',
                                   borderWidth: 0
                               }
                           },
                           animation: false,
                           data: [{
                               name: '长沙市',
                               value:  100
                           }, {
                               name: '株洲市',
                               value: 96
                           }, {
                               name: '湘潭市',
                               value: 98
                           }, {
                               name: '衡阳市',
                               value: 80
                           }, {
                               name: '邵阳市',
                               value: 88
                           }, {
                               name: '岳阳市',
                               value: 79
                           }, {
                               name: '常德市',
                               value: 77,
                           }, {
                               name: '张家界市',
                               value: 33
                           }, {
                               name: '益阳市',
                               value: 69,
                           }, {
                               name: '郴州市',
                               value: 66
                           }, {
                               name: '永州市',
                               value: 22
                           },{
                                name: '娄底市',
                                value: 51
                           },{
                                name: '湘西土家族苗族自治州',
                                value: 44
                           },{
                                name: '怀化市',
                                value: 9
                           }]
                       }]
                   });
           }
   
           var currentIdx = 0;
           showProvince();
           // 使用刚指定的配置项和数据显示图表。
           window.addEventListener("resize", function () {
               myChart.resize();
           });
    }

    // echart_map中国地图
    function echart_map() {
    	var map = new AMap.Map('container',{
    		resizeEnable: true,
    		zoom: 15,
    	});
    	
    	AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition:'RB',    //定位按钮的停靠位置
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

            });
            map.addControl(geolocation);
            
            geolocation.getCurrentPosition(function(status,result){ });
            
        });

    }

    //echart_3货物周转量
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['铁路货物','国家铁路货物','地方铁路货物','合资铁路货物','公路货物','水运货物'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012年','2013年','2014年','2015年','2016年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '亿吨公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'铁路货物',
                    type:'line',
                    data:[3961.88, 4233.63, 4183.14, 3633.01, 3704.47]
                },
                {
                    name:'国家铁路货物',
                    type:'line',
                    data:[3374.76, 3364.76, 3274.76, 3371.82, 3259.87]
                },
                {
                    name:'地方铁路货物',
                    type:'line',
                    data:[14.77, 15.17, 13.17, 14.56, 15.84]
                },
                {
                    name:'合资铁路货物',
                    type:'line',
                    data:[686.17,847.26,895.22,865.28,886.72]
                },
                {
                    name:'公路货物',
                    type:'line',
                    data:[6133.47, 6577.89, 7019.56,6821.48,7294.59]
                },
                {
                    name:'水运货物',
                    type:'line',
                    data:[509.60, 862.54, 1481.77,1552.79,1333.62]
                }
            ]
        };
        myChart.setOption(option);
    }
    //湖南高速公路
    function echart_4() {
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('chart_4'));

          myChart.setOption({
              series: [{
                  type: 'map',
                  mapType: 'hunan'
              }]
          });

          var geoCoordMap = {
              '怀化': [109.999867,27.518949],
              '吉首': [109.741528,28.332629],
              '张家界': [110.491722,29.112001],
              '常德': [111.701486,29.076683],
              '益阳': [112.348741,28.544124],
              '岳阳': [113.126486,29.382401],
              '长沙': [113.019455,28.200103],
              '株洲': [113.163141,27.8418],
              '湘潭': [112.91977,27.882141],
              '邵阳': [111.467859,27.21915],
              '娄底': [112.012438,27.745506],
              '衡阳': [112.63809,26.895225],
              '永州': [111.577632,26.460144],
              '郴州': [113.039396,25.81497]
          };

          var goData = [
              [{
                  name: '张家界'

              }, {
                  id: 1,
                  name: '常德',
                  value: 86
              }],
              [{
                  name: '吉首'

              }, {
                  id: 1,
                  name: '常德',
                  value: 86
              }],
              [{
                  name: '常德'

              }, {
                  id: 1,
                  name: '益阳',
                  value: 70
              }],
              [{
                  name: '益阳'

              }, {
                  id: 1,
                  name: '长沙',
                  value: 95
              }],
              [{
                  name: '长沙'

              }, {
                  id: 1,
                  name: '岳阳',
                  value: 70
              }],
              [{
                  name: '长沙'

              }, {
                  id: 1,
                  name: '湘潭',
                  value: 80
              }],
              [{
                  name: '长沙'

              }, {
                  id: 1,
                  name: '株洲',
                  value: 80
              }],
              [{
                  name: '长沙'

              }, {
                  id: 1,
                  name: '衡阳',
                  value: 80
              }],
              [{
                  name: '衡阳'

              }, {
                  id: 1,
                  name: '郴州',
                  value: 70
              }],
              [{
                  name: '衡阳'

              }, {
                  id: 1,
                  name: '永州',
                  value: 70
              }],
              [{
                  name: '湘潭'

              }, {
                  id: 1,
                  name: '娄底',
                  value: 60
              }],
              [{
                  name: '娄底'

              }, {
                  id: 1,
                  name: '邵阳',
                  value: 75
              }],
              [{
                  name: '邵阳'

              }, {
                  id: 1,
                  name: '怀化',
                  value: 75
              }],
          ];
          //值控制圆点大小
          var backData = [
              [{
                  name: '常德'

              }, {
                  id: 1,
                  name: '张家界',
                  value: 80
              }],
              [{
                  name: '常德'

              }, {
                  id: 1,
                  name: '吉首',
                  value: 66
              }],
              [{
                  name: '益阳'

              }, {
                  id: 1,
                  name: '常德',
                  value: 86
              }],
              [{
                  name: '长沙'

              }, {
                  id: 1,
                  name: '益阳',
                  value: 70
              }],
              [{
                  name: '岳阳'

              }, {
                  id: 1,
                  name: '长沙',
                  value: 95
              }],
              [{
                  name: '湘潭'

              }, {
                  id: 1,
                  name: '长沙',
                  value: 95
              }],
              [{
                  name: '株洲'

              }, {
                  id: 1,
                  name: '长沙',
                  value: 95
              }],
              [{
                  name: '衡阳'

              }, {
                  id: 1,
                  name: '长沙',
                  value: 95
              }],
              [{
                  name: '郴州'

              }, {
                  id: 1,
                  name: '衡阳',
                  value: 80
              }],
              [{
                  name: '永州'

              }, {
                  id: 1,
                  name: '衡阳',
                  value: 80
              }],
              [{
                  name: '娄底'

              }, {
                  id: 1,
                  name: '湘潭',
                  value: 80
              }],
              [{
                  name: '邵阳'

              }, {
                  id: 1,
                  name: '娄底',
                  value: 60
              }],
              [{
                  name: '怀化'

              }, {
                  id: 1,
                  name: '邵阳',
                  value: 75
              }],
          ];

          var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
          var arcAngle = function(data) {
              var j, k;
              for (var i = 0; i < data.length; i++) {
                  var dataItem = data[i];
                  if (dataItem[1].id == 1) {
                      j = 0.2;
                      return j;
                  } else if (dataItem[1].id == 2) {
                      k = -0.2;
                      return k;
                  }
              }
          }

          var convertData = function(data) {
              var res = [];
              for (var i = 0; i < data.length; i++) {
                  var dataItem = data[i];
                  var fromCoord = geoCoordMap[dataItem[0].name];
                  var toCoord = geoCoordMap[dataItem[1].name];
                  if (dataItem[1].id == 1) {
                      if (fromCoord && toCoord) {
                          res.push([{
                              coord: fromCoord,
                          }, {
                              coord: toCoord,
                              value: dataItem[1].value //线条颜色

                          }]);
                      }
                  } else if (dataItem[1].id == 2) {
                      if (fromCoord && toCoord) {
                          res.push([{
                              coord: fromCoord,
                          }, {
                              coord: toCoord
                          }]);
                      }
                  }
              }
              return res;
          };

          var color = ['#fff', '#FF1493', '#0000FF'];
          var series = [];
          [
              ['1', goData],
              ['2', backData]
          ].forEach(function(item, i) {
              series.push({
                  name: item[0],
                  type: 'lines',
                  zlevel: 2,
                  symbol: ['arrow', 'arrow'],
                  //线特效配置
                  effect: {
                      show: true,
                      period: 6,
                      trailLength: 0.1,
                      symbol: 'arrow', //标记类型
                      symbolSize: 5
                  },
                  lineStyle: {
                      normal: {
                          width: 1,
                          opacity: 0.4,
                          curveness: arcAngle(item[1]), //弧线角度
                          color: '#fff'
                      }
                  },
                  edgeLabel: {
                      normal: {
                          show: true,
                          textStyle: {
                              fontSize: 14
                          },
                          formatter: function(params) {
                              var txt = '';
                              if (params.data.speed !== undefined) {
                                  txt = params.data.speed;
                              }
                              return txt;
                          },
                      }
                  },
                  data: convertData(item[1])
              }, {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  zlevel: 2,
                  //波纹效果
                  rippleEffect: {
                      period: 2,
                      brushType: 'stroke',
                      scale: 3
                  },
                  label: {
                      normal: {
                          show: true,
                          color: '#fff',
                          position: 'right',
                          formatter: '{b}'
                      }
                  },
                  //终点形象
                  symbol: 'circle',
                  //圆点大小
                  symbolSize: function(val) {
                      return val[2] / 8;
                  },
                  itemStyle: {
                      normal: {
                          show: true
                      }
                  },
                  data: item[1].map(function(dataItem) {
                      return {
                          name: dataItem[1].name,
                          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                      };
                  })

              });

          });

          option = {
              title: {
                  text: '',
                  subtext: '',
                  left: 'center',
                  textStyle: {
                      color: '#fff'
                  }
              },
              tooltip: {
                  trigger: 'item',
                  formatter: '{b}'
              },
              //线颜色及飞行轨道颜色
              visualMap: {
                  show: false,
                  min: 0,
                  max: 100,
                  color: ['#31A031','#31A031']
              },
              //地图相关设置
              geo: {
                  map: 'hunan',
                  //视角缩放比例
                  zoom: 1,
                  //显示文本样式
                  label: {
                      normal: {
                          show: false,
                          textStyle: {
                              color: '#fff'
                          }
                      },
                      emphasis: {
                          textStyle: {
                              color: '#fff'
                          }
                      }
                  },
                  //鼠标缩放和平移
                  roam: true,
                  itemStyle: {
                      normal: {
                          //          	color: '#ddd',
                          borderColor: 'rgba(147, 235, 248, 1)',
                          borderWidth: 1,
                          areaColor: {
                              type: 'radial',
                              x: 0.5,
                              y: 0.5,
                              r: 0.8,
                              colorStops: [{
                                  offset: 0,
                                  color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                              }, {
                                  offset: 1,
                                  color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                              }],
                              globalCoord: false // 缺省为 false
                          },
                          shadowColor: 'rgba(128, 217, 248, 1)',
                          // shadowColor: 'rgba(255, 255, 255, 1)',
                          shadowOffsetX: -2,
                          shadowOffsetY: 2,
                          shadowBlur: 10
                      },
                      emphasis: {
                          areaColor: '#389BB7',
                          borderWidth: 0
                      }
                  }
              },
              series: series
          };
          myChart.setOption(option);

    }
    //湖南省飞机场
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var parent = document.getElementById('chart_bottom_1');
        var tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];
        var equiped = [1,1,0,0,1,0,1,0,1,1];

        for (i = 0; i < tags.length; i++){
        　　　　		var div_outer = document.createElement("div");
        　　　　		var div_inner = document.createElement("div");
      　　　　	　　　var a = document.createElement("a");
      　　　　		div_outer.setAttribute("class","bottom_1_outer")
      　　　　		div_inner.setAttribute("class", "col-xs-3 inner_label");
      　　　　		a.setAttribute("href", "#fakelink");
      　　　　		if(equiped[i]){
      　　　　			a.setAttribute("class", "btn btn-block btn-lg btn-equiped");
      　　　　		}else{
      　　　　			a.setAttribute("class", "btn btn-block btn-lg btn-unequiped");
      　　　　		}
      　　　　		a.innerHTML = tags[i];
      　　　　		div_outer.appendChild(div_inner);
      　　　　		div_inner.appendChild(a);
      　　　　		parent.appendChild(div_outer);
        }

    }
    //点击跳转
    $('#chart_map').click(function(){
        window.location.href = './page/index.html';
    });
    $('.t_btn2').click(function(){
        window.location.href = "./page/index.html?id=2";
    });
    $('.t_btn3').click(function(){
        window.location.href = "./page/index.html?id=3";
    });
    $('.t_btn4').click(function(){
        window.location.href = "./page/index.html?id=4";
    });
    $('.t_btn5').click(function(){
        window.location.href = "./page/index.html?id=5";
    });
    $('.t_btn6').click(function(){
        window.location.href = "./page/index.html?id=6";
    });
    $('.t_btn7').click(function(){
        window.location.href = "./page/index.html?id=7";
    });
    $('.t_btn8').click(function(){
        window.location.href = "./page/index.html?id=8";
    });
    $('.t_btn9').click(function(){
        window.location.href = "./page/index.html?id=9";
    });
});
