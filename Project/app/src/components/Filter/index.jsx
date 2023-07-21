import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const Filter = ({onChange}) => {
  /*
    const [checkbox, setCheckbox] = useState(false);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [select, setSelect] = useState("default");

    let newData = data && [...data];

    const changeCheckbox = () => {
        setCheckbox(!checkbox);
        console.log(checkbox);
      };
    
      const changeFrom = (e) => {
        e ? setFrom(e) : setFrom(0);
        console.log(from);
      };
      const changeTo = (e) => {
        e ? setTo(e) : setTo(0);
        console.log(to);
      };
    
      const changeSelect = (e) => {
        setSelect(e);
        console.log(select);
        console.log(newData)
      };
  
      
  const show = () => {
    console.log(select);
    console.log(newData)
  };


  const filtredState = () => {
    if (checkbox) return newData.filter((el) => el.discont_price);
    if (from !== 0 && to !== 0)return newData.filter((el) => (el.price > from) & (el.price < to));
    if (from !== 0) return newData.filter((el) => el.price > from);
    if (to !== 0) return newData.filter((el) => el.price < to);
    
    if(select === "min") return newData.sort((a,b) => a.price - b.price)
    if(select === "max") return newData.sort((a,b) => b.price - a.price)

    return newData;
  };
    */
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();
  const [sortOrder, setSortOrder] = useState();
  const [discountedOnly, setDiscountedOnly] = useState(false);

  useEffect(()=>{
    onChange({
      fromPrice, toPrice, sortOrder, discountedOnly
    })
  }, [fromPrice, toPrice, sortOrder, discountedOnly, onChange])
 

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
      <span className={styles.discSort}> Discount items</span>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={discountedOnly}
        onChange={(e) => {
          setDiscountedOnly(e.target.checked);

        }}
      />
      <span className={styles.spanSorted}>Sorted</span>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="default">by dafault</option>
        <option value="asc">minimum price</option>
        <option value="desc">maximum price</option>
      </select>
    </div>
  );
};
