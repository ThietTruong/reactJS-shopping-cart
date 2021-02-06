import React from "react";

function Filter({ products, size, sort, filterProduct, sortProduct }) {
  console.log("orrrrrrrrrr", size);
  return (
    <>
      <div className="filter">
        <div className="filter-result">{products.length} Producs</div>
        <div className="filter-sort">
          Order
          <select value={sort} onChange={sortProduct}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select value={size} onChange={filterProduct}>
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
