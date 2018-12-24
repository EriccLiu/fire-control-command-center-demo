document.write("<script language=javascript src='js/location.js'></script>");

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
    	window.map = new AMap.Map('chart_map',{
    		resizeEnable: true, // 是否监控地图容器尺寸变化
            zoom:20, // 初始化地图层级
            center: [126.65624,45.731525] // 初始化地图中心点
    	});
    	
    	// 增加定位按钮
    	AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,// 是否使用高精度定位，默认:true
                timeout: 10000,          // 超过10秒后停止定位，默认：5s
                buttonPosition:'RB',    // 定位按钮的停靠位置
                buttonOffset: new AMap.Pixel(10, 20),// 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10,
														// 20)
                zoomToAccuracy: true,   // 定位成功后是否自动调整地图视野到定位点

            });
            map.addControl(geolocation);
        });

        // 引入SimpleMarker，loadUI的路径参数为模块名中 'ui/' 之后的部分
        AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
            // 启动页面

            loadWS(SimpleMarker);	// 加载水源
            loadMS(SimpleMarker);	// 加载微型站
            loadSS(SimpleMarker);	// 加载小型站
            loadSoR(SimpleMarker);	// 加载危险源
            loadPS();				// 加载永久站
            initPage(SimpleMarker);	// 加载特勤站
        });

        // 哈尔滨消防支队
        window.center = new AMap.Marker({
            position: new AMap.LngLat(126.656248, 45.731506),   // 哈尔滨消防支队
            title: '哈尔滨消防支队',
            clickable: true,
            topWhenClick: true,
        });

        function initPage(SimpleMarker) {
            window.north = new SimpleMarker({  // 北特勤站
                // 前景文字
                iconLabel: {
                    innerHTML: '北', // 设置文字内容
                    style: {
                        color: '#fff' // 设置文字颜色
                    }
                },
                title:"北部战区特勤站",
                //图标主题
                iconTheme: 'fresh',
                // 背景图标样式
                iconStyle: 'red',
                // ...其他Marker选项...，不包括content
                map: map,
                position: [126.621057, 45.815116],
                clickable: true
            });
            window.south = new SimpleMarker({
                // 前景文字
                iconLabel: {
                    innerHTML: '南', // 设置文字内容
                    style: {
                        color: '#fff' // 设置文字颜色
                    }
                },
                title:"南部战区特勤站",
                //图标主题
                iconTheme: 'fresh',
                // 背景图标样式
                iconStyle: 'red',
                // ...其他Marker选项...，不包括content
                map: map,
                position: [126.624117, 45.684894],
                clickable: true
            });
            window.east = new SimpleMarker({
                iconLabel: {
                    innerHTML: '东', // 设置文字内容
                    style: {
                        color: '#fff' // 设置文字颜色
                    }
                },
                title:"东部战区特勤站",
                iconTheme: 'fresh',
                iconStyle: 'red',
                map: map,
                position: [126.726114, 45.761969],
                clickable: true
            });
            window.west = new SimpleMarker({
                iconLabel: {
                    innerHTML: '西', // 设置文字内容
                    style: {
                        color: '#fff' // 设置文字颜色
                    }
                },
                title:"西部战区特勤站",
                iconTheme: 'fresh',
                iconStyle: 'red',
                map: map,
                position: [126.537287, 45.735136],
                clickable: true
            });

            try {
                listenMarker(north);
                listenMarker(south);
                listenMarker(east);
                listenMarker(west);
            }catch(err) {
                alert(err);
            }

        }

    	var iconsToRemove;
        var circleToRemove;
        map.on('click', function (e) {
            if(iconsToRemove!=null){
                iconsToRemove.setIcon("");
            }
            if(circleToRemove!=null){
                map.remove(circleToRemove);
            }
        });
        // map.on('dblclick', DbClick);
        // map.on('mousemove', MouseMove);

        
        // 增加永久站位置
        function loadPS(){
            window.permanentStationList = new Array();  // 初始化的marker列表
            permanentStationList.push(center);
            for( i = 0; i < PS.length; i++){  	
            	var marker = new AMap.Marker({
                    position: new AMap.LngLat(PS[i].position[0], PS[i].position[1]),   // 哈尔滨消防支队
                    title: PS[i].title,
                    clickable: PS[i].clickable,
                    topWhenClick: PS[i].topWhenClick,
                });
            	permanentStationList.push(marker);
            }
          
            listenMarkerList(permanentStationList);
            map.add(permanentStationList);
        }

        // 增加小型站位置
        function loadSS(SimpleMarker){
            window.smallStationList = new Array();  // 初始化的marker列表
            for( i = 0; i < SS.length; i++){
                var marker = new SimpleMarker({
                    iconLabel: {
                        innerHTML: SS[i].label, // 设置文字内容
                        style: {
                            color: '#fff' // 设置文字颜色
                        }
                    },
                    iconTheme: 'default',
                    iconStyle: SS[i].color,
                    map: map,
                    title: SS[i].title,
                    position: [SS[i].position[0], SS[i].position[1]],
                    clickable: SS[i].clickable,
                });
                smallStationList.push(marker);
            }
          
            listenMarkerList(smallStationList);
            map.add(smallStationList);
        }
        
        // 增加微型站位置
        function loadMS(SimpleMarker){
            window.microStationList = new Array();  // 初始化的marker列表
            for( i = 0; i < MS.length; i++){
                var marker = new SimpleMarker({
                    iconLabel: {
                        innerHTML: MS[i].label, // 设置文字内容
                        style: {
                            color: '#fff' // 设置文字颜色
                        }
                    },
                    iconTheme: 'default',
                    iconStyle: MS[i].color,
                    map: map,
                    title: MS[i].title,
                    position: [MS[i].position[0], MS[i].position[1]],
                    clickable: MS[i].clickable,
                });
                microStationList.push(marker);
            }
          
            listenMarkerList(microStationList);
            map.add(microStationList);
        }
        
     // 增加水源位置
        function loadWS(SimpleMarker){
            window.waterSourceList = new Array();  // 初始化的marker列表
            for( i = 0; i < WS.length; i++){
                var marker = new SimpleMarker({
                    iconLabel: {
                        innerHTML: WS[i].label, // 设置文字内容
                        style: {
                            color: '#fff' // 设置文字颜色
                        },
                    },
                	iconTheme: 'default',
                    iconStyle: WS[i].color,
                    map: map,
                    title: WS[i].title,
                    position: [WS[i].position[0], WS[i].position[1]],
                    clickable: WS[i].clickable,
                });
                waterSourceList.push(marker);
            }
          
            listenMarkerList(waterSourceList);
            map.add(waterSourceList);
        }
        
        // 增加危险源位置
        function loadSoR(SimpleMarker){
            window.SoRMarkerList = new Array();  // 初始化的marker列表
            for( i = 0; i < SoR.length; i++){
                var marker = new SimpleMarker({
                    iconLabel: {
                        innerHTML: SoR[i].label, // 设置文字内容
                        style: {
                            color: '#fff' // 设置文字颜色
                        }
                    },
                    iconTheme: 'default',
                    iconStyle: SoR[i].color,
                    map: map,
                    title: SoR[i].title,
                    position: [SoR[i].position[0], SoR[i].position[1]],
                    clickable: SoR[i].clickable,
                });
            	SoRMarkerList.push(marker);
            }
          
            listenMarkerList(SoRMarkerList);
            map.add(SoRMarkerList);
        }
        
        
        // 增加点列表的监听
        function listenMarkerList(markerList) {
            for(var m=0;m<markerList.length;m++){
                try {
                    listenMarker(markerList[m]);
                }catch(err){
                    alert(err.toString());
                }
            }
        }
        function listenMarker(marker) {
            marker.on('click',function () {   // 站点点击事件
                if(iconsToRemove!=null){
                    iconsToRemove.setIcon("");
                }
                if(circleToRemove!=null){
                    map.remove(circleToRemove);
                }
                var thistitle=this.getTitle();
                var right_2=document.getElementById("right_2");
                right_2.innerText=thistitle;
                right_2.style.color="white";
                right_2.style.margin="20px auto";
                // this.setIcon("img/icons/png/Retina-Ready.png");
                iconsToRemove=this;

                var circle = new AMap.Circle({
                    // center: [126.656248, 45.731506],
                    radius: 5000, // 半径
                    // borderWeight: 2,
                    // strokeColor: "#FF33FF",
                    // strokeWeight: 6,
                    fillOpacity: 0.3,
                    // 线样式还支持 'dashed'
                    fillColor: '#1791fc',
                    zIndex: 50,
                });
                circle.setCenter(this.getPosition());
                circle.setMap(map);
                map.setFitView([ circle ]);
                circleToRemove=circle;
            })
        }
        
        function click_marker(marker) {   // 站点点击事件
            if(iconsToRemove!=null){
                iconsToRemove.setIcon("");
            }
            if(circleToRemove!=null){
                map.remove(circleToRemove);
            }
            var thistitle=marker.getTitle();
            var right_2=document.getElementById("right_2");
            right_2.innerText=thistitle;
            right_2.style.color="white";
            right_2.style.margin="20px auto";
            // this.setIcon("img/icons/png/Retina-Ready.png");
            iconsToRemove=marker;

            var circle = new AMap.Circle({
                // center: [126.656248, 45.731506],
                radius: 5000, // 半径
                // borderWeight: 2,
                // strokeColor: "#FF33FF",
                // strokeWeight: 6,
                fillOpacity: 0.3,
                // 线样式还支持 'dashed'
                fillColor: '#1791fc',
                zIndex: 50,
            });
            circle.setCenter(marker.getPosition());
            circle.setMap(map);
            map.setFitView([ circle ]);
            circleToRemove=circle;
        }
        
        // 战区划分点击事件
        $('#chart_2_up').click(function(){
            click_marker(north);
        });
        $('#chart_2_down').click(function(){
            click_marker(south);
        });
        $('#chart_2_left').click(function(){
            click_marker(west);
        });
        $('#chart_2_right').click(function(){
            click_marker(east);
        });
        $('#chart_2_center').click(function(){
            click_marker(center);
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
        	// 标题组件
        	title:{
        		// 组件ID
        		id:'left_1_title',
        		// 显示标题组件
        		show: true,
        		left:'auto',
        		top:'auto',
        		right:'auto',
        		bottom:'auto',
        	},
        	// 图里组建，展示不同系列标记、颜色、名字
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
                // 与图例联动，hover时高亮（线）
                legendHoverLink: false,
                // hover在扇区时联动高亮（图偏移）
                hoverAnimation:true,
                // 高亮扇区偏移
                hoverOffset:15,
                // 顺时针排布
                clockwise:true,
                // 起始角度，支持范围[0, 360]
                startAngle: 0,
                // 饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [20, 80],
                // 支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                // 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                // 'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                // 是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
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
        
	
    }

    // echart_3
    // 信息分类控制
    function echart_3() {
    	
    }
    
    $(".chart_3_c3").simpleSwitch();
    // 控制信息显示的开关功能
    // 特勤站、永久站、小型站、微型站、水源
    var open=[1,1,1,1,1];   //0关，1开
    $("#Switch0").click(function () {
        if(open[0]==1){
            try {
                map.remove(north);
                map.remove(south);
                map.remove(east);
                map.remove(west);
            }catch(err){
                alert(err);
            }
            open[0]=0;
        }else{
            map.add(north);
            map.add(south);
            map.add(east);
            map.add(west);
            open[0]=1;
        }
    });
    $("#Switch1").click(function () {
        if(open[1]==1){
            try {
                for(i = 0; i < permanentStationList.length; i++){
                	map.remove(permanentStationList[i]);
                }
            }catch(err){
                alert(err);
            }
            open[1]=0;
        }else{
        	for(i = 0; i < permanentStationList.length; i++){
            	map.add(permanentStationList[i]);
            }
            open[1]=1;
        }
    });
    $("#Switch2").click(function () {
        if(open[2]==1){
            try {
                for(i = 0; i < smallStationList.length; i++){
                	map.remove(smallStationList[i]);
                }
            }catch(err){
                alert(err);
            }
            open[2]=0;
        }else{
        	for(i = 0; i < smallStationList.length; i++){
            	map.add(smallStationList[i]);
            }
            open[2]=1;
        }
    });
    $("#Switch3").click(function () {
        if(open[3]==1){
            try {
                for(i = 0; i < microStationList.length; i++){
                	map.remove(microStationList[i]);
                }
            }catch(err){
                alert(err);
            }
            open[3]=0;
        }else{
        	for(i = 0; i < microStationList.length; i++){
            	map.add(microStationList[i]);
            }
            open[3]=1;
        }
    });
    $("#Switch4").click(function () {
        if(open[4]==1){
            try {
                for(i = 0; i < waterSourceList.length; i++){
                	map.remove(waterSourceList[i]);
                }
            }catch(err){
                alert(err);
            }
            open[4]=0;
        }else{
        	for(i = 0; i < waterSourceList.length; i++){
            	map.add(waterSourceList[i]);
            }
            open[4]=1;
        }
    });
    
    // bottom_center
    // 和5一起组成火灾报警处置
    function echart_4() {
    	var text = document.getElementById("chart4_text");
    	text.innerHTML += "火情单位：哈尔滨敖麓谷雅酒店\t";
    	text.innerHTML += "地址：哈尔滨市松北区创新三路800号<br\>";
    	text.innerHTML += "消防安全负责人：吕绍芬\t";
    	text.innerHTML += "联系方式：138898976541\t";
    }
    
    // right_2
    // 当前站点状态
    function echart_6(){
    	
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
        Text.innerHTML = "单位名称：哈尔滨敖麓谷雅酒店<br/>";
        Text.innerHTML += "地址：哈尔滨师松北区创新三路800号<br/>";
        Text.innerHTML += "法定代表人：余广智<br/>";
        Text.innerHTML += "消防安全负责人：吕绍芬<br/>";
        Text.innerHTML += "联系方式：138898976541<br/>";
        Text.innerHTML += "信息有效性：有效<br/>";
        
        myText.appendChild(TextDiv);
        TextDiv.appendChild(Text);
    }

    // 危险源信息弹窗
    $('.t_btn_right_1').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("mainbox");
        mypopup.style.overflowY="auto";
        $("#weixianyuanexcel").fadeIn();
        $("#mainbox").delay(500).slideDown();
    });
    $("#closeweixianyuan").click(function(){
        document.body.style.overflow="auto";
        $("#weixianyuanexcel").fadeOut();
    });
    
    // 火警源配置弹窗
    window.level = 0;
    // 一级火情
    $('#chart4_level1').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("level1_mainbox");
        mypopup.style.overflowY="auto";
        $("#level1_setting").fadeIn();
        $("#level1_mainbox").delay(500).slideDown();
        level = 1;
    });
    $("#level1_close").click(function(){
        document.body.style.overflow="auto";
        $("#level1_setting").fadeOut();
    });
    // 二级火情
    $('#chart4_level2').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("level2_mainbox");
        mypopup.style.overflowY="auto";
        $("#level2_setting").fadeIn();
        $("#level2_mainbox").delay(500).slideDown();
        level = 2;
    });
    $("#level2_close").click(function(){
        document.body.style.overflow="auto";
        $("#level2_setting").fadeOut();
    });
    // 三级火情
    $('#chart4_level3').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("level3_mainbox");
        mypopup.style.overflowY="auto";
        $("#level3_setting").fadeIn();
        $("#level3_mainbox").delay(500).slideDown();
        level = 3;
    });
    $("#level3_close").click(function(){
        document.body.style.overflow="auto";
        $("#level3_setting").fadeOut();
    });
    // 四级火情
    $('#chart4_level4').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("level4_mainbox");
        mypopup.style.overflowY="auto";
        $("#level4_setting").fadeIn();
        $("#level4_mainbox").delay(500).slideDown();
        level = 4;
    });
    $("#level4_close").click(function(){
        document.body.style.overflow="auto";
        $("#level4_setting").fadeOut();
    });
    // 火情升级
    $('#chart4_levelup').click(function(){
        document.body.style.overflow="hidden";
        if(level == 1){
        	var mypopup=document.getElementById("level2_mainbox");
            mypopup.style.overflowY="auto";
            $("#level2_setting").fadeIn();
            $("#level2_mainbox").delay(500).slideDown();
            level = 2;
        }else if(level == 2){
        	var mypopup=document.getElementById("level3_mainbox");
            mypopup.style.overflowY="auto";
            $("#level3_setting").fadeIn();
            $("#level3_mainbox").delay(500).slideDown();
            level = 3;
        }else if(level == 3){
        	var mypopup=document.getElementById("level4_mainbox");
            mypopup.style.overflowY="auto";
            $("#level4_setting").fadeIn();
            $("#level4_mainbox").delay(500).slideDown();
            level = 4;
        }else if(level == 4){
        	alert("已经是最高级火情，无法升级");
        	var mypopup=document.getElementById("level4_mainbox");
            mypopup.style.overflowY="auto";
            $("#level4_setting").fadeIn();
            $("#level4_mainbox").delay(500).slideDown();
        }else if(level == 0){
        	alert("暂无火情，无法升级");
        }else{
        	alert("错误！");
        }
    });
});
