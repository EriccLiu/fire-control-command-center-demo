var SSS = new Array();	// 特勤站列表(Special Service Station)
var SoR = new Array();	// 危险源（及重点管控单位）列表(Source of Risk)
var FD = new Array();	// 消防局列表(Fire Department)

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


//哈尔滨消防支队
fd_1 = new Object();
fd_1.position = [126.656248, 45.731506];
fd_1.title = '哈尔滨消防支队';
fd_1.clickable = true;
fd_1.topWhenClick  = true;

//哈尔滨消防支队道里区消防大队
fd_2 = new Object();
fd_2.position = [126.607895, 45.761718];
fd_2.title = '哈尔滨消防支队道里区消防大队';
fd_2.clickable = true;
fd_2.topWhenClick  = true;

//哈尔滨消防支队南岗区消防大队
fd_3 = new Object();
fd_3.position = [126.70715, 45.741331];
fd_3.title = '哈尔滨消防支队南岗区消防大队';
fd_3.clickable = true;
fd_3.topWhenClick  = true;

//哈尔滨消防支队香坊区消防大队
fd_4 = new Object();
fd_4.position = [126.657271, 45.73138];
fd_4.title = '哈尔滨消防支队香坊区消防大队';
fd_4.clickable = true;
fd_4.topWhenClick  = true;

//哈尔滨消防支队道外区消防大队
fd_5 = new Object();
fd_5.position = [126.701575, 45.789769];
fd_5.title = '哈尔滨消防支队道外区消防大队';
fd_5.clickable = true;
fd_5.topWhenClick  = true;

//哈尔滨消防支队松北区消防大队
fd_6 = new Object();
fd_6.position = [126.522515, 45.796275];
fd_6.title = '哈尔滨消防支队松北区消防大队';
fd_6.clickable = true;
fd_6.topWhenClick  = true;

//哈尔滨消防支队平房区消防大队
fd_7 = new Object();
fd_7.position = [126.600093, 45.604012];
fd_7.title = '哈尔滨消防支队平房区消防大队';
fd_7.clickable = true;
fd_7.topWhenClick  = true;

FD.push(fd_1);
FD.push(fd_2);
FD.push(fd_3);
FD.push(fd_4);
FD.push(fd_5);
FD.push(fd_6);
FD.push(fd_7);