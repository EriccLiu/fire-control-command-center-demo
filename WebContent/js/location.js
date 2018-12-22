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