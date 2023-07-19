import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import styles from "./products.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useEffect, useState } from "react";

export const AllProducts = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [select, setSelect] = useState("default");

  const { data } = useGetAllPropductsQuery();
  const dispatch = useDispatch();

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
  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
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

  const test = () => {
    if (newData === undefined) return
    const a = newData.sort((a, b) => {
     // if (select === "min") {
        return a.price - b.price;
     /* } else if (select === "max") {
        return b.price - a.price;
      } else {
        return 0;
      }*/
    });
  return a
  };
  //console.log(test());

  return (
    <div className={styles.productsWrapper}>
      <h2>All products</h2>
      <div className={styles.sortContainer}>
        <span className={styles.spanPrice}>Price</span>
        <input
          type="text"
          placeholder="trom"
          className={styles.inputSort}
          onChange={(e) => changeFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="to"
          className={styles.inputSort}
          onChange={(e) => changeTo(e.target.value)}
        />
        <button onClick={() => show()}>Show</button>
        <span className={styles.discSort}> Discount items</span>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checkbox}
          onChange={() => changeCheckbox()}
        />
        <span className={styles.spanSorted}>Sorted</span>
        <select name="" id="" onChange={(e) => changeSelect(e.target.value)}>
          <option value="default">by dafault</option>
          <option value="min">minimum price</option>
          <option value="max">maximum price</option>
        </select>
      </div>
      {data &&
        data.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
            <Product
              key={el.id}
              image={baseUrl + el.image}
              price={el.price}
              discont_price={el.discont_price}
              title={el.title}
              addToBascetHandler={(e) => addToBascetHandler(e, el)}
            />
          </NavLink>
        ))}
    </div>
  );
};
