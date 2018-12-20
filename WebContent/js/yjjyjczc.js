$(function () {
    echart_map();	// 哈尔滨地图，调用高德地图API
    echart_1();		// 消防站及水源统计
    echart_2();		// 占区划分
    echart_3();		// 信息分类控制
    echart_4();		// 和5一起组成火灾报警处置
    echart_6();		// 当前站点状态
    echart_8();		// 危险源及管控单位信息
 
    // echart_map
    // 哈尔滨地图，调用高德地图API
    function echart_map() {
    	var map = new AMap.Map('chart_map',{
    		resizeEnable: true, //是否监控地图容器尺寸变化
            zoom:20, //初始化地图层级
            center: [126.65624,45.731525] //初始化地图中心点
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
        });

    }
    
    // echart_1
    // 消防站及水源统计
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('left_1'));
        var station_data = ["永久站：10\t", "小型站：50\t\t\t\t\t\t\t", "微型站：200"];
        var water_data = ['水鹤：230\t\t', '天然水源：1200', '其他：3009'];
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
        		height:5,
        		x: 'center',
                y: '15%',
                data: [station_data[0], station_data[1], station_data[2], water_data[0], water_data[1], water_data[2]],
    			icon:'circle',
                textStyle: {
                    fontSize: 18,
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

    // echart_2
    // 占区划分
    function echart_2() {
        var myChart = document.getElementById('left_2');
        // 将div分为九个格子，一共三行，每行三个为一组
        var div_row_1 = document.createElement("div");
        var div_row_2 = document.createElement("div");
        var div_row_3 = document.createElement("div");
        var div_1 = document.createElement("div");
        var div_2 = document.createElement("div");
        var div_3 = document.createElement("div");
        var div_4 = document.createElement("div");
        var div_5 = document.createElement("div");
        var div_6 = document.createElement("div");
        var div_7 = document.createElement("div");
        var div_8 = document.createElement("div");
        var div_9 = document.createElement("div");

　　		div_row_1.setAttribute("class", "left_2_row");
　　		div_row_2.setAttribute("class", "left_2_row");
　　		div_row_3.setAttribute("class", "left_2_row");
　　		
　　		div_1.setAttribute("class", "left_2_grid");
　　		div_2.setAttribute("class", "left_2_grid ext");
　　		div_3.setAttribute("class", "left_2_grid");
　　		div_4.setAttribute("class", "left_2_grid ext");
　　		div_5.setAttribute("class", "left_2_grid");
　　		div_6.setAttribute("class", "left_2_grid ext");
　　		div_7.setAttribute("class", "left_2_grid");
　　		div_8.setAttribute("class", "left_2_grid ext");
　　		div_9.setAttribute("class", "left_2_grid");
　　		
　　		// 设置箭头标识
　　		var btn_up = document.createElement("span");
　　		var btn_down = document.createElement("span");
　　		var btn_left = document.createElement("span");
　　		var btn_right = document.createElement("span");
　　		var btn_center = document.createElement("span");
　　		btn_up.setAttribute("class", "glyphicon glyphicon-circle-arrow-up");
　　		btn_up.setAttribute("aria-hidden", "true");
　　		btn_down.setAttribute("class", "glyphicon glyphicon-circle-arrow-down");
　　		btn_down.setAttribute("aria-hidden", "true");
　　		btn_left.setAttribute("class", "glyphicon glyphicon-circle-arrow-left");
　　		btn_left.setAttribute("aria-hidden", "true");
　　		btn_right.setAttribute("class", "glyphicon glyphicon-circle-arrow-right");
　　		btn_right.setAttribute("aria-hidden", "true");
　　		
　　		// 将箭头添加到图表中
　　		div_2.appendChild(btn_up);
　　		div_8.appendChild(btn_down);
　　		div_4.appendChild(btn_left);
　　		div_6.appendChild(btn_right);

　　		div_row_1.appendChild(div_1);
　　		div_row_1.appendChild(div_2);
　　		div_row_1.appendChild(div_3);
　　		div_row_2.appendChild(div_4);
　　		div_row_2.appendChild(div_5);
　　		div_row_2.appendChild(div_6);
　　		div_row_3.appendChild(div_7);
　　		div_row_3.appendChild(div_8);
　　		div_row_3.appendChild(div_9);
　　		
　　		myChart.appendChild(div_row_1);
　　		myChart.appendChild(div_row_2);
　　		myChart.appendChild(div_row_3);　　		
    }


    // echart_3
    // 信息分类控制
    function echart_3() {
    	var myChart = document.getElementById("bottom_left");
    	var tags = ["特勤站", "永久站", "小型站", "微型站", "水源"];

    	/*<div class="div">
        	<input type="checkbox" class="c3" name="o" simpleswitch="10" result="false" style="display: none;">
        	<div class="Switch Switch_Flat" id="Switch10">
            	<div class="SwitchLine"></div>
            	<span class="SwitchButton"></span>
        	</div>
    	</div>*/
    	
    	for(i = 0; i < tags.length; i++){
    		var div_outer = document.createElement("div");
    		var text = document.createElement("div");
    		var input = document.createElement("input");
    		
    		div_outer.setAttribute("class", "chart_3_button");
    		
    		text.setAttribute("class", "chart_3_text");
    		
    		input.setAttribute("type", "checkbox");
    		input.setAttribute("name", "o_" + i);
    		input.setAttribute("class", "chart_3_c3");
    		input.setAttribute("checked", "");
    		input.setAttribute("simpleswitch", "11");
    		input.setAttribute("result", "true");
    		input.setAttribute("style", "display: none;");
    		
    		text.innerHTML = tags[i];
    		
    		div_outer.appendChild(text);
    		div_outer.appendChild(input);
    		myChart.appendChild(div_outer);
    	}
    }
    
    $(".chart_3_c3").simpleSwitch();
    
    //湖南高速公路
    function echart_4() {
         

    }
    //湖南省飞机场
    function echart_5() {


    }
    
    // right_2
    // 当前站点状态
    function echart_6(){
    	// 基于准备好的dom，初始化echarts实例
        var parent = document.getElementById('bottom_right');
        var tags = ["车辆统计情况", "装备统计情况", "器材统计情况", "重点岗位实时监控", "重大危险源统计"];

        for (i = 0; i < tags.length; i++){
        	var div = document.createElement("div");
        	div.setAttribute("id", "chart_6"+ i);
        	div.setAttribute("class", "demo-row col-xs-3");
        	var a = document.createElement("a");
      　　　　		a.setAttribute("href", "#fakelink");      　　　　			
      　　　　		a.setAttribute("class", "btn btn-block btn-lg btn-primary");
      　　　　		a.innerHTML = tags[i];
      　　　　		div.appendChild(a);
      　　　　		parent.appendChild(div);
        }
    }
    
    // right_1
    // 危险源及管控单位信息
    function echart_8(){
        var myText = document.getElementById('right_1');
        var TextDiv = document.createElement("div");
        var Text = document.createElement("p");
        TextDiv.setAttribute("class", "display_text");
        Text.setAttribute("name", "危险源及管控单位信息");
        Text.innerHTML += "单位名称：哈尔滨敖麓谷雅酒店<br/>";
        Text.innerHTML += "地址：哈尔滨师松北区创新三路800号<br/>";
        Text.innerHTML += "法定代表人：余广智<br/>";
        Text.innerHTML += "消防安全负责人：吕绍芬<br/>";
        Text.innerHTML += "联系方式：138898976541<br/>";
        Text.innerHTML += "信息有效性：有效<br/>";
        
        myText.appendChild(TextDiv);
        TextDiv.appendChild(Text);
    }
    
    //点击跳转

    //危险源信息弹窗
    $('.t_btn_right_1').click(function(){
        $(".weixianyuanexcel").fadeIn();
        $(".mainbox").delay(500).slideDown();
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("mainbox");
        mypopup.style.overflowY="auto";
    });
    $(".closeweixianyuan").click(function(){
        document.body.style.overflow="auto";
        $(".weixianyuanexcel").fadeOut();
    });
});
