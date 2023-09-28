import React from "react";
import "./itemStyles.css";

// React Component to display individual item
const Item = ({ _id, brand }) => (
  <div className="item-container">
    <div>
      <span className="item-label">ID:</span>
      {id}
    </div>
    <div>
      <span className="item-label">Brand:</span>
      {brand}
    </div>
  </div>
);

export default Item;
