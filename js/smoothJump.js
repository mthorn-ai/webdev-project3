document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default link behavior
    const targetId = link.getAttribute('href').substring(1); // Get the ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } 
  });
});