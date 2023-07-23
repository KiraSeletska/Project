import styles from './styles.module.css'
import { useState } from 'react';
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";

export const ValidInput = () => {
    /*  const [postNumberForDiscount, { isError, isLoading, isSuccess }] =
    usePostPhoneNumberForDiscountMutation();*/
    const [phoneNumber, setPhoneNumber] = useState("");
      const [valid, setValid] = useState(true); 

        const sendPhoneNumber = () => {
    const rool = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (rool.test(phoneNumber) === false) {
      setValid(false);
      setTimeout(() => setValid(true), 2000);
          
    } else {
      setValid(true);
      //postNumberForDiscount(phoneNumber);
    }
  };
    return(
        <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        className={styles.input}
        placeholder="phone number"
        maxLength={14}
        minLength={4}
        defaultValue={'+47'}
      />
    )
}