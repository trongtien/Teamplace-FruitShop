let settingNav = document.querySelector(".setting-nav");
let navItem = document.querySelectorAll(".nav-item, a[data-toggle='navitem']");
let navSetting = function(){
	settingNav.classList.toggle("active");
}
for (let i = 0; i < navItem.length; i++) {
	navItem[i].addEventListener('click', function (e) {
		let navbarDropdow = this.querySelector('.nav-bar-Dropdow');
		navbarDropdow.classList.toggle('active');
	});
}
