  const thumbnails = document.querySelectorAll('.image-selector .images img');

  const mainImage = document.getElementById('main-image');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;

      thumbnails.forEach(t => t.parentElement.classList.remove('active'));
      thumbnail.parentElement.classList.add('active');
    });
  });