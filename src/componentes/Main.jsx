import React, { useEffect, useState } from "react";

export default function Main() {
  const [imageUrl, setImageUrl] = useState([]);
  async function fetData() {
    try {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=nature&per_page=40",
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setImageUrl(data.photos);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetData();
  }, []);
  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center w-full">
      <h1
        style={{ fontFamily: `"Lobster Two", sans-serif` }}
        className="text-2xl md:text-3xl lg:text-4xl flex justify-center items-center w-full "
      >
        Selecction Pictures
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 object-cover gap-4 rounded-[10px]">
        {imageUrl.map((photo) => (
          <img
            className="h-[148px] w-[235px] object-cover lg:hover:scale-95 transition-transform duration-500 rounded-[10px]"
            key={photo.id}
            src={photo.src.original}
            alt={photo.alt}
          />
        ))}
      </div>
    </div>
  );
}
