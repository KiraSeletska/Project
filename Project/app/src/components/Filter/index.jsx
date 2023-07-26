import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const Filter = ({ onChange, hideDiscountFilter = false }) => {

  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();
  const [sortOrder, setSortOrder] = useState();
  const [discountedOnly, setDiscountedOnly] = useState(false);

  useEffect(() => {
    onChange({
      fromPrice,
      toPrice,
      sortOrder,
      discountedOnly: hideDiscountFilter || discountedOnly,
    });
  }, [fromPrice, toPrice, sortOrder, discountedOnly, hideDiscountFilter, onChange]);

  return (
    <div className={styles.sortContainer}>
      <span className={styles.spanPrice}>Price</span>
      <input
        type="text"
        placeholder="trom"
        className={styles.inputSort}
        onChange={(e) => setFromPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="to"
        className={styles.inputSort}
        onChange={(e) => setToPrice(e.target.value)}
      />
      {!hideDiscountFilter && (
        <>
          <span className={styles.discSort}> Discount items</span>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={discountedOnly}
            onChange={(e) => {
              setDiscountedOnly(e.target.checked);
            }}
          />{" "}
        </>
      )}
      <span className={styles.spanSorted}>Sorted</span>
      <select
        className={styles.sortSelect}
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option className={styles.option} value="default">
          by dafault
        </option>
        <option className={styles.option} value="asc">
          minimum price
        </option>
        <option className={styles.option} value="desc">
          maximum price
        </option>
      </select>
    </div>
  );
};
