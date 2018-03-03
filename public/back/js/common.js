/**
 * Created by zhangqianqian on 2018/3/2.
 */
$(function(){
    //禁用进度环
    NProgress.configure({
        showSpinner:false
    })
    //进度条加载功能


    $(document).ajaxStart(function(){
        NProgress.start();
        console.log('ajax开始了')
    })


    $(document).ajaxStop(function(){
        NProgress.done();
        console.log('ajax结束了')
    })
})