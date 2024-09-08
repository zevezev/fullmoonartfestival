export const Gallery = ({ images }: { images: string[] }) => (
  <div
    className="gallery"
    style={{ display: "flex", flexDirection: "column", gap: "12px" }}
  >
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={"pic"}
        style={{ maxWidth: "100%" }}
        loading="lazy"
      />
    ))}
  </div>
);
