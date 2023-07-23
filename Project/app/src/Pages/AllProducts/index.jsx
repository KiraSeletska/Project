import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import styles from "./products.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";

export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
  const dispatch = useDispatch();

  const [newData, setNewData] = useState();

  const defButtonText = "Add to cart";
  const actionButtonText = "Product added to cart"
  const [btn, setBtn] = useState(defButtonText);

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
    setBtn(actionButtonText);
    setTimeout(() => setBtn(defButtonText), 1000);
  };

  const onFilterChanged = useCallback(
    (filterObj) => {
      setNewData(ApplyFilter(data || [], filterObj));
    },
    [data]
  );

  return (
    <div className={styles.productsWrapper}>
      <h2>All products</h2>
      <Filter onChange={onFilterChanged} />
      {newData &&
        newData.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
            <Product
              key={el.id}
              image={baseUrl + el.image}
              price={el.price}
              discont_price={el.discont_price}
              title={el.title}
              addToBascetHandler={(e) => addToBascetHandler(e, el)}
              buttonName={btn}
            />
          </NavLink>
        ))}
    </div>
  );
};
