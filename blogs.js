document.addEventListener("DOMContentLoaded", () => {
    // Your original code here...

    let blogFormSubmitFunction = function (event) {
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
            console.log("Form is validated");

            const blogObj = {
                title: blogTitle.value.trim(),
                image: blogImage.value.trim(),
                description: blogDescription.value.trim(),
            };

            let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
            blogs.push(blogObj);

            localStorage.setItem("blogs", JSON.stringify(blogs));
            blogForm.reset(); 
            // Reset the form and close the modal
            modal.style.display = "none";
            console.log("Blog saved:", blogObj);
            loadBlogs();
        }
    };

    blogForm.addEventListener("submit", blogFormSubmitFunction);

    // Your original code here...

    function editBlog(index) {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        const blog = blogs[index];

        document.getElementById("blogTitle").value = blog.title;
        document.getElementById("blogImage").value = blog.image;
        document.getElementById("blogDescription").value = blog.description;

        modal.style.display = "block";
        document.body.style.overflow = "hidden";

        blogForm.removeEventListener("submit", blogFormSubmitFunction);
        blogFormSubmitFunction = function(event) {
            event.preventDefault();
            blog.title = document.getElementById("blogTitle").value.trim();
            blog.image = document.getElementById("blogImage").value.trim();
            blog.description = document.getElementById("blogDescription").value.trim();

            blogs[index] = blog;
            localStorage.setItem("blogs", JSON.stringify(blogs));
            // Reset the form and close the modal
            blogForm.reset();
            modal.style.display = "none";
            document.body.style.overflow = "auto";   
            loadBlogs();
        };
        blogForm.addEventListener("submit", blogFormSubmitFunction);
    }

    // Your original code here...
});