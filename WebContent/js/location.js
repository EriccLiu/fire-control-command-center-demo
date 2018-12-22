var SSS = new Array();	// 特勤站列表(Special Service Station)
var PS = new Array();	// 永久站(Permanent Station)
var SS = new Array();	// 小型站(Small Station)
var MS = new Array();	// 微型站(Micro Station)
var WS = new Array();	// 水源(Water Source)

var SoR = new Array();	// 危险源（及重点管控单位）列表(Source of Risk)

sss_1 = new Object();
sss_1.innerHTML = '北';
sss_1.color = '#fff';
sss_1.iconTheme = 'fresh';
sss_1.iconStyle = 'red';
sss_1.position = [126.621057, 45.815116];
sss_1.clickable = true;

sss_2 = new Object();
sss_2.innerHTML = '南';
sss_2.color = '#fff';
sss_2.iconTheme = 'fresh';
sss_2.iconStyle = 'red';
sss_2.position = [126.623117, 45.705894];
sss_2.clickable = true;

sss_3 = new Object();
sss_3.innerHTML = '东';
sss_3.color = '#fff';
sss_3.iconTheme = 'fresh';
sss_3.iconStyle = 'red';
sss_3.position = [126.726114, 45.761969];
sss_3.clickable = true;

sss_4 = new Object();
sss_4.innerHTML = '西';
sss_4.color = '#fff';
sss_4.iconTheme = 'fresh';
sss_4.iconStyle = 'red';
sss_4.position = [126.537287, 45.735136];
sss_4.clickable = true;

// 增加危险源信息
sor_1 = new Object();
sor_1.label = '一';
sor_1.color = 'purple';
sor_1.position = [126.633806,45.742356];
sor_1.title = '危险源-1';
sor_1.clickable = true;
sor_1.topWhenClick  = true;

sor_2 = new Object();
sor_2.label = '一';
sor_2.color = 'purple';
sor_2.position = [126.604022,45.747806];
sor_2.title = '危险源-2';
sor_2.clickable = true;
sor_2.topWhenClick  = true;

sor_3 = new Object();
sor_3.label = '一';
sor_3.color = 'purple';
sor_3.position = [126.650671,45.765139];
sor_3.title = '危险源-3';
sor_3.clickable = true;
sor_3.topWhenClick  = true;

sor_4 = new Object();
sor_4.label = '一';
sor_4.color = 'purple';
sor_4.position = [126.679596,45.721058];
sor_4.title = '危险源-4';
sor_4.clickable = true;
sor_4.topWhenClick  = true;

sor_5 = new Object();
sor_5.label = '一';
sor_5.color = 'purple';
sor_5.position = [126.618807,45.683097];
sor_5.title = '危险源-5';
sor_5.clickable = true;
sor_5.topWhenClick  = true;

sor_6 = new Object();
sor_6.label = '二';
sor_6.color = 'purple';
sor_6.position = [126.637132,45.691552];
sor_6.title = '危险源-6';
sor_6.clickable = true;
sor_6.topWhenClick  = true;

sor_7 = new Object();
sor_7.label = '二';
sor_7.color = 'purple';
sor_7.position = [126.611913,45.714649];
sor_7.title = '危险源-7';
sor_7.clickable = true;
sor_7.topWhenClick  = true;

sor_8 = new Object();
sor_8.label = '二';
sor_8.color = 'purple';
sor_8.position = [126.608909,45.721241];
sor_8.title = '危险源-8';
sor_8.clickable = true;
sor_8.topWhenClick  = true;

sor_9 = new Object();
sor_9.label = '二';
sor_9.color = 'purple';
sor_9.position = [126.615883,45.721091];
sor_9.title = '危险源-9';
sor_9.clickable = true;
sor_9.topWhenClick  = true;

sor_10 = new Object();
sor_10.label = '二';
sor_10.color = 'purple';
sor_10.position = [126.577786,45.775043];
sor_10.title = '危险源-10';
sor_10.clickable = true;
sor_10.topWhenClick  = true;

SoR.push(sor_1);
SoR.push(sor_2);
SoR.push(sor_3);
SoR.push(sor_4);
SoR.push(sor_5);
SoR.push(sor_6);
SoR.push(sor_7);
SoR.push(sor_8);
SoR.push(sor_9);
SoR.push(sor_10);

// 增加永久站信息
//哈尔滨消防支队道里区消防大队
ps_2 = new Object();
ps_2.position = [126.607895, 45.761718];
ps_2.title = '哈尔滨消防支队道里区消防大队';
ps_2.clickable = true;
ps_2.topWhenClick  = true;

//哈尔滨消防支队南岗区消防大队
ps_3 = new Object();
ps_3.position = [126.70715, 45.741331];
ps_3.title = '哈尔滨消防支队南岗区消防大队';
ps_3.clickable = true;
ps_3.topWhenClick  = true;

//哈尔滨消防支队香坊区消防大队
ps_4 = new Object();
ps_4.position = [126.657271, 45.73138];
ps_4.title = '哈尔滨消防支队香坊区消防大队';
ps_4.clickable = true;
ps_4.topWhenClick  = true;

//哈尔滨消防支队道外区消防大队
ps_5 = new Object();
ps_5.position = [126.701575, 45.789769];
ps_5.title = '哈尔滨消防支队道外区消防大队';
ps_5.clickable = true;
ps_5.topWhenClick  = true;

//哈尔滨消防支队松北区消防大队
ps_6 = new Object();
ps_6.position = [126.522515, 45.796275];
ps_6.title = '哈尔滨消防支队松北区消防大队';
ps_6.clickable = true;
ps_6.topWhenClick  = true;

//哈尔滨消防支队平房区消防大队
ps_7 = new Object();
ps_7.position = [126.600093, 45.604012];
ps_7.title = '哈尔滨消防支队平房区消防大队';
ps_7.clickable = true;
ps_7.topWhenClick  = true;

PS.push(ps_2);
PS.push(ps_3);
PS.push(ps_4);
PS.push(ps_5);
PS.push(ps_6);
PS.push(ps_7);

// 增加小型站信息
ss_1 = new Object();
ss_1.label = '小';
ss_1.color = 'lightgreen';
ss_1.position = [126.62563432727708,45.784022967049864];
ss_1.title = '小型站-1';
ss_1.clickable = true;
ss_1.topWhenClick = true;

ss_2 = new Object();
ss_2.label = '小';
ss_2.color = 'lightgreen';
ss_2.position = [126.61359492775922,45.75807494664459];
ss_2.title = '小型站-2';
ss_2.clickable = true;
ss_2.topWhenClick = true;

ss_3 = new Object();
ss_3.label = '小';
ss_3.color = 'lightgreen';
ss_3.position = [126.65356461863433,45.773465072960946];
ss_3.title = '小型站-3';
ss_3.clickable = true;
ss_3.topWhenClick = true;

ss_4 = new Object();
ss_4.label = '小';
ss_4.color = 'lightgreen';
ss_4.position = [126.65045547552182,45.81092742617216];
ss_4.title = '小型站-4';
ss_4.clickable = true;
ss_4.topWhenClick = true;

ss_5 = new Object();
ss_5.label = '小';
ss_5.color = 'lightgreen';
ss_5.position = [126.53305698202935,45.73347753324981];
ss_5.title = '小型站-5';
ss_5.clickable = true;
ss_5.topWhenClick = true;

ss_6 = new Object();
ss_6.label = '小';
ss_6.color = 'lightgreen';
ss_6.position = [126.5714264322265,45.75563895886847];
ss_6.title = '小型站-6';
ss_6.clickable = true;
ss_6.topWhenClick = true;

ss_7 = new Object();
ss_7.label = '小';
ss_7.color = 'lightgreen';
ss_7.position = [126.62134274379083,45.81608082940691];
ss_7.title = '小型站-7';
ss_7.clickable = true;
ss_7.topWhenClick = true;

ss_8 = new Object();
ss_8.label = '小';
ss_8.color = 'lightgreen';
ss_8.position = [126.73225466428862,45.688331107231825];
ss_8.title = '小型站-8';
ss_8.clickable = true;
ss_8.topWhenClick = true;

ss_9 = new Object();
ss_9.label = '小';
ss_9.color = 'lightgreen';
ss_9.position = [126.74359508264561,45.801914792287526];
ss_9.title = '小型站-9';
ss_9.clickable = true;
ss_9.topWhenClick = true;

ss_10 = new Object();
ss_10.label = '小';
ss_10.color = 'lightgreen';
ss_10.position = [126.57445431761478,45.80761192091903];
ss_10.title = '小型站-10';
ss_10.clickable = true;
ss_10.topWhenClick = true;

SS.push(ss_1);
SS.push(ss_2);
SS.push(ss_3);
SS.push(ss_4);
SS.push(ss_5);
SS.push(ss_6);
SS.push(ss_7);
SS.push(ss_8);
SS.push(ss_9);
SS.push(ss_10);

ms_1 = new Object();
ms_1.label = '微';
ms_1.color = 'salmon';
ms_1.position = [126.539852,45.796045];
ms_1.title = '微型站-1';
ms_1.clickable = true;
ms_1.topWhenClick = true;

ms_2 = new Object();
ms_2.label = '微';
ms_2.color = 'salmon';
ms_2.position = [126.680402,45.701104];
ms_2.title = '微型站-2';
ms_2.clickable = true;
ms_2.topWhenClick = true;

ms_3 = new Object();
ms_3.label = '微';
ms_3.color = 'salmon';
ms_3.position = [126.564978,45.748927];
ms_3.title = '微型站-3';
ms_3.clickable = true;
ms_3.topWhenClick = true;

ms_4 = new Object();
ms_4.label = '微';
ms_4.color = 'salmon';
ms_4.position = [126.549107,45.79841];
ms_4.title = '微型站-4';
ms_4.clickable = true;
ms_4.topWhenClick = true;

ms_5 = new Object();
ms_5.label = '微';
ms_5.color = 'salmon';
ms_5.position = [126.744103,45.801029];
ms_5.title = '微型站-5';
ms_5.clickable = true;
ms_5.topWhenClick = true;

ms_6 = new Object();
ms_6.label = '微';
ms_6.color = 'salmon';
ms_6.position = [126.547253,45.764077];
ms_6.title = '微型站-6';
ms_6.clickable = true;
ms_6.topWhenClick = true;

ms_7 = new Object();
ms_7.label = '微';
ms_7.color = 'salmon';
ms_7.position = [126.58658,45.749362];
ms_7.title = '微型站-7';
ms_7.clickable = true;
ms_7.topWhenClick = true;

ms_8 = new Object();
ms_8.label = '微';
ms_8.color = 'salmon';
ms_8.position = [126.604379,45.694274];
ms_8.title = '微型站-8';
ms_8.clickable = true;
ms_8.topWhenClick = true;

ms_9 = new Object();
ms_9.label = '微';
ms_9.color = 'salmon';
ms_9.position = [126.723019,45.768912];
ms_9.title = '微型站-9';
ms_9.clickable = true;
ms_9.topWhenClick = true;

ms_10 = new Object();
ms_10.label = '微';
ms_10.color = 'salmon';
ms_10.position = [126.701356,45.716635];
ms_10.title = '微型站-10';
ms_10.clickable = true;
ms_10.topWhenClick = true;

ms_11 = new Object();
ms_11.label = '微';
ms_11.color = 'salmon';
ms_11.position = [126.573304,45.824801];
ms_11.title = '微型站-11';
ms_11.clickable = true;
ms_11.topWhenClick = true;

ms_12 = new Object();
ms_12.label = '微';
ms_12.color = 'salmon';
ms_12.position = [126.542217,45.797059];
ms_12.title = '微型站-12';
ms_12.clickable = true;
ms_12.topWhenClick = true;

ms_13 = new Object();
ms_13.label = '微';
ms_13.color = 'salmon';
ms_13.position = [126.7455,45.693013];
ms_13.title = '微型站-13';
ms_13.clickable = true;
ms_13.topWhenClick = true;

ms_14 = new Object();
ms_14.label = '微';
ms_14.color = 'salmon';
ms_14.position = [126.744462,45.694564];
ms_14.title = '微型站-14';
ms_14.clickable = true;
ms_14.topWhenClick = true;

ms_15 = new Object();
ms_15.label = '微';
ms_15.color = 'salmon';
ms_15.position = [126.585443,45.742915];
ms_15.title = '微型站-15';
ms_15.clickable = true;
ms_15.topWhenClick = true;

ms_16 = new Object();
ms_16.label = '微';
ms_16.color = 'salmon';
ms_16.position = [126.645227,45.719277];
ms_16.title = '微型站-16';
ms_16.clickable = true;
ms_16.topWhenClick = true;

ms_17 = new Object();
ms_17.label = '微';
ms_17.color = 'salmon';
ms_17.position = [126.530306,45.723781];
ms_17.title = '微型站-17';
ms_17.clickable = true;
ms_17.topWhenClick = true;

ms_18 = new Object();
ms_18.label = '微';
ms_18.color = 'salmon';
ms_18.position = [126.56064,45.795759];
ms_18.title = '微型站-18';
ms_18.clickable = true;
ms_18.topWhenClick = true;

ms_19 = new Object();
ms_19.label = '微';
ms_19.color = 'salmon';
ms_19.position = [126.647551,45.724096];
ms_19.title = '微型站-19';
ms_19.clickable = true;
ms_19.topWhenClick = true;

ms_20 = new Object();
ms_20.label = '微';
ms_20.color = 'salmon';
ms_20.position = [126.641803,45.694979];
ms_20.title = '微型站-20';
ms_20.clickable = true;
ms_20.topWhenClick = true;

ms_21 = new Object();
ms_21.label = '微';
ms_21.color = 'salmon';
ms_21.position = [126.643862,45.700294];
ms_21.title = '微型站-21';
ms_21.clickable = true;
ms_21.topWhenClick = true;

ms_22 = new Object();
ms_22.label = '微';
ms_22.color = 'salmon';
ms_22.position = [126.725328,45.694697];
ms_22.title = '微型站-22';
ms_22.clickable = true;
ms_22.topWhenClick = true;

ms_23 = new Object();
ms_23.label = '微';
ms_23.color = 'salmon';
ms_23.position = [126.702501,45.687502];
ms_23.title = '微型站-23';
ms_23.clickable = true;
ms_23.topWhenClick = true;

ms_24 = new Object();
ms_24.label = '微';
ms_24.color = 'salmon';
ms_24.position = [126.696653,45.783232];
ms_24.title = '微型站-24';
ms_24.clickable = true;
ms_24.topWhenClick = true;

ms_25 = new Object();
ms_25.label = '微';
ms_25.color = 'salmon';
ms_25.position = [126.557501,45.767984];
ms_25.title = '微型站-25';
ms_25.clickable = true;
ms_25.topWhenClick = true;

ms_26 = new Object();
ms_26.label = '微';
ms_26.color = 'salmon';
ms_26.position = [126.643441,45.809066];
ms_26.title = '微型站-26';
ms_26.clickable = true;
ms_26.topWhenClick = true;

ms_27 = new Object();
ms_27.label = '微';
ms_27.color = 'salmon';
ms_27.position = [126.690196,45.700122];
ms_27.title = '微型站-27';
ms_27.clickable = true;
ms_27.topWhenClick = true;

ms_28 = new Object();
ms_28.label = '微';
ms_28.color = 'salmon';
ms_28.position = [126.577582,45.687039];
ms_28.title = '微型站-28';
ms_28.clickable = true;
ms_28.topWhenClick = true;

ms_29 = new Object();
ms_29.label = '微';
ms_29.color = 'salmon';
ms_29.position = [126.601535,45.796279];
ms_29.title = '微型站-29';
ms_29.clickable = true;
ms_29.topWhenClick = true;

ms_30 = new Object();
ms_30.label = '微';
ms_30.color = 'salmon';
ms_30.position = [126.621898,45.730676];
ms_30.title = '微型站-30';
ms_30.clickable = true;
ms_30.topWhenClick = true;

ms_31 = new Object();
ms_31.label = '微';
ms_31.color = 'salmon';
ms_31.position = [126.656656,45.721524];
ms_31.title = '微型站-31';
ms_31.clickable = true;
ms_31.topWhenClick = true;

ms_32 = new Object();
ms_32.label = '微';
ms_32.color = 'salmon';
ms_32.position = [126.735248,45.822037];
ms_32.title = '微型站-32';
ms_32.clickable = true;
ms_32.topWhenClick = true;

ms_33 = new Object();
ms_33.label = '微';
ms_33.color = 'salmon';
ms_33.position = [126.675561,45.732972];
ms_33.title = '微型站-33';
ms_33.clickable = true;
ms_33.topWhenClick = true;

ms_34 = new Object();
ms_34.label = '微';
ms_34.color = 'salmon';
ms_34.position = [126.678816,45.699791];
ms_34.title = '微型站-34';
ms_34.clickable = true;
ms_34.topWhenClick = true;

ms_35 = new Object();
ms_35.label = '微';
ms_35.color = 'salmon';
ms_35.position = [126.562359,45.679151];
ms_35.title = '微型站-35';
ms_35.clickable = true;
ms_35.topWhenClick = true;

ms_36 = new Object();
ms_36.label = '微';
ms_36.color = 'salmon';
ms_36.position = [126.578977,45.701443];
ms_36.title = '微型站-36';
ms_36.clickable = true;
ms_36.topWhenClick = true;

ms_37 = new Object();
ms_37.label = '微';
ms_37.color = 'salmon';
ms_37.position = [126.678567,45.717838];
ms_37.title = '微型站-37';
ms_37.clickable = true;
ms_37.topWhenClick = true;

ms_38 = new Object();
ms_38.label = '微';
ms_38.color = 'salmon';
ms_38.position = [126.64228,45.826882];
ms_38.title = '微型站-38';
ms_38.clickable = true;
ms_38.topWhenClick = true;

ms_39 = new Object();
ms_39.label = '微';
ms_39.color = 'salmon';
ms_39.position = [126.74114,45.811394];
ms_39.title = '微型站-39';
ms_39.clickable = true;
ms_39.topWhenClick = true;

ms_40 = new Object();
ms_40.label = '微';
ms_40.color = 'salmon';
ms_40.position = [126.631765,45.706649];
ms_40.title = '微型站-40';
ms_40.clickable = true;
ms_40.topWhenClick = true;

ms_41 = new Object();
ms_41.label = '微';
ms_41.color = 'salmon';
ms_41.position = [126.534525,45.723173];
ms_41.title = '微型站-41';
ms_41.clickable = true;
ms_41.topWhenClick = true;

ms_42 = new Object();
ms_42.label = '微';
ms_42.color = 'salmon';
ms_42.position = [126.552628,45.782913];
ms_42.title = '微型站-42';
ms_42.clickable = true;
ms_42.topWhenClick = true;

ms_43 = new Object();
ms_43.label = '微';
ms_43.color = 'salmon';
ms_43.position = [126.693161,45.683256];
ms_43.title = '微型站-43';
ms_43.clickable = true;
ms_43.topWhenClick = true;

ms_44 = new Object();
ms_44.label = '微';
ms_44.color = 'salmon';
ms_44.position = [126.573073,45.745811];
ms_44.title = '微型站-44';
ms_44.clickable = true;
ms_44.topWhenClick = true;

ms_45 = new Object();
ms_45.label = '微';
ms_45.color = 'salmon';
ms_45.position = [126.674214,45.761572];
ms_45.title = '微型站-45';
ms_45.clickable = true;
ms_45.topWhenClick = true;

ms_46 = new Object();
ms_46.label = '微';
ms_46.color = 'salmon';
ms_46.position = [126.581163,45.7845];
ms_46.title = '微型站-46';
ms_46.clickable = true;
ms_46.topWhenClick = true;

ms_47 = new Object();
ms_47.label = '微';
ms_47.color = 'salmon';
ms_47.position = [126.61631,45.76034];
ms_47.title = '微型站-47';
ms_47.clickable = true;
ms_47.topWhenClick = true;

ms_48 = new Object();
ms_48.label = '微';
ms_48.color = 'salmon';
ms_48.position = [126.527959,45.6931];
ms_48.title = '微型站-48';
ms_48.clickable = true;
ms_48.topWhenClick = true;

ms_49 = new Object();
ms_49.label = '微';
ms_49.color = 'salmon';
ms_49.position = [126.643849,45.764082];
ms_49.title = '微型站-49';
ms_49.clickable = true;
ms_49.topWhenClick = true;

ms_50 = new Object();
ms_50.label = '微';
ms_50.color = 'salmon';
ms_50.position = [126.571774,45.717044];
ms_50.title = '微型站-50';
ms_50.clickable = true;
ms_50.topWhenClick = true;

MS.push(ms_1);
MS.push(ms_2);
MS.push(ms_3);
MS.push(ms_4);
MS.push(ms_5);
MS.push(ms_6);
MS.push(ms_7);
MS.push(ms_8);
MS.push(ms_9);
MS.push(ms_10);
MS.push(ms_11);
MS.push(ms_12);
MS.push(ms_13);
MS.push(ms_14);
MS.push(ms_15);
MS.push(ms_16);
MS.push(ms_17);
MS.push(ms_18);
MS.push(ms_19);
MS.push(ms_20);
MS.push(ms_21);
MS.push(ms_22);
MS.push(ms_23);
MS.push(ms_24);
MS.push(ms_25);
MS.push(ms_26);
MS.push(ms_27);
MS.push(ms_28);
MS.push(ms_29);
MS.push(ms_30);
MS.push(ms_31);
MS.push(ms_32);
MS.push(ms_33);
MS.push(ms_34);
MS.push(ms_35);
MS.push(ms_36);
MS.push(ms_37);
MS.push(ms_38);
MS.push(ms_39);
MS.push(ms_40);
MS.push(ms_41);
MS.push(ms_42);
MS.push(ms_43);
MS.push(ms_44);
MS.push(ms_45);
MS.push(ms_46);
MS.push(ms_47);
MS.push(ms_48);
MS.push(ms_49);
MS.push(ms_50);

ws_1 = new Object();
ws_1.label = '水';
ws_1.color = 'lightblue';
ws_1.position = [126.539852,45.796045];
ws_1.title = '水源-1';
ws_1.clickable = true;
ws_1.topWhenClick = true;

ws_2 = new Object();
ws_2.label = '水';
ws_2.color = 'lightblue';
ws_2.position = [126.680402,45.701104];
ws_2.title = '水源-2';
ws_2.clickable = true;
ws_2.topWhenClick = true;

ws_3 = new Object();
ws_3.label = '水';
ws_3.color = 'lightblue';
ws_3.position = [126.564978,45.748927];
ws_3.title = '水源-3';
ws_3.clickable = true;
ws_3.topWhenClick = true;

ws_4 = new Object();
ws_4.label = '水';
ws_4.color = 'lightblue';
ws_4.position = [126.549107,45.79841];
ws_4.title = '水源-4';
ws_4.clickable = true;
ws_4.topWhenClick = true;

ws_5 = new Object();
ws_5.label = '水';
ws_5.color = 'lightblue';
ws_5.position = [126.744103,45.801029];
ws_5.title = '水源-5';
ws_5.clickable = true;
ws_5.topWhenClick = true;

ws_6 = new Object();
ws_6.label = '水';
ws_6.color = 'lightblue';
ws_6.position = [126.547253,45.764077];
ws_6.title = '水源-6';
ws_6.clickable = true;
ws_6.topWhenClick = true;

ws_7 = new Object();
ws_7.label = '水';
ws_7.color = 'lightblue';
ws_7.position = [126.58658,45.749362];
ws_7.title = '水源-7';
ws_7.clickable = true;
ws_7.topWhenClick = true;

ws_8 = new Object();
ws_8.label = '水';
ws_8.color = 'lightblue';
ws_8.position = [126.604379,45.694274];
ws_8.title = '水源-8';
ws_8.clickable = true;
ws_8.topWhenClick = true;

ws_9 = new Object();
ws_9.label = '水';
ws_9.color = 'lightblue';
ws_9.position = [126.723019,45.768912];
ws_9.title = '水源-9';
ws_9.clickable = true;
ws_9.topWhenClick = true;

ws_10 = new Object();
ws_10.label = '水';
ws_10.color = 'lightblue';
ws_10.position = [126.701356,45.716635];
ws_10.title = '水源-10';
ws_10.clickable = true;
ws_10.topWhenClick = true;

ws_11 = new Object();
ws_11.label = '水';
ws_11.color = 'lightblue';
ws_11.position = [126.573304,45.824801];
ws_11.title = '水源-11';
ws_11.clickable = true;
ws_11.topWhenClick = true;

ws_12 = new Object();
ws_12.label = '水';
ws_12.color = 'lightblue';
ws_12.position = [126.542217,45.797059];
ws_12.title = '水源-12';
ws_12.clickable = true;
ws_12.topWhenClick = true;

ws_13 = new Object();
ws_13.label = '水';
ws_13.color = 'lightblue';
ws_13.position = [126.7455,45.693013];
ws_13.title = '水源-13';
ws_13.clickable = true;
ws_13.topWhenClick = true;

ws_14 = new Object();
ws_14.label = '水';
ws_14.color = 'lightblue';
ws_14.position = [126.744462,45.694564];
ws_14.title = '水源-14';
ws_14.clickable = true;
ws_14.topWhenClick = true;

ws_15 = new Object();
ws_15.label = '水';
ws_15.color = 'lightblue';
ws_15.position = [126.585443,45.742915];
ws_15.title = '水源-15';
ws_15.clickable = true;
ws_15.topWhenClick = true;

ws_16 = new Object();
ws_16.label = '水';
ws_16.color = 'lightblue';
ws_16.position = [126.645227,45.719277];
ws_16.title = '水源-16';
ws_16.clickable = true;
ws_16.topWhenClick = true;

ws_17 = new Object();
ws_17.label = '水';
ws_17.color = 'lightblue';
ws_17.position = [126.530306,45.723781];
ws_17.title = '水源-17';
ws_17.clickable = true;
ws_17.topWhenClick = true;

ws_18 = new Object();
ws_18.label = '水';
ws_18.color = 'lightblue';
ws_18.position = [126.56064,45.795759];
ws_18.title = '水源-18';
ws_18.clickable = true;
ws_18.topWhenClick = true;

ws_19 = new Object();
ws_19.label = '水';
ws_19.color = 'lightblue';
ws_19.position = [126.647551,45.724096];
ws_19.title = '水源-19';
ws_19.clickable = true;
ws_19.topWhenClick = true;

ws_20 = new Object();
ws_20.label = '水';
ws_20.color = 'lightblue';
ws_20.position = [126.641803,45.694979];
ws_20.title = '水源-20';
ws_20.clickable = true;
ws_20.topWhenClick = true;

ws_21 = new Object();
ws_21.label = '水';
ws_21.color = 'lightblue';
ws_21.position = [126.643862,45.700294];
ws_21.title = '水源-21';
ws_21.clickable = true;
ws_21.topWhenClick = true;

ws_22 = new Object();
ws_22.label = '水';
ws_22.color = 'lightblue';
ws_22.position = [126.725328,45.694697];
ws_22.title = '水源-22';
ws_22.clickable = true;
ws_22.topWhenClick = true;

ws_23 = new Object();
ws_23.label = '水';
ws_23.color = 'lightblue';
ws_23.position = [126.702501,45.687502];
ws_23.title = '水源-23';
ws_23.clickable = true;
ws_23.topWhenClick = true;

ws_24 = new Object();
ws_24.label = '水';
ws_24.color = 'lightblue';
ws_24.position = [126.696653,45.783232];
ws_24.title = '水源-24';
ws_24.clickable = true;
ws_24.topWhenClick = true;

ws_25 = new Object();
ws_25.label = '水';
ws_25.color = 'lightblue';
ws_25.position = [126.557501,45.767984];
ws_25.title = '水源-25';
ws_25.clickable = true;
ws_25.topWhenClick = true;

ws_26 = new Object();
ws_26.label = '水';
ws_26.color = 'lightblue';
ws_26.position = [126.643441,45.809066];
ws_26.title = '水源-26';
ws_26.clickable = true;
ws_26.topWhenClick = true;

ws_27 = new Object();
ws_27.label = '水';
ws_27.color = 'lightblue';
ws_27.position = [126.690196,45.700122];
ws_27.title = '水源-27';
ws_27.clickable = true;
ws_27.topWhenClick = true;

ws_28 = new Object();
ws_28.label = '水';
ws_28.color = 'lightblue';
ws_28.position = [126.577582,45.687039];
ws_28.title = '水源-28';
ws_28.clickable = true;
ws_28.topWhenClick = true;

ws_29 = new Object();
ws_29.label = '水';
ws_29.color = 'lightblue';
ws_29.position = [126.601535,45.796279];
ws_29.title = '水源-29';
ws_29.clickable = true;
ws_29.topWhenClick = true;

ws_30 = new Object();
ws_30.label = '水';
ws_30.color = 'lightblue';
ws_30.position = [126.621898,45.730676];
ws_30.title = '水源-30';
ws_30.clickable = true;
ws_30.topWhenClick = true;

ws_31 = new Object();
ws_31.label = '水';
ws_31.color = 'lightblue';
ws_31.position = [126.656656,45.721524];
ws_31.title = '水源-31';
ws_31.clickable = true;
ws_31.topWhenClick = true;

ws_32 = new Object();
ws_32.label = '水';
ws_32.color = 'lightblue';
ws_32.position = [126.735248,45.822037];
ws_32.title = '水源-32';
ws_32.clickable = true;
ws_32.topWhenClick = true;

ws_33 = new Object();
ws_33.label = '水';
ws_33.color = 'lightblue';
ws_33.position = [126.675561,45.732972];
ws_33.title = '水源-33';
ws_33.clickable = true;
ws_33.topWhenClick = true;

ws_34 = new Object();
ws_34.label = '水';
ws_34.color = 'lightblue';
ws_34.position = [126.678816,45.699791];
ws_34.title = '水源-34';
ws_34.clickable = true;
ws_34.topWhenClick = true;

ws_35 = new Object();
ws_35.label = '水';
ws_35.color = 'lightblue';
ws_35.position = [126.562359,45.679151];
ws_35.title = '水源-35';
ws_35.clickable = true;
ws_35.topWhenClick = true;

ws_36 = new Object();
ws_36.label = '水';
ws_36.color = 'lightblue';
ws_36.position = [126.578977,45.701443];
ws_36.title = '水源-36';
ws_36.clickable = true;
ws_36.topWhenClick = true;

ws_37 = new Object();
ws_37.label = '水';
ws_37.color = 'lightblue';
ws_37.position = [126.678567,45.717838];
ws_37.title = '水源-37';
ws_37.clickable = true;
ws_37.topWhenClick = true;

ws_38 = new Object();
ws_38.label = '水';
ws_38.color = 'lightblue';
ws_38.position = [126.64228,45.826882];
ws_38.title = '水源-38';
ws_38.clickable = true;
ws_38.topWhenClick = true;

ws_39 = new Object();
ws_39.label = '水';
ws_39.color = 'lightblue';
ws_39.position = [126.74114,45.811394];
ws_39.title = '水源-39';
ws_39.clickable = true;
ws_39.topWhenClick = true;

ws_40 = new Object();
ws_40.label = '水';
ws_40.color = 'lightblue';
ws_40.position = [126.631765,45.706649];
ws_40.title = '水源-40';
ws_40.clickable = true;
ws_40.topWhenClick = true;

ws_41 = new Object();
ws_41.label = '水';
ws_41.color = 'lightblue';
ws_41.position = [126.534525,45.723173];
ws_41.title = '水源-41';
ws_41.clickable = true;
ws_41.topWhenClick = true;

ws_42 = new Object();
ws_42.label = '水';
ws_42.color = 'lightblue';
ws_42.position = [126.552628,45.782913];
ws_42.title = '水源-42';
ws_42.clickable = true;
ws_42.topWhenClick = true;

ws_43 = new Object();
ws_43.label = '水';
ws_43.color = 'lightblue';
ws_43.position = [126.693161,45.683256];
ws_43.title = '水源-43';
ws_43.clickable = true;
ws_43.topWhenClick = true;

ws_44 = new Object();
ws_44.label = '水';
ws_44.color = 'lightblue';
ws_44.position = [126.573073,45.745811];
ws_44.title = '水源-44';
ws_44.clickable = true;
ws_44.topWhenClick = true;

ws_45 = new Object();
ws_45.label = '水';
ws_45.color = 'lightblue';
ws_45.position = [126.674214,45.761572];
ws_45.title = '水源-45';
ws_45.clickable = true;
ws_45.topWhenClick = true;

ws_46 = new Object();
ws_46.label = '水';
ws_46.color = 'lightblue';
ws_46.position = [126.581163,45.7845];
ws_46.title = '水源-46';
ws_46.clickable = true;
ws_46.topWhenClick = true;

ws_47 = new Object();
ws_47.label = '水';
ws_47.color = 'lightblue';
ws_47.position = [126.61631,45.76034];
ws_47.title = '水源-47';
ws_47.clickable = true;
ws_47.topWhenClick = true;

ws_48 = new Object();
ws_48.label = '水';
ws_48.color = 'lightblue';
ws_48.position = [126.527959,45.6931];
ws_48.title = '水源-48';
ws_48.clickable = true;
ws_48.topWhenClick = true;

ws_49 = new Object();
ws_49.label = '水';
ws_49.color = 'lightblue';
ws_49.position = [126.643849,45.764082];
ws_49.title = '水源-49';
ws_49.clickable = true;
ws_49.topWhenClick = true;

ws_50 = new Object();
ws_50.label = '水';
ws_50.color = 'lightblue';
ws_50.position = [126.571774,45.717044];
ws_50.title = '水源-50';
ws_50.clickable = true;
ws_50.topWhenClick = true;

ws_51 = new Object();
ws_51.label = '水';
ws_51.color = 'lightblue';
ws_51.position = [126.578037,45.806521];
ws_51.title = '水源-51';
ws_51.clickable = true;
ws_51.topWhenClick = true;

ws_52 = new Object();
ws_52.label = '水';
ws_52.color = 'lightblue';
ws_52.position = [126.726438,45.684612];
ws_52.title = '水源-52';
ws_52.clickable = true;
ws_52.topWhenClick = true;

ws_53 = new Object();
ws_53.label = '水';
ws_53.color = 'lightblue';
ws_53.position = [126.657893,45.746551];
ws_53.title = '水源-53';
ws_53.clickable = true;
ws_53.topWhenClick = true;

ws_54 = new Object();
ws_54.label = '水';
ws_54.color = 'lightblue';
ws_54.position = [126.69195,45.729315];
ws_54.title = '水源-54';
ws_54.clickable = true;
ws_54.topWhenClick = true;

ws_55 = new Object();
ws_55.label = '水';
ws_55.color = 'lightblue';
ws_55.position = [126.643886,45.806371];
ws_55.title = '水源-55';
ws_55.clickable = true;
ws_55.topWhenClick = true;

ws_56 = new Object();
ws_56.label = '水';
ws_56.color = 'lightblue';
ws_56.position = [126.641309,45.675241];
ws_56.title = '水源-56';
ws_56.clickable = true;
ws_56.topWhenClick = true;

ws_57 = new Object();
ws_57.label = '水';
ws_57.color = 'lightblue';
ws_57.position = [126.608823,45.687797];
ws_57.title = '水源-57';
ws_57.clickable = true;
ws_57.topWhenClick = true;

ws_58 = new Object();
ws_58.label = '水';
ws_58.color = 'lightblue';
ws_58.position = [126.585606,45.786446];
ws_58.title = '水源-58';
ws_58.clickable = true;
ws_58.topWhenClick = true;

ws_59 = new Object();
ws_59.label = '水';
ws_59.color = 'lightblue';
ws_59.position = [126.62148,45.784515];
ws_59.title = '水源-59';
ws_59.clickable = true;
ws_59.topWhenClick = true;

ws_60 = new Object();
ws_60.label = '水';
ws_60.color = 'lightblue';
ws_60.position = [126.603087,45.776365];
ws_60.title = '水源-60';
ws_60.clickable = true;
ws_60.topWhenClick = true;

ws_61 = new Object();
ws_61.label = '水';
ws_61.color = 'lightblue';
ws_61.position = [126.671667,45.702624];
ws_61.title = '水源-61';
ws_61.clickable = true;
ws_61.topWhenClick = true;

ws_62 = new Object();
ws_62.label = '水';
ws_62.color = 'lightblue';
ws_62.position = [126.602438,45.724839];
ws_62.title = '水源-62';
ws_62.clickable = true;
ws_62.topWhenClick = true;

ws_63 = new Object();
ws_63.label = '水';
ws_63.color = 'lightblue';
ws_63.position = [126.629675,45.679359];
ws_63.title = '水源-63';
ws_63.clickable = true;
ws_63.topWhenClick = true;

ws_64 = new Object();
ws_64.label = '水';
ws_64.color = 'lightblue';
ws_64.position = [126.556167,45.70251];
ws_64.title = '水源-64';
ws_64.clickable = true;
ws_64.topWhenClick = true;

ws_65 = new Object();
ws_65.label = '水';
ws_65.color = 'lightblue';
ws_65.position = [126.682973,45.734464];
ws_65.title = '水源-65';
ws_65.clickable = true;
ws_65.topWhenClick = true;

ws_66 = new Object();
ws_66.label = '水';
ws_66.color = 'lightblue';
ws_66.position = [126.644255,45.818184];
ws_66.title = '水源-66';
ws_66.clickable = true;
ws_66.topWhenClick = true;

ws_67 = new Object();
ws_67.label = '水';
ws_67.color = 'lightblue';
ws_67.position = [126.580074,45.758464];
ws_67.title = '水源-67';
ws_67.clickable = true;
ws_67.topWhenClick = true;

ws_68 = new Object();
ws_68.label = '水';
ws_68.color = 'lightblue';
ws_68.position = [126.624087,45.700607];
ws_68.title = '水源-68';
ws_68.clickable = true;
ws_68.topWhenClick = true;

ws_69 = new Object();
ws_69.label = '水';
ws_69.color = 'lightblue';
ws_69.position = [126.717897,45.776906];
ws_69.title = '水源-69';
ws_69.clickable = true;
ws_69.topWhenClick = true;

ws_70 = new Object();
ws_70.label = '水';
ws_70.color = 'lightblue';
ws_70.position = [126.579354,45.811618];
ws_70.title = '水源-70';
ws_70.clickable = true;
ws_70.topWhenClick = true;

ws_71 = new Object();
ws_71.label = '水';
ws_71.color = 'lightblue';
ws_71.position = [126.551413,45.696134];
ws_71.title = '水源-71';
ws_71.clickable = true;
ws_71.topWhenClick = true;

ws_72 = new Object();
ws_72.label = '水';
ws_72.color = 'lightblue';
ws_72.position = [126.552769,45.744499];
ws_72.title = '水源-72';
ws_72.clickable = true;
ws_72.topWhenClick = true;

ws_73 = new Object();
ws_73.label = '水';
ws_73.color = 'lightblue';
ws_73.position = [126.619094,45.775718];
ws_73.title = '水源-73';
ws_73.clickable = true;
ws_73.topWhenClick = true;

ws_74 = new Object();
ws_74.label = '水';
ws_74.color = 'lightblue';
ws_74.position = [126.540352,45.788875];
ws_74.title = '水源-74';
ws_74.clickable = true;
ws_74.topWhenClick = true;

ws_75 = new Object();
ws_75.label = '水';
ws_75.color = 'lightblue';
ws_75.position = [126.648441,45.681996];
ws_75.title = '水源-75';
ws_75.clickable = true;
ws_75.topWhenClick = true;

ws_76 = new Object();
ws_76.label = '水';
ws_76.color = 'lightblue';
ws_76.position = [126.567881,45.790358];
ws_76.title = '水源-76';
ws_76.clickable = true;
ws_76.topWhenClick = true;

ws_77 = new Object();
ws_77.label = '水';
ws_77.color = 'lightblue';
ws_77.position = [126.719669,45.705386];
ws_77.title = '水源-77';
ws_77.clickable = true;
ws_77.topWhenClick = true;

ws_78 = new Object();
ws_78.label = '水';
ws_78.color = 'lightblue';
ws_78.position = [126.621224,45.726844];
ws_78.title = '水源-78';
ws_78.clickable = true;
ws_78.topWhenClick = true;

ws_79 = new Object();
ws_79.label = '水';
ws_79.color = 'lightblue';
ws_79.position = [126.579386,45.765871];
ws_79.title = '水源-79';
ws_79.clickable = true;
ws_79.topWhenClick = true;

ws_80 = new Object();
ws_80.label = '水';
ws_80.color = 'lightblue';
ws_80.position = [126.73143,45.687485];
ws_80.title = '水源-80';
ws_80.clickable = true;
ws_80.topWhenClick = true;

ws_81 = new Object();
ws_81.label = '水';
ws_81.color = 'lightblue';
ws_81.position = [126.566329,45.706668];
ws_81.title = '水源-81';
ws_81.clickable = true;
ws_81.topWhenClick = true;

ws_82 = new Object();
ws_82.label = '水';
ws_82.color = 'lightblue';
ws_82.position = [126.726929,45.707127];
ws_82.title = '水源-82';
ws_82.clickable = true;
ws_82.topWhenClick = true;

ws_83 = new Object();
ws_83.label = '水';
ws_83.color = 'lightblue';
ws_83.position = [126.689303,45.754873];
ws_83.title = '水源-83';
ws_83.clickable = true;
ws_83.topWhenClick = true;

ws_84 = new Object();
ws_84.label = '水';
ws_84.color = 'lightblue';
ws_84.position = [126.528819,45.722166];
ws_84.title = '水源-84';
ws_84.clickable = true;
ws_84.topWhenClick = true;

ws_85 = new Object();
ws_85.label = '水';
ws_85.color = 'lightblue';
ws_85.position = [126.707524,45.683008];
ws_85.title = '水源-85';
ws_85.clickable = true;
ws_85.topWhenClick = true;

ws_86 = new Object();
ws_86.label = '水';
ws_86.color = 'lightblue';
ws_86.position = [126.721186,45.757772];
ws_86.title = '水源-86';
ws_86.clickable = true;
ws_86.topWhenClick = true;

ws_87 = new Object();
ws_87.label = '水';
ws_87.color = 'lightblue';
ws_87.position = [126.554458,45.744808];
ws_87.title = '水源-87';
ws_87.clickable = true;
ws_87.topWhenClick = true;

ws_88 = new Object();
ws_88.label = '水';
ws_88.color = 'lightblue';
ws_88.position = [126.536377,45.779533];
ws_88.title = '水源-88';
ws_88.clickable = true;
ws_88.topWhenClick = true;

ws_89 = new Object();
ws_89.label = '水';
ws_89.color = 'lightblue';
ws_89.position = [126.556276,45.717569];
ws_89.title = '水源-89';
ws_89.clickable = true;
ws_89.topWhenClick = true;

ws_90 = new Object();
ws_90.label = '水';
ws_90.color = 'lightblue';
ws_90.position = [126.552486,45.779628];
ws_90.title = '水源-90';
ws_90.clickable = true;
ws_90.topWhenClick = true;

ws_91 = new Object();
ws_91.label = '水';
ws_91.color = 'lightblue';
ws_91.position = [126.570582,45.708367];
ws_91.title = '水源-91';
ws_91.clickable = true;
ws_91.topWhenClick = true;

ws_92 = new Object();
ws_92.label = '水';
ws_92.color = 'lightblue';
ws_92.position = [126.691697,45.764343];
ws_92.title = '水源-92';
ws_92.clickable = true;
ws_92.topWhenClick = true;

ws_93 = new Object();
ws_93.label = '水';
ws_93.color = 'lightblue';
ws_93.position = [126.649345,45.711646];
ws_93.title = '水源-93';
ws_93.clickable = true;
ws_93.topWhenClick = true;

ws_94 = new Object();
ws_94.label = '水';
ws_94.color = 'lightblue';
ws_94.position = [126.659474,45.683283];
ws_94.title = '水源-94';
ws_94.clickable = true;
ws_94.topWhenClick = true;

ws_95 = new Object();
ws_95.label = '水';
ws_95.color = 'lightblue';
ws_95.position = [126.747187,45.743001];
ws_95.title = '水源-95';
ws_95.clickable = true;
ws_95.topWhenClick = true;

ws_96 = new Object();
ws_96.label = '水';
ws_96.color = 'lightblue';
ws_96.position = [126.699164,45.75745];
ws_96.title = '水源-96';
ws_96.clickable = true;
ws_96.topWhenClick = true;

ws_97 = new Object();
ws_97.label = '水';
ws_97.color = 'lightblue';
ws_97.position = [126.587112,45.735304];
ws_97.title = '水源-97';
ws_97.clickable = true;
ws_97.topWhenClick = true;

ws_98 = new Object();
ws_98.label = '水';
ws_98.color = 'lightblue';
ws_98.position = [126.641238,45.822138];
ws_98.title = '水源-98';
ws_98.clickable = true;
ws_98.topWhenClick = true;

ws_99 = new Object();
ws_99.label = '水';
ws_99.color = 'lightblue';
ws_99.position = [126.660306,45.717834];
ws_99.title = '水源-99';
ws_99.clickable = true;
ws_99.topWhenClick = true;

ws_100 = new Object();
ws_100.label = '水';
ws_100.color = 'lightblue';
ws_100.position = [126.609987,45.715592];
ws_100.title = '水源-100';
ws_100.clickable = true;
ws_100.topWhenClick = true;

ws_101 = new Object();
ws_101.label = '水';
ws_101.color = 'lightblue';
ws_101.position = [126.535527,45.73894];
ws_101.title = '水源-101';
ws_101.clickable = true;
ws_101.topWhenClick = true;

ws_102 = new Object();
ws_102.label = '水';
ws_102.color = 'lightblue';
ws_102.position = [126.735406,45.679022];
ws_102.title = '水源-102';
ws_102.clickable = true;
ws_102.topWhenClick = true;

ws_103 = new Object();
ws_103.label = '水';
ws_103.color = 'lightblue';
ws_103.position = [126.645999,45.735484];
ws_103.title = '水源-103';
ws_103.clickable = true;
ws_103.topWhenClick = true;

ws_104 = new Object();
ws_104.label = '水';
ws_104.color = 'lightblue';
ws_104.position = [126.676126,45.680756];
ws_104.title = '水源-104';
ws_104.clickable = true;
ws_104.topWhenClick = true;

ws_105 = new Object();
ws_105.label = '水';
ws_105.color = 'lightblue';
ws_105.position = [126.605012,45.686173];
ws_105.title = '水源-105';
ws_105.clickable = true;
ws_105.topWhenClick = true;

ws_106 = new Object();
ws_106.label = '水';
ws_106.color = 'lightblue';
ws_106.position = [126.723747,45.680789];
ws_106.title = '水源-106';
ws_106.clickable = true;
ws_106.topWhenClick = true;

ws_107 = new Object();
ws_107.label = '水';
ws_107.color = 'lightblue';
ws_107.position = [126.742706,45.718972];
ws_107.title = '水源-107';
ws_107.clickable = true;
ws_107.topWhenClick = true;

ws_108 = new Object();
ws_108.label = '水';
ws_108.color = 'lightblue';
ws_108.position = [126.560154,45.790786];
ws_108.title = '水源-108';
ws_108.clickable = true;
ws_108.topWhenClick = true;

ws_109 = new Object();
ws_109.label = '水';
ws_109.color = 'lightblue';
ws_109.position = [126.709604,45.69383];
ws_109.title = '水源-109';
ws_109.clickable = true;
ws_109.topWhenClick = true;

ws_110 = new Object();
ws_110.label = '水';
ws_110.color = 'lightblue';
ws_110.position = [126.573675,45.676709];
ws_110.title = '水源-110';
ws_110.clickable = true;
ws_110.topWhenClick = true;

ws_111 = new Object();
ws_111.label = '水';
ws_111.color = 'lightblue';
ws_111.position = [126.625183,45.709944];
ws_111.title = '水源-111';
ws_111.clickable = true;
ws_111.topWhenClick = true;

ws_112 = new Object();
ws_112.label = '水';
ws_112.color = 'lightblue';
ws_112.position = [126.565506,45.720384];
ws_112.title = '水源-112';
ws_112.clickable = true;
ws_112.topWhenClick = true;

ws_113 = new Object();
ws_113.label = '水';
ws_113.color = 'lightblue';
ws_113.position = [126.693075,45.75623];
ws_113.title = '水源-113';
ws_113.clickable = true;
ws_113.topWhenClick = true;

ws_114 = new Object();
ws_114.label = '水';
ws_114.color = 'lightblue';
ws_114.position = [126.53588,45.816419];
ws_114.title = '水源-114';
ws_114.clickable = true;
ws_114.topWhenClick = true;

ws_115 = new Object();
ws_115.label = '水';
ws_115.color = 'lightblue';
ws_115.position = [126.556731,45.820881];
ws_115.title = '水源-115';
ws_115.clickable = true;
ws_115.topWhenClick = true;

ws_116 = new Object();
ws_116.label = '水';
ws_116.color = 'lightblue';
ws_116.position = [126.56533,45.808651];
ws_116.title = '水源-116';
ws_116.clickable = true;
ws_116.topWhenClick = true;

ws_117 = new Object();
ws_117.label = '水';
ws_117.color = 'lightblue';
ws_117.position = [126.691308,45.763622];
ws_117.title = '水源-117';
ws_117.clickable = true;
ws_117.topWhenClick = true;

ws_118 = new Object();
ws_118.label = '水';
ws_118.color = 'lightblue';
ws_118.position = [126.581212,45.796888];
ws_118.title = '水源-118';
ws_118.clickable = true;
ws_118.topWhenClick = true;

ws_119 = new Object();
ws_119.label = '水';
ws_119.color = 'lightblue';
ws_119.position = [126.720118,45.805504];
ws_119.title = '水源-119';
ws_119.clickable = true;
ws_119.topWhenClick = true;

ws_120 = new Object();
ws_120.label = '水';
ws_120.color = 'lightblue';
ws_120.position = [126.688388,45.781129];
ws_120.title = '水源-120';
ws_120.clickable = true;
ws_120.topWhenClick = true;

ws_121 = new Object();
ws_121.label = '水';
ws_121.color = 'lightblue';
ws_121.position = [126.594131,45.706476];
ws_121.title = '水源-121';
ws_121.clickable = true;
ws_121.topWhenClick = true;

ws_122 = new Object();
ws_122.label = '水';
ws_122.color = 'lightblue';
ws_122.position = [126.610958,45.711927];
ws_122.title = '水源-122';
ws_122.clickable = true;
ws_122.topWhenClick = true;

ws_123 = new Object();
ws_123.label = '水';
ws_123.color = 'lightblue';
ws_123.position = [126.628139,45.795507];
ws_123.title = '水源-123';
ws_123.clickable = true;
ws_123.topWhenClick = true;

ws_124 = new Object();
ws_124.label = '水';
ws_124.color = 'lightblue';
ws_124.position = [126.692585,45.789164];
ws_124.title = '水源-124';
ws_124.clickable = true;
ws_124.topWhenClick = true;

ws_125 = new Object();
ws_125.label = '水';
ws_125.color = 'lightblue';
ws_125.position = [126.527733,45.80661];
ws_125.title = '水源-125';
ws_125.clickable = true;
ws_125.topWhenClick = true;

ws_126 = new Object();
ws_126.label = '水';
ws_126.color = 'lightblue';
ws_126.position = [126.627629,45.792859];
ws_126.title = '水源-126';
ws_126.clickable = true;
ws_126.topWhenClick = true;

ws_127 = new Object();
ws_127.label = '水';
ws_127.color = 'lightblue';
ws_127.position = [126.674767,45.678948];
ws_127.title = '水源-127';
ws_127.clickable = true;
ws_127.topWhenClick = true;

ws_128 = new Object();
ws_128.label = '水';
ws_128.color = 'lightblue';
ws_128.position = [126.725664,45.688124];
ws_128.title = '水源-128';
ws_128.clickable = true;
ws_128.topWhenClick = true;

ws_129 = new Object();
ws_129.label = '水';
ws_129.color = 'lightblue';
ws_129.position = [126.63785,45.71289];
ws_129.title = '水源-129';
ws_129.clickable = true;
ws_129.topWhenClick = true;

ws_130 = new Object();
ws_130.label = '水';
ws_130.color = 'lightblue';
ws_130.position = [126.639554,45.678817];
ws_130.title = '水源-130';
ws_130.clickable = true;
ws_130.topWhenClick = true;

ws_131 = new Object();
ws_131.label = '水';
ws_131.color = 'lightblue';
ws_131.position = [126.639096,45.819036];
ws_131.title = '水源-131';
ws_131.clickable = true;
ws_131.topWhenClick = true;

ws_132 = new Object();
ws_132.label = '水';
ws_132.color = 'lightblue';
ws_132.position = [126.64161,45.782507];
ws_132.title = '水源-132';
ws_132.clickable = true;
ws_132.topWhenClick = true;

ws_133 = new Object();
ws_133.label = '水';
ws_133.color = 'lightblue';
ws_133.position = [126.56744,45.771057];
ws_133.title = '水源-133';
ws_133.clickable = true;
ws_133.topWhenClick = true;

ws_134 = new Object();
ws_134.label = '水';
ws_134.color = 'lightblue';
ws_134.position = [126.66375,45.817365];
ws_134.title = '水源-134';
ws_134.clickable = true;
ws_134.topWhenClick = true;

ws_135 = new Object();
ws_135.label = '水';
ws_135.color = 'lightblue';
ws_135.position = [126.653238,45.689354];
ws_135.title = '水源-135';
ws_135.clickable = true;
ws_135.topWhenClick = true;

ws_136 = new Object();
ws_136.label = '水';
ws_136.color = 'lightblue';
ws_136.position = [126.614933,45.826051];
ws_136.title = '水源-136';
ws_136.clickable = true;
ws_136.topWhenClick = true;

ws_137 = new Object();
ws_137.label = '水';
ws_137.color = 'lightblue';
ws_137.position = [126.595224,45.73486];
ws_137.title = '水源-137';
ws_137.clickable = true;
ws_137.topWhenClick = true;

ws_138 = new Object();
ws_138.label = '水';
ws_138.color = 'lightblue';
ws_138.position = [126.646246,45.79751];
ws_138.title = '水源-138';
ws_138.clickable = true;
ws_138.topWhenClick = true;

ws_139 = new Object();
ws_139.label = '水';
ws_139.color = 'lightblue';
ws_139.position = [126.696033,45.779667];
ws_139.title = '水源-139';
ws_139.clickable = true;
ws_139.topWhenClick = true;

ws_140 = new Object();
ws_140.label = '水';
ws_140.color = 'lightblue';
ws_140.position = [126.676783,45.772794];
ws_140.title = '水源-140';
ws_140.clickable = true;
ws_140.topWhenClick = true;

ws_141 = new Object();
ws_141.label = '水';
ws_141.color = 'lightblue';
ws_141.position = [126.666444,45.770064];
ws_141.title = '水源-141';
ws_141.clickable = true;
ws_141.topWhenClick = true;

ws_142 = new Object();
ws_142.label = '水';
ws_142.color = 'lightblue';
ws_142.position = [126.700634,45.778898];
ws_142.title = '水源-142';
ws_142.clickable = true;
ws_142.topWhenClick = true;

ws_143 = new Object();
ws_143.label = '水';
ws_143.color = 'lightblue';
ws_143.position = [126.701421,45.793065];
ws_143.title = '水源-143';
ws_143.clickable = true;
ws_143.topWhenClick = true;

ws_144 = new Object();
ws_144.label = '水';
ws_144.color = 'lightblue';
ws_144.position = [126.625588,45.765723];
ws_144.title = '水源-144';
ws_144.clickable = true;
ws_144.topWhenClick = true;

ws_145 = new Object();
ws_145.label = '水';
ws_145.color = 'lightblue';
ws_145.position = [126.694193,45.720562];
ws_145.title = '水源-145';
ws_145.clickable = true;
ws_145.topWhenClick = true;

ws_146 = new Object();
ws_146.label = '水';
ws_146.color = 'lightblue';
ws_146.position = [126.739624,45.749612];
ws_146.title = '水源-146';
ws_146.clickable = true;
ws_146.topWhenClick = true;

ws_147 = new Object();
ws_147.label = '水';
ws_147.color = 'lightblue';
ws_147.position = [126.724884,45.780776];
ws_147.title = '水源-147';
ws_147.clickable = true;
ws_147.topWhenClick = true;

ws_148 = new Object();
ws_148.label = '水';
ws_148.color = 'lightblue';
ws_148.position = [126.735139,45.711268];
ws_148.title = '水源-148';
ws_148.clickable = true;
ws_148.topWhenClick = true;

ws_149 = new Object();
ws_149.label = '水';
ws_149.color = 'lightblue';
ws_149.position = [126.567936,45.755604];
ws_149.title = '水源-149';
ws_149.clickable = true;
ws_149.topWhenClick = true;

ws_150 = new Object();
ws_150.label = '水';
ws_150.color = 'lightblue';
ws_150.position = [126.676876,45.758347];
ws_150.title = '水源-150';
ws_150.clickable = true;
ws_150.topWhenClick = true;

WS.push(ws_1);
WS.push(ws_2);
WS.push(ws_3);
WS.push(ws_4);
WS.push(ws_5);
WS.push(ws_6);
WS.push(ws_7);
WS.push(ws_8);
WS.push(ws_9);
WS.push(ws_10);
WS.push(ws_11);
WS.push(ws_12);
WS.push(ws_13);
WS.push(ws_14);
WS.push(ws_15);
WS.push(ws_16);
WS.push(ws_17);
WS.push(ws_18);
WS.push(ws_19);
WS.push(ws_20);
WS.push(ws_21);
WS.push(ws_22);
WS.push(ws_23);
WS.push(ws_24);
WS.push(ws_25);
WS.push(ws_26);
WS.push(ws_27);
WS.push(ws_28);
WS.push(ws_29);
WS.push(ws_30);
WS.push(ws_31);
WS.push(ws_32);
WS.push(ws_33);
WS.push(ws_34);
WS.push(ws_35);
WS.push(ws_36);
WS.push(ws_37);
WS.push(ws_38);
WS.push(ws_39);
WS.push(ws_40);
WS.push(ws_41);
WS.push(ws_42);
WS.push(ws_43);
WS.push(ws_44);
WS.push(ws_45);
WS.push(ws_46);
WS.push(ws_47);
WS.push(ws_48);
WS.push(ws_49);
WS.push(ws_50);
WS.push(ws_51);
WS.push(ws_52);
WS.push(ws_53);
WS.push(ws_54);
WS.push(ws_55);
WS.push(ws_56);
WS.push(ws_57);
WS.push(ws_58);
WS.push(ws_59);
WS.push(ws_60);
WS.push(ws_61);
WS.push(ws_62);
WS.push(ws_63);
WS.push(ws_64);
WS.push(ws_65);
WS.push(ws_66);
WS.push(ws_67);
WS.push(ws_68);
WS.push(ws_69);
WS.push(ws_70);
WS.push(ws_71);
WS.push(ws_72);
WS.push(ws_73);
WS.push(ws_74);
WS.push(ws_75);
WS.push(ws_76);
WS.push(ws_77);
WS.push(ws_78);
WS.push(ws_79);
WS.push(ws_80);
WS.push(ws_81);
WS.push(ws_82);
WS.push(ws_83);
WS.push(ws_84);
WS.push(ws_85);
WS.push(ws_86);
WS.push(ws_87);
WS.push(ws_88);
WS.push(ws_89);
WS.push(ws_90);
WS.push(ws_91);
WS.push(ws_92);
WS.push(ws_93);
WS.push(ws_94);
WS.push(ws_95);
WS.push(ws_96);
WS.push(ws_97);
WS.push(ws_98);
WS.push(ws_99);
WS.push(ws_100);
WS.push(ws_101);
WS.push(ws_102);
WS.push(ws_103);
WS.push(ws_104);
WS.push(ws_105);
WS.push(ws_106);
WS.push(ws_107);
WS.push(ws_108);
WS.push(ws_109);
WS.push(ws_110);
WS.push(ws_111);
WS.push(ws_112);
WS.push(ws_113);
WS.push(ws_114);
WS.push(ws_115);
WS.push(ws_116);
WS.push(ws_117);
WS.push(ws_118);
WS.push(ws_119);
WS.push(ws_120);
WS.push(ws_121);
WS.push(ws_122);
WS.push(ws_123);
WS.push(ws_124);
WS.push(ws_125);
WS.push(ws_126);
WS.push(ws_127);
WS.push(ws_128);
WS.push(ws_129);
WS.push(ws_130);
WS.push(ws_131);
WS.push(ws_132);
WS.push(ws_133);
WS.push(ws_134);
WS.push(ws_135);
WS.push(ws_136);
WS.push(ws_137);
WS.push(ws_138);
WS.push(ws_139);
WS.push(ws_140);
WS.push(ws_141);
WS.push(ws_142);
WS.push(ws_143);
WS.push(ws_144);
WS.push(ws_145);
WS.push(ws_146);
WS.push(ws_147);
WS.push(ws_148);
WS.push(ws_149);
WS.push(ws_150);