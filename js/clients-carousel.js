$(document).ready(function(){ // работа после того, как прогрузился html
    // находим блок с слайдами
    const owl = $('#clients-slider');
    // запусукаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 500,
    });

    // находим кнопки
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // клик на кнопку назад и прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel');
    })
    // клик на кнопку вперёд и прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel');
    });
});

