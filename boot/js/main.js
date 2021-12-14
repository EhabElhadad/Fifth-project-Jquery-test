// var d=new Date()
// var today=document.getElementById("clock")
// var days=[`sunday,monday,tusday,wednesday,thursday,friday,saturday`]
// today.innerHTML=`today is ${days[d.getDay()]}`
// var clock=document.getElementById("clock")
// function getCurrentTime()
// {
//     var d=new date()
//     clock.innerHTML=`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
//     setTimeout(getCurrentTime,1000)
// }

// getCurrentTime()


$(".wrapper").animate({width:"100%"},2000)
$(".wrapper").animate({height:"100%"},2000,function()
{
    $("h1").slideDown(2000,function()
    {
        $(".first").fadeIn(4000,function()
        {
            $(".second").fadeIn(4000,function()
            {
                $(".third").fadeIn(4000,function()
                {
                    $("h3").slideDown(2000)
                })
            })
        })
    })
})