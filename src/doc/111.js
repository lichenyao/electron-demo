//时间戳版：
//这里fun指的就是回调函数,我就不写出来了
function throttle(fun, delay = 500) {
    let previous = 0;  //记录上一次触发的时间戳.这里初始设为0,是为了确保第一次触发产生回调
    return function(args) {
        let now = Date.now(); //记录此刻触发时的时间戳
        let that = this;
        let _args = args;
        if (now - previous > delay) {  //如果时间差大于规定时间,则触发
            fun.apply(that, _args);
            previous = now;
        }
    }
}


//定时器版:
function throttle(fun, delay = 500) {
    let timer;
    return function(args) {
        let that = this;
        let _args = args;
        if (!timer) {  //如果定时器不存在,则设置新的定时器,到时后,才执行回调,并将定时器设为null
            timer = setTimeout(function(){
                timer = null;
                fun.apply(that, _args)
            }, delay)
        }

    }
}




//时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应 (该版才是最符合实际工作需求)
//该版主体思路还是时间戳版,定时器的作用仅仅是执行最后一次回调
function throttle(fun, delay = 500) {
     let timer = null;
     let previous = 0;
     return function(args) {
             let now = Date.now();
             let remaining = delay - (now - previous); //距离规定时间,还剩多少时间
             let that = this;
             let _args = args;
             clearTimeout(timer);  //清除之前设置的定时器
              if (remaining <= 0) {
                    fun.apply(that, _args);
                    previous = Date.now();
              } else {
                    timer = setTimeout(function(){
                    fun.apply(that, _args)
            }, remaining); //因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
              }
      }
}

