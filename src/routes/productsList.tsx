import { useEffect } from "react";
import useProductsListStore from "../store/productsListStore";

const ProductList = () => {
  const productsList = useProductsListStore((state) => state.products);
  const updateProductsList = useProductsListStore((state) => state.update);

  useEffect(() => {
    updateProductsList();
  }, []);

  const data = () => {
    let result = [<></>];

    if (productsList[0].id != null && productsList[0].id != undefined) {
      result = productsList.map((product) => (
        <div className="col">
          <div className="card h-100">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">{product.price}$</small>
            </div>
          </div>
        </div>
      ));
    }

    return result;
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">{data()}</div>
    </>
  );
};

export default ProductList;
