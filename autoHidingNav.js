// https://codyhouse.co/gem/auto-hiding-navigation

import $ from 'jquery';

$(function () {
  const mainHeader = $('.navbar');
  // const fadeOutBar = $('#fadeOutBar');

  let scrolling = false;
  let previousTop = 0;
  let scrollDelta = 10;
  let scrollOffset = 150;

  mainHeader.on('click', '.nav-trigger', (event) => {
    event.preventDefault();
    mainHeader.toggleClass('nav-open');
  });

  $(window).on('scroll', () => {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ?
      setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
    }
  });

  $(window).change('resize', () => {
    headerHeight = mainHeader.height() || 60;
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();

    hideOrShowNav(currentTop);

    previousTop = currentTop;
    scrolling = false;
  }

  function hideOrShowNav(currentTop) {
    if (previousTop - currentTop > scrollDelta) {
      mainHeader.removeClass('is-hidden');
      // mainHeader.addClass('navbar-shadow');
        //.delay(10000).removeClass('navbar-shadow');

      // fadeOutBar.addClass('navbar-shadow');

      // setTimeout(() => {
      //   fadeOutBar.fadeOut('slow');
      //   // mainHeader.removeClass('navbar-shadow');
      // }, 3000);
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
      mainHeader.addClass('is-hidden');
    }
  }
});