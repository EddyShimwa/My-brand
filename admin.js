document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("blogModal");
    const btn = document.getElementById("createBlog");
    const closeBtn = document.getElementById("closeModal");
    const viewBlogs = document.getElementById("viewBlogs");
    const blogList = document.querySelector('.blog-list-container');
    const arrowIcon = document.getElementById('arrowIcon');
   

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
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
        console.log("close button clicked")
        document.body.style.overflow = "auto";
    };
    
    //Form for adding a new blog & validation
    const blogForm = document.getElementById("blogForm");

  blogForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let formIsValid = true;

    // get Input fields
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

    // Validate all inputs
    validateInput(blogTitle);
    validateInput(blogImage);
    validateInput(blogDescription);

    if (formIsValid) {
      console.log("Form is validdated");

      const blogObj = {
        title: blogTitle.value.trim(),
        image: blogImage.value.trim(),
        description: blogDescription.value.trim(),
      };

      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.push(blogObj);

      localStorage.setItem("blogs", JSON.stringify(blogs));
      blogForm.reset();
      console.log("Blog saved:", blogObj);
        loadBlogs();
    }
  });

    //loading blogs
     const loadBlogs = () => {
        const blogList = document.querySelector('.blog-list');
        blogList.innerHTML = ''; 
        const blogsCount = document.getElementById('blogs-count');
        
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
       
        blogsCount.textContent = blogs.length;
        blogs.forEach((blog, index) => {
            const blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';
            blogEntry.innerHTML = `
                <span class="blog-title">${blog.title}</span>
                <div class="blog-actions">
                    <button onclick="editBlog(${index})"><i class="fas fa-edit"></i></button>
                    <button onclick="deleteBlog(${index})"><i class="fas fa-trash"></i></button>
                </div>
            `;
            blogList.appendChild(blogEntry);
        });
    }
    


    loadBlogs();

});

module.exports = { loadBlogs }

