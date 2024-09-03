const navbarItems = document.querySelectorAll('.navbar-item');


navbarItems.forEach(item => {
    item.addEventListener('click', function() {
        navbarItems.forEach(navItem => navItem.classList.remove('active'));

        this.classList.add('active');
    });
});