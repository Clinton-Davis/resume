$(document).ready(function () {

    $("html").on("click", ".ripple-surface", function (evt) {
        var btn = $(evt.currentTarget);
        var x = evt.pageX - btn.offset().left;
        var y = evt.pageY - btn.offset().top;

        $("<span/>").appendTo(btn).css({
            left: x,
            top: y
        });
    });
});
