$(function() {
    $(".banner li").eq(0).addClass("active");
	if(typeof Swiper != 'undefined') {
		var indexSwiper = new Swiper('.banner', {
			effect: 'slide',
            		loop: true,
            		autoplay: true,
           		speed: 1200,
            		preventClicks: false,
            		autoplayDisableOnInteraction: false,
            		grabCursor: false,
            		parallax: true,
			simulateTouch: false,
			disableOnInteraction: false,
			observer:true,
			pagination: {
				el: '.banner .index-dot',
				clickable: true,
			},
		    on: {
	            slideChangeTransitionEnd: function(){
	                //$(".banner ul li").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
	                //$(this).addClass("active");
	            },
	        }

		});

		var insidSwiper = new Swiper('.inside-banner', {
		    paginationClickable: true,
		    loop: false,
		    speed: 1200,
		    autoplay: {
		        delay: 6000
		    },
		    pagination: {
		        el: '.inside-banner .inside-dot',
		        clickable: true,
		    },

		    autoplayDisableOnInteraction: false,
		    simulateTouch: false,

		});

		var camousSwiper = new Swiper('.camous-swiper', {
			paginationClickable: true,
			loop: true,
			speed: 1200,
			autoplay: {
				delay: 6000
			},
			pagination: {
				el: '.camous-swiper .index-dot',
				clickable: true,
			},
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
		});

		//产品详情
		var smallSwiper = new Swiper('.small-list', {
			paginationClickable: true,
			speed: 1200,
			slidesPerView: 4,
			spaceBetween: 29,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			navigation: {
				nextEl: '.small-wraper .product-right',
				prevEl: '.small-wraper .product-left',
			}

		});

		var bigSwiper = new Swiper('.biglist', {
			paginationClickable: true,
			//loop: true,
			speed: 1200,
			pagination: {
				el: '.biglist .index-dot',
				clickable: true,
			},
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
		});

		$(".small-list ul li").each(function() {
			$(this).click(function() {
				$(this).addClass("cur").siblings().removeClass("cur");
				bigSwiper.slideTo($(this).index(), 300);
			})
		})

		var reSwiper = new Swiper('.related-list', {
			paginationClickable: true,
			speed: 1200,
			slidesPerView: 4,
			spaceBetween: 7,
			//loop: true,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			pagination: {
				el: '.related-list .index-dot',
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 3,

				},
				640: {
					slidesPerView: 2
				}
			}

		});

		// 影视中心
		var wonder_videoSW = new Swiper('.wonderful-swiper', {
			paginationClickable: true,
			speed: 1200,
			slidesPerView: 5,
			spaceBetween: 12,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			navigation: {
				nextEl: '.video-next',
				prevEl: '.video-prev',
			},
			pagination: {
				el: '.wonderful-mvlist .index-dot',
				clickable: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 2,

				}
			}
		});

		var joinSwiper = new Swiper('.join-swiper', {
			paginationClickable: true,
			loop: true,
			speed: 1200,
			autoplay: {
				delay: 6000
			},
			navigation: {
				nextEl: '.m-joinbtn-right',
				prevEl: '.m-joinbtn-left',
			},
			pagination: {
				el: '.join-slidewraper .index-dot',
				clickable: true,
			},

			autoplayDisableOnInteraction: false,
			simulateTouch: false,

		});
		//培训体系
		//var trainswiper = new Swiper('.training-swiper', {
		//	paginationClickable: true,
		//	speed: 1200,
		//	slidesPerView: 4,
		//	spaceBetween: 20,
		//	loop: true,
		//	autoplayDisableOnInteraction: false,
		//	simulateTouch: false,
		//	navigation: {
		//		nextEl: '.training-item .m-joinbtn-right',
		//		prevEl: '.training-item .m-joinbtn-left',
		//	},
		//	pagination: {
		//		el: '.training-item .index-dot',
		//		clickable: true,
		//	},
		//	breakpoints: {
		//		1024: {
		//			slidesPerView: 3,
		//			slidesPerGroup: 3,
		//		},
		//		767: {
		//			slidesPerView: 2,
		//			slidesPerGroup: 2,
		//			spaceBetween: 10,
		//		}
		//	}
		//});

		//招商加盟
		var processswiper = new Swiper('.process-swiper', {
			paginationClickable: true,
			speed: 1200,
			slidesPerView: 5,
			loop: true,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,

			navigation: {
				nextEl: '.process-wraper .m-joinbtn-right',
				prevEl: '.process-wraper .m-joinbtn-left',
			},
			breakpoints: {

				767: {
					slidesPerView: 3,

				}
			}
		});

		//作品展示
		var showswiper = new Swiper('.introduce-swiper', {
			paginationClickable: true,
			speed: 1200,
			slidesPerView: 3,
			loop: true,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			spaceBetween: 30,
			navigation: {
				nextEl: '.introduce-slide .m-joinbtn-right',
				prevEl: '.introduce-slide .m-joinbtn-left',
			},
			pagination: {
				el: '.introduce-slide .index-dot',
				clickable: true,
			},
			breakpoints: {

				767: {
					slidesPerView: 2,
					spaceBetween: 20,

				},
				640: {
					slidesPerView: 1,

				}
			}
		});

		//校园招聘
		var natureswiper = new Swiper('.nature-swiper', {
			paginationClickable: true,
			speed: 1200,
			loop: true,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			navigation: {
				nextEl: '.nature-swiper .btn-right',
				prevEl: '.nature-swiper .btn-left',
			},
			pagination: {
				el: '.nature-swiper .index-dot',
				clickable: true,
			},
		});

		var historySwiper = new Swiper('.history-box', {
			paginationClickable: true,
			autoplay: false,
			speed: 1200,
			navigation: {
				nextEl: '.history-box .history-right',
				prevEl: '.history-box .history-left',
			},
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			on: {
			    slideChangeTransitionStart: function () {
				yearSwiper.slideTo(this.activeIndex, 1000, false);
				$(".year-swiper ul li").eq(this.activeIndex).addClass("cur").siblings().removeClass("cur");

			}
			}

		});

		var yearSwiper = new Swiper('.year-swiper', {
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.history-year .history-right',
				prevEl: '.history-year .history-left',
			},
			simulateTouch: false
		});

		//发展历程
		$(".year-swiper ul li:eq(0)").addClass("cur");
		$(document).on("click", ".year-swiper ul li", function() {
			historySwiper.slideTo($(this).index(), 800, false); //切换slide
			var index = $(this).index();
			$(this).addClass("cur").siblings().removeClass("cur");
		});

	}

	//三级导航

	$(".sub-item .a1").click(function() {

		if($(this).next().is(":hidden")) {
			$(".three-nav").slideUp();
			$(this).next().slideDown(300);
		} else {
			$(".three-nav").slideUp();
		}

	})

	//判断导航是否有二级
	$("nav ul li").each(function() {
		var htmltext = $(this).find(".sub-nav");
		if(htmltext.length == 0) {
			$(this).find(".arrorright-btn").remove();
		}
	});

	$(".inside-tab-main li").each(function() {
		var htmltext = $(this).find(".three-nav");
		if(htmltext.length == 0) {
			$(this).find(".arrorright-btn").remove();
		}
	});

	$(".weixin-icon").click(function() {
		if(!$(".hd-search-form").hasClass("add")) {
			$(".hd-search-form").addClass("add");
		} else {
			$(".hd-search-form").removeClass("add");
		}

	});

	$(".mob-search").click(function() {
		$("nav").hide();
		if($(".hd-search-form").is(":hidden")) {
			$(".hd-search-form").slideDown(300);
		} else {
			$(".hd-search-form").slideUp();
		}
	})

	//产品二级，三级，四级导航
	$(".Categories-list li").hover(function() {
		$(this).find(".sub-categories").stop(true, true).show();
		//$(this).find(".sub-categories .a1").animate({ "padding-left":38}, 300);
	}, function() {
		$(this).find(".sub-categories").hide();
		//$(this).find(".sub-categories .a1").animate({ "padding-left":30}, 300);
	});

	$(".subcate-list").hover(function() {
		$(this).find(".three-categories").stop(true, true).show();
		//$(this).find(".three-categories .a2").animate({"padding-left":38}, 300);
	}, function() {
		$(this).find(".three-categories").hide();
		//$(this).find(".three-categories .a2").animate({"padding-left":30}, 300);
	});

	$(".threecate-list").hover(function() {
		$(this).find(".four-categories").stop(true, true).show();
		//$(this).find(".four-categories a").animate({"padding-left":38}, 300);
	}, function() {
		$(this).find(".four-categories").hide();
		//$(this).find(".four-categories a").animate({"padding-left":30}, 300);
	});

	//产品分类
	$(".pro-category dl").each(function() {
		if($(this).find(".proitem").height() > $(this).find(".proheight").height()) {
			$(this).find(".arrormore-btn").show();
		} else {
			$(this).find(".arrormore-btn").hide();
		}

	});

  

	$(".arrormore-btn").click(function() {
		var obj = $(this).parents("dd").find(".proheight");
		if(!obj.hasClass("add")) {
			$(this).addClass("cur");
			obj.addClass("add");
		} else {
			obj.removeClass("add");
			$(this).removeClass("cur");
		}

	});

	$(".product-tab a:eq(0)").addClass("cur");
	$(".mdeatils-box:eq(0)").show();
	$(".product-tab a").each(function(index) {
		$(this).click(function() {
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".mdeatils-box").eq(index).show().siblings().hide();
		})
	});


	$(".closebtn").click(function () {
	    $(".factoryview-swiper .swiper-wrapper").html('');
	    $(".probg").fadeOut(300);
	    $(".product-popup").fadeOut(300);

	});

	//等高
	function Itemheight(item) {
		var heightArr = [];
		// default
		$(item).find(".sameheight").css('height', 'auto');
		// maxheight
		$(item).each(function() {
			heightArr.push($(this).find('.sameheight').outerHeight());
		});
		var maxHeight = Math.max.apply(Math, heightArr);
		$(item).find(".sameheight").css('height', maxHeight);
	}

	//获取所有div的高度，存入allDivHeight
	function linum($item, $num) {
		var allliHeight = [];
		$($item).css('height', 'auto');
		$($item).each(function(index, element) {
			allliHeight.push($(this).height());
		});
		//循环分组和设置最大高度
		for(var j = 0; j < Math.ceil(allliHeight.length / $num); j++) {
			var group = allliHeight.slice(j * $num, $num * (j + 1)); //每3个为一组
			var maxGroupHeight = Math.max.apply(null, group); //该组中最大的
			$($item).each(function(index, element) {
				if(j * $num <= index && index <= $num * (j + 1)) {
					$(this).height(maxGroupHeight);
				}
			});
		}
	}

	//Itemheight(".introduce-swiper ul li");

	// 精彩视频
	function setmvPlayer(boxStr, playbtnStr, pauseStrl, ifFirst) {
		var player;
		var videoObject = {
			container: boxStr,
			variable: 'player',
			//loaded: 'loadedHandler', //当播放器加载后执行的函数
			autoplay: false,
			debug: true,
			//flashplayer: true, //强制使用flashplayer
			drag: 'start',
			seek: 0,
			playbackrate: -1,
			mobileCkControls: false,
			poster: $('.wposter img').attr('src')
		};
		if(playbtnStr && typeof ckplayer != 'undefined') {
			if(ifFirst) {
				// title
				var $firstBtn = $(playbtnStr).eq(0).addClass('cur');
				$(boxStr).prev().text($firstBtn.find('.name').text());
				videoObject.video = $firstBtn.attr('rel');
				videoObject.poster = $firstBtn.find('img').attr('data-post');

				player = new ckplayer(videoObject);
			}
			$(document).on('click', playbtnStr, function() {
				videoObject.autoplay = true;
				videoObject.video = $(this).attr('rel');
				// poster
				videoObject.poster = $(this).find('img').attr('data-post');

				$(boxStr).prev().text($(this).find('.name').text());
				$(this).addClass('cur').siblings().removeClass('cur');
				player = new ckplayer(videoObject);
			});
		}
		if(pauseStrl) {
			$(document).on('click', pauseStrl, function() {
				player.videoPause();
			});
		}
	}
	setmvPlayer('#wonderful-video', '.wonderful-swiper li', null, 1);

	//招商加盟
	$(".apply-form input,.apply-form textarea").focus(function() {
		$(this).parents("li").addClass("focus");

	});

	$(".apply-form input,.apply-form textarea").blur(function() {
		$(this).parents("li").removeClass("focus");
	});

	//招聘
	var oldx = 0;
	var zpwinscroll = $(window).scrollTop();
	$(".hsh_zp04 li").eq(oldx).find("h3").addClass("cur");
	$(".hsh_zp04 li").eq(oldx).find(".zhaoptext04").show();
	$(document).on("click", ".hsh_zp04 li h3",
		function() {
			var thisoffsetTop = $(this).offset().top;
			var _this = $(this);
			if($(this).next().is(":hidden")) {
				$(this).addClass('cur').parent().siblings().find("h3").removeClass("cur");
				$(this).next().slideDown(500);
				$(this).parents("ul").children("li").eq(oldx).find(".zhaoptext04").slideUp(500, function() {
					thisoffsetTop = _this.offset().top;
					if($(window).width() < 992) {
						$("html,body").animate({
							scrollTop: thisoffsetTop - 70
						}, 500);
					} else {
						$("html,body").animate({
							scrollTop: thisoffsetTop
						}, 500);
					}
				});
				oldx = _this.parents("li").index();
			} else {
				$(this).removeClass("cur");
				$(this).next().slideUp();
				if(oldx == 0) {
					oldx = -1;
				} else {
					oldx = 0;
				};

			};
		});

	judescreen();
	$(window).resize(function() {
		judescreen();

	});

	function judescreen() {

		if($(window).width() >= 1024) { //1024
			$(".inside-tab-title").off("click");
			$(".headersub-nav").hide();

			$("nav").show();
			$("nav ul li").off("mouseenter mouseleave").hover(function() {
				$(".sub-nav").stop(true, true).slideUp();
				$(".tip-box").stop(true, true).slideUp();
				$(this).find(".sub-nav").stop(true, true).slideDown(300);
			}, function() {
				$(this).find(".sub-nav").hide();
			});

			$(".weixin-item").off("mouseenter mouseleave").hover(function() {
				$(".weixin-box").stop(true, true).slideUp();
				$(this).find(".weixin-box").stop(true, true).slideDown(300);
			}, function() {
				$(this).find(".weixin-box").hide();
			});

			//三级导航
			$(".inside-tab-main li").off("mouseenter mouseleave").hover(function() {
				$(".three-nav").stop(true, true).slideUp();
				$(this).find(".three-nav").stop(true, true).slideDown(300);
			}, function() {
				$(this).find(".three-nav").hide();
			});

			//底部
			$(".footersub-nav,.inside-tab-main").show();

		    //搜索页
			$('.m-search-btn').off("mouseenter mouseleave").hover(function () {
			    $(".m-search-box").stop(true, true).slideUp();
			    $(this).find(".m-search-box").stop(true, true).slideDown(300);
			}, function () {
			    $(this).find(".m-search-box").hide();
			});

		} else { //<1024
		    $(".weixin-item,.inside-tab-main li,.m-search-btn").off("mouseenter mouseleave");
			//移动端展开下拉
			$(".mobnav-btn").off("click").on("click", function() {
				$(".hd-search-form").hide();
				if($("nav").is(":hidden")) {
					$(this).addClass("g_close");
					$("nav").slideDown(300);
				} else {
					$("nav").slideUp();
					$(this).removeClass("g_close");
				}
			});

			//移动端二级导航
			$("nav").hide();
			$(".sub-nav").hide();
			$("nav ul li h4").off("click").on("click", function() {
				if($(this).parents("li").find(".sub-nav").is(":hidden")) {
					$(this).parents("li").find(".sub-nav").slideDown().parents("li").siblings().find(".sub-nav").slideUp();
					$(this).parents("li").addClass("active").siblings().removeClass("active");

				} else {
					$(this).parents("li").find(".sub-nav").slideUp();
					$(this).parents("li").removeClass("active");
				}
			});

			//底部
			$(".footersub-nav,.inside-tab-main").hide();

			$(".footer-nav li h4").off("click").on("click", function() {
				if($(this).next().is(":hidden")) {
					$(".footersub-nav").slideUp(300);
					$(".footer-nav li h4").removeClass("cur");
					$(this).addClass("cur");
					$(this).next().slideDown(300);
				} else {
					$(this).removeClass("cur");
					$(this).next().slideUp(300);
				}
			});

			$(".inside-tab-title").off("click").on("click", function() {
				if($(".inside-tab-main").is(":hidden")) {
					$(".inside-tab-main").slideDown(300);
				} else {
					$(".inside-tab-main").slideUp(300);
				}
			});

			$(".inside-tab-main li h4").off("click").on("click", function() {
				if($(this).next().is(":hidden")) {
					$(".three-nav").slideUp(300);
					$(".three-nav li h4").removeClass("active");
					$(this).addClass("active");
					$(this).next().slideDown(300);
				} else {
					$(this).removeClass("active");
					$(this).next().slideUp(300);
				}
			});

		    //搜索
			$(".m-search-btn").off("click").on("click", function () {
			    if ($(".m-search-box").is(":hidden")) {
			        $(".m-search-box").slideDown(300);
			    } else {
			        $(".m-search-box").slideUp(300);
			    }
			});

		}

		if($(window).width() >= 768) {
			linum(".address-list ul li .addrecon", 2);
			linum(".advantage-list li .advantage-box", 3);

		} else {
			$(".address-list ul li .addrecon").css("height", "auto");
			$(".advantage-list li .advantage-box").css("height", "auto")
		}

		if($(window).width() > 992) {
			linum(".strength-list li", 4);
		} else if(768 < $(window).width() && $(window).width() > 992) {
			linum(".lstrength-list li", 2);
		} else {
			linum(".lstrength-list li", 1);
		}

	}





	// 20181116
    if($(".yLine").length > 0){
        $('.yLine').countTo({
            lastSymbol:"", //显示在最后的字符
            from: 0,  // 开始时的数字
            speed: 1500,  // 总时间
            refreshInterval:100,  // 刷新一次的时间
            beforeSize:0, //小数点前最小显示位数，不足的话用0代替
            decimals: 0  // 小数点后的位数，小数做四舍五入

        });
    }


    var clumbwid = 0;
    var clumbaLength = $(".common-clumb a").length;
    $(".common-clumb a").each(function () {
        var thisEle = $(this);
        clumbwid += thisEle.outerWidth();
    });

    if (clumbwid > $(".common-clumb").width()) {
        $(".common-clumb-box").append('<a href="javascript:;" class="sub-btn sub-prev"></a><a href="javascript:;" class="sub-btn sub-next"></a>');
		$(".common-clumb-box").css({ "padding": "0 40px" });

        var swiper = new Swiper('.common-clumb', {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.sub-next',
                prevEl: '.sub-prev',
            },
            simulateTouch: false
        });
        swiper.slideTo($(".common-clumb a.cur").index(), 0, false);
    };


    $(".casebox-wrapper").each(function (i) {
        $(this).find(".case-box").addClass("case-box" + i);
        $(this).find(".case-line").addClass("case-line" + i);
        var casebox = '.case-box'+i;
        var dot = '.case-line'+i;
        var CaseSwiper0 = new Swiper(casebox, {
            paginationClickable: true,
            speed: 1200,
            observer:true,
            observeParents:true,
            pagination: {
                el: dot + ' .dot',
                clickable: true,
            },

            autoplayDisableOnInteraction: false,
            simulateTouch: false,

        });
    });

    $(".casebox-wrapper").eq(0).addClass("cur");
    $(".common-clumb a").eq(0).addClass("cur");
    $(".common-clumb a").hover(function () {
        var n = $(".common-clumb a").index($(this));
        $(".common-clumb a").eq(n).addClass("cur").siblings().removeClass("cur");
        $(".casebox-wrapper").eq(n).addClass("cur").siblings().removeClass("cur");
    });



    var whistorySwiper = new Swiper('.history-swiper', {
        paginationClickable: true,
        autoplay: false,
        speed: 1200,
        slidesPerView: 7,
        navigation: {
            nextEl: '.ins-development .whistory-right',
            prevEl: '.ins-development .whistory-left',
        },
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }

    });

    if($(".scrollBox").length>0){
        $(".scrollBox").scrollBar();
	}


    var historyswiper2 = new Swiper('.historyulitem', {
        paginationClickable: true,
        autoplay: false,
        speed: 1200,
        slidesPerView: 4,
        navigation: {
            nextEl: '.history-wrapper .whistory-right',
            prevEl: '.history-wrapper .whistory-left',
        },
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            414: {
                spaceBetween: 10,
                slidesPerView: 1
            }
        }

    });

    var proSwiper2 = new Swiper(".donat-swiper", {
        direction: 'vertical',
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.chad-donat-wrapper .whistory-right',
            prevEl: '.chad-donat-wrapper .whistory-left',
        },
        simulateTouch: false,
    });

    //var lin = $(".footer-top li").length;

    //$(".footer-top li").eq(lin-1).addClass("ft-wechat");


    //var an = $(".tip-subnav a").length;

    //$(".tip-subnav a").eq(an - 1).addClass("ft-wechat");
    //$(".tip-subnav a").eq(0).addClass("ft-red");
    //$('.tip-subnav a').on('click', function (ev) {
    //    ev.stopPropagation();
    //    $(".qrcode-popup").stop().fadeIn();
    //    $(".qweiqxin").show();
    //    $(".tomatored").hide();
    //    $(".qrcodebg").stop().fadeIn();
    //})    
    

    $(".footer-top li,.tip-subnav a").on('click', function (ev) {
        $temp = $(this).attr("rel");
        $(".qrcodebg,.qrcode-popup").stop().fadeOut();

        if ($temp!=null&&$temp !=""&& typeof ($temp) != "undefined") {
                ev.stopPropagation();
                $(".qrcode-popup").stop().fadeIn();
                $(".qrcode-popup img").attr("src", $temp);
                $(".qrcodebg").stop().fadeIn();
            }
            else {
                $(".qrcodebg,.qrcode-popup").stop().fadeOut();
            }
           
        })


  
    $('.wxpop-close').on('click', function () {
        $(this).parent().stop().fadeOut();
        $(".qrcodebg").stop().fadeOut();
    });
    $(".qrcodebg").click(function () {
		$(this).hide();
        $(".qrcode-popup").hide();
    });

    $(".tip-navbtn").mouseenter(function() {
        $(".tip-box").stop(true, true).slideDown(300);
    });

    $(".tip-box").mouseleave(function () {
        $(this).hide();
    })


    // 2018-11-16：免费领取梭梭树
    var host = location.protocol + '//' + location.host;
    var videoObject = {
        container: '#videobox1', //容器的ID或className
        variable: 'player', //播放函数名称
        autoplay: true, //是否自动播放
        debug: true, //是否开启调试模式
        drag: 'start', //拖动的属性
        seek: 0, //默认跳转的时间
        playbackrate: -1,
        mobileCkControls: false
    };
    // palybtn
    function ckplayerX($showbtn, $hidebtn) {
        var player;
        $(document).on('click', $showbtn, function () {
            $(".recruitmentfloat").fadeIn(300);
            _videofile = $(this).attr('rel');
            videoObject.video = _videofile;
            player = new ckplayer(videoObject);
        })

        $(document).on('click', $hidebtn, function () {
            player.videoPause()
            $('.recruitmentfloat').fadeOut(300);
            $(".recruitmentfloat .videobox").html("");
        });

    }

    ckplayerX('.dzw-video i', '.recclosebtn');

    //返回顶部
    $(".return-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll', function () {
        wint = $(window).scrollTop();
        if (wint <= 400) {
            $(".return-top").fadeOut(300);
        };
        if (wint > 400) {
            $(".return-top").fadeIn(300);
        };
    });


});