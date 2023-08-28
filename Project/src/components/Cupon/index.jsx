import styles from "./styles.module.css";
import gnome from "../../images/gnome.svg";
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";
import { useState } from "react";
import { FormMessage } from "../Messages/formMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Cupon = () => {
  
  const [postNumberForDiscount, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForDiscountMutation();

  const [phoneNumber, setPhoneNumber] = useState("");
 // const [valid, setValid] = useState(true); 
const [showError, setShowError] = useState(false); 

  const sendPhoneNumber = () => {
    const phoneNumberRestrictions = /^[\d\+][\d\(\)\ -]{10,14}\d$/;
    if (phoneNumberRestrictions.test(phoneNumber) === false) {
      setShowError(true);
     // setValid(false)
      setTimeout(() => setShowError(false), 2000);
    } else {
      postNumberForDiscount(phoneNumber);
    //  setValid(true)
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={gnome} alt="gnome" />
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.textWrapper}>
          <span>5% off </span>
          <br />
          on the first order
        </div>
        {isLoading ? (
              <h2>LOADING <FontAwesomeIcon icon={faSpinner} spinPulse /></h2>
        ) : isSuccess ? (
          <div className={styles.saccessSendPhoneNumber}>
            <h3>
            Your application has been sent. 
            Wait for a message to the phone number: <span>{phoneNumber}</span>
            </h3>
          </div>
        ) : isError ? (
          <h2>Error: {error.error}</h2>
        ) : (
          <form className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.inputWrapper}>
            <input
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={styles.input}
                placeholder="phone number"
                maxLength={14}
                minLength={4}
                defaultValue={'+49'}
          />
            </div>
            <div className={styles.errorWindow}>
            <FormMessage status={showError}/>
            </div>
  
            <button
              onClick={() => sendPhoneNumber()}
              className={styles.button}
              type="submit"
            >
              Get a discount
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
