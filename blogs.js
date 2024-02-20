document.addEventListener('DOMContentLoaded', function() {
  const blogForm = document.getElementById('blog-form');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const blogsContainer = document.getElementById('blogs-container');
  let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  function renderBlogs() {
    blogsContainer.innerHTML = '';
    blogs.forEach(blog => {
      const blogElement = document.createElement('div');
      blogElement.classList.add('blog-item');
      blogElement.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
        <button class="edit-button" data-id="${blog.id}">Edit</button>
        <button class="delete-button" data-id="${blog.id}">Delete</button>
      `;
      blogsContainer.appendChild(blogElement);
    });
  }

  function addBlog(event) {
    event.preventDefault();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    if (title && content) {
      const blogId = parseInt(document.getElementById('blog-id').value);
      if (blogId) {
        const existingBlogIndex = blogs.findIndex(blog => blog.id === blogId);
        if (existingBlogIndex !== -1) {
          blogs[existingBlogIndex] = { id: blogId, title, content };
        }
      } else {
        const newBlogId = blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 1;
        blogs.push({ id: newBlogId, title, content });
      }
      localStorage.setItem('blogs', JSON.stringify(blogs));
      blogForm.reset();
      document.getElementById('blog-id').value = '';
      renderBlogs();
    }
  }

  function deleteBlog(event) {
    const blogId = parseInt(event.target.dataset.id);
    const confirmed = confirm('Are you sure you want to delete this blog?');
    if (confirmed) {
      blogs = blogs.filter(blog => blog.id !== blogId);
      localStorage.setItem('blogs', JSON.stringify(blogs));
      renderBlogs();
    }
  }

  function editBlog(event) {
    const blogId = parseInt(event.target.dataset.id);
    const blogToEdit = blogs.find(blog => blog.id === blogId);
    if (blogToEdit) {
      titleInput.value = blogToEdit.title;
      contentInput.value = blogToEdit.content;
      document.getElementById('blog-id').value = blogToEdit.id;
    }
  }

  blogForm.addEventListener('submit', addBlog);
  blogsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      deleteBlog(event);
    } else if (event.target.classList.contains('edit-button')) {
      editBlog(event);
    }
  });

  renderBlogs();
});