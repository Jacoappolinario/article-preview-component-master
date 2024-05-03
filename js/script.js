const shareButton = document.querySelector(".share-button");

function activateShareButtons(event) {
  const shareButton = event.currentTarget;
  const shareButtonsBalloon = document.querySelector(
    ".article-social-share-buttons-balloon"
  );

  const footer = document.querySelector(".article-footer");
  const shareButtonsFooter = document.querySelector(
    ".social-share-buttons-footer"
  );

  const author = document.querySelector(".author-info");

  const display = window.matchMedia("(min-width: 901px)").matches;
  console.log("🚀 ~ activateShareButtons ~ display:", display);

  if (display) {
    if (shareButton.classList.contains("active")) {
      shareButton.classList.remove("active");
      shareButtonsBalloon.classList.remove("active");
    } else {
      shareButton.classList.add("active");
      shareButtonsBalloon.classList.add("active");
    }
  } else {
    if (shareButton.classList.contains("active")) {
      shareButton.classList.remove("active");
      footer.classList.remove("active");
      author.classList.remove("disabled");
      shareButtonsFooter.classList.remove("active");
    } else {
      shareButton.classList.add("active");
      footer.classList.add("active");
      author.classList.add("disabled");
      shareButtonsFooter.classList.add("active");
    }
  }
}

shareButton.addEventListener("click", activateShareButtons);
