import styles from "./orderForm.module.css";
import { usePostPhoneNumberForOrderMutation } from "../../redux/categoriesApi";
import { useState } from "react";
import { FormMessage } from "../Cupon/formMessage";

export const OrderForm = ({ totalPrice, productsOrdered }) => {
  const [postNumberForOrder, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForOrderMutation();
  const [phoneNumber, setPhoneNumber] = useState();
  const [valid, setValid] = useState(true);
const [basketState, setBasketState] = useState(false)

  const order = {
    products: productsOrdered,
    phonenUmber: phoneNumber,
  };

  const sendOrder = () => {
    
    if(productsOrdered.length === 0) {
      setBasketState(true)
      setTimeout(()=>setBasketState(false),2000)
      return
    }
    const rool = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (rool.test(phoneNumber) === false) {
      setValid(false);
      setTimeout(() => setValid(true), 2000);
    } else {
      setValid(true);
      postNumberForOrder(order);
    }
  };

  const savePhoneNumber = (e) => {
    setPhoneNumber(e);
    console.log(phoneNumber);
  };

  return (
    <div className={styles.productOrder}>
      {isLoading ? (
        <h3>Loading</h3>
      ) : isSuccess ? (
        <div className={styles.saccessSendPhoneNumber}>
          <h3>
            Your order has been sent. <br />
            Order price: <span>{totalPrice}</span> <br />
            Expect a delivery message to the number: <span>{phoneNumber}</span>
          </h3>
        </div>
      ) : isError ? (
        <h3>{error.error}</h3>
      ) : (
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h3>Order details</h3>
          <span>Total</span>
          <p>
            {totalPrice}
            <span className={styles.dollar}>$</span>
          </p>
          <input
             type="tel"
            onChange={(e) => savePhoneNumber(e.target.value)}
            placeholder="phone number"
            maxLength={14}
            minLength={4}
          
          />
          <div className={styles.errorMassage}>
            <FormMessage status={valid} />
          </div>

          <button onClick={() => sendOrder()} type="submit">
            Order
          </button>
          <p className={basketState ? styles.empty : styles.close}>Your basket is empty</p>
        </form>
      )}
    </div>
  );
};
