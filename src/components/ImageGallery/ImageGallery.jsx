import React from "react";
import "./ImageGallery.css";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export const ImageGallery = ({ imgArr, onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {imgArr.map((item) => (
        <ImageGalleryItem
          key={item.id}
          url={item.webformatURL}
          modalUrl={item.largeImageURL}
          onImgClick={onImgClick}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
