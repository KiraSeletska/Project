import styles from "./styles.module.css";
import gnome from "../../images/gnome.svg";
import { useForm, Controller } from "react-hook-form";
import { baseUrl } from "../../redux/categoriesApi";
import { usePostPhoneNumberForDiscountMutation } from "../../redux/categoriesApi";
import { useState } from "react";

export const CuponForm = () => {
  const { handleSubmit, control, setValue } = useForm();

  const [postNumberForDiscount, { isError, isLoading, isSuccess, error }] =
    usePostPhoneNumberForDiscountMutation();

  const isPhoneValid = (phone) => {
    return phone.startsWith("+49") || phone === "+4" || phone === "+";
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setValue(
      "phone",
      (isPhoneValid(phoneValue) ? phoneValue : `+49${phoneValue}`).replace(
        /[^0-9\+]/,
        ""
      )
    );
  };
  const onSubmit = (data, e) => console.log(data, e);
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Controller
            name="phone"
            control={control}
            defaultValue="+49"
            render={({ field, fieldState: { error } }) => (
              <div className={styles.inputWrapper}>
                <input
                  {...field}
                  className={styles.input}
                  type="tel"
                  onChange={handlePhoneChange}
                  maxLength={14}
                />
                {error && <span>Phone number is required.</span>}
              </div>
            )}
          />
          <button
            className={styles.button}
            type="submit"
            onClick={() => handleSubmit(onSubmit)}
          >
            Cat a discount
          </button>
        </form>
      </div>
    </div>
  );
};
