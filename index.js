const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const crossIcon = document.getElementById('cross-icon');
const allNavLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  mobileNav.classList.toggle('df');
}

hamburger.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleNav);
});

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-list span');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var sectionId = this.getAttribute('data-section');
      var section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

const textToType = "I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.";

const typingElement = document.getElementById('typing-animation');

function typeWriter(text, index) {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 10); 
  }
}

typeWriter(textToType, 0);

window.onload = function() {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blogsContainer = document.querySelector('.blogs');

  blogs.forEach(blog => {
      const blogItem = document.createElement('div');
      blogItem.classList.add('blog-item');

      const blogImage = document.createElement('img');
      blogImage.src = blog.image;
      blogImage.alt = 'Blog Image';
      blogImage.id = 'blog-Image';

      const blogTitle = document.createElement('h3');
      blogTitle.classList.add('blog-title');
      blogTitle.textContent = blog.title;

      const blogDescription = document.createElement('p');
      blogDescription.classList.add('blog-description');
      blogDescription.textContent = blog.description;

      const blogActions = document.createElement('div');
      blogActions.classList.add('blog-actions');

      const commentButton = document.createElement('span');
      commentButton.classList.add('comment-button');
      commentButton.innerHTML = '<i class="fas fa-comment"> 5</i>';

      const likeButton = document.createElement('span');
      likeButton.classList.add('like-button');
      likeButton.innerHTML = '<i class="fas fa-heart"> 23</i>';

      blogActions.appendChild(commentButton);
      blogActions.appendChild(likeButton);

      const blogLink = document.createElement('a');
      blogLink.href = 'https://medium.com/@shimwaprayeddy';
      blogLink.classList.add('blog-link');
      blogLink.textContent = 'Read More';

      blogItem.appendChild(blogImage);
      blogItem.appendChild(blogTitle);
      blogItem.appendChild(blogDescription);
      blogItem.appendChild(blogActions);
      blogItem.appendChild(blogLink);

      blogsContainer.appendChild(blogItem);
  });
}


