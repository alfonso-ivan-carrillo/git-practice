$(document).ready(function(){
    "use strict"


let red = () => {
        $("#red").css("opacity", "1");
        setTimeout(function(){
            $('#red').css("opacity", ".8");
        }, 500);
}
    let green = () => {
        $("#green").css("opacity", "1");
        setTimeout(function(){
            $('#green').css("opacity", ".8");
        }, 500);
    }
    let blue = () => {
        $("#blue").css("opacity", "1");
        setTimeout(function(){
            $('#blue').css("opacity", ".8");
        }, 500);
    }
    let yellow = () => {
        $("#yellow").css("opacity", "1");
        setTimeout(function(){
            $('#yellow').css("opacity", ".8");
        }, 500);
    }

$("#red").mousedown(function(){
    // console.log($("#red").val());
    $(this).css("opacity", "1");
    $(this).mouseup(function(){
        $(this).css("opacity", ".8");
    })
})
    $("#green").mousedown(function(){
        $(this).css("opacity", "1");
        $(this).mouseup(function(){
            $(this).css("opacity", ".8");
        })
    })
    $("#blue").mousedown(function(){
        $(this).css("opacity", "1");
        $(this).mouseup(function(){
            $(this).css("opacity", ".8");
        })
    })
    $("#yellow").mousedown(function(){
        $(this).css("opacity", "1");
        $(this).mouseup(function(){
            $(this).css("opacity", ".8");
        })
    })














});