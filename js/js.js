//nav
var bodyClass = document.body.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
  if( st < lastScrollY) {
    bodyClass.remove('hide');
  }else{
    bodyClass.add('hide');
  }
  lastScrollY = st;
});

//image slider
var currentImage = 4;

$("#arrow_right").click(function(){	

	if(currentImage > 7){
		$(".ebook").animate({
		left: '+=400%'
		},500);

		$(".ebook_0").animate({
			opacity: "1"
		},800);
		$(".ebook_8").animate({
			opacity: "0.2"
		},800);

		$(".dot_8").removeClass("dot_active");
		$(".dot_0").addClass("dot_active");

		currentImage = 0;
	}else{

		$(".ebook").animate({
		left: '-=50%'
		},500);

		$(".ebook_" + parseInt(currentImage + 1)).animate({
			opacity: "1"
		},800);
		$(".ebook_" + parseInt(currentImage)).animate({
			opacity: "0.2"
		},800);

		$(".dot_" + parseInt(currentImage)).removeClass("dot_active");
		$(".dot_" + parseInt(currentImage + 1)).addClass("dot_active");

		
		currentImage++;
	}
	
})

	

$("#arrow_left").click(function(){

	if(currentImage < 1){
		$(".ebook").animate({
		left: '-=400%'
		},500);
		
		$(".ebook_8").animate({
			opacity: "1"
		},800);
		$(".ebook_0").animate({
			opacity: "0.2"
		},800);


		$(".dot_0").removeClass("dot_active");
		$(".dot_8").addClass("dot_active");

		currentImage = 8;

	}else{
		$(".ebook").animate({
		left: '+=50%'
		},500)

		$(".ebook_" + parseInt(currentImage - 1)).animate({
			opacity: "1"
		},800);
		$(".ebook_" + parseInt(currentImage)).animate({
			opacity: "0.2"
		},800);

		$(".dot_" + parseInt(currentImage)).removeClass("dot_active");
		$(".dot_" + parseInt(currentImage - 1)).addClass("dot_active");

		currentImage--;
	}

})

//lightbox

var links = document.querySelectorAll('.lightCustom'),
// make array
arrayOfLinks = Array.prototype.slice.call(links);
// loop 
Array.prototype.forEach.call(arrayOfLinks,function(obj,index){
  // open modal on click
  obj.addEventListener('click',function(e){
    e.preventDefault();
    // if not title show no title
    var title = (obj.title) ? obj.title : 'This not have title';
    // add class show
    document.querySelector('.lightModal').classList.add('show');
    // add title in modal with title=""
    document.querySelector('.lightModal-title').innerHTML = title;
    // get href and add in image modal
    document.querySelector('.lightModal-image').src = obj.href;
    // add title in alt image
    document.querySelector('.lightModal-image').alt = title;
  });
  // close modal
  document.querySelector('.lightModal-close').addEventListener('click',function(e){
    e.preventDefault();
    // remove class="show"
    document.querySelector('.lightModal').classList.remove('show');
    // remove title
    document.querySelector('.lightModal-title').innerHTML = '';
    // remove src
    document.querySelector('.lightModal-image').src = '';
    // remove alt
    document.querySelector('.lightModal-image').alt = '';
  });

});


//scrolling

var windowHeight;
var jsScrollingContent = $('.js-scrolling-content');
var jsProjectElement = $('.js-project-element');


$(document).ready(function(){
	windowHeight = $(window).height();
	projectScrollInterval();
	$(".scroll_logo").addClass("scroll_logo_showup");
	$(".location_move span").css("width","30px");
});



function projectScrollInterval() {
	scrollYPos = $("body").scrollTop();
	jsProjectElement.each(function() {
      	projectPositionChecker($(this), scrollYPos);
    });

	setTimeout(function(){
		projectScrollInterval();
    }, 10);
}



function projectPositionChecker(e, y) {
	thisOffset = e.offset().top;
	if (thisOffset < y + windowHeight/1.3) {
		dataActiveOn(e);
	} else {
		dataActiveOff(e);
	}
}

function dataActiveOff(e) {
	e.attr('data-active', 'off');
}
function dataActiveOn(e) {
	e.attr('data-active', 'on');
}

//scroll_logo

$(".scroll_logo").click(function(){
	windowHeight = $(window).height();
	$("body").animate({
		scrollTop: windowHeight+1
	}, 600)
})