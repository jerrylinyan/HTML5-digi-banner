// Setup namespace for ad.

(function (){
  window.addEventListener("load", function(){
    "use strict";
    initBanner("banner", "template")
  });

  function initBanner(banner, template) {
    gsap.registerPlugin(MorphSVGPlugin);
    var $banner = document.getElementById(banner),
      $template = document.getElementById(template),
      tl = new TimelineLite({onComplete:function() {
         // this.restart();
      }
      });

    $banner.innerHTML = $template.innerHTML;
    document.getElementsByClassName('exit')[0].addEventListener('click',function() {
      if (window.clickTag) {
        window.open(window.clickTag);
      }
    });

    TweenLite.defaultEase = Cubic.easeInOut;

    showFrames(tl);
  } // end initBanner

  function generateFrame0(){
    var tl = new TimelineLite();
    tl.addLabel("startf0");
    tl.add(TweenLite.from(".reno", 1, {y:10, opacity:0, ease:Strong.easeInOut}), "startf0");
    tl.add(TweenLite.from(".time", 1, {y:10, opacity:0, ease:Strong.easeInOut}), "startf0");
    
    tl.add(TweenLite.from(".background", 1, {x:15, ease:Strong.easeInOut}), "startf0");
    tl.add(TweenLite.fromTo(".right-arm", 1, {x:15, rotation: 70, ease:Strong.easeInOut}, {x:0, rotation: 70, ease:Strong.easeInOut}), "startf0");
    tl.add(TweenLite.fromTo(".measuring-tape", 1, {x:15, rotation: 3, ease:Strong.easeInOut}, {x: 0, rotation: 3, ease:Strong.easeInOut}), "startf0");
    
    tl.add(TweenLite.to(".right-arm", 1, {y:12, rotation: 0, ease:Strong.easeInOut}), "startf0+=1");
    tl.add(TweenLite.to(".measuring-tape", 1, {rotation: 0, ease:Strong.easeInOut}), "startf0+=1");
    tl.add(TweenLite.to(".mask", .89, {transformOrigin: 'top left', rotation: -8, scaleY: 0, x:-2, ease:"Power4.easeInOut"}), "startf0+=1.08");

    return tl;
  }

  function generateFrame1(){
    var tl = new TimelineLite();
    tl.addLabel("startf1");
    tl.add(TweenLite.to(".background", 2, {x:-400, ease:Strong.easeInOut}), "startf1+=.5");
    tl.add(TweenLite.to(".measuring-tape", 2, {x:-400, ease:Strong.easeInOut}), "startf1+=.5");
    tl.add(TweenLite.to(".right-arm", 2, {x:-400, ease:Strong.easeInOut}), "startf1+=.5");

    tl.add(TweenLite.to(".carpet-wrapper", 2, {x:-400, ease:Strong.easeInOut}), "startf1+=.5");
    tl.add(TweenLite.fromTo(".cat-arm", 1, {rotation:-12}, {rotation:15, repeat:5, yoyo:true, ease:"none"}), "startf1");

    tl.add(TweenLite.to(".reno", .5, {y:-5, opacity:0, ease:Strong.easeInOut}), "startf1+=2.2");
    tl.add(TweenLite.to(".time", .5, {y:-5, opacity:0, ease:Strong.easeInOut}), "startf1+=2.2");
    
    tl.add(TweenLite.to(".background", 3, {x:-400, y:-160, ease:Strong.easeInOut}), "startf1+=2.2");
    tl.add(TweenLite.to(".carpet-wrapper", 3, {y:-181, ease:Strong.easeInOut}), "startf1+=2.2");
    tl.add(TweenLite.to(".seat", 3, {y:27, scale: .75, ease:Strong.easeInOut}), "startf1+=2.2");
    tl.add(TweenLite.to(".cat-arm", 3, {x:6, y:16, scale: .7, ease:Strong.easeInOut}), "startf1+=2.2");
    tl.add(TweenLite.to(".carpet", 3, {y: -3, scaleX: 1, scaleY: 1, ease:Strong.easeInOut}), "startf1+=2.2");
    
    tl.add(TweenLite.to(".roll-wrapper", 3.5, {y:450, ease:Strong.easeInOut}), "startf1+=2.6");
    tl.add(TweenLite.to(".carpet-roll", 3.5, { scaleY:0, ease:Strong.easeInOut}), "startf1+=2.6");

    return tl;
  }

  function generateFrame2(){
    var tl = new TimelineLite();
    tl.addLabel("startf2");

    tl.add(TweenLite.from(".scene2-cover", .1, {opacity:0, ease:Strong.easeInOut}), "startf2+=2.5");
    tl.add(TweenLite.from(".scene2 .w-logo", 1, {opacity:0, ease:Strong.easeInOut}), "startf2-=.1");
    tl.add(TweenLite.from(".scene2 .egift-card", 1,  {opacity:0, ease:Strong.easeInOut}), "startf2+=.1");
    tl.add(TweenLite.from(".scene2 .tandc", 1,  {opacity:0, ease:Strong.easeInOut}), "startf2+=.1");
    tl.add(TweenLite.from(".scene2 .findoutmore", 1,  {opacity:0, ease:Strong.easeInOut}), "startf2+=.15");

    return tl;
  }

  function chopper() {
    let tl = gsap.timeline({defaults: {duration: 1, paused: false}});
    tl.timeScale(2);
    gsap.set('.chopper', {rotationZ: -310.002});
    gsap.set('#c0,#s2bg', {transformOrigin: '50%'});
    
    tl
      .set('#q3,#q4,#s2bg,#q1b,#q2b', {alpha: 0})
      
      .add(TweenLite.to(".r-logo", .01, {opacity:0, ease:Strong.easeInOut}))
      .from('#q1', {duration: 1, x: -500}, 0)
      .from('#q2', {duration: 1, x: 500}, '<')
      .add('q3', '>')
      .set('#q3,#q4', {alpha: 1},'q3')
      .to("#q3>path", {duration: 0.55, morphSVG:"#q3a>path", ease: Linear.easeNone}, 'q3')
      .to("#q3>path", {duration: 0.55, morphSVG:"#q3b>path", ease: Linear.easeNone},  '<.5')
      .to("#q4>path", {duration: 0.55, morphSVG:"#q4a>path", ease: Linear.easeNone}, 'q3')
      .to("#q4>path", {duration: 0.55, morphSVG:"#q4b>path", ease: Linear.easeNone},  '<.5')
      .add('s2', '>')
      .set('#c0', {alpha:1}, 's2')
      .set('#q1,#q2', {alpha: 0},'<')
      .set('#q1b,#q2b,#s2bg', {alpha: 1},'<')
      .from('#c0', {duration: 2, scale: 0, ease: Sine.easeIn}, '<')
      .to('#q1b', {duration: 2, y: 400, x: -400, ease: Sine.easeIn}, '<')
      .to('#q2b', {duration: 2, y: -400, x: 400, ease: Sine.easeIn}, '<')
      .to('.chopper', {duration: 3.9, scale: 1.5, rotation: 270, ease: Linear.easeNone}, 0);
    
    return tl;
  }

  function showFrames(tl) {
    var addedtime = 0.3; // custom additional time, original value is 1; shorten time for testing
    var frameInterval = 1.5 + addedtime; //original value is 1.5 + addedtime; shorten time for testing
    var aniSpeed = 1.5, //original value is 1.5; shorten time for testing
        aniSpeedSlow = aniSpeed + 0.5,
        aniSpeedFast = aniSpeed - .5;
    var loopInterval = 2;

    tl.set('.chopper', {alpha: 0})

    tl.add("FrameStart0");
    tl.add(generateFrame0());
    tl.add("FrameStart1");
    tl.add(generateFrame1(), "FrameStart1-=.5");
    tl.add('chop', '>.6')
    tl.set('.chopper', {alpha: 1}, 'chop')
    tl.add(chopper, 'chop')
    tl.add("FrameStart2"); 
    tl.add(generateFrame2(), "FrameStart2+=1");

    document.getElementsByClassName('scene0')[0].style.display = 'block';
    document.getElementsByClassName('scene2')[0].style.display = 'block';
  }

}());
