import styles from "./orderForm.module.css";
import { usePostPhoneNumberForOrderMutation } from "../../redux/categoriesApi";
import { useState } from "react";

export const OrderForm = ({ totalPrice, productsOrdered }) => {
  const [postNumberForOrder, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForOrderMutation();
  const [phoneNumber, setPhoneNumber] = useState();

  const order = {
    products: productsOrdered,
    phonenUmber: phoneNumber,
  };

  const sendOrder = () => {
    postNumberForOrder(order);
    
  };

  const savePhoneNumber = (e) => {
    setPhoneNumber(e);
    console.log(phoneNumber);
  };

  return (
  
    <div className={styles.productOrder}>
      {isLoading ? (<h3>Loading</h3>) 
      : isSuccess ? (<h3>Send</h3>) 
      : isError ? (<h3>{error.error}</h3>)
      : (<form action="" onSubmit={(e)=>e.preventDefault()}>
        <h3>Order details</h3>
        <span>Total</span>
        <p>
          {totalPrice}
          <span className={styles.dollar}>$</span>
        </p>
        <input type="text" onChange={(e) => savePhoneNumber(e.target.value)} />
        <button onClick={() => sendOrder()} type="submit">
          Order
        </button>
      </form>)
      }
    </div>
  );
};
