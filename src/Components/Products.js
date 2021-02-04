import React, { useState } from "react";
import formatCurrency from "../utill";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
function Products({ products, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({
    product: null,
  });
  const openModalProduct = (product) => {
    setModalProduct({
      product: product,
    });
  };
  const closeModalProduct = () => {
    setModalProduct({
      product: null,
    });
  };
  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {products.map((product) => {
            return (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={`#${product._id}`}
                    onClick={() => openModalProduct(product)}
                  >
                    <img src={product.image} alt={product.image}></img>
                    <p> {product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => addToCart(product)}
                    >
                      {" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Fade>
      {modalProduct.product && (
        <Modal isOpen={true} onRequestClose={closeModalProduct}>
          <Zoom>
            <button className="close-modal" onClick={closeModalProduct}>
              x
            </button>
            <div className="product-details">
              <img
                src={modalProduct.product.image}
                alt={modalProduct.product.title}
              ></img>
              <div className="product-details-description">
                <p>
                  <strong>{modalProduct.product.title}</strong>
                </p>
                <p>{modalProduct.product.description}</p>
                <p>
                  Avaiable Size
                  {modalProduct.product.availableSizes.map((item) => (
                    <span>
                      <button className="button">{item}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{modalProduct.product.price}</div>
                  <button
                    className="button primary"
                    onClick={() => (
                      addToCart(modalProduct.product), () => closeModalProduct
                    )}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
}

export default Products;
