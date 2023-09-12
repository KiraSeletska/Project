import styles from "./formMessage.module.css";

export const FormMessage = ({ status }) => {
  return (
    <p className={status ? styles.display : styles.nonDislpay}>
      Invalid phone number. Example: +49(999)999-999-99
    </p>
  );
};
