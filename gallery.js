document.addEventListener('DOMContentLoaded', () => {
    const mainImages = document.querySelectorAll(".default .main-img img");
    const thumbNails = document.querySelectorAll(".default .thumbnails div");

    const lightBoxMainImages = document.querySelectorAll(".lightbox .main-img > img");
    const lightBoxThumbNails = document.querySelectorAll(".lightbox .thumbnails div");

    const lightbox = document.querySelector('.lightbox');
    const lbClose = document.querySelector('.lb-close'); 
    const nextBtn = document.querySelector('.lb-next');
    const prevBtn = document.querySelector('.lb-prev');

    let currentIndex = 0;

    const changeImage = (index, mainImgs, thumbs) => {
        mainImgs.forEach((img) => img.classList.remove('active'));
        thumbs.forEach((thumb) => thumb.classList.remove('active'));
        mainImgs[index].classList.add('active');
        thumbs[index].classList.add('active');
        currentIndex = index;
    };

    const addThumbnailClickEvent = (thumbs, mainImgs) => {
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                changeImage(index, mainImgs, thumbs);
            });
        });
    };

    addThumbnailClickEvent(thumbNails, mainImages);
    addThumbnailClickEvent(lightBoxThumbNails, lightBoxMainImages);

    mainImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            changeImage(index, lightBoxMainImages, lightBoxThumbNails); 
        });
    });

    lbClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    const addNavigationEvent = (btn, direction) => {
        btn.addEventListener('click', () => {
            let newIndex = currentIndex + direction;
            if (newIndex < 0) {
                newIndex = lightBoxMainImages.length - 1;
            } else if (newIndex >= lightBoxMainImages.length) {
                newIndex = 0;
            }
            changeImage(newIndex, lightBoxMainImages, lightBoxThumbNails);
        });
    };

    addNavigationEvent(prevBtn, -1);
    addNavigationEvent(nextBtn, 1);
});




