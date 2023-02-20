const testimonialContainer = document.querySelector(".testimonial-container");
const testimonials = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonial = [
  {
    name: "Joseph Poleo",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Mark Whalburg",
    position: "kicking ass",
    photo:
      "https://hips.hearstapps.com/hmg-prod/images/mark-wahlberg-is-sighted-on-the-set-of-pain-and-gain-on-news-photo-142433873-1536758748.jpg?crop=1xw:0.8xh;center,top&resize=640:*",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Jhon Wick",
    position: "kicking more ass",
    photo:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Chev Chelios",
    position: "getting ass kicked",
    photo:
      "https://cdn.mos.cms.futurecdn.net/86e8f716ed7679c7c40498a26ee368c1-320-80.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Rinzler",
    position: "unknown",
    photo: "https://i.ytimg.com/vi/aNapFsNDbZE/maxresdefault.jpg",
    text: "Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program Unknown Program ",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonial[idx];

  testimonials.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonial.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
