$(document).ready(function(){


	/* ===================================================
	  Header PC 메뉴바
	======================================================*/
	
	$('.header').mouseenter(function(){
        $('.header').addClass('on');
		$('.header').addClass('on2');
		$(".pc_sub_menu").stop(true,true).delay(100).fadeIn();
		$(this).find('.logo a img').attr({'src':'images/logo.png'});
    });


    $('.header').mouseleave(function(){
        $('.header').removeClass('on');
		$('.header').removeClass('on2');
		$(".pc_sub_menu").stop(true,true).hide();
		//$('.header2').removeClass('on');
		$(this).find('.logo a img').attr({'src':'images/logo3.png'});

    });


	//PC 메뉴 호버
	var ct=true;
	$(".pc_menu>li").hover(function(){
	
    },function(){
      
    });


	$(window).scroll(function(){ 

        if($(this).scrollTop()>80){

            $('.header').addClass('on');
			
			$('.logo img').attr({'src':'images/logo.png'}); 
				
				if($('.header').mouseleave(function(){
					$('.header').addClass('on');
					$('.logo img').attr({'src':'images/logo.png'}); 
				}));

				if($(".pc_menu_btn").click(function(){		
					$('.header').addClass('on');
					$('.logo img').attr({'src':'images/logo.png'}); 
				}));
				
        }else{

			$('.logo img').attr({'src':'images/logo3.png'}); 
            $('.header').removeClass('on');  
		
				//if($('.header').mouseleave(function(){
				//	$('.header').removeClass('on');
					//$('.logo img').attr({'src':'/images//logo.png'}); 
					
				//}));
				var ca=true;
				if($(".pc_menu_btn").click(function(){
					if(ca){
						$('.header').addClass('on');
						$('.logo img').attr({'src':'images/logo.png'}); 
						ca=false;
					}else{
						$('.header').removeClass('on');
						$('.logo img').attr({'src':'images/logo3.png'}); 
						ca=true;
					}

				}));
				
        }
    }); 


		var bb=true;
		$(".pc_menu_btn").click(function(){

			if(bb){
					
				$('html').css('overflow','hidden');
				$('.header').addClass('on');  
				$('.logo a img').attr({'src':'images/logo.png'});
				$('.pc_menu_btn').addClass('on');
				$(".t_menu_right").animate({'right':'0px'});

				if($('.header').mouseleave(function(){
					//$('.header').addClass('on');
					$('.logo a img').attr({'src':'images/logo.png'});
					
				}));

				bb=false;

			}else{
				$('html').css('overflow-y','scroll');
				$('.header').removeClass('on');  
				$('.logo a img').attr({'src':'images/logo3.png'});
				$(".t_menu_right").animate({'right':'-1000px'});
				$('.pc_menu_btn').removeClass('on');

				bb=true;

			}

		});





	$(".qa_qqq a").click(function(){
		if($(this).siblings('div').hasClass('on')){
			$(this).siblings('div').addClass('on1')
			$(this).siblings('div').removeClass('on')
			$(this).siblings('ul').slideToggle(400);
		}else{
			$(this).siblings('div').addClass('on')
			$(this).siblings('div').removeClass('on1')
			$(this).siblings('ul').slideToggle(400);
		}
	})

	//top 버튼

//	$(window).scroll(function(){
//
//		if($(this).scrollTop()>=1500 ){
//			$(".btn_top").fadeIn();
//			
//		}else{ 
//			$(".btn_top").fadeOut();
//		}
//
//	 });

	$(".btn_top").click(function(){
		$("html,body").animate({scrollTop:"0"},500);
	});


	$(window).scroll(function(){

		if($(this).scrollTop()>=100 ){
			$('.btn_top').addClass('on'); 
			$('.btn_top img').attr({'src':'/images//btn4.png'});
			
		}else{ 
			$('.btn_top').removeClass('on');
			$('.btn_top img').attr({'src':'/images//btn1.png'});
		}

	 });

});