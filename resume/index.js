// Toggle visibility for sections (example)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Skills Section';
    document.querySelector('.skills').insertBefore(toggleBtn, document.querySelector('.skills').firstChild);
  
    toggleBtn.addEventListener('click', function() {
      const skillsSection = document.querySelector('.skills');
      skillsSection.classList.toggle('hidden');
    });
  });
  