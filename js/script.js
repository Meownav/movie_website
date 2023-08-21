document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "assets/background.png",
    "assets/background.png",
    "assets/background.png",
  ];

  const imageContainer = document.getElementById("image-container");

  images.forEach((imageUrl) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.classList.add("interactive-image");

    imgElement.addEventListener("mouseover", () => {
      const randomTilt = Math.random() * 2;
      imgElement.style.transform = `rotate(${randomTilt}deg)`;
    });

    imgElement.addEventListener("mouseout", () => {
      imgElement.style.transform = "rotate(0deg)";
    });

    imageContainer.appendChild(imgElement);
  });
});
