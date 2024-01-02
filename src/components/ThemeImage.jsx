import { useState } from "react";

export default function ({ theme }) {
  const [fetchedImages, setFetchedImages] = useState(false);
  const [themeImages, setThemeImages] = useState([]);

  const importImages = async () => {
    const imagePaths = import.meta.glob(
      "../assets_themes/*.{png,jpg,jpeg,svg,webp}"
    );
    const images = {};

    for (const path in imagePaths) {
      const imageModule = await imagePaths[path]();
      images[path] = imageModule.default || imageModule;
    }

    const imageArray = Object.entries(images).map((design) => {
      return {
        imagePath: design,
      };
    });

    // console.log(imageArray);
    setFetchedImages(true);
    setThemeImages((prevValue) => imageArray);

    // return imageArray;
  };

  if (!fetchedImages) {
    importImages();
  }

  function getSrc() {
    // console.log(themeImages);
    const imageSrc = themeImages.find(
      (image) => image.imagePath[0] === `../assets_themes/${theme}.webp`
    );
    // console.log(theme);
    // console.log(imageSrc);
    // console.log(themeImages);
    return imageSrc;
  }

  let imageSrc = "";
  if (themeImages.length !== 0) {
    imageSrc = getSrc()?.imagePath[1].src;
  }

  return (
    <>
      {theme !== "<theme>" ? (
        <div className="theme-image">
          <img src={imageSrc} alt={theme} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
