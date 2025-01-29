    // JavaScript to handle scroll effect
    const navbar = document.getElementById('nav_styling');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav_styling.classList.add('bg-white');
      } else {
        nav_styling.classList.remove('bg-white');
      }
    });