import styles from "./styles.module.css";
import gnome from "../../images/gnome.svg";
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Cupon = () => {
  const [postNumberForDiscount, { isError, isLoading, isSuccess }] =
    usePostPhoneNumberForDiscountMutation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(0); //1 - valid, 2 - not valid
/*
  useEffect(() => {
    const rool = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    console.log(phoneNumber);
    let valid = rool.test(phoneNumber);
    console.log(valid);
  }, [phoneNumber]);
*/

  const sendPhoneNumber = () => {
    const rool = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (rool.test(phoneNumber) === false) {
      setValid(2);
      console.log("The pnone number is not valid");
    } else {
      setValid(1);
      postNumberForDiscount(phoneNumber);

      console.log("I send phone namber");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={gnome} alt="gnome" />
      </div>
      <div className={styles.form}>
        <div className={styles.text}>
          <span>5% off </span>
          <br />
          on the first order
        </div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : isSuccess ? (
          <h3>Send</h3>
        ) : isError ? (
          <h3>ooops</h3>
        ) : (
          <form
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
              />
            </div>
            <button
              onClick={() => sendPhoneNumber()}
              className={styles.button}
              type="submit"
            >
              Cat a discount
            </button>
          </form>
        )}
      </div>
      <div className={ valid === 2 ? styles.open : styles.close }>
        Введите нормальный номер телефона, идиот!
      </div>
    </div>
  );
};
