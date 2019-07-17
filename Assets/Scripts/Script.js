var i = 0;
var res_arr = [
	[
		{
			img: "./Assets/img/polez_mel.jpg",	  	  
			s_t: "100 самых интересных статей «Мела» (и 13 блогеров!)", 	  	  
			read_t: "Читать: 14 мин",			
		},
		{
			img: "./Assets/img/bazar.png",
			s_t: "Цветки цукини, пять видов баклажанов и тёплая рикотта. Или что едят итальянцы, когда не едят макароны", 	  
			read_t:	"Читать: 2 мин",
		},
		{
			img: "./Assets/img/melok.png",  	  
			s_t: "«Претензия номер один — бумажная волокита»: 5 тезисов о проблемах развития школы",   	  
			read_t:	"Читать: 4 мин",			
		},
		{
			img: "./Assets/img/sad_man.jpg",  	  
			s_t: "«Я неудачник»: откуда берутся комплексы и проблемы с самооценкой",   	  
			read_t:	"Читать: 2 мин",			
		}
	],
	[
		{
			img: "./Assets/img/sport_book.png",	  	  
			s_t: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)", 	  	  
			read_t: "Читать: 5 мин",		
		},
		{
			img: "./Assets/img/koala.jpg",
			s_t: "Почему полезно не понимать математику", 	  
			read_t:	"Читать: 1 мин",
		},
		{
			img: "./Assets/img/time.png",  	  
			s_t: "Часики тикают и стакан воды: почему мы заводим детей",   	  
			read_t:	"Читать: 3 мин",			
		},
		{
			img: "./Assets/img/child.jpg",  	  
			s_t: "7 философских книг для детей и семейного чтения",   	  
			read_t:	"Читать: 10 мин",			
		}
	]
];

function add_card() {
	if ( i >= res_arr.length)
	return 0;	
	var j;
	for (j = 0; j < 4; j++)
	{
		var parentElem = document.getElementById('Front_Page_Grid');
		var div_card = document.createElement('div');
			div_card.className = "Front_Card";
			div_card.innerHTML = 
		 		`<div class="article_card">
		 				<a class="article_card_link">
		 					<div class="image_wrap">
		 						<picture>
		 							<img class="article_card_image" src="${res_arr[i][j].img}")>
		 						</picture>
		 					</div>
		 					<div class="article_card_content">
		 						<div class="main_tag">Блоги</div>
		 						<div class="card_title">${res_arr[i][j].s_t}</div>
		 						<div class="article_card_stats">
		 							<div class="read_time">
		 								<div class="read_time_icon">
		 									<div class="svg_icon">
		 										<i class="far fa-clock"></i>
		 									</div>
		 								</div>
		 								<span class="article_card_counter">${res_arr[i][j].read_t}</span>
		 							</div>
		 						</div>
		 					</div>
		 					<div class="image_card"></div>
		 				</a>
		 		</div>`;
		parentElem.appendChild(div_card);
	}
	return i++;
}
var heightsBox = 0;

function add_card_height() {
	add_card();
	$('.Front_Card').each(function(){
		let cardTitleHeight = $(this).find('.card_title').height();
		// console.log(cardTitleHeight);
		if ( cardTitleHeight > heightsBox){
			heightsBox = cardTitleHeight;
		}
	});
	console.log(heightsBox);
	$('.Front_Card').find('.card_title').height(heightsBox);
}
