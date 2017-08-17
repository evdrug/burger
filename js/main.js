ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.88, 30.54],
        zoom: 11,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.88, 30.54], {
        hintContent: 'CПБ!',
        balloonContent: 'Мы тут :)'
    }, {
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
    }, {
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
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/content/map-marker.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });


    myMap.geoObjects.add(myPlacemark).add(myPlacemark2).add(myPlacemark3);
}


// скролл

var flag = true;

$(document).ready(function () {
    var pointLink = $('.point__link'),
        pointsItem = $('.points__item'),
        mycontent = $('.mycontent');


    var section = 0,
        box = $('.box');

    box.first().addClass('p_active');

    function posActive(section) {

        var position = -section * 100 + '%';
        mycontent.css('top', position);
        box.eq(section).addClass('p_active')
            .siblings().removeClass('p_active');
        setTimeout(function () {
            flag = true;
        }, 1300);

        pointsItem.eq(section).addClass('points__item_active')
            .siblings().removeClass('points__item_active');
    };


    $('body').on('mousewheel', function (e) {
        var activeBox = box.filter('.p_active'),
            activeBoxNumb = activeBox.index();

        if (flag) {
            flag = false;

            if (e.deltaY > 0) {
                if (activeBox.prev().length) section = activeBoxNumb - 1;
            } else {
                if (activeBox.next().length) section = activeBoxNumb + 1;
            }

            posActive(section);
        }
    });

    if(!device.desktop()){

        $('body').swipe({
            swipe: function (event, direction, distance, duration, fingerCount) {
                console.log(direction);

                var activeBox = box.filter('.p_active'),
                    activeBoxNumb = activeBox.index();


                if (flag) {
                    flag = false;

                    if (direction == 'down' || direction == 'right' && distance == 75) {
                        if (activeBox.prev().length) section = activeBoxNumb - 1;
                    }
                    if(direction == 'up' || direction == 'left' && distance == 75){
                        if (activeBox.next().length) section = activeBoxNumb + 1;
                    }

                    posActive(section);
                }
            }

        });
    }


    $('.menu-nav__link').on('click', function (e) {
            e.preventDefault();
            var link = $(e.target).attr('href'),
                pos = link.substr(1);
            $('.menu_active').removeClass('menu_active');
            posActive(pos);

        });

    $('.box-one__next').on('click', function (e) {
        e.preventDefault();
        posActive(1);
    });
    $('.menu__order').on('click', function (e) {
        e.preventDefault();
        posActive(6);
    }) ;
    $('.order-btn').on('click', function (e) {
        e.preventDefault();
        posActive(6);
    });




    function scroll(items) {
        var nextPage = -items.index() * 100 + '%';
        mycontent.css('top', nextPage).animate;
        pointsItem.removeClass('points__item_active');
        items.addClass('points__item_active');
    };

    pointLink.on('click', function (e) {
        e.preventDefault();
        var items = $(e.target).closest('.points__item');
        scroll(items);
        box.eq(items.index()).addClass('p_active')
            .siblings().removeClass('p_active');

    })


});


//open and close menu

var menu = document.getElementsByClassName('menu')[0];

var menuAccord = document.getElementsByClassName('menu__accord')[0];
menuAccord.onclick = function (e) {
    e.preventDefault();
    var active = menu.classList.value;
    if (active.indexOf('menu_active') === -1) {
        menu.classList.add('menu_active');
        flag = false;

    } else {
        menu.classList.remove('menu_active');
        flag = true;
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

    teamLink.on('click', function (e) {
        e.preventDefault();

        var container = $(e.target).siblings(),
            blockInfo = container.children(),
            blockHeight = blockInfo.height(),
            teamBlock = $(e.target).closest('.team-accordeon__team'),
            teamBlockAll = $('.team-accordeon__team');


        if (teamBlock.hasClass('team-accordeon__team_active')) {
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

    menuLink.on('click', function (e) {
        e.preventDefault();

        var menuBlock = $(e.target).closest('.box-menu__item'),
            menuBlockAll = $('.box-menu__item');

        if (menuBlock.hasClass('box-menu__item_active')) {
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


        if (test == 'next') {

            if (!nextItem.length) {
                nextItem = sliderItem.first();
                nextNumberItem = nextItem.index();
            }
            var next = -nextNumberItem * 100 + '%';
            sliderList.stop(true).animate({
                'left': next
            }, slideTime, function () {
                sliderActive.removeClass('box-burger__item_active');
                nextItem.addClass('box-burger__item_active');
            });
        }

        if (test == 'back') {

            if (!backItem.length) {
                backItem = sliderItem.last();
                backNumberItem = backItem.index();
            }
            var back = -backNumberItem * 100 + '%';

            sliderList.stop(true).animate({
                'left': back
            }, slideTime, function () {
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


    //модальное окно


    var item = $('.reviews-item__link'),
        modal = $('.modal-overlay'),
        modalText = $('.modal__text');

    function openModal(modal,e,text) {
        modal.css('display','block');
        setTimeout(function () {
            modal.css({
                "background-color": "rgba(0,0,0,0.9)",
                "transition": ".5s"
            });
        }, 1);

        modalText.html(text);

        var heightModal = $('.modal__text').height(),
            heightModalFull = (+heightModal + 40) + 'px';
        $('.modal').css('height', heightModalFull);

        modal.find('.modal').css({"opacity": "1","transition-delay": ".5s", "transition": "1.5s"});
        flag = false;
    }


    item.on('click', function (e) {
        e.preventDefault();

        var itemName = $(e.target).siblings('.reviews-item__name').text(),
            itemComment = $(e.target).siblings('.reviews-item__comment').text(),
            text = '<div class="modal__name">' + itemName + '</div><div class="modal__comment">' + itemComment + '</div>';

        openModal(modal,e,text);


    });

    var modalClose = $('.modal__close');

    modalClose.on('click', function () {
        modal.css({"background-color": "rgba(0,0,0,0.0)", "transition": ".5s"});
        modal.find('.modal').css({"opacity": "0", "transition": "1.5s"});
        setTimeout(function () {
            modal.css('display', 'none');

        }, 200);
        flag = true;
    });




    function ajaxForm (form){
        var action = form.attr('action'),
            data = form.serialize();

        return $.ajax({
            type: 'POST',
            url: action,
            data: data,
            dataType: 'JSON'
        });
    }

    $('#order_form').on('submit', function (e) {
        e.preventDefault();

        var form = $(e.target),
            request = ajaxForm(form);

            request.done(function (e) {
                openModal(modal,e,e.message);
                $('#order_form')[0].reset();
            });

    });


});