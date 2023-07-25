import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { baseUrl } from "../../redux/categoriesApi";
import { Product } from "../Product";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";

export const ShortSalesList = () => {
  const { data } = useGetAllPropductsQuery();
  const [productsState, setProductsState] = useState(40);
  const dispatch = useDispatch();
  const defButtonText = "Add to cart";
  const actionButtonText = "Product added to cart";
  const [btn, setBtn] = useState(defButtonText);

  const pading = 40;
  const oneObg = 350;
  const ribbon = data && data.filter((el) => el.discont_price).length;
  console.log(ribbon)
  const oneStep = oneObg * 3;
  const ribbonLength = (ribbon * oneObg - oneStep * 2) * -1;

  const stepPlus = () => {
    if (productsState < ribbonLength) return;
    const step = productsState - oneStep;
    setProductsState(step);
    console.log(productsState);
  };
  const stepMin = () => {
    if (productsState >= pading) return;
    const step = productsState + oneStep;
    setProductsState(step);
  };

  /*
  const oneStep = 600;

  const stepPlus = () => {
    if (productsState < -2360) return;
    const step = productsState - oneStep;
    setProductsState(step);
    console.log(productsState)
  };
  const stepMin = () => {
    if (productsState >=40) return;
    const step = productsState + oneStep;
    setProductsState(step);
  };
*/
  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
    setBtn(actionButtonText);
    setTimeout(() => setBtn(defButtonText), 1000);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Sale</h2>
      <div className={styles.productsWrapper}>
        <button
          className={styles.btn + " " + styles.btnRight}
          onClick={() => stepPlus()}
        >
          {">"}
        </button>
        <div
          className={styles.prodacts}
          style={{ transform: `translateX(${productsState}px)` }}
        >
          {data &&
            data.map((el) =>
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
        <button className={styles.btn} onClick={() => stepMin()}>
          {"<"}
        </button>
      </div>
    </div>
  );
};
