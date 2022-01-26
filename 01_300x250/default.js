// Setup namespace for ad.

(function (){
  window.addEventListener("load", function(){
    "use strict";
    initBanner("banner", "template")
  });
  var bannerWidth = 300;

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
  function generateFrame1(){
    var tl = new TimelineLite();
    tl.add(TweenLite.from(".twelve", 1, {x:150, ease:Strong.easeInOut, opacity:0}));
    return tl;
  }
  function generateFrame2(){
    var tl = new TimelineLite();
    tl.addLabel("swiper");
    TweenLite.set(".purple-swiper.one", {left:"100%", width:bannerWidth+50});
    tl.add(TweenLite.to(".purple-swiper.one", .5, {left:0, width:bannerWidth, ease:Strong.easeIn, onComplete:function(){
        document.getElementsByClassName('scene1')[0].style.display = 'block';
      }}), "swiper");
    tl.add(TweenLite.to(".purple-swiper.one", .7, {left:0, width:15, ease:Strong.easeOut}));

    return tl;

  }
  function generateFrame3(){
    var tl = new TimelineLite();

    tl.addLabel("startf3", "+=.5");

    tl.add(TweenLite.fromTo("#d1", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3");
    tl.add(TweenLite.fromTo("#d2", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3+=.1");
    tl.add(TweenLite.fromTo("#d3", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3+=.2");
    tl.add(TweenLite.fromTo("#d4", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3+=.3");
    tl.add(TweenLite.fromTo("#d5", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3+=.2");
    tl.add(TweenLite.fromTo("#d6", 2, {y:-500, ease:Strong.easeInOut}, {y:(Math.random()*20)-10, ease:Strong.easeInOut}), "startf3");
    tl.add(TweenLite.from(".line-group.one", 2, {y:-500, ease:Strong.easeInOut}), "startf3");
    tl.add(TweenLite.from(".line-group.two", 2, {y:-500, ease:Strong.easeInOut}), "startf3+=.3");
    tl.add(TweenLite.from(".line-group.three", 2, {y:-500, ease:Strong.easeInOut}), "startf3+=.2");
    tl.add(TweenLite.from(".line-group.four", 2, {y:-500, ease:Strong.easeInOut}), "startf3");



    tl.add(TweenLite.from(".gonuts", 1.8, {x:bannerWidth, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.from(".qantas", 1.8, {x:-bannerWidth, ease:Strong.easeInOut}), "startf3+=2");

    tl.add(TweenLite.to("#d1", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.to("#d2", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.to("#d3", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.to("#d4", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.to("#d5", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");
    tl.add(TweenLite.to("#d6", 2, {y:0, ease:Strong.easeInOut}), "startf3+=2");



    tl.addLabel("endf3", "+=1");

    tl.add(TweenLite.to(".gonuts", 1, {x:-bannerWidth, ease:Strong.easeInOut}), "endf3");
    tl.add(TweenLite.to(".qantas", 1, {x:bannerWidth, ease:Strong.easeInOut}), "endf3");

    tl.add(TweenLite.to(".line-group.one", 1, {opacity:0, ease:Strong.easeInOut}), "endf3");
    tl.add(TweenLite.to(".line-group.two", 1, {opacity:0, ease:Strong.easeInOut}), "endf3");
    tl.add(TweenLite.to(".line-group.three", 1, {opacity:0, ease:Strong.easeInOut}), "endf3");
    tl.add(TweenLite.to(".line-group.four", 1, {opacity:0, ease:Strong.easeInOut}), "endf3");

    tl.add(TweenLite.to("#d1", 1, {x:44, y:-28,  scale:1.3, ease:Strong.easeInOut}), "endf3");
    tl.add(TweenLite.to("#d2", 1, {x:65, y:-24,  scale:1.3, ease:Strong.easeInOut}), "endf3+=.01");
    tl.add(TweenLite.to("#d3", 1, {x:80, y:-30,  scale:1.3, ease:Strong.easeInOut}), "endf3+=.05");
    tl.add(TweenLite.to("#d4", 1, {x:-70, y:18,  scale:1.3, ease:Strong.easeInOut}), "endf3+=.1");
    tl.add(TweenLite.to("#d5", 1, {x:-62, y:25,  scale:1.3, ease:Strong.easeInOut}), "endf3+=.15");
    tl.add(TweenLite.to("#d6", 1, {x:-55, y:20,  scale:1.3, ease:Strong.easeInOut}), "endf3+=.2");
    tl.add(TweenLite.from(".box-container", 1, {scale:.1, opacity:0, ease:Strong.easeInOut, delay:.1}), "endf3");
    tl.add(TweenLite.to(".squeeze", 1, {scaleY:0, ease:Strong.easeInOut, delay:.1}), "endf3+=.5");
    tl.add(TweenLite.fromTo(".lid-container", 1, {scaleY:0, ease:Strong.easeInOut, delay:.1}, {skewX:-18.9, scaleX:1.03, scaleY:3.32, x:-1, y:-6,  ease:Strong.easeInOut}), "endf3+=.5");

    return tl;

  }
  function generateFrame4(){
    var tl = new TimelineLite();
    tl.addLabel("swiper");
    TweenLite.set(".purple-swiper.two", {left:"100%", width:bannerWidth+50});
    tl.add(TweenLite.to(".purple-swiper.two", .5, {left:0, width:bannerWidth, ease:Strong.easeIn, onComplete:function(){
        document.getElementsByClassName('scene2')[0].style.display = 'block';
      }}), "swiper");
    tl.add(TweenLite.to(".purple-swiper.two", .7, {left:0, width:15, ease:Strong.easeOut}));
    tl.addLabel("f4elements", "-=.8");
    tl.add(TweenLite.from(".card", 1, {x:bannerWidth, ease:Strong.easeOut}), "f4elements");
    tl.add(TweenLite.from(".withanew", 1.2, {x:bannerWidth, ease:Strong.easeOut}), "f4elements+=.2");
    tl.add(TweenLite.fromTo(".shine", 2, {x:-bannerWidth, ease:Strong.easeOut}, {x:bannerWidth, ease:Strong.easeOut}));
    return tl;
  }
  function generateFrame5(){
    var tl = new TimelineLite();
    tl.addLabel("startf5");

    tl.add(TweenLite.from(".scene3-cover", .1, {opacity:0, ease:Strong.easeInOut}), "startf5+=2.5");
    tl.add(TweenLite.from(".scene3 .purple-swiper.three", .8,  {opacity:0, ease:Strong.easeInOut}), "startf5");
    tl.add(TweenLite.from(".scene3 .w-logo", 1, {opacity:0, ease:Strong.easeInOut}), "startf5-=.1");
    tl.add(TweenLite.from(".scene3 .earnup", 1, {opacity:0, ease:Strong.easeInOut}), "startf5-=.1");
    tl.add(TweenLite.from(".scene3 .findoutmorecta", 1,  {opacity:0, ease:Strong.easeInOut}), "startf5+=.1");
    tl.add(TweenLite.from(".scene3 .minspend", 1,  {opacity:0, ease:Strong.easeInOut}), "startf5+=.15");

    return tl;
  }
  function chopper() {
    let tl = gsap.timeline({defaults: {duration: 1, paused: false}});
    tl.timeScale(2);
    gsap.set('.chopper', {rotationZ: -310.002});
    gsap.set('#c0,#s2bg', {transformOrigin: '50%'});
    
    tl
      .set('#q3,#q4,#s2bg,#q1b,#q2b', {alpha: 0})
      
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

    tl.add("FrameStart1");
    tl.add(generateFrame1());
    tl.add("FrameStart2");
    tl.add(generateFrame2());
    tl.add("FrameStart3");
    tl.add(generateFrame3(), "FrameStart2-=1");
    tl.add("FrameStart4");
    tl.add(generateFrame4());
    tl.add('chop', '>2')
    tl.set('.chopper', {alpha: 1}, 'chop')
    tl.add(chopper, 'chop')
    tl.add("FrameStart5");
    tl.add(generateFrame5(), "FrameStart5+=1.1");

    document.getElementsByClassName('scene0')[0].style.display = 'block';
    document.getElementsByClassName('scene3')[0].style.display = 'block';
  }

}());
