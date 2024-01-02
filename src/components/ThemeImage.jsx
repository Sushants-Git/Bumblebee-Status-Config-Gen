import { useState } from "react";

import default_image from "./assets_themes/default.webp";
import dracula_powerline_image from "./assets_themes/dracula-powerline.webp";
import greyish_powerline_image from "./assets_themes/greyish-powerline.webp";
import gruvbox_light_image from "./assets_themes/gruvbox-light.webp";
import gruvbox_powerline_light_image from "./assets_themes/gruvbox-powerline-light.webp";
import gruvbox_powerline_image from "./assets_themes/gruvbox-powerline.webp";
import gruvbox_image from "./assets_themes/gruvbox.webp";
import iceberg_contrast_image from "./assets_themes/iceberg-contrast.webp";
import iceberg_dark_powerline_image from "./assets_themes/iceberg-dark-powerline.webp";
import iceberg_powerline_image from "./assets_themes/iceberg-powerline.webp";
import iceberg_rainbow_image from "./assets_themes/iceberg-rainbow.webp";
import iceberg_image from "./assets_themes/iceberg.webp";
import moonlight_powerline_image from "./assets_themes/moonlight-powerline.webp";
import night_powerline_image from "./assets_themes/night-powerline.webp";
import nord_powerline_image from "./assets_themes/nord-powerline.webp";
import onedark_powerline_image from "./assets_themes/onedark-powerline.webp";
import powerline_image from "./assets_themes/powerline.webp";
import solarized_powerline_image from "./assets_themes/solarized-powerline.webp";
import solarized_image from "./assets_themes/solarized.webp";

export default function ({ theme }) {
  const ThemeImages = [
    { name: "default_image", value: default_image },
    { name: "dracula_powerline_image", value: dracula_powerline_image },
    { name: "greyish_powerline_image", value: greyish_powerline_image },
    { name: "gruvbox_light_image", value: gruvbox_light_image },
    {
      name: "gruvbox_powerline_light_image",
      value: gruvbox_powerline_light_image,
    },
    { name: "gruvbox_powerline_image", value: gruvbox_powerline_image },
    { name: "gruvbox_image", value: gruvbox_image },
    { name: "iceberg_contrast_image", value: iceberg_contrast_image },
    {
      name: "iceberg_dark_powerline_image",
      value: iceberg_dark_powerline_image,
    },
    { name: "iceberg_powerline_image", value: iceberg_powerline_image },
    { name: "iceberg_rainbow_image", value: iceberg_rainbow_image },
    { name: "iceberg_image", value: iceberg_image },
    { name: "moonlight_powerline_image", value: moonlight_powerline_image },
    { name: "night_powerline_image", value: night_powerline_image },
    { name: "nord_powerline_image", value: nord_powerline_image },
    { name: "onedark_powerline_image", value: onedark_powerline_image },
    { name: "powerline_image", value: powerline_image },
    { name: "solarized_powerline_image", value: solarized_powerline_image },
    { name: "solarized_image", value: solarized_image },
  ];

  let imageSrc = "";
  let tempTheme = theme.split("");

  for (let i = 0; i < tempTheme.length; i++) {
    if (tempTheme[i] === "-") {
      tempTheme[i] = "_";
    }
  }

  tempTheme = tempTheme.join("");

  tempTheme += "_image";

  ThemeImages.forEach((image) => {
    if (image.name === tempTheme) {
      imageSrc = image.value;
    }
  });

  return (
    <>
      {theme !== "<theme>" ? (
        <div className="theme-image">
          <img src={imageSrc?.src} alt={theme} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

// Fetching Images please Wait
