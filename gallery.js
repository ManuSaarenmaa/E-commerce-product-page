const mainImages = document.querySelectorAll(".default .main-img img");
const thumbNails = document.querySelectorAll(".default .thumbnails div")

const changeImage = (index, mainImages, thumbNails) => {
    mainImages.forEach((img) => {
        img.classList.remove('active');
    });

    thumbNails.forEach((thumb) => {
        thumb.classList.remove('active');
    });

    mainImages[index].classList.add('active');
    thumbNails[index].classList.add('active');
};

thumbNails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, mainImages, thumbNails);
    });
});


