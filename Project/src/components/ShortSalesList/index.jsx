import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { baseUrl } from "../../redux/categoriesApi";
import { Product } from "../Product";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ShortSalesList = () => {
  const { data, isLoading, error } = useGetAllPropductsQuery();
  const onlyDiscounData = data && data.filter((el) => el.discont_price);

  const dispatch = useDispatch();

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
  };
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Sale</h2>
      {isLoading ? (
        <h2>
          LOADING <FontAwesomeIcon icon={faSpinner} spinPulse />
        </h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
        <div className={styles.productsWrapper}>
          {data &&
            onlyDiscounData.slice(0, 3).map(
              (el) =>
                el.discont_price && (
                  <NavLink key={el.id} to={`/products/${el.id}`}>
                    <Product
                      id={el.id}
                      discont_price={el.discont_price}
                      price={el.price}
                      title={el.title}
                      image={baseUrl + el.image}
                      addToBascetHandler={(e) => addToBascetHandler(e, el)}
                    />{" "}
                  </NavLink>
                )
            )}

          <NavLink to="/sales">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.linkToSales}
            >
              {isHover ? (
                <FontAwesomeIcon icon={faArrowRight} beat />
              ) : (
                <FontAwesomeIcon icon={faArrowRight} />
              )}
              <p className={styles.linkText}>All discounts</p>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
