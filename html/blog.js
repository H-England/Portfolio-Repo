document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blog-modal').style.display = 'none';
    fetchBlogPosts();

    function fetchBlogPosts() {
        const apiEndpoint = 'https://zwrzhf66fkgmjlqy6jg47ujgti0nnkqc.lambda-url.us-east-1.on.aws';
        fetch(apiEndpoint)
            .then(response => response.text())
            .then(htmlContent => {
                const posts = htmlContent.split("\n\n");
                let postHTML = '';

                posts.forEach((post, index) => {
                    const title = `Blog Post #${index + 1}`;
                    postHTML += `
                        <div class="news-item" onclick="openModal('${title}', \`${post.replace(/'/g, "\\'")}\`)">
                            <h3>${title}</h3>
                            <p>${post.substring(0, 100)}</p>
                        </div>
                    `;
                });

                document.getElementById('posts-container').innerHTML = postHTML;
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
                document.getElementById('posts-container').innerHTML = '<p>Failed to load blog posts.</p>';
            });
    }
});

// Function to open the modal and display blog post content
function openModal(title, content) {
    document.getElementById('modal-title').innerHTML = title;
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('blog-modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('blog-modal').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("blog-modal");
    const modalContent = document.querySelector(".modal-content");
    const closeButton = document.querySelector(".close");

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Close when clicking the close button
    closeButton.addEventListener("click", closeModal);

    // Close when clicking outside the modal content
    modal.addEventListener("click", function (event) {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });
});