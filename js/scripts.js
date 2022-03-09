(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.panel-heading a').click(function() {
            $('.panel-heading').removeClass('active');
            $(this).parents('.panel-heading').addClass('active');
         });
        
        $(".single-service").hover(
            function(e){
                $('.why-us .col-md-4:first-child .single-service').removeClass('active');
            }, // over
            function(e){
                $('.why-us .col-md-4:first-child .single-service').addClass('active');
            }  // out
        );

        $(".single-price-block").hover(
            function(e){
                $('.pricing-box .col-md-4:last-child .single-price-block').removeClass('active');
            }, // over
            function(e){
                $('.pricing-box .col-md-4:last-child .single-price-block').addClass('active');
            }  // out
        );

        //if submit button is clicked
        $('#website-ask').click(function () {
            //Get the data from all the fields
            var name = $('input[name=full_name]');
            var phone = $('input[name=phone]');
            var website = $('input[name=website]');
            // var comment = $('textarea[name=comment]');

            if(validateNickname(name.val())){
                return false;
            };
            if(validatePhone(phone.val())){
                return false;
            };
            
            //start the ajax
            $.ajax({
                //this is the php file that processes the data and send mail
                url: "https://gongdu.xin/index/message/email", 
                
                //GET method is used
                type: "POST",

                //pass the data         
                data: {full_name: name.val(), phone: phone.val(), website: website.val()},     
                
                //Do not cache the page
                cache: false,
                
                //success
                success: function (html) {              
                    //if process.php returned 1/true (send mail success)
                    if (html===true) {                  
                        //hide the form
                        // $('.contact-form').fadeOut('slow');                 
                        
                        //show the success message
                        $('.done2').html("<b>收到！</b>我们将在24小时内联系您");
                        
                    //if process.php returned 0/false (send mail failed)
                    } else alert('留言失败，请稍后重试~');               
                }       
            });
            
            //cancel the submit button default behaviours
            return false;
        }); 

        //if submit button is clicked
        $('#website-message').click(function () {
            //Get the data from all the fields
            var name = $('input[name=username]');
            var phone = $('input[name=mobile_phone]');
            var website = $('input[name=website]');
            var comment = $('textarea[name=comment]');

            if(validateNickname(name.val())){
                return false;
            };
            if(validatePhone(phone.val())){
                return false;
            };
            
            //start the ajax
            $.ajax({
                //this is the php file that processes the data and send mail
                url: "https://gongdu.xin/index/message/email", 
                
                //GET method is used
                type: "POST",

                //pass the data         
                data: {full_name: name.val(), phone: phone.val(), website: website.val(), message: comment.val()},     
                
                //Do not cache the page
                cache: false,
                
                //success
                success: function (html) {              
                    //if process.php returned 1/true (send mail success)
                    if (html===true) {                  
                        //hide the form
                        // $('.contact-form').fadeOut('slow');                 
                        
                        //show the success message
                        $('.done').fadeIn('slow');
                        
                    //if process.php returned 0/false (send mail failed)
                    } else alert('留言失败，请稍后重试~');               
                }       
            });
            
            //cancel the submit button default behaviours
            return false;
        }); 

        //验证姓名
        function validateNickname(card_num) {
            // alert(card_num);
            if(card_num == '' || card_num == undefined) {
                $('.error').html('<span style="color:red">请先填写姓名</span>');
                $('.error').fadeIn(0);
                $('.error').fadeOut(3000);
                return true;
            }
            return false;
        }
        //验证手机号
        function validatePhone(phone) {
            if(phone == '' || phone == undefined) {
                $('.error').html('<span style="color:red">请先填写手机号</span>');
                $('.error').fadeIn(0);
                $('.error').fadeOut(3000);
                return true;
            }
            // var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            var myreg = /^1[0-9]{10}$/;
            if(!myreg.test(phone)) {
                $('.error').html('<span style="color:red">请输入有效的手机号</span>');
                $('.error').fadeIn(0);
                $('.error').fadeOut(3000);
                return true;
            }
            return false;
        }
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	