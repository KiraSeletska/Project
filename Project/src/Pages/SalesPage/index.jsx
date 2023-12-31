import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const SalesPage = () => {
  const { data, isLoading, error } = useGetAllPropductsQuery();
  const dispatch = useDispatch();
  const [newData, setNewData] = useState();

  const defButtonText = "Add to cart";
  const actionButtonText = "Product added to cart";
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
    <div className={styles.wrapper}>
      <h2>Products with sale</h2>
      <Filter onChange={onFilterChanged} hideDiscountFilter />
      {isLoading ? (
        <h2>
          LOADING <FontAwesomeIcon icon={faSpinner} spinPulse />
        </h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
        <div className={styles.productsWrapper}>
          {newData &&
            newData.map((el) =>
              el.discont_price ? (
                <NavLink key={el.id} to={`/products/${el.id}`}>
                  <Product
                    key={el.id}
                    id={el.id}
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
      )}
    </div>
  );
};
