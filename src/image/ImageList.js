import React from "react";
import "./imagelist.css";
import Image from "./Image";

const ImageList = ({ images }) => {
  const preparedImageList = images.map((image) => {
    return <Image key={image.id} image={image} />;
  });
  return (
    <div className="image-list-container">
      {preparedImageList}
      {console.log(preparedImageList)}
    </div>
  );
};

export default ImageList;
