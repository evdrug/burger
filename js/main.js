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


var accordTeam = document.getElementsByClassName('team-accordeon__team');

var accordLink  = document.getElementsByClassName('team-accordeon__link');
    for( i = 0; i<accordLink.length; i++){
        accordLink[i].onclick = function (e) {
            e.preventDefault();
        }
    }

var active = document.getElementsByClassName('team-accordeon__team_active');

