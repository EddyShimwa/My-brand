
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("blogModal");
    const btn = document.getElementById("createBlog");
    const closeBtn = document.getElementById("closeModal");
    const blogList = document.querySelector('.blog-list-container')  
    const viewBlogs = document.getElementById("viewBlogs");

    blogList.style.display = "none";

    viewBlogs.onclick = () => {
        if (blogList.style.display === "none") {
            blogList.style.display = "block";
        } else {
            blogList.style.display = "none";
        }
    }
    btn.onclick = () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
        console.log("close button clicked")
        document.body.style.overflow = "auto";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    };
});

