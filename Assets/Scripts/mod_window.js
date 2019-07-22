var mar_r = false;

function mail_ras() {
    var mail_flag = document.getElementById('mail_txt').value;
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (mar_r == false) {
        if(pattern.test(mail_flag) == false)
        {
            $('#mod_wind_f').removeClass("display_none");
            $('#mask_show').removeClass("display_none");
            
        }
        else
        {
            $('#mod_wind_t').removeClass("display_none");
            $('#mask_show').removeClass("display_none");
        }
        mar_r = true;
    }
    else 
    {
        $('#mod_wind_t').addClass("display_none");
        $('#mod_wind_f').addClass("display_none");
        $('#mask_show').addClass("display_none");
        mar_r = false;
    }
    

}