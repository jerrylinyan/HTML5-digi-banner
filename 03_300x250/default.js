// Setup namespace for ad.

(function (){
  window.onload = function() {
    initBanner();
  }

  function initBanner() {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(MorphSVGPlugin);
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
    tl.add(TweenLite.from(".title_1", .5, {autoAlpha:0, scale: 0.5, ease:"none"}), "startf0");
    tl.add(TweenLite.from(".title_2", .3, {autoAlpha:0, scale: 0.5, ease:"none"}), ">1");
    tl.add(TweenLite.from(".lightning_1", .3, {y:"+=3", yoyo:true, repeat:9}), "<-.5");
    tl.add(TweenLite.from(".lightning_2", .3, {y:"+=3.5", yoyo:true, repeat:9}), "<-.3");

    tl.add(TweenLite.from(".lightning_1", .3, {y:"+=3", yoyo:true, repeat:9}), ">.8");
    tl.add(TweenLite.from(".lightning_2", .3, {y:"+=3.5", yoyo:true, repeat:9}), ">-.6");
    tl.add(TweenLite.to("#wave1", {duration:2, morphSVG:"#wave2",ease: "none",repeat:2,yoyo:true}), "startf0");

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
    tl.add(TweenLite.from(".scene1 .logo", .1, {autoAlpha:0, ease:Strong.easeInOut}), "<");
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
    tl.add(generateChopper(), "FrameStartChopper-=7");
    tl.add("FrameStart1");
    tl.add(generateFrame1(), "FrameStart1-=5");

    document.getElementsByClassName('scene0')[0].style.display = 'block';
    document.getElementsByClassName('scene1')[0].style.display = 'block';
  }

}());
