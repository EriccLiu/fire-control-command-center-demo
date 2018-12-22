$(function () {
   draw_car_table();
    setPage();

    function draw_car_table() {
        try {
            var kind = ["水罐消防车", "泡沫消防车", "高倍泡沫消防车", "二氧化碳消防车", "干粉消防车", "泡沫－干粉联用消防车", "云梯消防车", "举高喷射消防车", "通讯指挥消防车"];
            var num = [4, 5, 8, 10, 20];
            var special = ["有", "无"];
            var status = ["正常", "出勤" , "维修中"];
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
                //状态
                var car_status = row.insertCell(5);
                var status_code=generate_0_10()%2;
                car_status.innerText = status[status_code];
                switch (status_code) {
                    case 0:{
                        row.setAttribute("class","success");break;
                    }
                    case 1:{
                        row.setAttribute("class","info");break;
                    }
                    case 2:{
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