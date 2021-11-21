const favorite = document.querySelectorAll('.gallery-item__favorite');

favorite.forEach(favorite => {
	favorite.addEventListener('click', function(e) {
		favorite.classList.toggle('favorite--active');
	});
});

// ===================

const burger = document.querySelector('.burger'),
		close = document.querySelector('.menu-open__cross'),
		menu = document.querySelector('.menu-open');

	burger.addEventListener('click', () => {
	menu.classList.add('menu-open__active');
});	

close.addEventListener('click', () => {
	menu.classList.remove('menu-open__active');
});

// ===================

const sidebarBurger = document.querySelector('.sidebar__burger'),
		sidebar = document.querySelector('.sidebar');

		sidebarBurger.addEventListener('click', () => {
			sidebar.classList.toggle("active");
});



