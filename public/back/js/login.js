/**
 * Created by zhangqianqian on 2018/3/2.
 */

//等待页面加载完成，防止全局变量污染
$(function(){

$('form').bootstrapValidator({
    //密码不能为空，密码的长度在6-12位
    //配置校验规则
    fields:{
        //对应form中name的属性
        username:{
            //给username配置校验规则
            validators:{
               //不能为空
                notEmpty:{
                    message:'用户名不能为空',
                },
                stringLength:{
                    min:2,
                    max:6,
                    message:'长度应在2到6位之间'
                },


            }
        },


        password:{
            //给password配置校验规则
            validators:{

                //密码不能为空
                notEmpty:{
                    message:'密码不能为空'
                },
                //长度
                stringLength:{
                    min:6,
                    max:12,
                    message:'密码长度应该为6到12位'
                }

            }

        }


    },


    //配置小图标，成功，失败，校验中

    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },


});

    //给表单注册校验成功的事件，成功的时候阻止表单的默认提交，使用ajax
    $('form').on('success.form.bv',function(e){
        //阻止浏览器默认行为
        e.preventDefault();
        console.log('hhh');

        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            success:function(info){
                console.log(info);
                if(info.error === 1000){
                    alert('用户名错误')
                }

                if(info.error === 1001){
                    alert('密码错误')
                }
            }
        })

    })









})
































