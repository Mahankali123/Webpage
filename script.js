function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('main');
    var openMenu = document.getElementById('open-menu');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        main.style.marginLeft = '0';
        openMenu.innerHTML = '☰ Open Menu';
    } else {
        sidebar.style.width = '250px';
        main.style.marginLeft = '250px';
        openMenu.innerHTML = '✕ Close Menu';
    }
}
