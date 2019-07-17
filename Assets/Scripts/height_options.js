// var heights = [];
var elem = document.getElementById('card_title');
var heightsBox_n = 0;
$(document).ready(function(){
	
		$('.Front_Card').each(function(){
			let cardTitleHeight = $(this).find('.card_title').height();
			console.log(cardTitleHeight);
			if ( cardTitleHeight > heightsBox_n){
				heightsBox_n = cardTitleHeight;
			}
		});
		console.log(heightsBox_n)
		$(this).find('.card_title').height(heightsBox_n);

		
});

	


