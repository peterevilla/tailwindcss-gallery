import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://pixabay.com/api/?key=16078376-69de63e0e56115c681d66e383&q=${query}&image_type=photo`
      )
      .then((response) => {
        console.log(response.data);

        setIsLoading(false);

        setImages(response.data.hits);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="container mx-auto">
      <Search handleSubmit={(text) => setQuery(text)} />
      {!isLoading && images.length === 0 && <h1 className='text-3xl text-center'>No images found</h1>}
      {isLoading ? (
        <h1 className="text-3xl text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((item) => (
            <ImageCard key={item.id} images={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
