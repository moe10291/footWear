$('.color').click(function(){
    var img=$(this).attr('src');
    $('.shoe').attr('src',img);

    var color=$(this).attr('data-color');
    $('.footwear').css("color", color);
    $('.circle').css("background-image","linear-gradient(25deg, #000d1b 30%, "+color+" 100%)");
    $('.circle').css("box-shadow", "-30px 30px 100px" +color);
    $('.color').css("width", "70px");
    $(this).css("width", "100px");
})

var tl=gsap.timeline();

tl.from(".footwear",{duration:0.8, opacity:0, x:700, ease:"back"})
  .from(".shoe",{duration:0.8, opacity:0, ease:"back"}, "-=0.5")
  .from(".circle",{duration:0.8, scale:0, ease:"back"}, "-=1")
  .from(".ar",{duration:0.8, scale:0, ease:"back"}, "-=0.5")
  .from("nav",{duration:0.2, y:-100})
  .from(".color",{duration:0.4, x:500}, "-=0.3")