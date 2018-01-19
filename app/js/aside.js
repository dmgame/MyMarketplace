let asideBtn =$('.mobile-aside-toggle');
let main = $('#all-items-page');
let overlay =$('.overlay');

asideBtn.on('click', function(e) {
    main.toggleClass('show-aside');
});

overlay.on('click', function(e) {
    main.toggleClass('show-aside');
});
