var j = jQuery.noConflict();

jQuery(document).ready(function(){
  j('.bxslider').bxSlider({
    slideWidth: 600,
    minSlides: 8,
    maxSlides: 12,
    slideMargin: 0
  // pagerCustom: '#pagination'
	});
  j('.newsletter__submit-text--large').html('JOIN');
});



