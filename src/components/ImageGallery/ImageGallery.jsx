// import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ photos }) {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
