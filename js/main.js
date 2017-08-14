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

    var teamLink = $('.team-accordeon__link'),
        menuLink = $('.box-menu__link');

    teamLink.on('click',function (e) {
        e.preventDefault();

        var teamBlock = $(e.target).closest('.team-accordeon__team'),
            teamBlockAll = $('.team-accordeon__team');


        if( teamBlock.hasClass('team-accordeon__team_active')){
            teamBlock.removeClass('team-accordeon__team_active');
        } else {
            teamBlockAll.removeClass('team-accordeon__team_active');
            teamBlock.addClass('team-accordeon__team_active');

        }

    });


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



})