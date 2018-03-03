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


})



})
































