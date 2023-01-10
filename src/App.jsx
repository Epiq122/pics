import SearchBar from "./components/SearchBar.jsx";
import searchImages from "./api.js";
import ImageList from "./components/ImageList.jsx";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleFormSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
