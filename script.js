document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('main-nav');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.getElementById('nav-container');
    const contentSections = document.querySelectorAll('#content section');
  
    // Create dynamic navigation items
    contentSections.forEach((section, index) => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item';
      navItem.innerText = section.querySelector('h2').innerText;
      navItem.dataset.index = index;
      navContainer.appendChild(navItem);
    });
  
    // Add click event listener to scroll to corresponding section
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const index = item.dataset.index;
        contentSections[index].scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Add fade-in animation to navigation items
    navContainer.style.opacity = '0';
    setTimeout(() => {
      navContainer.style.opacity = '1';
      navContainer.style.transition = 'opacity 0.5s ease-in-out';
    }, 500);
  });
    