// Toggle FAQ answers
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('span');
  
  answer.classList.toggle('hidden');
  icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
}

// Open demo modal
function openDemo() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-slate-900 p-8 rounded-2xl max-w-2xl w-full mx-4">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-bold">Platform Demo</h3>
        <button onclick="this.closest('div').parentElement.remove()" class="text-2xl text-slate-400 hover:text-white">×</button>
      </div>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p class="text-slate-300 mt-6">This is a demonstration of our trading platform interface. You'll have full access once you create an account.</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    firstName: this.querySelector('input[placeholder="First Name"]').value,
    lastName: this.querySelector('input[placeholder="Last Name"]').value,
    email: this.querySelector('input[placeholder="Email Address"]').value,
    phone: this.querySelector('input[placeholder="Phone Number"]').value,
    password: this.querySelector('input[placeholder="Password"]').value,
    timestamp: new Date().toISOString()
  };
  
  // Save to localStorage
  localStorage.setItem('userSignup', JSON.stringify(formData));
  
  // Show success message
  const successMsg = document.createElement('div');
  successMsg.className = 'fixed top-4 right-4 bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
  successMsg.textContent = '✓ Account created successfully! Redirecting...';
  document.body.appendChild(successMsg);
  
  // Reset form
  this.reset();
  
  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 2000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#signup') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu?.classList.toggle('hidden');
  });
}
