import styles from "./styles.module.css";
import { useGetOneProductByCategoryQuery } from "../../redux/categoriesApi";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../redux/categoriesApi";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { AddToCardMessages } from "../../components/Messages/addToCardMesssage";
import { useState } from "react";


export const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOneProductByCategoryQuery(id);
  const dispatch = useDispatch();
const [status, setStatus] = useState(false)

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
    setStatus(true)
    setTimeout(() => setStatus(false), 2000);
  };

  return (
    <div>
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
        <div className={styles.container}>
          <h2>{data[0].title}</h2>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img src={baseUrl + data[0].image} alt="imag" />
            </div>
            <div>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  {data[0].discont_price
                    ? data[0].discont_price
                    : data[0].price}
                  <span className={styles.dollar}>$</span>
                </p>
                <span className={styles.discont_price}>
                  {data[0].discont_price ? `${data[0].price}$` : ""}
                </span>
                <span className={styles.procent}>
                  {data[0].discont_price
                    ? `${Math.round(
                        100 - data[0].discont_price / (data[0].price / 100)
                      )}%`
                    : ""}
                </span>
              </div>
              <button
                className={styles.btnTpCard}
                onClick={(event) => addToBascetHandler(event, data[0])}
              >
                To card
              </button>
              <div className={styles.message}><AddToCardMessages status={status}/></div>
              <h6>Description</h6>
              <p className={styles.description}>{data[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
