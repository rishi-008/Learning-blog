const loadMorePostsBtn = document.querySelector('#load-more-blogs-btn');


loadMorePostsBtn.addEventListener('click', () => {
    console.log("Button clicked");
    for (let blogNum = 4; blogNum < 8; blogNum++) {
        document.querySelector(`.small-img-blog-holder-${blogNum}`).classList.toggle('makeBlogVisible');
    }
});