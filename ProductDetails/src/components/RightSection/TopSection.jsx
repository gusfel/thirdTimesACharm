/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {
  Reviews, Category, Name, OriginalPrice,
} from '../../elements/RightSection/TopSection.element.jsx';

// eslint-disable-next-line react/prop-types
const TopSection = ({ product, styles, selectedStyleName }) => {
  const [rating, setRating] = useState('');

  useEffect(() => {
    const id = 14932;
    axios.get(`/reviews/${id}`)
      .then((response) => {
        const rate = response.data;
        setRating(rate);
      })
      .catch((err) => console.log(err));
  }, []);

  let salePrice = 0;
  let originalPrice = product.default_price;
  const saleProductResult = styles.filter(
    (style) => (style.name === selectedStyleName) && style.sale_price
  );
  if (saleProductResult && (saleProductResult[0] !== undefined)) {
    salePrice = saleProductResult[0].sale_price;
    originalPrice = saleProductResult[0].original_price;
  }

  return (
    <div className="top_section">
      {
        Number(rating) > 0 && (
          <Reviews>
            <StarRatings
              rating={Number(rating)}
              starRatedColor="RGB(253, 204, 13)"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
          </Reviews>
        )
      }

      <Category>{product.category}</Category>
      <Name>{product.name}</Name>
      <OriginalPrice checkSale={salePrice !== 0} salePrice={salePrice}>
        $
        {originalPrice}
      </OriginalPrice>
    </div>
  );
};

export default TopSection;
