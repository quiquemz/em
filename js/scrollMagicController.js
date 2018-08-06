$(document).ready(function() {
  const controller = new ScrollMagic.Controller();

  /************************** Brand logo **************************/
  // Animations
  const logoImgAnimation = TweenMax.to('.logo-img', 0.5, {
    transform: 'rotateY(180deg) scale(0.32)'
  });

  const logoNameAnimation = TweenMax.to('.logo-name', 0.5, {
    opacity: 0
  });

  const containerLogoAnimation = TweenMax.to('.container-logo', 0.5, {
    top: '20%'
  });

  const scrollDownBtnAnimation = TweenMax.to('.scroll-down-btn', 0.5, {
    opacity: 0
  });


  // Scenes
  const logoNameScene = new ScrollMagic.Scene({
      triggerElement: '.container-about',
      duration: `${$(window).height()/4}`,
      offset: `-${$(window).height()/2}`
    })
    .setTween(logoNameAnimation)
    .addTo(controller);

  const logoImgScene = new ScrollMagic.Scene({
      triggerElement: '.container-about',
      duration: `${$(window).height()/2}`,
      offset: `-${$(window).height()/4}`
    })
    .setTween(logoImgAnimation)
    .addTo(controller);

  const containerLogoScene = new ScrollMagic.Scene({
      triggerElement: '.container-about',
      duration: `${$(window).height()/2 - 200}`,
      offset: `200`
    })
    .setTween(containerLogoAnimation)
    .addTo(controller);

  const scrollDownBtnScene = new ScrollMagic.Scene({
      triggerElement: '.container-about',
      duration: `5`,
      offset: `-${$(window).height()/2}`
    })
    .setTween(scrollDownBtnAnimation)
    .addTo(controller);

  // EventHandlers
  $(window).resize(() => {
    logoNameScene.offset(`-${$(window).height()/2}`);
  });



});