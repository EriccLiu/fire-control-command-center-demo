document.write("<script language=javascript src='js/location.js'></script>");

$(function () {
    $(".chart_3_c3").simpleSwitch();
    echart_map();	// 哈尔滨地图，调用高德地图API
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
            loadPS(SimpleMarker);				// 加载永久站
            initPage(SimpleMarker);	// 加载特勤站
        });

        AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
            window.infoWindow = new SimpleInfoWindow({
                infoTitle: '<strong>点击这里</strong>',
                infoBody: '',
                //基点指向marker的头部位置
                offset: new AMap.Pixel(0, -31)
            });
            infoWindow.get$Container().on('click', function(event) {
                alert('Click infoWindow');
            });
            infoWindow.get$InfoTitle().on('click', function(event) {
                //阻止冒泡
                event.stopPropagation();
                alert('Click infoTitle');

            });
            infoWindow.get$InfoBody().on('click', '.mybtn', function(event) {
                //阻止冒泡
                event.stopPropagation();
                alert('Click .mybtn of infoBody');
            });
        });
        
        
        // 哈尔滨消防支队
        /*
        window.center = new AMap.Marker({
            position: new AMap.LngLat(126.656248, 45.731506),   // 哈尔滨消防支队
            title: '哈尔滨消防支队',
            clickable: true,
            topWhenClick: true,
        });
         */
        
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
        var circles_to_remove=[];
        map.on('click', function (e) {
            if(iconsToRemove!=null){
                iconsToRemove.setIcon("");
            }
            if(circleToRemove!=null){
                map.remove(circleToRemove);
            }
            if(circles_to_remove.length>0){
                for(var i=0;i<circles_to_remove.length;i++){
                    map.remove(circles_to_remove[i]);
                }
                infoWindow.close();
            }
        });
        // map.on('dblclick', DbClick);
        // map.on('mousemove', MouseMove);

        // SimpleMarker增加永久站位置
        function loadPS(SimpleMarker){
            window.permanentStationList = new Array();  // 初始化的marker列表
            for( i = 0; i < PS.length; i++){
                var marker = new SimpleMarker({
                    iconLabel: {
                        innerHTML: PS[i].label, // 设置文字内容
                        style: {
                            color: '#fff' // 设置文字颜色
                        }
                    },
                    iconTheme: 'default',
                    iconStyle: PS[i].color,
                    map: map,
                    title: PS[i].title,
                    position: [PS[i].position[0], PS[i].position[1]],
                    clickable: PS[i].clickable,
                    animation: "station",
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
                    animation: "station",
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
                    animation: "station",
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
                    animation: "risk",
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
                if(circles_to_remove.length>0){
                    for(var i=0;i<circles_to_remove.length;i++){
                        map.remove(circles_to_remove[i]);
                    }
                    infoWindow.close();
                }
                iconsToRemove=this;

                var circle = new AMap.Circle({
                    radius: 5000, // 半径
                    fillOpacity: 0.3,
                    fillColor: '#1791fc',
                    zIndex: 50,
                });
                circle.setCenter(this.getPosition());
                circle.setMap(map);
                map.setFitView([ circle ]);
                circles_to_remove.push(circle);
                
                // 特勤站 red;永久站	; 小型站 lightgreen;微型站 salmon
                if(marker.getAnimation().search("station") != -1){
                	var infobody = '<div><button id="'+marker.getTitle()+'-1" class="info-btn mybtn station-1">基本情况</button></div>';
                	infobody += '<div><button id="'+marker.getTitle()+'-2" class="info-btn mybtn station-2">站力情况</button></div>';
                    infoWindow.setInfoTitle(marker.getTitle());
                    infoWindow.setInfoBody(infobody);
                    infoWindow.open(map, marker.getPosition());
                }
                // 危险源 purple
                else if(marker.getAnimation().search("risk") != -1){
                	var infobody = '<div><button id="'+marker.getTitle()+'-1" class="info-btn mybtn risk-1">基本情况</button></div>';
                	infobody += '<div><button id="'+marker.getTitle()+'-2" class="info-btn mybtn risk-2">暂定</button></div>';
                	infobody += '<div><button id="'+marker.getTitle()+'-3" class="info-btn mybtn risk-3">模拟救火</button></div>';
                	infoWindow.setInfoTitle(marker.getTitle());
                    infoWindow.setInfoBody(infobody);
                    infoWindow.open(map, marker.getPosition());
                }

            })
        }
        
    }
    
    
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
    	var myChart = echarts.init(document.getElementById('level3_treechart'));
    	myChart.showLoading();
   	    myChart.hideLoading();
   	    var data = {
   		    "name": "西部特勤站",
   		    label:{
   		    	position:[45, -20],
   		    },
   		    "children": [
   		        {
   		            "name": "哈尔滨消防支队松北区大队",
   		   		    label:{
   		   		    	position:[80, 40],
   		   		    },
   		        	"value":100,
   		        	"children":[
   		        		{
   		        			"name": "哈尔滨消防支队松北区大队永久站",
   		        		    label:{
   		        		    	position:[220,10],
   		        		    },
   		        		},
   		        		{
   		        			"name": "世贸大道消防微型站",
   		        		    label:{
   		        		    	position:[140,10],
   		        		    },
   		        		},
   		        		{
   		        			"name": "滨水大道消防微型站",
   		        		    label:{
   		        		    	position:[140,10],
   		        		    },
   		        		}
   		        	]
   		        },
   		        {
   		            "name": "哈尔滨市消防支队道里区大队",
	        		    label:{
		        		    	position:[80, 40],
		        		    },
  		        	"value":150,
   		        	"children":[
   		        		{
   		        			"name": "哈尔滨市消防支队道里区大队永久站",
   		        		    label:{
   		        		    	position:[237,10],
   		        		    },
   		        		}
   		        	]
   		        },
   		        {
   		            "name": "武警哈尔滨市消防支队西站",
	        		    label:{
		        		    	position:[80, 40],
		        		    },
  		        	"value":200,
   		        	"children":[
   		        		{
   		        			"name": "群西消防站",
   		        		    label:{
   		        		    	position:[87,10],
   		        		    },
   		        		}
   		        	]
   		        },
   		    ],
   		    "value":321,
   	    };
   	    
   	    myChart.setOption(option = {
   		    tooltip: {
   		        trigger: 'item',
   		        triggerOn: 'mousemove'
   		    },
   		    legend: {
   		        top: '100',
   		        left: '100',
   		        orient: 'vertical',
   		        data: [{
   		            name: '支援结构树状图',
   		            icon: 'rectangle',
   		        }],
   		        borderColor: 'black'
   		    },
   		    series:[
   		        {
   		            type: 'tree',
   		            name: '支援结构',
   		            data: [data],
   		            
   		            top: '50',
   		            left: '100',
   		            bottom: '50',
   		            right: '250',
   		            symbol: 'arrow',
   		            symbolRotate: 90,
   		            symbolSize: 15,
   	                
   	                itemStyle:{
   	                    borderColor:'black',
   	                    borderWidth:3,
   	                },
   		            
   	                label: {
   		                normal: {
		                    position: [80, 40],
   		                    verticalAlign: 'middle',
   		                    align: 'right',
	                        color: 'black',
   	                        fontSize: 13,
   		                }
   		            },

   		            leaves: {
   		                label: {
   		                    normal: {
   		                        position: 'right',
   		                        verticalAlign: 'middle',
   		                        align: 'left',
   		                        color: 'black',
   		                        fontSize: 13,
   		                    }
   		                }
   		            },
   		            lineStyle:{
   		            	color:'black',
   		            },
   		            expandAndCollapse: true,

   		            animationDuration: 550,
   		            animationDurationUpdate: 750
   		        }
   		    ]
   		});
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
        // 开始计时
        window.decision_time = 0;
        window.decision_time_interval = window.setInterval(function () {
        	decision_time += 1;
        },10);
        // 记录报警时间
        document.getElementById("fire-alarming-time").innerHTML = document.getElementById("time display").innerHTML;
        
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
            document.body.style.overflow="auto";
            return;
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
    var row_count=3;	//问题表格行数（2）
    function generate_random(){
	    window.random_t1 = 0.75 + Math.random();
	    window.random_t2 = 2 + Math.random()*2;
	    window.random_t3 = 5 + Math.random()*4;
	    window.random_t4 = 3.5 + Math.random()*3;
	    window.random_t5 = 2 + Math.random()*2;
	    window.random_t6 = 3 + Math.random()*2;
	    window.random_t7 = 8 + Math.random()*4;
	    /*
	    window.random_t1 = 0;
	    window.random_t2 = 0;
	    window.random_t3 = 0;
	    window.random_t4 = 0;
	    window.random_t5 = 0;
	    window.random_t6 = 0;
	    window.random_t7 = 0;
		*/
    }
    function generate_plan() {
        generate_random();
    	document.body.style.overflowY="hidden";
        $("#generate_plan").fadeIn();
        $("#generate_plan_smallbox").delay(500).slideDown();
        try {
        	
        	// 火情及基本信息采集，约 1.25±0.5 s
        	window.progress1 = document.getElementById("progress1_showtime");
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

        document.getElementById("unconfirm_1").click();
        document.getElementById("unconfirm_2").click();
        document.getElementById("example_man_1").style.display="";
        document.getElementById("example_man_2").style.display="";
        document.getElementById("advise_ok_lable").style.display="none";
        document.getElementById("print_btn").style.display="none";
        row_count=3;
    }
    function progress_group_2() {
    	
    	// 人员配置决策，约 5±1.5 s
    	window.progress4 = document.getElementById("progress4_showtime");
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

        
        (document.getElementById("print_time_usage")).innerHTML = "";
        
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

    });

    var gethome_1=document.getElementById("gethome_1");
    var replace_1=document.getElementById("replace_1");
    var confirm_1=document.getElementById("confirm_1");
    var unconfirm_1=document.getElementById("unconfirm_1");
    var gethome_2=document.getElementById("gethome_2");
    var replace_2=document.getElementById("replace_2");
    var confirm_2=document.getElementById("confirm_2");
    var unconfirm_2=document.getElementById("unconfirm_2");
    
    $('#gethome_1').click(function () {
        gethome_1.style.display="none";
        replace_1.style.display="none";
        confirm_1.style.display="block";
        unconfirm_1.style.display="block";
    });
    $('#unconfirm_1').click(function () {
        gethome_1.style.display="block";
        replace_1.style.display="block";
        confirm_1.style.display="none";
        unconfirm_1.style.display="none";
    });
    $('#replace_1').click(function () {
        
    });
    $('#confirm_1').click(function () {
        var exam1=document.getElementById("example_man_1");
        exam1.style.display="none";
        row_count-=1;
        check_advise_table();
    });

    $('#gethome_2').click(function () {
        gethome_2.style.display="none";
        replace_2.style.display="none";
        confirm_2.style.display="block";
        unconfirm_2.style.display="block";
    });
    $('#unconfirm_2').click(function () {
        gethome_2.style.display="block";
        replace_2.style.display="block";
        confirm_2.style.display="none";
        unconfirm_2.style.display="none";
    });
    $('#replace_2').click(function () {
        document.getElementById("replace_table").style.display="block";

    });
    $('#confirm_2').click(function () {
        var exam2=document.getElementById("example_man_2");
        exam2.style.display="none";
        row_count-=1;
        check_advise_table();
    });
    function check_advise_table() {
        //var row_count=advise_table.rows.length;
        if(row_count==1){
            document.getElementById("advise_ok_lable").style.display="block";
            document.getElementById("print_btn").style.display="block";
        }
    };
    $('#replace_enter_btn').click(function () {
        alert("替换成功！");
        gethome_2.style.display="none";
        replace_2.style.display="none";
        confirm_2.style.display="block";
        unconfirm_2.style.display="block";
    });
    
    $('#print_btn').click(function () {
    	(document.getElementById("print_time_usage")).innerHTML = "本次决策总耗时:&nbsp"+(decision_time/100).toString()+"s";
    });
    
});
