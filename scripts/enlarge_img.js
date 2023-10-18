function toggleImgSize(imgId) {
    let img = document.getElementById(imgId);

    if (img) {
        if (img.classList.contains('enlarged')) {

            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
            img.classList.remove('enlarged');
        } else {
            img.style.transform = "scale(1.5)";
            img.style.transition = "transform 0.25s ease";
            img.classList.add('enlarged');
        }
    }
}
