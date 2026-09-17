function buildSidebar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');
    sideBar.textContent = 'here is the sidebar that is being built out';

    return sideBar;
}

export { buildSidebar };