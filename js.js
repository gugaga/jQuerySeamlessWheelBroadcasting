var allButtons = $('#buttons > button');
for(let i = 0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(e){
        var index = $(e.currentTarget).index();
        console.log(index);
        var n = index * -500;
        $('#images').css({
            transform:'translate('+ n + 'px)'
        })
        s = index;
        allButtons.eq(s).addClass('red').siblings('.red').removeClass('red');
    })
}

var s = 0;
var size = allButtons.length;
allButtons.eq(s%size).trigger('click').addClass('red').siblings('.red').removeClass('red');
var timer = setInterval(() => {
    s += 1;
    allButtons.eq(s%size).trigger('click').addClass('red').siblings('.red').removeClass('red');
},2000);

$('.outer').on('mouseenter', function() {
    window.clearInterval(timer)
  })

$('.outer').on('mouseleave',function(){
    timer = setInterval(() => {
        s += 1;
        allButtons.eq(s%size).trigger('click').addClass('red').siblings('.red').removeClass('red');
    },1000);
})
