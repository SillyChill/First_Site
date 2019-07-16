var flag = false;
function swap_icon(){
    if( flag == false){
       $('#menu_icon').addClass("fa-times").removeClass("fa-bars");
       $('#mobile_menu_id').removeClass("display_none");
       $('#mask_show').removeClass("display_none");
       $('#show_menu_body').addClass("ower_f");
       flag = true;


    }
    else{
       $('#menu_icon').addClass("fa-bars").removeClass("fa-times");
       $('#mobile_menu_id').addClass("display_none");
       $('#mask_show').addClass("display_none");
       $('#show_menu_body').removeClass("ower_f");
       flag = false;
    }
}