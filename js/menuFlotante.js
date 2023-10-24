$(document).ready(function () {
    $('#toggle-button').click(function () {
        $('.menu-lateral.mobile').toggleClass('open');
        $('.contenido').toggleClass('open');
        $('body').toggleClass('main-menu-visible');
    });
});
