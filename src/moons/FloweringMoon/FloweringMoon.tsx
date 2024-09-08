import { importAllImagesInFolder } from "../importAllImagesInFolder";

// Importing all images in the 'assets/images' folder
const images: any[] = importAllImagesInFolder(
  require.context("./", false, /\.(png|jpe?g)$/)
);

export const FloweringMoon = () => {
  return (
    <>
      <div className="map-image map-clover" />{" "}
      <div>May 6 2023, 5pm - Sundown</div>
      <a
        href="https://goo.gl/maps/mwJgA6HgPR8tcEQX7"
        target="_blank"
        rel="noreferrer"
      ></a>
      <div
        className="gallery"
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image as string}
            alt={"pic"}
            style={{ maxWidth: "100%" }}
          />
        ))}
      </div>
      <br />
      <div className="map-image map-1" />
      <div className="map-image map-2" />
      <div className="map-image map-3" />
      <div className="map-image map-4" />
    </>
  );
};
