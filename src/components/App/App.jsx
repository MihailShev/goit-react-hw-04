import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchSearchPhoto } from "../../js/fetch-api";
import { useEffect, useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  async function reqestValue(value) {
    try {
      const results = await fetchSearchPhoto(value);
      setPhotos(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <SearchBar onSubmit={reqestValue} />

      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
