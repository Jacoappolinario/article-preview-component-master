// Selecting DOM elements
const socialShareButtonElement = document.querySelector(".social-share-button");
const footerBgElement = document.querySelector(".preview-footer-bg");
const authorDetailsElement = document.querySelector(
  ".author-details-container"
);
const socialShareContainerElement = document.querySelector(
  ".social-share-container"
);

// Function to switch the display of elements
function toggleSocialShare() {
  socialShareButtonElement.classList.toggle("active");
  footerBgElement.classList.toggle("active");
  authorDetailsElement.classList.toggle("disabled");
  socialShareContainerElement.classList.toggle("active");
}

// Check that the necessary elements are present in the DOM before adding the click event to the social sharing button.
if (
  socialShareButtonElement &&
  footerBgElement &&
  authorDetailsElement &&
  socialShareContainerElement
) {
  socialShareButtonElement.addEventListener("click", toggleSocialShare);
}
