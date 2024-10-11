
       // Toggle mobile menu
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Toggle submenus
    const subMenus = document.querySelectorAll('#mobile-menu li.relative > a');
    subMenus.forEach(subMenu => {
        subMenu.addEventListener('click', (e) => {
            e.preventDefault();
            const nextSubMenu = subMenu.nextElementSibling;
            if (nextSubMenu) {
                nextSubMenu.classList.toggle('hidden');
            }
        });
    });
  