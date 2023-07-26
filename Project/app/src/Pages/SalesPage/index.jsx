import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";

export const SalesPage = () => {
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

  const onFilterChanged = useCallback((filterObj) => {
    setNewData(ApplyFilter(data || [], filterObj))
  }, [data])

  return (
    <section className={styles.wrapper}>
            <h2>Products with sale</h2>
            <Filter onChange={onFilterChanged} hideDiscountFilter/>
    <div className={styles.productsWrapper}>
        {newData &&
          newData.map((el) =>
            el.discont_price ? (
              <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                  key={el.id}
                  discont_price={el.discont_price}
                  price={el.price}
                  title={el.title}
                  image={baseUrl + el.image}
                  addToBascetHandler={(e) => addToBascetHandler(e, el)}
                  buttonName={btn}
                />{" "}
              </NavLink>
            ) : (
              ""
            )
          )}
    
    </div>
    </section>

  );
};
