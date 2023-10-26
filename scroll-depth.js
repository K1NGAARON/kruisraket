$(document).scroll(function(e){
    let scrollAmount = $(window).scrollTop();
    let documentHeight = $(document).height();

    let scrollPercent = (scrollAmount / documentHeight) * 100;
    console.log(scrollPercent);
});