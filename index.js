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

const blogHolders = document.querySelectorAll('.small-img-blog-holder, .small-img-blog-holder-2, .small-img-blog-holder-3, .small-img-blog-holder-4, .small-img-blog-holder-5, .small-img-blog-holder-6, .small-img-blog-holder-7');

blogHolders.forEach(blogHolder => {
    blogHolder.addEventListener('click', () => {
        window.location.href = 'blogPage.html';
    });
});