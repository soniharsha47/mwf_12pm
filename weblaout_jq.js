setTimeout(fun,5000)
function fun(){
    $(document).ready(()=>{
        $('.box-popup').show()
    })
}
$(document).ready(()=>{
    $('.hidden-nav').hide()
    $('.menu-btn').click(()=>{
        $('.hidden-nav').show()
    })
    $('.hidden-nav-close-btn').click(()=>{
        $('.hidden-nav').hide()
    });


    $('.searchbar').hide()
    $('.serach-btn').click(()=>{
        $('.searchbar').show()
    })
    $('.serach-cls-btn').click(()=>{
        $('.searchbar').hide()
    });

    $('.box-popup').hide()

    $('.close-pupup').click(()=>{
        $('.box-popup').hide()
    });

    $('.ab1').mouseenter(()=>{
        $('.ab2').css('opacity','0.5')
        $('.ab3').css('z-index','-1')
        $('.ab3').css('opacity','0.5')
    })
    $('.ab1').mouseleave(()=>{
        $('.ab2').css('opacity','1')
        $('.ab3').css('z-index','1')
        $('.ab3').css('opacity','1')
        $('.ab2').css('z-index','2')
    })
    $('.ab2').mouseenter(()=>{
        $('.ab1').css('opacity','0.5')
        $('.ab2').css('z-index','4')
        $('.ab3').css('z-index','-1')
        $('.ab3').css('opacity','0.5')
    })
    $('.ab2').mouseleave(()=>{
        $('.ab1').css('opacity','1')
        $('.ab3').css('z-index','1')
        $('.ab3').css('opacity','1')
        $('.ab1').css('z-index','2')
    })
})

