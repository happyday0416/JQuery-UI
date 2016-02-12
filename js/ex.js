$(document).ready(function() {

    //觀察日期
    $('#datepicker').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //選擇按鈕
    $("#type_select").buttonset();
    //滑動條
    $("#slide_dist").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 10,
        slide: function(event, ui) {
            $("#distance").val(ui.value);
        }
    });
    $("#distance").val($("#slide_dist").slider("value"));

    $("#slide_weight").slider({
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function(event, ui) {
            $("#weight").val(ui.value);
        }
    });
    $("#weight").val($("#slide_weight").slider("value"));


    $("#slide_height").slider({
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function(event, ui) {
            $("#height").val(ui.value);
        }
    });
    $("#height").val($("#slide_height").slider("value"));


    function refreshSwatch() {

        var red = $("#red").slider("value");
        var green = $("#green").slider("value");
        var blue = $("#blue").slider("value");
        var rgb = "rgb(" + red + "," + green + "," + blue + ")";

        $("#swatch").css("background-color", rgb);
        $("#red_val").val(red);
        $("#blue_val").val(blue);
        $("#green_val").val(green);
        $("#color_val").val(rgb);
    }
    $("#red , #green ,#blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch

    });
    $("#red").slider("value", 127);
    $("#green").slider("value", 127);
    $("#blue").slider("value", 127);


    $("button:submit").button();
});
