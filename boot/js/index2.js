// $(".wrapper").animate({"width":"100%"},2000)
// $(".wrapper").animate({"height":"100vh"},2000,function(){
//     $("h1").slideDown(2000,function(){
//         $(".img-fluid").fadeIn(2000,function(){
//             $("images-2").fadeIn(2000)
//         })
//     })
// })

// $(".btn-danger").click(function(){
// $("#test").text( "Haddad")

// })

// $(".img").click(function(){
//    let img= $(this).attr("src")
//    $("#image").attr("src",img)
// })

// $("section").find("span").css("border","1px solid red")

$("h3").click(function () {
  $(this).css("background-color", "red");
  $(this).siblings().css("background-color", "transparent");
});

// var h3s = document.getElementsByTagName("h3");
// for (var i = 0; i < h3s.length; i++) {
//   h3s[i].addEventListener("click", function () {
//     this.style.backgroundColor = "red";
//   });
// }
