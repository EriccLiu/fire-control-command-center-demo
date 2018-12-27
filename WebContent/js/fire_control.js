document.write("<script language=javascript src='js/location.js'></script>");

$(function () {
    echart_map();	// 哈尔滨地图，调用高德地图API
    echart_1();		// 消防站及水源统计
    echart_2();		// 占区划分
    echart_3();		// 信息分类控制
    echart_4();		// 和5一起组成火灾报警处置
    echart_6();		// 当前站点状态
    echart_8();		// 危险源及管控单位信息
    
    tree_chart();	// 支持结构树状图
     
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
            while(circleToRemove!=null){
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
        
        function click_center(north, south, west, east, center) {   // 站点点击事件
        	if(iconsToRemove!=null){
                iconsToRemove.setIcon("");
            }
            if(circleToRemove!=null){
                map.remove(circleToRemove);
            }
            var points = new Array();
            points.push(north);
            points.push(south);
            points.push(west);
            points.push(east);
            points.push(center);
            for(i = 0; i < points.length; i++){
            	var marker = points[i];
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
        	click_center(north, south, west, east, center);
        });
    }
    
    function toFixedBit(num, totalBit, isFront, fixedChar, alwaysCut) {
    	    if (totalBit === void 0) { totalBit = 10; }
    	    if (isFront === void 0) { isFront = true; }
    	    if (fixedChar === void 0) { fixedChar = "0"; }
    	    if (alwaysCut === void 0) { alwaysCut = false; }
    	    var nn = num.toString();
    	    if (!alwaysCut && nn.length >= totalBit) {
    	        return nn;
    	    }
    	    var rtn = "";
    	    for (var i = 0; i < totalBit; i++) {
    	        rtn += fixedChar;
    	    }
    	    if (isFront) {
    	        rtn += nn;
    	        rtn = rtn.substr(rtn.length - totalBit);
    	    }
    	    else {
    	        rtn = nn + rtn;
    	        rtn = rtn.substr(0, totalBit);
    	    }
    	    return rtn;
    	}
    
    // echart_1
    // 消防站及水源统计
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('left_1'));
        var station_data = ["永久站：10", "小型站：50", "微型站：200"];
        var water_data = ['水鹤：230', '天然水源：1200', '其他：3009'];
        var max_length = 0;
        for(i = 0; i < station_data.length; i++){
        	max_length = (station_data[i].length > max_length)?station_data[i].length:max_length;
        }
        for(i = 0; i < water_data.length; i++){
        	max_length = (water_data[i].length > max_length)?water_data[i].length:max_length;
        }
        for(i = 0; i < station_data.length; i++){
        	station_data[i] = toFixedBit(station_data[i], max_length, false, " ");
        }
        for(i = 0; i < water_data.length; i++){
        	water_data[i] = toFixedBit(water_data[i], max_length, false, " ");
        }
        
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
                data: [station_data[0], water_data[0], station_data[1], water_data[1], station_data[2], water_data[2]],
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

        $('#level1_1').blur(function () {
            var rest = document.getElementById("level1_1_rest");
            var usage = document.getElementById("level1_1");
            rest.innerHTML = (10-Number(usage.value));
        });
    }
    
    // right_2
    // 当前站点状态
    function echart_6(){
        $('#message_btn_1').click(function () {
            window.open("dashboard.html?tag=0","_self",'');
        });
        $('#message_btn_2').click(function () {
            window.open("dashboard.html?tag=1","_self",'');
        });
        $('#message_btn_3').click(function () {
            window.open("dashboard.html?tag=2","_self",'');
        });
        $('#message_btn_4').click(function () {
            window.open("dashboard.html?tag=3","_self",'');
        });
        $('#message_btn_5').click(function () {
            window.open("dashboard.html?tag=4","_self",'');
        });
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
    
    function tree_chart(){
    	
    }

    // 危险源信息弹窗
    $('.t_btn_right_1').click(function(){
        document.body.style.overflow="hidden";
        var mypopup=document.getElementById("weixianyuanmainbox");
        mypopup.style.overflowY="auto";
        $("#weixianyuanexcel").fadeIn();
        $("#weixianyuanmainbox").delay(500).slideDown();
    });
    $("#closeweixianyuan").click(function(){
        document.body.style.overflow="auto";
        $("#weixianyuanexcel").fadeOut();
    });

    // 火警源配置弹窗
    // 首先点击生成进度条，并设置按钮id
    // 再次点击按钮产生对应的表单
    
    
    window.level = 0;
    // 一级火情
    $('#chart4_level1').click(function(){
        level = 1;
        generate_plan();
    });
    $("#level1_close").click(function(){
        document.body.style.overflow="auto";
        $("#level1_setting").fadeOut();
    });
    // 二级火情
    $('#chart4_level2').click(function(){
        level = 2;
        generate_plan();
    });
    $("#level2_close").click(function(){
        document.body.style.overflow="auto";
        $("#level2_setting").fadeOut();
    });
    // 三级火情
    $('#chart4_level3').click(function(){
        level = 3;
        generate_plan();
    });
    $("#level3_close").click(function(){
        document.body.style.overflow="auto";
        $("#level3_setting").fadeOut();
    });
    // 四级火情
    $('#chart4_level4').click(function(){
        level = 4;
        generate_plan();
    });
    $("#level4_close").click(function(){
        document.body.style.overflow="auto";
        $("#level4_setting").fadeOut();
    });
    // 火情升级
    $('#chart4_levelup').click(function(){
        document.body.style.overflow="hidden";
        if(level == 1 || level == 2 || level == 3){
        	level = level + 1;
            generate_plan();
        }else if(level == 0){
            alert("暂无火情，无法升级");
        }else if(level == 4){
            alert("已经是最高级火情，无法升级");
            generate_plan();
        }else{
            alert("错误！");
        }
    });

    var progress_1=document.getElementById("progress_1");
    var progress_2=document.getElementById("progress_2");
    var progress_3=document.getElementById("progress_3");
    var progress_4=document.getElementById("progress_4");
    var progress_5=document.getElementById("progress_5");
    var progress_6=document.getElementById("progress_6");
    var progress_7=document.getElementById("progress_7");
    var generate_btn=document.getElementById("generate_btn");
    function generate_plan() {
        document.body.style.overflowY="hidden";
        $("#generate_plan").fadeIn();
        $("#generate_plan_smallbox").delay(500).slideDown();
        try {
        	
        	// 火情及基本信息采集，约 1.25±0.5 s
        	window.progress1 = document.getElementById("progress1_showtime");
            window.random_t1 = 0.75 + Math.random();
        	var t1=0;
        	var start = 0;
            var interval1 = window.setInterval(function () {
                t1+=1;
                progress_1.style.width = t1 + "%";
            },10 * random_t1);
            setTimeout(function() {
                window.clearInterval(interval1);
                progress_1.setAttribute("class", "progress-bar progress-bar-success");
                progress_1.style.width="100%";
                t1=0;
                progress1.innerHTML = "&nbsp&nbsp" + random_t1.toFixed(2).toString() + "s";
            },1000 * random_t1);
            
            // 管控单位详细信息分析，约 3±1 s
            window.progress2 = document.getElementById("progress2_showtime");
            window.random_t2 = 2 + Math.random()*2;
            var t2=0;
            var interval2 = window.setInterval(function () {
                t2+=1;
                progress_2.style.width = t2 + "%";
            },10 * random_t2);
            setTimeout(function() {
                window.clearInterval(interval2);
                progress_2.setAttribute("class", "progress-bar progress-bar-success");
                progress_2.style.width="100%";
                t2=0;
                progress2.innerHTML = "&nbsp&nbsp" + random_t2.toFixed(2).toString() + "s";
            },1000 * random_t2);

            // 当前道路状况分析，约 7±2 s
            window.progress3 = document.getElementById("progress3_showtime");
            window.random_t3 = 5 + Math.random()*4;
            var t3=0;
            var interval3 = window.setInterval(function () {
                t3+=1;
                progress_3.style.width = t3 + "%";
            },10 * random_t3);
            setTimeout(function() {
                window.clearInterval(interval3);
                progress_3.setAttribute("class", "progress-bar progress-bar-success");
                progress_3.style.width="100%";
                progress_group_2();
                t3=0;
                progress3.innerHTML = "&nbsp&nbsp" + random_t3.toFixed(2).toString() + "s";
            },1000 * random_t3);

        }catch(err){
            alert(err);
        }
    }
    function progress_group_2() {
    	
    	// 人员配置决策，约 5±1.5 s
    	window.progress4 = document.getElementById("progress4_showtime");
        window.random_t4 = 3.5 + Math.random()*3;
        var t4=0;
        var interval4 = window.setInterval(function () {
            t4+=1;
            progress_4.style.width = t4 + "%";
        },10 * random_t4);
        setTimeout(function() {
            window.clearInterval(interval4);
            progress_4.setAttribute("class", "progress-bar progress-bar-success");
            progress_4.style.width="100%";
            t4=0;
            progress_group_3();
            progress4.innerHTML = "&nbsp&nbsp" + random_t4.toFixed(2).toString() + "s";
        },1000 * random_t4);

        // 车辆配置决策，约 3±1 s
        window.progress5 = document.getElementById("progress5_showtime");
        window.random_t5 = 2 + Math.random()*2;
        var t5=0;
        var interval5 = window.setInterval(function () {
            t5+=1;
            progress_5.style.width = t5 + "%";
        },10 * random_t5);
        setTimeout(function() {
            window.clearInterval(interval5);
            progress_5.setAttribute("class", "progress-bar progress-bar-success");
            progress_5.style.width="100%";
            t5=0;
            progress5.innerHTML = "&nbsp&nbsp" + random_t5.toFixed(2).toString() + "s";
        },1000 * random_t5);

        // 装备器材决策，约 4±1 s
        window.progress6 = document.getElementById("progress6_showtime");
        window.random_t6 = 3 + Math.random()*2;
        var t6=0;
        var interval6 = window.setInterval(function () {
            t6+=1;
            progress_6.style.width = t6 + "%";
        },10 * random_t6);
        setTimeout(function() {
            window.clearInterval(interval6);
            progress_6.setAttribute("class", "progress-bar progress-bar-success");
            progress_6.style.width="100%";
            t6=0;
            progress6.innerHTML = "&nbsp&nbsp" + random_t6.toFixed(2).toString() + "s";
        },1000 * random_t6);
    }
    function progress_group_3() {
    	window.totaltime = document.getElementById("totaltime");
    	
    	// 站点资源输出匹配，约 10±2 s
    	window.progress7 = document.getElementById("progress7_showtime");
        window.random_t7 = 8 + Math.random()*4;
        var t7=0;
        var interval7 = window.setInterval(function () {
            t7+=1;
            progress_7.style.width = t7 + "%";
        },10 * random_t7);
        setTimeout(function() {
            window.clearInterval(interval7);
            progress_7.setAttribute("class", "progress-bar progress-bar-success");
            progress_7.style.width="100%";
            t7=0;
            progress7.innerHTML = "&nbsp&nbsp" + random_t7.toFixed(2).toString() + "s";
            
            generate_btn.setAttribute("class","btn btn-lg btn-info");
            generate_btn.innerText="生成指挥决策方案";
            totaltime.innerHTML = "总耗时：" + (Math.max(random_t1, random_t2, random_t3) + Math.max(random_t4, random_t5, random_t6) + random_t7).toFixed(2).toString() + "s";
            
        },1000 * random_t7);
    }
    $('#generate_btn').click(function () {
        // reset the generate plan
    	$("#generate_plan").fadeOut();
        progress_1.setAttribute("class","progress-bar progress-bar-warning");
        progress_1.style.width="1%";
        progress_2.setAttribute("class","progress-bar progress-bar-warning");
        progress_2.style.width="1%";
        progress_3.setAttribute("class","progress-bar progress-bar-warning");
        progress_3.style.width="1%";
        progress_4.setAttribute("class","progress-bar progress-bar-warning");
        progress_4.style.width="1%";
        progress_5.setAttribute("class","progress-bar progress-bar-warning");
        progress_5.style.width="1%";
        progress_6.setAttribute("class","progress-bar progress-bar-warning");
        progress_6.style.width="1%";
        progress_7.setAttribute("class","progress-bar progress-bar-warning");
        progress_7.style.width="1%";
        generate_btn.setAttribute("class","btn btn-lg disabled");
        generate_btn.innerText="正在产生方案...";
        totaltime.innerHTML = "";
        progress1.innerHTML = "&nbsp";
        progress2.innerHTML = "&nbsp";
        progress3.innerHTML = "&nbsp";
        progress4.innerHTML = "&nbsp";
        progress5.innerHTML = "&nbsp";
        progress6.innerHTML = "&nbsp";
        progress7.innerHTML = "&nbsp";

        // open responding table
        document.body.style.overflow="hidden";
        if(level == 1){
        	var mypopup=document.getElementById("level1_mainbox");
            mypopup.style.overflowY="auto";
            $("#level1_setting").fadeIn();
            $("#level1_mainbox").delay(500).slideDown();
        }else if(level == 2){
        	var mypopup=document.getElementById("level2_mainbox");
            mypopup.style.overflowY="auto";
            $("#level2_setting").fadeIn();
            $("#level2_mainbox").delay(500).slideDown();
        }else if(level == 3){
        	var mypopup=document.getElementById("level3_mainbox");
            mypopup.style.overflowY="auto";
            $("#level3_setting").fadeIn();
            $("#level3_mainbox").delay(500).slideDown();
        }else if(level == 4){
        	var mypopup=document.getElementById("level4_mainbox");
            mypopup.style.overflowY="auto";
            $("#level4_setting").fadeIn();
            $("#level4_mainbox").delay(500).slideDown();
        }
        
    })
});
