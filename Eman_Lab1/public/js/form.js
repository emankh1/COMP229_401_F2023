$(document).ready(function () {

    $('.form').on('submit', function (event) {
        event.preventDefault();
        this.reset();
        console.log("submitted form ");

    });
});