var i = 0;
var res_arr = [
    		
    	{
            img: "./Assets/img/read_book.jpg",        
            s_t: "7 шагов, как выбрать для чтения книгу на английском",           
            read_t: "Читать: 3 мин",
            date_t: "7 Apr 2019",           
        },
    	{
            img: "./Assets/img/book.png",        
            s_t: "После ЕГЭ в вуз: что нужно знать о поступлении",           
            read_t: "Читать: 2 мин",
            date_t: "5 Apr 2019",           
        },
        {
            img: "./Assets/img/page.jpg",        
            s_t: "Физика на чешском в обычном классе: почему это нужно и полезно",           
            read_t: "Читать: 2 мин",
            date_t: "5 Feb 2019",           
        },
    	{
            img: "./Assets/img/child_dance.jpg",        
            s_t: "Танец для детей: почему не только балет",           
            read_t: "Читать: 2 мин",
            date_t: "1 Feb 2019",           
        },
        {
            img: "./Assets/img/polez_mel.jpg",        
            s_t: "100 самых интересных статей «Мела» (и 13 блогеров!)",           
            read_t: "Читать: 14 мин",
            date_t: "20 Jul 2019",           
        },
        {
            img: "./Assets/img/bazar.png",
            s_t: "Цветки цукини, пять видов баклажанов и тёплая рикотта. Или что едят итальянцы, когда не едят макароны",     
            read_t: "Читать: 2 мин",
            date_t: "1 May 2019", 
        },
        {
            img: "./Assets/img/melok.png",        
            s_t: "«Претензия номер один — бумажная волокита»: 5 тезисов о проблемах развития школы",      
            read_t: "Читать: 4 мин",
            date_t: "12 Jun 2019",             
        },
        {
            img: "./Assets/img/sad_man.jpg",      
            s_t: "«Я неудачник»: откуда берутся комплексы и проблемы с самооценкой",      
            read_t: "Читать: 2 мин",
            date_t: "27 May 2019",             
        },
        {
            img: "./Assets/img/sport_book.png",       
            s_t: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)",          
            read_t: "Читать: 5 мин",
             date_t: "3 Jun 2019",         
        },
        {
            img: "./Assets/img/koala.jpg",
            s_t: "Почему полезно не понимать математику",     
            read_t: "Читать: 1 мин",
             date_t: "15 May 2019", 
        },
        {
            img: "./Assets/img/time.png",     
            s_t: "Часики тикают и стакан воды: почему мы заводим детей",      
            read_t: "Читать: 3 мин",
             date_t: "5 Mar 2019",            
        },
        {
            img: "./Assets/img/child.jpg",        
            s_t: "7 философских книг для детей и семейного чтения",       
            read_t: "Читать: 10 мин",
			 date_t: "20 Apr 2019",            
        }
   
];
var time_t = 0;
var t = 0;

function add_card(a) {
	if (a == res_arr)
	{
    	if ( i >= res_arr.length)
    	return 0;   
    	var j = 0;
    
    	while (j < 4)
    	{
    		if (j > res_arr.length)
    		{
    			return 0;	
    		}
        	var parentElem = document.getElementById('Front_Page_Grid');
        	var div_card = document.createElement('div');
            	div_card.className = "Front_Card";
            	div_card.innerHTML = 
                	`<div class="article_card">
                        <a class="article_card_link">
                            <div class="image_wrap">
                                <picture>
                                    <img class="article_card_image" src="${res_arr[i].img}")>
                                </picture>
                            </div>
                            <div class="article_card_content">
                                <div class="main_tag">Блоги</div>
                                <div class="card_title">${res_arr[i].s_t}</div>
                                <div class="article_card_stats">
                                    <div class="read_time">
                                        <div class="read_time_icon">
                                            <div class="svg_icon">
                                                <i class="far fa-clock"></i>
                                            </div>
                                        </div>
                                        <span class="article_card_counter">${res_arr[i].read_t}</span>
                                    </div>
                                    <span id="data_${t}" class="article_card_data">${res_arr[i].date_t}</span>
                                </div>
                            </div>
                            <div class="image_card"></div>
                        </a>
                	</div>`;
        	parentElem.appendChild(div_card);	
        	t++;
        	j++;
        	i++;
    	}
    }
    if (a == filt_result)	
    {
    	if ( i >= filt_result.length )
    	return 0;   
    	var j = 0;
    
    	while (j < 4)
    	{
    		if ( i >= filt_result.length ){
    			return 0;
    		}

        		var parentElem = document.getElementById('Front_Page_Grid');
        		var div_card = document.createElement('div');
            		div_card.className = "Front_Card";
            		div_card.innerHTML = 
                		`<div class="article_card">
                        	<a class="article_card_link">
                            	<div class="image_wrap">
                                	<picture>
                                    	<img class="article_card_image" src="${filt_result[i].img}")>
                                	</picture>
                            	</div>
                            	<div class="article_card_content">
                                	<div class="main_tag">Блоги</div>
                                	<div class="card_title">${filt_result[i].s_t}</div>
                                	<div class="article_card_stats">
                                    	<div class="read_time">
                                        	<div class="read_time_icon">
                                            	<div class="svg_icon">
                                                	<i class="far fa-clock"></i>
                                            	</div>
                                        	</div>
                                        	<span class="article_card_counter">${filt_result[i].read_t}</span>
                                    	</div>
                                    	<span id="data_${t}" class="article_card_data">${filt_result[i].date_t}</span>
                                	</div>
                            	</div>
                            	<div class="image_card"></div>
                        	</a>
                		</div>`;
        		parentElem.appendChild(div_card);	
        		t++;
        		j++;
        		i++;
        	
    	}
    	time_t = t;
   		console.log(time_t);
    	return i;
	}
};


$(document).ready(function(){
	add_card(res_arr);
});


function height_options(){
	var heightsBox = 0;
	$('.Front_Card').each(function(){
        let cardTitleHeight = $(this).find('.card_title').height();
        if ( cardTitleHeight > heightsBox){
            heightsBox = cardTitleHeight;
        }
    });
    $('.Front_Card').find('.card_title').height(heightsBox);
}

function add_card_with_height() {
	if ( filt_click == false){
    	add_card(res_arr);
    	height_options();
	}
	else
	{
		add_card(filt_result);
    	height_options();
	}
}

var c;
function sort_card(){
	filt_click = false;
	res_arr.sort(function(a,b) 
	{ 
     return  Date.parse(a.date_t) -  Date.parse(b.date_t) 
	});
	$('.Front_Card').remove();
	i = 0;
	add_card(res_arr);
	height_options();
};


var filt_result = [];
var arr_f_s = [];
var filt_click = false;
 function filt_card(){
 	filt_click = true;
 	var v1 = document.getElementById('input_dat_1').value;
	var v2 = document.getElementById('input_dat_2').value;

 	res_arr.sort(function(a,b) 
	{ 
     return  Date.parse(a.date_t) -  Date.parse(b.date_t) 
	});
	$('.Front_Card').remove();
	i = 0;
	var n;
	var f1 = Date.parse(v1);
	var f2 = Date.parse(v2);
	for (n = 0; n < res_arr.length; n++){
		var arr_f = Date.parse(res_arr[n].date_t);
		if (arr_f >= f1 && arr_f <= f2){
			arr_f_s[n] = res_arr[n];
		}
	};
	// filt_arr_fix(arr_f_s);
	filt_result = arr_f_s.filter(x => x != null);
	console.log(filt_result);
   	add_card_with_height();
   	height_options();
   	

 };		
