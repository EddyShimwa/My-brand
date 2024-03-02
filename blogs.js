
// document.addEventListener("DOMContentLoaded", function () {
//   const blogForm = document.getElementById("blogForm");

//   blogForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let formIsValid = true;
//     const blogTitle = document.getElementById("blogTitle");
//     const blogImage = document.getElementById("blogImage");
//     const blogDescription = document.getElementById("blogDescription");

//     const validateInput = (input) => {
//       if (!input.value.trim()) {
//         input.classList.add("input-error");
//         formIsValid = false;
//       } else {
//         input.classList.remove("input-error");
//       }
//     };

//     // Validate all inputs
//     validateInput(blogTitle);
//     validateInput(blogImage);
//     validateInput(blogDescription);

//     if (formIsValid) {
//       console.log("Form is validdated");

//       const blogObj = {
//         title: blogTitle.value.trim(),
//         image: blogImage.value.trim(),
//         description: blogDescription.value.trim(),
//       };

//       let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//       blogs.push(blogObj);

//       localStorage.setItem("blogs", JSON.stringify(blogs));
//       blogForm.reset();
//       console.log("Blog saved:", blogObj);
//     }
//   });

// })
