document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blog-modal').style.display = 'none';
    fetch('https://t2nvtah56tmuyxqoteghuq6wlm0xrvfj.lambda-url.us-east-1.on.aws')
        .then(response => response.json())
        .then(data => displayNews(data))
        .catch(error => console.error('Error fetching news:', error));
});

function displayNews(newsItems) {
    const container = document.getElementById('posts-container');
    newsItems.forEach(item => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <h3>${item.Title}</h3>
            <p>${item.Summary}</p>
            <a href="${item.Link}" target="_blank">Read more</a>
        `;
        
        // Add click event to open the modal with the clicked news post
        newsElement.addEventListener('click', () => openModal(item));

        container.appendChild(newsElement);
    });
}

// Function to open the modal and display the clicked news item
function openModal(item) {
    document.getElementById('modal-title').innerText = item.Title;
    document.getElementById('content').innerText = item.Summary;
    document.getElementById('modal-link').href = item.Link;
    document.getElementById('blog-modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('blog-modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("blog-modal");
    const closeButton = document.querySelector(".close");

    // Close when clicking the close button
    closeButton.addEventListener("click", closeModal);

    // Close when clicking outside the modal content
    modal.addEventListener("click", function (event) {
        if (!event.target.closest(".modal-content")) {
            closeModal();
        }
    });
});
