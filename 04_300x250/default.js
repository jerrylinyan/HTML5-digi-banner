// Setup namespace for ad.

(function (){
  window.onload = function() {
    initBanner();
  }
  var bannerWidth = 300;

  function initBanner() {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(MorphSVGPlugin);
    var $banner = document.getElementById('banner'),
        $template = document.getElementById('template'),
      tl = new TimelineLite({onComplete:function() {
        //  this.restart();
      }
      });

    $banner.innerHTML = $template.innerHTML;

    TweenLite.defaultEase = Cubic.easeInOut;

    showFrames(tl);
  } // end initBanner

  function generateFrame0(){
    var tl = new TimelineLite();
    tl.addLabel("startf0");
    tl.add(TweenLite.from(".title_1", .5, {autoAlpha:0, scale: 0.5, ease:"none"}), "startf0");
    tl.add(TweenLite.from(".title_2", .3, {autoAlpha:0, scale: 0.5, ease:"none"}), ">1");
    
    tl.add(TweenLite.to(".wind_line", 7, {x: 500, ease:"none"}), "startf0");
    tl.add(TweenLite.to("#tree1_shape1", {duration:.28, morphSVG:"#tree1_shape2",ease: "none",repeat:20,yoyo:true}), "startf0");
    //leaves
    tl.add(TweenLite.to(".t1_01", 1, {x: 100, y:60, rotation: 720, repeat:1, repeatDelay: .1, ease:"none"}), "startf0");
    tl.add(TweenLite.to(".t1_02", 1, {x: 90, y:60, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.5");
    tl.add(TweenLite.to(".t1_03", 1, {x: 65, y:75, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.4");
    tl.add(TweenLite.to(".t1_04", 1, {x: 55, y:55, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.5");
    tl.add(TweenLite.to(".t1_05", 1, {x: 80, y:55, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.4");
    tl.add(TweenLite.to(".t1_06", 1, {x: 75, y:45, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.5");
    tl.add(TweenLite.to(".t1_07", 1, {x: 75, y:45, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.4");
    tl.add(TweenLite.to(".t1_08", 1, {x: 75, y:75, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.5");
    tl.add(TweenLite.to(".t1_09", 1, {x: 65, y:45, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.4");
    tl.add(TweenLite.to(".t1_10", 1, {x: 95, y:65, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.5");
    tl.add(TweenLite.to(".t1_11", 1, {x: 70, y:75, rotation: 720,  repeat:1, repeatDelay: .1, ease:"none"}), "<.4");

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

  function generateFrame1() {
    var tl = new TimelineLite();
    tl.addLabel("startf1");

    tl.add(TweenLite.from(".scene1 .cover", .1, {autoAlpha:0, ease:Strong.easeInOut}), "startf1");
    tl.add(TweenLite.from(".scene1 .purple_stripe", .1, {autoAlpha:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .logo_w", .1, {autoAlpha:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .copy_1", .1,  {autoAlpha:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .copy_2", .1,  {autoAlpha:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .cta", .1,  {autoAlpha:0, ease:Strong.easeInOut}), "<");
    tl.add(TweenLite.from(".scene1 .tandc", .1,  {autoAlpha:0, ease:Strong.easeInOut}), "<");

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
    tl.add(generateFrame0(), "FrameStart0+=.5");
    tl.add("FrameStartChopper");
    tl.add(generateChopper(), "FrameStartChopper-=2.5");
    tl.add("FrameStart1");
    tl.add(generateFrame1(), "FrameStart1-=2");

    document.getElementsByClassName('scene0')[0].style.display = 'block';
    document.getElementsByClassName('scene1')[0].style.display = 'block';
  }

}());
