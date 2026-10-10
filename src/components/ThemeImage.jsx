const images = import.meta.glob("./assets_themes/*.webp", {
  eager: true,
  import: "default",
});

const imageByTheme = Object.fromEntries(
  Object.entries(images).map(([path, image]) => [
    path.slice(path.lastIndexOf("/") + 1, -".webp".length),
    image,
  ]),
);

export default function ThemeImage({ theme }) {
  const image = imageByTheme[theme];
  if (!image) return null;

  return (
    <div className="theme-image">
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`Preview of the ${theme} theme`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
