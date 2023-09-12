import styles from "./orderForm.module.css";
import { usePostPhoneNumberForOrderMutation } from "../../redux/categoriesApi";
import { useState, useEffect } from "react";
import { FormMessage } from "../Messages/formMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SuccessfullySent } from "../Messages/successfullySent";
import InputMask from "react-input-mask";

export const OrderForm = ({ totalPrice, productsOrdered, userSaving }) => {
  const [postNumberForOrder, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForOrderMutation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmptyBasket, setEmptyBasket] = useState(false);
  const [showError, setShowError] = useState(false);

  const order = {
    products: productsOrdered,
    phoneNumber: phoneNumber,
  };
  const sendOrder = () => {
    if (productsOrdered.length === 0) {
      setEmptyBasket(true);
      setTimeout(() => setEmptyBasket(false), 2000);
      return;
    }

    if (phoneNumber.length < 18) {
      setShowError(true);
    } else {
      postNumberForOrder(order);
    }
  };
  useEffect(() => {
    if (phoneNumber.length === 18) {
      setShowError(false);
    }
  }, [phoneNumber]);
  return (
    <div className={styles.productOrder}>
      {isLoading ? (
        <h2>
          LOADING <FontAwesomeIcon icon={faSpinner} spinPulse />
        </h2>
      ) : isSuccess ? (
        <SuccessfullySent
          totalPrice={totalPrice}
          phoneNumber={order.phoneNumber}
        />
      ) : isError ? (
        <h3>{error.error}</h3>
      ) : (
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h3>Order details</h3>
          <div className={styles.priceContainer}>
            <h6>Total</h6>
            <p className={styles.totalPrice}>
              {totalPrice}
              <span className={styles.dollar}>$</span>
            </p>
          </div>

          <p className={styles.savingInfo}>Your savings: {userSaving}$ </p>
          <InputMask
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+49(999)999-999-99"
            mask="+4\9(999)999-999-99"
            maskChar={null}
          />
          <div className={styles.errorMassage}>
            <FormMessage status={showError} />
          </div>

          <button
            className={styles.orderBtn}
            onClick={() => sendOrder()}
            type="submit"
          >
            Order
          </button>
          <p className={isEmptyBasket ? styles.empty : styles.close}>
            Your basket is empty
          </p>
        </form>
      )}
    </div>
  );
};
