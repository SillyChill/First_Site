var i = 0;
function add_card() {

	var res_arr = [
		{
			img: ["./Assets/img/polez_mel.jpg",
			  	  "./Assets/img/bazar.png",
			  	  "./Assets/img/koala.jpg",
			  	  "./Assets/img/sad_man.jpg"
				 ],

			s_t: ["100 самых интересных статей «Мела» (и 13 блогеров!)", 
			  	  "Цветки цукини, пять видов баклажанов и тёплая рикотта. Или что едят итальянцы, когда не едят макароны", 
				  "Почему полезно не понимать математику", 
			  	  "«Я неудачник»: откуда берутся комплексы и проблемы с самооценкой"
				 ],

			read_t:["Читать: 14 мин",
					"Читать: 2 мин",
					"Читать: 1 мин",
					"Читать: 2 мин"
				   ]
		},
		{
			img: ["./Assets/img/sport_book.png",
			  	  "./Assets/img/time.png",
			  	  "./Assets/img/melok.png",
			  	  "./Assets/img/child.jpg"
				 ],

			s_t: ["Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)", 
			  	  "Часики тикают и стакан воды: почему мы заводим детей", 
				  "«Претензия номер один — бумажная волокита»: 5 тезисов о проблемах развития школы", 
			  	  "7 философских книг для детей и семейного чтения"
				 ],

			read_t:["Читать: 5 мин",
					"Читать: 3 мин",
					"Читать: 4 мин",
					"Читать: 10 мин"
				   ]
		}
	]
	
	
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
		 							<img class="article_card_image" src="${res_arr[i].img[j]}")>
		 						</picture>
		 					</div>
		 					<div class="article_card_content">
		 						<div class="main_tag">Блоги</div>
		 						<div class="card_title">${res_arr[i].s_t[j]}</div>
		 						<div class="article_card_stats">
		 							<div class="read_time">
		 								<div class="read_time_icon">
		 									<div class="svg_icon">
		 										<i class="far fa-clock"></i>
		 									</div>
		 								</div>
		 								<span class="article_card_counter">${res_arr[i].read_t[j]}</span>
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