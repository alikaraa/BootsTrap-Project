$(document).ready(function(){
	$('#book_pick_date, #book_off_date, #tarih3').datepicker({});
	
	$(window).scroll(function(){
		$('.bolum2, .bolum3, .bolum4, .bolum5, .bolum6, .bolum7, footer').each(function(){
			var ustKenar = $(this).offset().top;
			var pencereAlt = $(window).scrollTop()+$(window).height();
			if(pencereAlt > ustKenar){
				$(this).animate({'opacity':'1'},1000);
			}
		})
	})
});