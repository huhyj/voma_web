$(document).ready(function(){
    // var mySwiper = new Swiper(".swiper-container-popup", {
    //     slidesPerView: 1,
    //     loop : true,
    //     direction: 'horizontal',
    //     observer: true,
    //     observeParents: true,
    //     spaceBetween: 16,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: "fraction",
    //     },
    // });

    // login
    $(".header_login").mouseenter(function(){
        $(".header_login .header_1 img").attr('src','../images/etc/logo.svg');
    }).mouseleave(function(){
        $(".header_login .header_1 img").attr('src','../images/etc/logo_wt.svg');
    });

    // intro_logout
    $(".btn_h_logout").click(function(){
        $(".header_4").hide();
        $(".header_5").show();
    });

    // login_footer
    $(".btn_footer").click(function(){
        $(".footer").toggle();
        $(this).toggleClass('on');
    });

    // header_2 menu
    $(".header_2 li").click(function(){
        $(".header_2 li").removeClass('on');
        $(this).addClass('on');
    });

    // header_3 gnb
    $(".btn_gnb1").mouseenter(function(){
        $(".tooltip").addClass('on');
        $(".btn_gnb1").addClass('on');
    }).mouseleave(function(){
        $(".tooltip").removeClass('on');
        $(".btn_gnb1").removeClass('on');
    });
    $(".btn_gnb1").click(function(){
        $(".tooltip_wt1").show();
    });
    // 템플릿 선택
    $(".tooltip_box_wt li").click(function(){
        $(".tooltip_box_wt li").removeClass('on');
        $(this).addClass('on');
        $(".tooltip_wt1").hide();
    });

    // header_4 gnb
    $(".header_4").click(function(){
        $(".tooltip_wt2").toggle();
    });

    // snb
    $(".btn_snb").click(function(){
        $(".btn_snb").removeClass('on');
        $(this).addClass('on');
    });

    // main_01 카테고리
    $(".info_category button").click(function(){
        $(this).toggleClass('on');
    });

    // main_01 포커스
    $("textarea, .info_wrap input").focus(function(){
        $(this).css("border-color","#2563eb");
    }).blur(function(){
        $("textarea, .info_wrap input").css("border-color","#cdd1d5");
    });

    // main_02 템플릿 선택
    $(".cnt_right_top_1 .temp_before").click(function(){
        $(this).hide();
        $(this).next().show();
    });
    $(".temp_after .btn_remove").click(function(){
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().prev().show();
    });

    // main_02 샘플 보기
    $(".btn_sample").click(function(){
        $(".sample_page").show();
    });
    $(".btn_out").click(function(){
        $(".sample_page").hide();
    });
    
    // main_03 시점변경
    $(".switch").click(function(){
        var chk = $(".view_chk").is(":checked");
        if(chk){
            $(".view_chk").prop('checked', false);
            $(".btn_snb").removeClass('free');
        }else{
            $(".view_chk").prop('checked', true);
            $(".btn_snb").addClass('free');
        }
    });

    // main_04 탭 선택
    $(".cnt_right_origin .tab_cnt").eq(0).addClass('on');
    $(".cnt_right_origin .tab li").click(function(){
        var id = $(this).attr('data-tab');
        $(".cnt_right_origin .tab li").removeClass('on');
        $(".cnt_right_origin .tab_cnt").removeClass('on');

        $(this).addClass('on');
        $("#"+id).addClass('on');
    });

    $(".myart_box .tab_cnt").eq(0).addClass('on');
    $(".myart_box .tab li").click(function(){
        var id = $(this).attr('data-tab');
        $(".myart_box .tab li").removeClass('on');
        $(".myart_box .tab_cnt").removeClass('on');

        $(this).addClass('on');
        $("#"+id).addClass('on');
    });

    $(".cnt_center_art .tab_cnt").eq(0).addClass('on');

    // main_04 작품 수정
    $(".art_edit").click(function(){
        $(".cnt_right_pop").show();
    });
    $(".temp_n").click(function(){
        // $(".myart_box .tab_cnt").removeClass('on');
        // $(".myart_box .tab_cnt").eq(0).addClass('on');
        $(".cnt_myart").show();
    })

    // main_04 년도>월 선택
    $(".select_month").click(function(){
        $(this).toggleClass('on');
        if($(".select_month .item_list").css("display") == "none"){
            $(".select_month .item_list").slideDown();
            $(".select_month .item_list li").click(function(){
                $(".select_month .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_month .item_list").slideUp();
        }
    });

    // main_04 년도>일 선택
    $(".select_date").click(function(){
        $(this).toggleClass('on');
        if($(".select_date .item_list").css("display") == "none"){
            $(".select_date .item_list").slideDown();
            $(".select_date .item_list li").click(function(){
                $(".select_date .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_date .item_list").slideUp();
        }
    });

    // main_04 작품크기 선택
    $(".select_size").click(function(){
        $(this).toggleClass('on');
        if($(".select_size .item_list").css("display") == "none"){
            $(".select_size .item_list").slideDown();
            $(".select_size .item_list li").click(function(){
                $(".select_size .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_size .item_list").slideUp();
        }
    });

    // main_04 카테고리 선택
    $(".select_category").click(function(){
        $(this).toggleClass('on');
        if($(".select_category .item_list").css("display") == "none"){
            $(".select_category .item_list").slideDown();
            $(".select_category .item_list li").click(function(){
                $(".select_category .select_box > li").text($(this).text());
                $(".upload_item_hide").show();
            });
        }
        else{
            $(".select_category .item_list").slideUp();
        }
    });

    // main_04 상태 선택
    $(".select_status").click(function(){
        $(this).toggleClass('on');
        if($(".select_status .item_list").css("display") == "none"){
            $(".select_status .item_list").slideDown();
            $(".select_status .item_list li").click(function(){
                $(".select_status .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_status .item_list").slideUp();
        }
    });

    // main_04 소재 선택
    $(".item_category button").click(function(){
        $(this).toggleClass('on');
    });

    // main_04 작품크기 직접 입력
    $(".btn_able").click(function(){
        $(this).addClass('on');
        $(".upload_item input").attr('disabled',false);
        $(".upload_item input").removeClass('size_disabled');
        $(".select_size").addClass('size_disabled');
        $(".typing input").eq(0).focus();
    });
    $(".typing input").focus(function(){
        $(".btn_able").addClass('on');
    });
    $(".typing input").blur(function(){
        $(".btn_able").removeClass('on');
    });

    // main_04 업로드
    $(".tab_cnt_left .temp_before").click(function(){
        $(this).hide();
        $(this).next().show();
    });
    $(".btn_edit2, .btn_upload").click(function(){
        $(".cnt_myart_upload").show();
    });

    // main_04 텍스트 선택
    $(".btn_border_grey").click(function(){
        $(this).toggleClass('on');
    });

    // main_04 텍스트>폰트 선택
    $(".select_font").click(function(){
        $(this).toggleClass('on');
        if($(".select_font .item_list").css("display") == "none"){
            $(".select_font .item_list").slideDown();
            $(".select_font .item_list li").click(function(){
                $(".select_font .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_font .item_list").slideUp();
        }
    });

    // main_04 텍스트>폰트 선택
    $(".select_align").click(function(){
        $(this).toggleClass('on');
        if($(".select_align .item_list").css("display") == "none"){
            $(".select_align .item_list").slideDown();
            $(".select_align .item_list li").click(function(){
                $(".select_align .select_box > li").text($(this).text());
            });
        }
        else{
            $(".select_align .item_list").slideUp();
        }
    });


    // main_05 음악 선택
    $(".playlist p").click(function(){
        $(".select_box").toggleClass('on');
        if($(".area_list").css("display") == "none"){
            $(".area_list").slideDown();
            $(".area_list li").click(function(){
                $(".select_box > li > a > span.area_size").text($(this).children().children('span.area_size').text());
                $(".select_box > li > a > span.area_type").text($(this).children().children('span.area_type').text());
                $(".select_box > li > a > span.area_type2").text($(this).children().children('span.area_type2').text());
            });
        }
        else{
            $(".area_list").slideUp();
        }
    });
    $(".btn_play").click(function(){
        $(this).toggleClass('on');
    });

    // main_05 투어 순서 선택
    $(".cnt_right_top_2 .temp_area:not(:eq(0))").hide();
    $(".cnt_right_top_2 .temp_area:eq(0)").click(function(){
        $(".cnt_tour").show();
    });
    $(".add_tour .btn_remove").click(function(){
        $(this).parent().parent().parent().parent().hide();
        $(".temp_area:eq(0) .temp_txt span").html('+를 눌러 투어를 설정할 수 있습니다.');
        $(".temp_area:eq(0) .temp_txt span.exp").html('설정된 투어가 없습니다.');
    });
    $(".tour_box .area_img").click(function(){
        popupClose();
        $(".temp_area:eq(0) .temp_txt span").html('');
        $(".temp_area:eq(0) .temp_txt span.exp").html('투어 추가');
        $(".temp_area:not(:eq(0))").show();
    });

    // profile-my profile
    $(".btn_likes").click(function(){
        $(".cnt_popup3").show();
    });
    $(".btn_bg_grey_60").click(function(){
        $(this).addClass('on');
    });

    // profile-my art
    $(".cnt_center_art .btn_upload").click(function(){
        $(".myart_01").hide();
        $(".myart_02").show();
    });
    
    $(".myart_upload_top .temp_before").click(function(){
        $(this).hide();
        $(this).next().show();
    });

    $(".btn_upload_art").click(function(){
        $(".myart_01").show();
        $(".myart_02").hide();
    });

    // profile-my gallery
    $(".btn_gallery").click(function(){
        $(".sample_page2").show();
    });
    $(".btn_out").click(function(){
        $(".sample_page2").hide();
    });
    $(".btn_capture").click(function(){
        $(".cnt_popup4").show();
    });

    // 이용안내
    $(".cnt_center_information .tab_cnt").eq(0).addClass('on');
    $(".cnt_center_information .tab li").click(function(){
        var id = $(this).attr('data-tab');
        $(".cnt_center_information .tab li").removeClass('on');
        $(".cnt_center_information .tab_cnt").removeClass('on');

        $(this).addClass('on');
        $("#"+id).addClass('on');
    });

    // 이용약관
    $(".cnt_center_terms .tab_cnt").eq(0).addClass('on');
    $(".cnt_center_terms .tab li").click(function(){
        var id = $(this).attr('data-tab');
        $(".cnt_center_terms .tab li").removeClass('on');
        $(".cnt_center_terms .tab_cnt").removeClass('on');

        $(this).addClass('on');
        $("#"+id).addClass('on');
    });

    // 이용약관 스크롤이동
    $(".tab_16 .terms_01").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_16 .terms_cnt_01").position().top + 150}, 500);
    });
    $(".tab_16 .terms_02").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_16 .terms_cnt_02").position().top + 150}, 500);
    });
    $(".tab_16 .terms_03").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_16 .terms_cnt_03").position().top + 150}, 500);
    });

    // 개인정보 처리방침 스크롤이동
    $(".tab_18 .terms_01").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_18 .terms_cnt_01").position().top + 150}, 500);
    });
    $(".tab_18 .terms_02").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_18 .terms_cnt_02").position().top + 150}, 500);
    });
    $(".tab_18 .terms_03").click(function(){
        $(".cnt_center_terms").animate({"scrollTop": $(".tab_18 .terms_cnt_03").position().top + 150}, 500);
    });

    // 스크롤탑
    $(".btn_top").click(function(){
        $(".cnt_center_terms").animate({
            scrollTop : 0
        }, 600);
    });
});

// 뒤로가기
function goBack(){
    window.history.back();
}

// 팝업닫기
function popupClose(){
    $(".bg_popup_dark").hide();
}

// 조작법 팝업
function popupManual(){
    $(".cnt_manual").show();
}

// main_01 빈칸체크
function chkSpace(){
    var chk = $(".info_wrap input").val();
    var chk2 = $(".info_wrap textarea").val();
    if(chk == '' || null){
        $(".cnt_popup").show();
    }else if(chk2 == '' || null){
        $(".cnt_popup2").show();
    }
}