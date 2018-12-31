var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
    	var d = $(s).hasClass('first') ? -i*90-45: i*90+45;
        //var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

/*
$('.selector button').click(function(e) {
    toggleOptions($(this).parent());
});
*/

setTimeout(function() { toggleOptions('.selector'); }, 100);

// 系统页面跳转
// 人力资源系统
$('#system-1').click(function(e) {
	window.location.href = "fakelink"
});
// 火灾防控系统
$('#system-4').click(function(e) {
	window.location.href = "disaster.html"; 	
});
