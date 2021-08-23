import React, { useState, useEffect } from "react"
import { SideBySideMagnifier } from "react-image-magnifiers"
import ContentLoader from 'react-content-loader'

const contentLoader = () => (
  <ContentLoader viewBox="0 0 100 100">
    <rect x="0" y="0" width="100%" height="100%" />
  </ContentLoader>
);

const ProductThumb = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (product) {
      setImages([product.img, product.img, product.img])
    }
  }, [product])
  
  return (
    <div className="product-detail__thumb">
      {product ? (
        <>
        <SideBySideMagnifier
          className="product-detail__image"
          imageSrc={images[currentImage]}
          imageAlt="Foods"
          touchActivation="doubleTap"
          alwaysInPlace={true}
          transitionSpeedInPlace={0.2}
        />

        <div className="product-detail__slider">
          {images.map((image, index) => (
            <div key={`${product.id}-${index}`} className="product-detail__slide__wrapper">
              <img
                key={`slide-${index}`}
                className="product-detail__slide"
                style={{
                  opacity: currentImage === index ? "1" : "0.5",
                }}
                src={image}
                alt="food"
                onClick={() => setCurrentImage(index)}
              />
            </div>
          ))}
        </div>
        </>
      ) : (
        contentLoader()
      )}
    </div>
  )
}

export default ProductThumb
