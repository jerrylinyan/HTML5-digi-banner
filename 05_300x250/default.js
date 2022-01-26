// Setup namespace for ad.

(function (){
  window.onload = function() {
    initBanner();
  }

  function initBanner() {
    gsap.registerPlugin(DrawSVGPlugin);
    var $banner = document.getElementById('banner'),
        $template = document.getElementById('template'),
      tl = new TimelineLite({onComplete:function() {
         // this.restart();
      }
      });

    $banner.innerHTML = $template.innerHTML;

    TweenLite.defaultEase = Cubic.easeInOut;

    showFrames(tl);
  } // end initBanner

  function generateFrame0(){
    var tl = new TimelineLite();
    tl.addLabel("startf0");
    tl.add(TweenLite.to(".copy_1", .7, {alpha: 0, x: -10, ease:Strong.easeInOut}), "startf0+=1.5");
    tl.add(TweenLite.from(".copy_2", .7, {alpha: 0, x: -10, ease:Strong.easeInOut}), ">");
    
    tl.add(TweenLite.to(".coin_09", .7, {x: -30,  y:140, ease:"none"}), "<");
    tl.add(TweenLite.to(".coin_07", .7, {x: 50,   y:120, ease:"none"}), "<");
    tl.add(TweenLite.to(".note_07", .7, {x: 24,   y:160, ease:"none"}), ">-.5");
    tl.add(TweenLite.to(".note_12", .7, {x: -130, y:120, ease:"none"}), "<");
    tl.add(TweenLite.to(".coin_06", .7, {x: -100, y:70,  ease:"none"}), ">-.5");
    tl.add(TweenLite.to(".note_14", .7, {x: -66,  y:179, ease:"none"}), ">-.5");
    tl.add(TweenLite.to(".note_15", .7, {x: 94,   y:160, ease:"none"}), "<");
    tl.add(TweenLite.to(".note_09", .7, {x: -20,  y:150, ease:"none"}), "<");
    tl.add(TweenLite.to(".note_13", .7, {x: -110, y:100, ease:"none"}), ">-.5");
    tl.add(TweenLite.to(".coin_04", .7, {x: -10,  y:130, ease:"none"}), ">-.5");
    tl.add(TweenLite.to(".note_02", .7, {x: -135, y:90,  ease:"none"}), "<");

    return tl;
  }

  function generateChopper() {
    gsap.set("circle", {transformOrigin: "center center"});
    
    var tl = new TimelineLite();
    tl.addLabel("startChopper");

    tl.add(TweenLite.fromTo("#pie1", 3, {rotation:"-180", drawSVG:"0%", ease:"sine.inOut"}, {rotation:"0", drawSVG:"50%", ease:"sine.inOut"}), "startChopper+=.5");
    tl.add(TweenLite.fromTo("#pie2", 3, {rotation:"-180", drawSVG:"0%", ease:"sine.inOut"}, {rotation:"0", drawSVG:"50%", ease:"sine.inOut"}), "startChopper+=.8");
    tl.add(TweenLite.to("#logoChange2", 1.5, {scale:.9, transformOrigin:"center center", ease:"sine.inOut"}), "startChopper+=1.5");
    tl.add(TweenLite.fromTo("#pie3", 3, {rotation:"-180", drawSVG:"0%", ease:"sine.inOut"}, {rotation:"0", drawSVG:"50%", ease:"sine.inOut"}), "startChopper+=1.1");
    tl.add(TweenLite.fromTo("#logoChange3", 1.5, {scale:.8, transformOrigin:"center center", ease:"sine.inOut"},{scale:.6, ease:"sine.inOut"}), "startChopper+=2");

    return tl;
  }

  function generateFrame1(){
    var tl = new TimelineLite();
    tl.addLabel("startf1");
    tl.add(TweenLite.from(".scene1 .cover", .1, {autoAlpha:0, ease:Strong.easeInOut}), "startf1");
    tl.add(TweenLite.from(".scene1 .logo_w", 1, {opacity:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .copy_3", 1,  {opacity:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .cta", 1,  {opacity:0, ease:Strong.easeInOut}), "<");

    return tl;
  }

  function showFrames(tl) {
    var addedtime = 0.3; // custom additional time, original value is 1; shorten time for testing
    var frameInterval = 1.5 + addedtime; //original value is 1.5 + addedtime; shorten time for testing
    var aniSpeed = 1.5, //original value is 1.5; shorten time for testing
        aniSpeedSlow = aniSpeed + 0.5,
        aniSpeedFast = aniSpeed - .5;
    var loopInterval = 2;

    tl.add("FrameStart0");
    tl.add(generateFrame0());
    tl.add("FrameStartChopper");
    tl.add(generateChopper(), "FrameStartChopper-=1");
    tl.add("FrameStart1"); 
    tl.add(generateFrame1(), "FrameStart1-=2");

    document.getElementsByClassName('scene0')[0].style.display = 'block';
    document.getElementsByClassName('scene1')[0].style.display = 'block';
  }

}());
