import styles from "./styles.module.css";
import { useGetOneProductByCategoryQuery } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../redux/apiSlice";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOneProductByCategoryQuery(id);
  const dispatch = useDispatch();


  const addToBascetHandler = (event, el) => {//ПОВТОР!!
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
  };

  return (
    <div>
      {isLoading ? (
        <h2>LOADING...</h2>
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
              <h6>Description</h6>
              <p className={styles.description}>{data[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
