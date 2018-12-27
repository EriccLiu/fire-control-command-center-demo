$(function () {
    draw_car_table();
    draw_equip_table();
    draw_thing_table();
    setPage();

    function draw_equip_table() {
        try {
            var kind = ["隔热/避火/防护服", "电绝缘装具", "防爆服", "综合防毒面具/呼吸器", "潜水装具", "通信装置/手持电台", "抢险救援套装","一/二级化学防护服","防坠落组件","灭火/侦查/救援机器人", "装载机/挖掘机", "起重机/吊车"];
            var depart=["哈尔滨市支队","南岗大队","道里大队","道外大队","香坊大队","松北大队","平房大队"];
            var status = ["正常","正常","正常","正常","正常","正常", "已报备" , "维修中"];
            var equip_table = document.getElementById("equip_table");
            var id = 1;
            //id = car_table.row.length;
            for (; id < 100; id++) {
                var row = equip_table.insertRow(id);
                row.id = id;
                //id
                var car_id = row.insertCell(0);
                car_id.innerText = id;
                //种类
                var car_kind = row.insertCell(1);
                var kind_code=generate_0_10() % 12;
                car_kind.innerText = kind[kind_code];
                switch(kind_code){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 7:
                    case 8:
                    case 0:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="个人装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1";
                        var special = row.insertCell(4);
                        special.innerText = "特种防护装备";
                        break;
                    }
                    case 6:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="个人装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1";
                        var special = row.insertCell(4);
                        special.innerText = "基本防护装备";
                        break;
                    }
                    case 9:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="特种装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="3";
                        var special = row.insertCell(4);
                        special.innerText = "机器人";
                        break;
                    }
                    case 10:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="特种装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="2";
                        var special = row.insertCell(4);
                        special.innerText = "工程机械";
                        break;
                    }
                    case 11:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="特种装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="3";
                        var special = row.insertCell(4);
                        special.innerText = "工程机械";
                        break;
                    }
                }
                var depart_from = row.insertCell(5);
                depart_from.innerText = depart[generate_0_10() % 7];
                var status_this = row.insertCell(6);
                var status_code=generate_0_10()%8;
                status_this.innerText = status[status_code];
                switch (status_code) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:{
                        row.setAttribute("class","success");break;
                    }
                    case 6:{
                        row.setAttribute("class","info");break;
                    }
                    case 7:{
                        row.setAttribute("class","error");break;
                    }
                }

            }
        }catch(err){
            alert(err);

        }
    }

    function generate_0_10() {
        return Math.floor(Math.random()*10);
    }
/*
    var interval = window.setInterval(function () {
        try {
            var div = document.getElementById("alert_div");
            var div2=document.createElement("div");
            div2.setAttribute("id","myAlert");
            div2.setAttribute("class", "alert alert-success fade in");
            div2.innerText = "有消防站提交了装备维护信息！";
            div.appendChild(div2);
            var a = document.createElement("a");
            a.setAttribute("class", "close");
            a.setAttribute("data-dismiss", "alert");
            a.innerHTML = "&times;";
            div2.appendChild(a);
            $('#myAlert').alert();
        }catch(err){
            alert(err);
        }
    },7000);
*/
    function draw_car_table() {
        try {
            var kind = ["水罐消防车", "泡沫消防车", "高倍泡沫消防车", "二氧化碳消防车", "干粉消防车", "泡沫－干粉联用消防车", "云梯消防车", "举高喷射消防车", "通讯指挥消防车"];
            var num = [4, 5, 8, 10, 20];
            var special = ["有", "无"];
            var status = ["正常","正常","正常","正常","正常","正常", "已报备" , "维修中"];
            var depart=["哈尔滨市支队","南岗大队","道里大队","道外大队","香坊大队","松北大队","平房大队"];
            var car_table = document.getElementById("car_table");
            var id = 1;
            //id = car_table.row.length;
            for (; id < 100; id++) {
                var row = car_table.insertRow(id);
                row.id = id;
                //id
                var car_id = row.insertCell(0);
                car_id.innerText = id;
                //种类
                var car_kind = row.insertCell(1);
                car_kind.innerText = kind[generate_0_10() % 9];
                //使用时间
                var car_usetime = row.insertCell(2);
                car_usetime.innerText = generate_0_10() % 10;
                //载人数
                var car_num = row.insertCell(3);
                car_num.innerText = num[generate_0_10() % 5];
                //特种设备
                var car_special = row.insertCell(4);
                car_special.innerText = special[generate_0_10() % 2];
                //所属单位
                var car_from = row.insertCell(5);
                car_from.innerText = depart[generate_0_10() % 7];
                //状态
                var car_status = row.insertCell(6);
                var status_code=generate_0_10()%8;
                car_status.innerText = status[status_code];
                switch (status_code) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:{
                        row.setAttribute("class","success");break;
                    }
                    case 6:{
                        row.setAttribute("class","info");break;
                    }
                    case 7:{
                        row.setAttribute("class","error");break;
                    }
                }
            }
        }catch(err){
            alert(err);

        }
    }

    function draw_thing_table() {
        try {
            var kind = ["有毒气体探测仪", "隔离警示带", "多功能担架", "液压万象剪切钳", "堵漏枪", "手动隔膜抽吸泵", "强酸碱洗消器","空气输送机","消防水带","移动消防炮", "手抬机动泵", "泡沫比例混合器"];
            var depart=["哈尔滨市支队","南岗大队","道里大队","道外大队","香坊大队","松北大队","平房大队"];
            var status = ["正常","正常","正常","正常","正常","正常", "已报备" , "维修中"];
            var thing_table = document.getElementById("thing_table");
            var id = 1;
            //id = car_table.row.length;
            for (; id < 100; id++) {
                var row = thing_table.insertRow(id);
                row.id = id;
                //id
                var car_id = row.insertCell(0);
                car_id.innerText = id;
                //种类
                var car_kind = row.insertCell(1);
                var kind_code=generate_0_10() % 12;
                car_kind.innerText = kind[kind_code];
                switch(kind_code){
                    case 0:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1～5";
                        var special = row.insertCell(4);
                        special.innerText = "侦检器材";break;
                    }
                    case 1:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1";
                        var special = row.insertCell(4);
                        special.innerText = "警戒器材";break;
                    }
                    case 2:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="2";
                        var special = row.insertCell(4);
                        special.innerText = "救生器材";
                        break;
                    }
                    case 3:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="3";
                        var special = row.insertCell(4);
                        special.innerText = "破拆器材";break;
                    }
                    case 4:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="3";
                        var special = row.insertCell(4);
                        special.innerText = "堵漏器材";break;
                    }
                    case 5:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="2～5";
                        var special = row.insertCell(4);
                        special.innerText = "输转器材";break;
                    }
                    case 6:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1～5";
                        var special = row.insertCell(4);
                        special.innerText = "洗消装备";break;
                    }
                    case 7:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="抢险救援器材";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="2～5";
                        var special = row.insertCell(4);
                        special.innerText = "照明、排烟器材";
                        break;
                    }
                    case 8:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="灭火器材装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="1";
                        var special = row.insertCell(4);
                        special.innerText = "消防水带";
                        break;
                    }
                    case 9:
                    case 10:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="灭火器材装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="4";
                        var special = row.insertCell(4);
                        special.innerText = "消防枪炮";
                        break;
                    }
                    case 11:{
                        var equip_kind=row.insertCell(2);
                        equip_kind.innerText="灭火器材装备";
                        var equip_num=row.insertCell(3);
                        equip_num.innerText="~";
                        var special = row.insertCell(4);
                        special.innerText = "其他灭火器材装备";
                        break;
                    }
                    default:break;
                }
                var depart_from = row.insertCell(5);
                depart_from.innerText = depart[generate_0_10() % 7];
                var status_this = row.insertCell(6);
                var status_code=generate_0_10()%8;
                status_this.innerText = status[status_code];
                switch (status_code) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:{
                        row.setAttribute("class","success");break;
                    }
                    case 6:{
                        row.setAttribute("class","info");break;
                    }
                    case 7:{
                        row.setAttribute("class","error");break;
                    }
                }

            }
        }catch(err){
            alert(err);

        }
    }
});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null)return  unescape(r[2]); return null;
}

function setPage() {
    var tag=GetQueryString("tag");
    switch(tag){
        case "0":{
            $('#car_btn').click();break;
        }
        case "1":{
            $('#backup_btn').click();break;
        }
        case "2":{
            $('#material_btn').click();break;
        }
        case "3":{
            $('#works_btn').click();break;
        }
        case "4":{
            $('#danger_btn').click();break;
        }
        default:break;
    }
}