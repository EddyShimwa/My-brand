const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const crossIcon = document.getElementById("cross-icon");
const allNavLinks = document.querySelectorAll(".nav-link");

function toggleNav() {
  mobileNav.classList.toggle("df");
}

hamburger.addEventListener("click", toggleNav);
crossIcon.addEventListener("click", toggleNav);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", toggleNav);
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-list span");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var sectionId = this.getAttribute("data-section");
      var section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

const textToType =
  "I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.";

const typingElement = document.getElementById("typing-animation");

// 
function typeWriter(text, index) {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 10);
  }
}

typeWriter(textToType, 0);
window.onload = function () {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blogsContainer = document.querySelector(".blogs");

  if (blogs.length === 0) {
    const noBlogsMessage = document.getElementById("no-blogs-message");
    noBlogsMessage.style.display = "block";
  } else {
    blogs.forEach((blog) => {
      const noBlogsMessage = document.getElementById("no-blogs-message");
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.classList.add("fade-in");
      blogItem.style.height = "500px";
      noBlogsMessage.style.display = "none";
      const blogImage = document.createElement("img");
      blogImage.src = blog.image;
      blogImage.alt = "Blog Image";
      blogImage.id = "blog-Image";
      blogImage.style.width = "350px";
      blogImage.style.height = "200px";
      blogImage.style.objectFit = "cover";

      const blogTitle = document.createElement("h3");
      blogTitle.classList.add("blog-title");
      blogTitle.textContent = blog.title;

      const blogDescription = document.createElement("p");
      blogDescription.classList.add("blog-description");
      blogDescription.textContent =
        blog.description.length > 200
          ? blog.description.substring(0, 100) + "..."
          : blog.description;
      blogDescription.style.width = "400px";
      blogDescription.style.wordWrap = "break-word";

      const blogActions = document.createElement("div");
      blogActions.classList.add("blog-actions");

      const commentButton = document.createElement("span");
      commentButton.classList.add("comment-button");
      commentsCounter = 0;

      commentButton.innerHTML = `<i class="fas fa-comment">${commentsCounter} </i>`;
      const likeButton = document.createElement("span");
      likeButton.classList.add("like-button");
      let likesCount = 0;
      let hasLiked = false;
      likeButton.innerHTML = `<i class="fas fa-heart"> ${likesCount} </i>`;
      likeButton.addEventListener("click", () => {
        likeButton.style.color = hasLiked ? "#fff" : "red";
        if (hasLiked) {
          likesCount--;
        } else {
          likesCount++;
        }
        hasLiked = !hasLiked;
        likeButton.classList.add("animate-like");
        likeButton.innerHTML = `<i class="fas fa-heart"> ${likesCount} </i>`;
      });

      blogActions.appendChild(commentButton);
      blogActions.appendChild(likeButton);

      const blogLink = document.createElement("a");
      blogLink.href = "#";
      blogLink.classList.add("blog-link");
      blogLink.textContent = "Read More";

      const modal = document.getElementById("myModal");
      const modalTitle = document.getElementById("modalTitle");
      const modalDescription = document.getElementById("modalDescription");
      const close = document.getElementsByClassName("close")[0];

      blogLink.addEventListener("click", function (event) {
        event.preventDefault();

        modal.style.display = "block";
        modalTitle.textContent = blog.title;
        modalDescription.textContent = blog.description;

        close.onclick = function () {
          modal.style.display = "none";
        };

        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      });

      blogItem.appendChild(blogImage);
      blogItem.appendChild(blogTitle);
      blogItem.appendChild(blogDescription);
      blogItem.appendChild(blogActions);
      blogItem.appendChild(blogLink);

      blogsContainer.appendChild(blogItem);
    });
  }
};
