import styles from "./styles.module.css";
import gnome from "../../images/gnome.svg";
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";
import { useEffect, useState } from "react";
import { FormMessage } from "../Messages/formMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import InputMask from "react-input-mask";

export const Cupon = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [postNumberForDiscount, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForDiscountMutation();

  const [showError, setShowError] = useState(false);

  const sendPhoneNumber = () => {
    if (phoneNumber.length < 18) {
      setShowError(true);
    } else {
      postNumberForDiscount(phoneNumber);
    }
  };
  useEffect(() => {
    if (phoneNumber.length === 18) {
      setShowError(false);
    }
  }, [phoneNumber]);
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
          <h2>
            LOADING <FontAwesomeIcon icon={faSpinner} spinPulse />
          </h2>
        ) : isSuccess ? (
          <div className={styles.saccessSendPhoneNumber}>
            <h3>
              Your application has been sent. Wait for a message to the phone
              number: <span>{phoneNumber}</span>
            </h3>
          </div>
        ) : isError ? (
          <h2>Error: {error.error}</h2>
        ) : (
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.inputWrapper}>
              <InputMask
                className={styles.input}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+49(999)999-999-99"
                mask="+4\9(999)999-999-99"
                maskChar={null}
              />
            </div>
            <div className={styles.errorWindow}>
              <FormMessage status={showError} />
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
