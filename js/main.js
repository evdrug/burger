ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.88, 30.54],
        zoom: 11,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.88, 30.54], {
        hintContent: 'CПБ!',
        balloonContent: 'Мы тут :)'
    },{
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/content/map-marker.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });
    myPlacemark2 = new ymaps.Placemark([59.89, 30.25], {
        hintContent: 'CПБ!',
        balloonContent: 'Мы тут :)'
    },{
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/content/map-marker.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });
    myPlacemark3 = new ymaps.Placemark([59.91, 30.45], {
        hintContent: 'CПБ!',
        balloonContent: 'Мы тут :)'
    },{
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/content/map-marker.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });



    myMap.geoObjects.add(myPlacemark) .add(myPlacemark2) .add(myPlacemark3);
}


//open and close menu

var menu = document.getElementsByClassName('menu')[0];

var menuAccord = document.getElementsByClassName('menu__accord')[0];
    menuAccord.onclick = function (e) {
        e.preventDefault();
        var active =  menu.classList.value;
        if (active.indexOf('menu_active')===-1){
            menu.classList.add('menu_active');

        }else {
            menu.classList.remove('menu_active');

        }
    }


// var accordTeam = document.getElementsByClassName('team-accordeon__team');
//
// var accordLink  = document.getElementsByClassName('team-accordeon__link');
//     for( i = 0; i<accordLink.length; i++){
//         accordLink[i].onclick = function (e) {
//             e.preventDefault();
//         }
//     }
//
// var active = document.getElementsByClassName('team-accordeon__team_active');


$(document).ready(function () {

    //аккардеон команды

    var teamLink = $('.team-accordeon__link'),
        menuLink = $('.box-menu__link');

    teamLink.on('click',function (e) {
        e.preventDefault();

        var container = $(e.target).siblings(),
            blockInfo = container.children(),
            blockHeight = blockInfo.height(),
            teamBlock = $(e.target).closest('.team-accordeon__team'),
            teamBlockAll = $('.team-accordeon__team');


        if( teamBlock.hasClass('team-accordeon__team_active')){
            teamBlock.children('.team-accordeon__container').css('height', '0');
            teamBlock.removeClass('team-accordeon__team_active');
        } else {
            teamBlockAll.children('.team-accordeon__container').css('height', '0');
            teamBlockAll.removeClass('team-accordeon__team_active');
            teamBlock.addClass('team-accordeon__team_active');
            container.css('height', blockHeight)
        }

    });


    //аккардеон меню

    menuLink.on('click',function (e) {
        e.preventDefault();

        var menuBlock = $(e.target).closest('.box-menu__item'),
            menuBlockAll = $('.box-menu__item');

        if( menuBlock.hasClass('box-menu__item_active')){
            menuBlock.removeClass('box-menu__item_active');
        } else {
            menuBlockAll.removeClass('box-menu__item_active');
            menuBlock.addClass('box-menu__item_active');
        }
    });


    //слайдер


    function slider(test) {

        var sliderWrapper = $('.box-burger__wrapper'),
            sliderList = sliderWrapper.find('.box-burger__list'),
            sliderItem = sliderWrapper.find('.box-burger__item'),
            sliderActive = sliderItem.filter('.box-burger__item_active'),
            nextItem = sliderActive.next(),
            nextNumberItem = nextItem.index(),
            backItem = sliderActive.prev(),
            backNumberItem = backItem.index(),
            slideTime = 700;



        if(test == 'next') {

            if(!nextItem.length){
                nextItem = sliderItem.first();
                nextNumberItem = nextItem.index();
            }
            var next = -nextNumberItem*100 +'%';
            sliderList.stop(true).animate({
                'left' : next
            },slideTime, function () {
                sliderActive.removeClass('box-burger__item_active');
                nextItem.addClass('box-burger__item_active');
            });
        }

        if (test == 'back') {

            if(!backItem.length){
                backItem = sliderItem.last();
                backNumberItem = backItem.index();
            }
            var back = -backNumberItem*100 +'%';

            sliderList.stop(true).animate({
                'left' : back
            },slideTime, function () {
                sliderActive.removeClass('box-burger__item_active');
                backItem.addClass('box-burger__item_active');
            });
        }
    }


    $('.box-burger__forward').on('click', function () {
        slider('next');
    });

    $('.box-burger__back').on('click', function () {
        slider('back');
    });



    // скролл

    var pointLink = $('.point__link'),
        pointsItem = $('.points__item');



    pointLink.on('click', function (e) {
        e.preventDefault();

        console.log(pointsItem.index());
    })
});