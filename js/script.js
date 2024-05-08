const footer = document.querySelector(".preview-footer");
const author = document.querySelector(".author-details-container");
const socialShareContainer = document.querySelector(".social-share-container");
const socialShareButton = document.querySelector(".social-share-button");

function activeSocialShareContainer() {
  footer.classList.toggle("active");
  socialShareButton.classList.toggle("active");
  author.classList.toggle("disabled");
  socialShareContainer.classList.toggle("active");
}

socialShareButton.addEventListener("click", activeSocialShareContainer);
