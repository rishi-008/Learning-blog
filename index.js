const loadMorePostsBtn = document.querySelector('#load-more-blogs-btn');


loadMorePostsBtn.addEventListener('click', () => {
    console.log("Button clicked");
    for (let blogNum = 4; blogNum < 8; blogNum++) {
        const blogHolder = document.querySelector(`.small-img-blog-holder-${blogNum}`);
        if (blogHolder) {
            console.log("Blog holder found");
            blogHolder.classList.toggle('makeElementVisible');
        }
    }
    loadMorePostsBtn.textContent = "Show Less";
});