$(function(){
    var er=$('.er');
    //console.log(er)
    var guanbi=$('.guanbi');
    var max=$('.max-nav')
    er.click(function(){
        max.css("display","block");
        guanbi.css("display","inline-block");
        er.css("display","none");
    })
    guanbi.click(function(){
        max.css("display","none");
        guanbi.css("display","none");
        er.css("display","inline-block")
    });
    var bannerbox=$(".banner");
    var banner=$('.bannerimg');
    var as=$(".bannerimg a");
    //console.log(as)
    var now=0;
    var next=0;
    var flag=true;
    $(".bannerimg a:first-child").css("left",'0');
    var t=setInterval(move,1000);
    function move() {
        if (!flag) {
            return
        };
        flag = false;
        next++;
        if (next == as.length) {
            next = 0;
        };
        //console.log(next);
        as.eq(next).css({left: "100%"});
        as.eq(now).animate({left: "-100%"});
        as.eq(next).animate({left: 0}, function () {
            flag = true;
        })
        $('.btn li').removeClass("ht").eq(next).addClass("ht");
        now = next;
    };
    $('.btn li').click(function(){
        if(now==$(this).index()||!flag){
            return;
        }
        if($(this).index()<now){
            as.eq($(this).index()).animate({left:0});
            as.eq(now).animate({left:"100%"});
        }else{
            flag=false;
            as.eq($(this).index()).css({left:"100%"});
            as.eq(now).animate({left:"-100%"},function(){
                flag=true;
            });
            as.eq($(this).index()).animate({left:0});
        }
        $('.btn li').removeClass('ht').eq($(this).index()).addClass('ht');
        now=next=$(this).index();
    });

    bannerbox.hover(function(){
        clearInterval(t);
        $('.btn2 a').css('display','block');
    },function(){
        t=setInterval(move,1000);
        $('.btn2 a').css('display','none');
    });
    var rbtn=$(".rbtn");
    var lbtn=$(".lbtn");
    $('.rbtn').click(function(){
        move();
    });
    lbtn.click(function(){
        if(!flag){return};
        flag=false;
        next--;
        if(next==-1){
            next=as.length-1;
        }
        as.eq(next).css({left:"-100%"});
        as.eq(now).animate({left:"100%"});
        as.eq(next).animate({left:0},function(){
            flag=true;
        });
        $('.btn li').removeClass('ht').eq(next).addClass('ht');
        now=next;
    })
    //var bottom=$(".footer ul");
    //console.log(bottom)
    var h3=$(".footer h3");
    var ul=$(".footer ul");
    var W=document.documentElement.clientWidth;
    h3.click(function(){
        W=document.documentElement.clientWidth;
        if(W>768){
            return false;

        }
        $(this).next("ul").slideToggle();

    })
})