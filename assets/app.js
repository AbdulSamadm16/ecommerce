
// Minimal demo JS for toast feedback
document.addEventListener('click', function(e) {
  if (e.target.matches('.btn-primary') && e.target.textContent.includes('Add')) {
    const toast = document.createElement('div');
    toast.className = 'position-fixed top-0 end-0 p-3';
    toast.style.zIndex = 1080;
    toast.innerHTML = `<div class="toast align-items-center show" role="alert"><div class="d-flex"><div class="toast-body">Added to cart!</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button></div></div>`;
    document.body.appendChild(toast);
    setTimeout(()=> toast.remove(), 1800);
  }
}, false);
