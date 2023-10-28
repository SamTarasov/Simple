function togglePhoto() {
    const bigPhoto = document.getElementById("photo");
    const smallPhoto = document.getElementById("small-photo");
    const paper510 = document.getElementById('paper_510');
    
      if (window.innerWidth <=510) {
      paper510.style.display = 'block';
      bigPhoto.style.display = "none";
      smallPhoto.style.display = "none";
    } else if (window.innerWidth <= 768) {
      paper510.style.display = 'none';
      bigPhoto.style.display = "none";
      smallPhoto.style.display = "block";
    } else {
      paper510.style.display = 'none';
      smallPhoto.style.display = "none";
      bigPhoto.style.display = "block";
    }
  }

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  togglePhoto();
  window.addEventListener("resize", togglePhoto);


  // Book

  function book() {
    const bookBigPhoto = document.getElementById("book_big");
    const bookSmallPhoto = document.getElementById("book_small");
    const book510Photo = document.getElementById('book_510');
     
    if (window,innerWidth <= 510) {
      book510Photo.style.display = 'block';
      bookBigPhoto.style.display = "none";
      bookSmallPhoto.style.display = "none";
    } else if (window.innerWidth <= 768) {
      book510Photo.style.display = 'none';
      bookBigPhoto.style.display = "none";
      bookSmallPhoto.style.display = "block";
    } else {
      book510Photo.style.display = 'none';
      bookSmallPhoto.style.display = "none";
      bookBigPhoto.style.display = "block";
    }
  }

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  book();
  window.addEventListener("resize", book);


  // Target

  
  function targetPhoto(bigPhotoId, smallPhotoId) {
    const tarBigPhoto = document.getElementById(bigPhotoId);
    const tarSmallPhoto = document.getElementById(smallPhotoId);
    
    if (window.innerWidth <= 768) {
      tarBigPhoto.style.display = "none";
      tarSmallPhoto.style.display = "block";
    } else {
      tarSmallPhoto.style.display = "none";
      tarBigPhoto.style.display = "block";
    }
  }
  
  // Вызываем функцию для первого изображения
  targetPhoto("target_big_photo_1", "target_small_photo_1");
  
  // Вызываем функцию для второго изображения и так далее
  targetPhoto("target_big_photo_2", "target_small_photo_2");
  targetPhoto("target_big_photo_3", "target_small_photo_3");
  targetPhoto("target_big_photo_4", "target_small_photo_4");
  // ...
  

