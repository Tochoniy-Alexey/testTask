function init() {
    //считываем файл profileLlist.json
    $.getJSON("profileList.json", profilesOut);
}
// вывод на страницу
function profilesOut(data) {
    // console.log(data);
    // вывод на страницу количества подписчиков
    function followersOut(followers,titleFollowers,differenceFollowers,arrow){
			 var followers=`
			<div class="followers"><p class="followers__quantity">${followers}</p><p class="followers__title">${titleFollowers}</p></div>
			<div class="differenceFollowers">${differenceFollowers} <img src="${arrow}" alt="" /></div>
			 	`;	
			 return followers;
		};

		var followers1 = followersOut(
			data["facebook"].followers, 
			data["facebook"].titleFollowers, 
			data["facebook"].differenceFollowers, 
			data["facebook"].arrow);
		var followers2 = followersOut(
			data["twitter"].followers, 
			data["twitter"].titleFollowers, 
			data["twitter"].differenceFollowers, 
			data["twitter"].arrow);
		var followers2 = followersOut(
			data["twitter"].followers, 
			data["twitter"].titleFollowers, 
			data["twitter"].differenceFollowers, 
			data["twitter"].arrow);
		var followers3 = followersOut(
			data["instagram"].followers, 
			data["instagram"].titleFollowers, 
			data["instagram"].differenceFollowers, 
			data["instagram"].arrow);
		var followers4 = followersOut(
			data["linkedin"].followers, 
			data["linkedin"].titleFollowers, 
			data["linkedin"].differenceFollowers, 
			data["linkedin"].arrow);
		var followers5 = followersOut(
			data["youtube"].followers, 
			data["youtube"].titleFollowers, 
			data["youtube"].differenceFollowers, 
			data["youtube"].arrow);
		var followers6 = followersOut(
			data["snapchat"].followers, 
			data["snapchat"].titleFollowers, 
			data["snapchat"].differenceFollowers, 
			data["snapchat"].arrow);
		var followers7 = followersOut(
			data["google"].followers, 
			data["google"].titleFollowers, 
			data["google"].differenceFollowers, 
			data["google"].arrow);
		var followers8 = followersOut(
			data["vine"].followers, 
			data["vine"].titleFollowers, 
			data["vine"].differenceFollowers, 
			data["vine"].arrow);
		
				$('.facebook').html(followers1);
				$('.twitter').html(followers2);
				$('.instagram').html(followers3);
				$('.linkedin').html(followers4);
				$('.youtube').html(followers5);
				$('.snapchat').html(followers6);
				$('.google').html(followers7);
				$('.vine').html(followers8);

// вывод на страницу названия профиля
		function profileOut(img, nameItem, loginItem){
			var profile=`
			<div class="profile">
				<div class="profile__img"> <img class="img-responsive" src="${img}" alt=""/></div>
				<div class="profile__title"><p class="profile__name">${nameItem}</p><p class="profile__Item">${loginItem}</p></div>
			</div>
			`;
			return profile;
		};

 var profile1 = profileOut(data["facebook"].img, data["facebook"].nameItem, data["facebook"].loginItem);
 var profile2 = profileOut(data["twitter"].img, data["twitter"].nameItem, data["twitter"].loginItem);
 var profile3 = profileOut(data["instagram"].img, data["instagram"].nameItem, data["instagram"].loginItem);
 var profile4 = profileOut(data["linkedin"].img, data["linkedin"].nameItem, data["linkedin"].loginItem);
 var profile5 = profileOut(data["youtube"].img, data["youtube"].nameItem, data["youtube"].loginItem);
 var profile6 = profileOut(data["snapchat"].img, data["snapchat"].nameItem, data["snapchat"].loginItem);
 var profile7 = profileOut(data["google"].img, data["google"].nameItem, data["google"].loginItem);
 var profile8 = profileOut(data["vine"].img, data["vine"].nameItem, data["vine"].loginItem);

				$('.facebook-profile').html(profile1);
				$('.twitter-profile').html(profile2);
				$('.instagram-profile').html(profile3);
				$('.linkedin-profile').html(profile4);
				$('.youtube-profile').html(profile5);
				$('.snapchat-profile').html(profile6);
				$('.google-profile').html(profile7);
				$('.vine-profile').html(profile8);
};

// вызов функции вывода данных из json файла
init(); 


$(function() {

//вкладки 
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

// popUp окно
	// открыть по кнопке
$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});
	// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
});
	// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
	}
});

// выплывающее меню
$('.toggle_button').click(function(event) {
	$('.sideBar').toggleClass('active');
});
 

});
