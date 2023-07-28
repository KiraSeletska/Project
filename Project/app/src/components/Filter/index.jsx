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
      <div className={styles.priceSection}>
      <span>Price</span>
      <input
        type="text"
        placeholder="trom"
        onChange={(e) => setFromPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="to"
        onChange={(e) => setToPrice(e.target.value)}
      />
      </div>

      {!hideDiscountFilter && (
        <div className={styles.discountSection}>
          <span> Discount items</span>
          <span className={styles.mediaDiscountSpan}>
            %
          </span>
          <input
            type="checkbox"
            checked={discountedOnly}
            onChange={(e) => {
              setDiscountedOnly(e.target.checked);
            }}
          />{" "}
        </div>
      )}
      <div className={styles.selectSection}>
      <span>Sorted</span>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">
          by dafault
        </option>
        <option value="asc">
          minimum price
        </option>
        <option value="desc">
          maximum price
        </option>
      </select>
      </div>
 
    </div>
  );
};
