$(function () {
    echart_map();	// 哈尔滨地图，调用高德地图API
    echart_1();		// 消防站及水源统计
    echart_2();		// 占区划分
    echart_3();		// 信息分类控制
    echart_4();		// 和5一起组成火灾报警处置
    echart_6();		// 当前站点状态
    echart_8();		// 危险源及管控单位信息
    
    click_SSS();	// 点击占区划分显示特侵站附近情况(Special Service Station)
 
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
        
        var btn_up = document.createElement("span");
　　		var btn_down = document.createElement("span");
　　		var btn_left = document.createElement("span");
　　		var btn_right = document.createElement("span");
　　		var btn_center = document.createElement("span");
　　		btn_up.setAttribute("class", "glyphicon glyphicon-circle-arrow-up left_2_icon_top");
　　		btn_up.setAttribute("aria-hidden", "true");
　　		btn_down.setAttribute("class", "glyphicon glyphicon-circle-arrow-down left_2_icon_bottom");
　　		btn_down.setAttribute("aria-hidden", "true");
　　		btn_left.setAttribute("class", "glyphicon glyphicon-circle-arrow-left left_2_icon_left");
　　		btn_left.setAttribute("aria-hidden", "true");
　　		btn_right.setAttribute("class", "glyphicon glyphicon-circle-arrow-right left_2_icon_right");
　　		btn_right.setAttribute("aria-hidden", "true");
　　		btn_center.setAttribute("class", "glyphicon glyphicon-record left_2_icon");
　　		btn_center.setAttribute("aria-hidden", "true");
        
　　		for(i = 0; i < 9; i ++){
            var div = document.createElement("div");
            var text = document.createElement("div");
            if(i == 1){
            	text.setAttribute("class", "left_2_text_top");
            	text.innerHTML = "北部";
            	div.appendChild(text);
            	div.appendChild(btn_up);
            }else if(i == 3){
            	text.setAttribute("class", "left_2_text_left");
            	text.innerHTML = "西部";
            	div.appendChild(text);
            	div.appendChild(btn_left);
            }else if(i == 4){
            	div.appendChild(btn_center);
            }else if(i == 5){
            	text.setAttribute("class", "left_2_text_right");
            	text.innerHTML = "东部";
            	div.appendChild(btn_right);
            	div.appendChild(text);
            }else if(i == 7){
            	text.setAttribute("class", "left_2_text_bottom");
            	text.innerHTML = "南部";
            	div.appendChild(btn_down);
            	div.appendChild(text);
        　　		}
            myChart.appendChild(div);
        }
	
    }


    // echart_3
    // 信息分类控制
    function echart_3() {
    	var myChart = document.getElementById("bottom_left");
    	var tags = ["特勤站", "永久站", "小型站", "微型站", "水源"];
    	
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
    
    // bottom_center
    // 和5一起组成火灾报警处置
    function echart_4() {
    	var myChart = document.getElementById("bottom_center");
    	var text = document.createElement("p");
    	var alarm = document.createElement("div");
    	text.setAttribute("class", "display_text");
    	text.setAttribute("style", "font-size:18px");
    	
    	text.innerHTML = "火情单位：哈尔滨敖麓谷雅酒店\t";
    	text.innerHTML += "地址：哈尔滨市松北区创新三路800号\t";
    	text.innerHTML += "消防安全负责人：吕绍芬\t";
    	text.innerHTML += "联系方式：138898976541\t";
    	
    	var level_1 = document.createElement("div");
    	var level_2 = document.createElement("div");
    	var level_3 = document.createElement("div");
    	var level_4 = document.createElement("div");
    	var level_up = document.createElement("div");
    	
    	level_1.setAttribute("class", "chart_4_level");
    	level_2.setAttribute("class", "chart_4_level");
    	level_3.setAttribute("class", "chart_4_level");
    	level_4.setAttribute("class", "chart_4_level");
    	level_up.setAttribute("class", "chart_4_level");
    	
    	var level_1_icon = document.createElement("span");
    	var level_2_icon = document.createElement("span");
    	var level_3_icon = document.createElement("span");
    	var level_4_icon = document.createElement("span");
    	var level_up_icon = document.createElement("span");
    	
    	level_1_icon.setAttribute("class", "glyphicon glyphicon-exclamation-sign chart_4_icon");
    	level_1_icon.setAttribute("style", "font-size:70px; color:blue; padding-left:10px");
　　		level_1_icon.setAttribute("aria-hidden", "true");
    	level_2_icon.setAttribute("class", "glyphicon glyphicon-exclamation-sign chart_4_icon");
　　		level_2_icon.setAttribute("aria-hidden", "true");
    	level_2_icon.setAttribute("style", "font-size:70px; color:yellow; padding-left:10px");
    	level_3_icon.setAttribute("class", "glyphicon glyphicon-exclamation-sign chart_4_icon");
　　		level_3_icon.setAttribute("aria-hidden", "true");
    	level_3_icon.setAttribute("style", "font-size:70px; color:orange; padding-left:10px");
    	level_4_icon.setAttribute("class", "glyphicon glyphicon-exclamation-sign chart_4_icon");
　　		level_4_icon.setAttribute("aria-hidden", "true");
    	level_4_icon.setAttribute("style", "font-size:70px; color:red; padding-left:10px");
    	level_up_icon.setAttribute("class", "glyphicon glyphicon-upload chart_4_icon");
　　		level_up_icon.setAttribute("aria-hidden", "true");
    	level_up_icon.setAttribute("style", "font-size:70px; color:#00FF00; padding-left:10px");
　　		
    	var level_1_text = document.createElement("p");
    	var level_2_text = document.createElement("p");
    	var level_3_text = document.createElement("p");
    	var level_4_text = document.createElement("p");
    	var level_up_text = document.createElement("p");
    	
    	level_1_text.setAttribute("style", "font-size:20px");
    	level_2_text.setAttribute("style", "font-size:20px");
    	level_3_text.setAttribute("style", "font-size:20px");
    	level_4_text.setAttribute("style", "font-size:20px");
    	level_up_text.setAttribute("style", "font-size:20px");
    	
    	level_1_text.innerHTML = "一级火情";
    	level_2_text.innerHTML = "二级火情";
    	level_3_text.innerHTML = "三级火情";
    	level_4_text.innerHTML = "四级火情";
    	level_up_text.innerHTML = "火情升级";
    	
    	level_1.appendChild(level_1_icon);
    	level_1.appendChild(level_1_text);
    	level_2.appendChild(level_2_icon);
    	level_2.appendChild(level_2_text);
    	level_3.appendChild(level_3_icon);
    	level_3.appendChild(level_3_text);
    	level_4.appendChild(level_4_icon);
    	level_4.appendChild(level_4_text);
    	level_up.appendChild(level_up_icon);
    	level_up.appendChild(level_up_text);
    	
    	alarm.appendChild(level_1);
    	alarm.appendChild(level_2);
    	alarm.appendChild(level_3);
    	alarm.appendChild(level_4);
    	alarm.appendChild(level_up);
    	
    	myChart.appendChild(text);
    	myChart.appendChild(alarm);    	
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
      　　　　		a.setAttribute("style", "padding: 5px 16px; border: 2px solid white");
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
        // 设置字体大小以覆盖全局属性
        Text.setAttribute("style", "font-size: 18px");
        Text.innerHTML += "单位名称：哈尔滨敖麓谷雅酒店<br/>";
        Text.innerHTML += "地址：哈尔滨师松北区创新三路800号<br/>";
        Text.innerHTML += "法定代表人：余广智<br/>";
        Text.innerHTML += "消防安全负责人：吕绍芬<br/>";
        Text.innerHTML += "联系方式：138898976541<br/>";
        Text.innerHTML += "信息有效性：有效<br/>";
        
        myText.appendChild(TextDiv);
        TextDiv.appendChild(Text);
    }

    // right_2	on_click
    // 点击特勤站效果
    function click_SSS(){
    	$("#")
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
