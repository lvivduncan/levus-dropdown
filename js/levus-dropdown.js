
// вставка враппера
$('body').append('<div class="levus-dropdown-wrapper"></div>');

// клік на елементі
$('.levus-dropdown a').on('click', function(e){
    e.preventDefault();
    $(this).next('.levus-dropdown-content').toggleClass('open');
    $('.levus-dropdown-wrapper').toggleClass('open');
});

// клік на враппері
$('.levus-dropdown-wrapper').on('click', function(){
    $('.levus-dropdown-content').removeClass('open');
    $(this).removeClass('open');
});