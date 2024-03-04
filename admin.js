document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("blogModal");
  const btn = document.getElementById("createBlog");
  const closeBtn = document.getElementById("closeModal");
  const viewBlogs = document.getElementById("viewBlogs");
  const blogList = document.querySelector('.blog-list-container');
  const arrowIcon = document.getElementById('arrowIcon');
  const blogForm = document.getElementById("blogForm");

  blogList.style.display = "none";

  viewBlogs.onclick = () => {
      if (blogList.style.display === "none") {
          blogList.style.display = "block";
          arrowIcon.classList.remove('fa-angle-down');
          arrowIcon.classList.add('fa-angle-up');
      } else {
          blogList.style.display = "none";
          arrowIcon.classList.remove('fa-angle-up');
          arrowIcon.classList.add('fa-angle-down');
      }
  };

  btn.onclick = () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      blogForm.removeEventListener("submit", editBlogSubmitFunction);
      blogForm.addEventListener("submit", addBlogSubmitFunction);
  };

  closeBtn.onclick = () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  };

  let addBlogSubmitFunction = function (event) {
      event.preventDefault();
      let formIsValid = true;

      const blogTitle = document.getElementById("blogTitle");
      const blogImage = document.getElementById("blogImage");
      const blogDescription = document.getElementById("blogDescription");

      const validateInput = (input) => {
          if (!input.value.trim()) {
              input.classList.add("input-error");
              formIsValid = false;
          } else {
              input.classList.remove("input-error");
          }
      };

      validateInput(blogTitle);
      validateInput(blogImage);
      validateInput(blogDescription);

      if (formIsValid) {
          const blogObj = {
              title: blogTitle.value.trim(),
              image: blogImage.value.trim(),
              description: blogDescription.value.trim(),
          };

          let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
          blogs.push(blogObj);

          localStorage.setItem("blogs", JSON.stringify(blogs));
          blogForm.reset(); 
          modal.style.display = "none";
          loadBlogs();
      }
  };

  let editBlogSubmitFunction = function(event) {
      event.preventDefault();
      const updatedBlog = {
          title: document.getElementById("blogTitle").value.trim(),
          image: document.getElementById("blogImage").value.trim(),
          description: document.getElementById("blogDescription").value.trim(),
      };

      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs[editBlogIndex] = updatedBlog;
      localStorage.setItem("blogs", JSON.stringify(blogs));
      blogForm.reset();
      modal.style.display = "none";
      document.body.style.overflow = "auto";   
      loadBlogs();
  };

  blogForm.addEventListener("submit", addBlogSubmitFunction);

  let editBlogIndex;

  function editBlog(index) {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      const blog = blogs[index];

      document.getElementById("blogTitle").value = blog.title;
      document.getElementById("blogImage").value = blog.image;
      document.getElementById("blogDescription").value = blog.description;

      modal.style.display = "block";
      document.body.style.overflow = "hidden";

      editBlogIndex = index;

      blogForm.removeEventListener("submit", addBlogSubmitFunction);
      blogForm.addEventListener("submit", editBlogSubmitFunction);
  }

  const loadBlogs = () => {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      const blogList = document.querySelector('.blog-list');
      blogList.innerHTML = ''; 
      const blogsCount = document.getElementById('blogs-count');
    
      blogs.length === 0 ? blogsCount.innerText = '0' : blogsCount.innerText = blogs.length;
    
      blogs.forEach((blog, index) => {
          const blogEntry = document.createElement('div');
          blogEntry.className = 'blog-entry';
          blogEntry.innerHTML = `
              <span class="blog-title">${blog.title}</span>
              <div class="blog-actions">
                  <button class="edit-blog-btn"><i class="fas fa-edit"></i></button>
                  <button class="delete-blog-btn"><i class="fas fa-trash"></i></button>
              </div>
          `;
    
          blogList.appendChild(blogEntry);
    
          const editBtn = blogEntry.querySelector('.edit-blog-btn');
          const deleteBtn = blogEntry.querySelector('.delete-blog-btn');
    
          editBtn.addEventListener('click', () => editBlog(index));
          deleteBtn.addEventListener('click', () => deleteBlog(index));
      });
    };
  function deleteBlog(index) {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.splice(index, 1); 

      localStorage.setItem("blogs", JSON.stringify(blogs));
      loadBlogs();
  }

  loadBlogs();
});