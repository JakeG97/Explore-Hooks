import React, {useState, useEffect} from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectProduct, setSelectProduct] = useState();

  useEffect(() => {
    // console.log(`selectProduct CHANGED TO`, selectProduct);
    if (selectProduct)
      setSideOpen(true);
  }, [selectProduct]);

  // Deselect product when side panel is closed
  useEffect(() => {
    // console.log(`sideOpen CHANGED TO`, sideOpen);
    if (!sideOpen)
      setSelectProduct();
  }, [sideOpen]);
  
  console.log('anything')
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectProduct?.id===item.id}
              onClick={() => setSelectProduct(item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectProduct}/>
      </div>
    </div>
  );
}

export default ProductView;