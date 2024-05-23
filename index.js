const loadMorePostsBtn = document.querySelector('#load-more-posts');


loadMorePostsBtn.addEventListener('click', () => {
    for (let blogNum = 4; blogNum < 8; blogNum++) {
        document.querySelector(`.small-img-blog-holder-${blogNum}`).classList.toggle("makeBlogVisible");
    }
});