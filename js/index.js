
//byClass
if(!document.getElementsByClassName){ 
	document.getElementsByClassName = function(className, element){ 
	    var children = (element || document).getElementsByTagName('*'); 
	    var elements = new Array(); 
	    for (var i=0; i<children.length; i++){ 
	        var child = children[i]; 
	        var classNames = child.className.split(' '); 
	        for (var j=0; j<classNames.length; j++){ 
	            if (classNames[j] == className){ 
	                elements.push(child); 
	                break; 
	            } 
	        } 
	    } 
	    return elements; 
	}; 
}

// tab 切换
var lis=document.getElementsByClassName("left")[0].getElementsByTagName("li");
var dropDowns=document.getElementsByClassName("drop_down")[0].getElementsByTagName("li");
var rights=document.getElementsByClassName("right");
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            if(lis[j]==this){
                lis[j].className="select";
                rights[j].id="right_block";
            }else{
                lis[j].className="";
                rights[j].id="";
            }
        }
    }
}

// 下拉菜单
for(var i=0;i<dropDowns.length;i++){
    dropDowns[i].onclick=function(){
        for(var j=0;j<dropDowns.length;j++){
            if(dropDowns[j]==this){
                lis[j].className="select";
                rights[j].id="right_block";
            }else{
                lis[j].className="";
                rights[j].id="";
            }
        }
    }
}


var signatures=document.getElementsByClassName("signature")[0].getElementsByTagName("li");
var drops=document.getElementsByClassName("drop");
for(var i=0;i<signatures.length;i++){
    signatures[i].onclick=function(){
        for(var j=0;j<signatures.length;j++){
            if(signatures[j]==this){
                signatures[j].className="select_sign";
                drops[j].id="uk";
            }else{
                signatures[j].className="";
                drops[j].id="";
            }
        }
    }
}

var pcli=document.getElementsByClassName("signature")[1].getElementsByTagName("li");
var mobile=document.getElementsByClassName("mobile");
for(var i=0;i<pcli.length;i++){
    pcli[i].onclick=function(){
        for(var j=0;j<pcli.length;j++){
            if(pcli[j]==this){
                pcli[j].className="select_sign";
                mobile[j].id="phone";
            }else{
                pcli[j].className="";
                mobile[j].id="";
            }
        }
    }
}

$(function(){

        $(".dropdown").click(function(){
            $(".topDown").fadeToggle();
        });
        $(".topDown").mouseover(function(){
            $(".topDown").css("display","block");
        });
        $(".topDown").mouseout(function(){
            $(".topDown").css("display","none");
        });

    //电子签章——UK签章
        $(".drop1 .uk1").click(function(){
            fn_clean();
            $(this).addClass("shows");
            $('.drop1 .show1').fadeIn();
        });
        $(".drop1 .uk2").click(function(){
            fn_clean();
            $(this).addClass("shows");
            $('.drop1 .show2').fadeIn();
        });
        function fn_clean(){
            $(".drop1 span").removeClass("shows");
            $('.drop1 .show1').fadeOut();
            $('.drop1 .show2').fadeOut();
        }

    //电子签章——扫码签章
        $(".drop2 .uk1").click(function(){
            fn_clean2();
            $(this).addClass("shows");
            $('.drop2 .show1').fadeIn();
        });
        $(".drop2 .uk2").click(function(){
            fn_clean2();
            $(this).addClass("shows");
            $('.drop2 .show2').fadeIn();
        });
        function fn_clean2(){
            $(".drop2 span").removeClass("shows");
            $('.drop2 .show1').fadeOut();
            $('.drop2 .show2').fadeOut();
        }

    //电子签章——后台批签
        $(".drop3 .uk1").click(function(){
            fn_clean3();
            $(this).addClass("shows");
            $('.drop3 .show1').fadeIn();
        });
        $(".drop3 .uk2").click(function(){
            fn_clean3();
            $(this).addClass("shows");
            $('.drop3 .show2').fadeIn();
        });
        function fn_clean3(){
            $(".drop3 span").removeClass("shows");
            $('.drop3 .show1').fadeOut();
            $('.drop3 .show2').fadeOut();
        }
//代签文字，
        $(".drop_span span:eq(0)").click(function(){
            var proxy_show_ul = "";
            for(var i=0;i<10;i++){
                proxyShowUl1 = proxy_show_ul + '<li>这里是pdf文件名称</li>';
            }
            $("#proxyShowUl1").html(proxyShowUl1);
            fn_clean_drop();
            $(this).addClass("proxy_signature");
            $("#proxy_show").fadeIn();

        

        });
//签章完成
        $(".drop_span span:eq(1)").click(function(){
           
            fn_clean_drop();
            $(this).addClass("proxy_signature");
            $("#proxy_success").fadeIn();
        });

        function fn_clean_drop(){
            $(".drop_span span").removeClass("proxy_signature");
            $("#proxy_show").fadeOut();
            $("#proxy_success").fadeOut();
        }
        $("#proxy_show li").click(function(){

            $(this).toggleClass("proxy_sel");
        });
        $("#proxy_show .whole").click(function(){
            $(this).toggleClass("whole_sel");
            if($(this).hasClass("whole_sel")){
                $("#proxy_show li").addClass("proxy_sel");
            }else{
                $("#proxy_show li").removeClass("proxy_sel");
            }
        });
        $("#proxy_success .delete").click(function(){
            $(this).parent().remove();
        });




    // mobile_shield
       
    $(".drop4 .uk1").click(function(){
        fn_clean4();
        $(this).addClass("shows");
        $('.drop4 .show1').fadeIn();
    });
    $(".drop4 .uk2").click(function(){
        fn_clean4();
        $(this).addClass("shows");
        $('.drop4 .show2').fadeIn();
    });
    function fn_clean4(){
        $(".drop4 span").removeClass("shows");
        $('.drop4 .show1').fadeOut();
        $('.drop4 .show2').fadeOut();
    }



    $(".drop5 .uk1").click(function(){
        fn_clean5();
        $(this).addClass("shows");
        $('.drop5 .show1').fadeIn();
    });
    $(".drop5 .uk2").click(function(){
        fn_clean5();
        $(this).addClass("shows");
        $('.drop5 .show2').fadeIn();
    });
    function fn_clean5(){
        $(".drop5 span").removeClass("shows");
        $('.drop5 .show1').fadeOut();
        $('.drop5 .show2').fadeOut();
    }

    $(".drop6 .uk1").click(function(){
        fn_clean6();
        $(this).addClass("shows");
        $('.drop6 .show1').fadeIn();
    });
    $(".drop6 .uk2").click(function(){
        fn_clean6();
        $(this).addClass("shows");
        $('.drop6 .show2').fadeIn();
    });
    function fn_clean6(){
        $(".drop6 span").removeClass("shows");
        $('.drop6 .show1').fadeOut();
        $('.drop6 .show2').fadeOut();
    }
});








// scroll
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay:5000,
        speed:200,
        loop: true, 
    })