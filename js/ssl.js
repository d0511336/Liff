window.onload = function(){
        /*页面强转开始*/
        var tmpTag = 'https:' == document.location.protocol ? false : true;
        if(tmpTag){
        window.location='https://www.yourdomain.com';
        }
        /*页面强转结束*/
        }