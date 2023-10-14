/*=========================================================================
           Home Slider
=========================================================================*/

$(function () {
  'use strict';

  /*=========================================================================
          Canvas Menu
  =========================================================================*/
  $('button.burger-menu').on('click', function () {
    $('.canvas-menu').toggleClass('open');
    $('.main-overlay').toggleClass('active');
  });

  $('.canvas-menu .btn-close, .main-overlay').on('click', function () {
    $('.canvas-menu').removeClass('open');
    $('.main-overlay').removeClass('active');
  });

  /*=========================================================================
          Popups
  =========================================================================*/
  $('button.search').on('click', function () {
    $('.search-popup').addClass('visible');
  });

  $('.search-popup .btn-close').on('click', function () {
    $('.search-popup').removeClass('visible');
  });

  $(document).keyup(function (e) {
    if (e.key === 'Escape') {
      // escape key maps to keycode `27`
      $('.search-popup').removeClass('visible');
    }
  });

  /*=========================================================================
          Tabs loader
  =========================================================================*/
  $('button[data-bs-toggle="tab"]').on('click', function () {
    $('.tab-pane').addClass('loading');
    $('.lds-dual-ring').addClass('loading');
    setTimeout(function () {
      $('.tab-pane').removeClass('loading');
      $('.lds-dual-ring').removeClass('loading');
    }, 500);
  });

  /*=========================================================================
          Social share toggle
  =========================================================================*/
  $('.post button.toggle-button').each(function () {
    $(this).on('click', function (e) {
      $(this).next('.social-share .icons').toggleClass('visible');
      $(this).toggleClass('icon-close').toggleClass('icon-share');
    });
  });

  /*=========================================================================
  Spacer with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('spacer');

  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute('data-height');
    list[i].style.height = '' + size + 'px';
  }

  /*=========================================================================
  Background Image with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('data-bg-image');

  for (var i = 0; i < list.length; i++) {
    var bgimage = list[i].getAttribute('data-bg-image');
    list[i].style.backgroundImage = "url('" + bgimage + "')";
  }
});
