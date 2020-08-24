$(function (){
    $("#fullpage").fullpage({
        navigation: true,
        // navigationPosition: "left",
        scrollingSpeed: 1200,
        afterLoad: function(anchorLink, index){
            alert(index);
        },
    });
})