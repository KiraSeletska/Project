import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addSearch } from "../../redux/basketSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();

  const [nameOfProdact, setnameOfProdact] = useState("");
  const [divState, setDivState] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => navigate("/productsSearch");

  useEffect(() => {
    dispatch(addSearch(nameOfProdact));
  }, [nameOfProdact]);

  return (
    <div className={styles.wrapper}>
      <div
        className={
          !divState
            ? styles.inputDiv
            : styles.inputDiv + " " + styles.inputDivActive
        }
        onFocus={() => setDivState(true)}
      >
        <button
          className={styles.searchButton}
          onFocus={() => setDivState(true)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          className={!divState ? " " : styles.inputActiv}
          onBlur={() => setDivState(false)}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setnameOfProdact(e.target.value);
            handleClick();
          }}
          value={nameOfProdact}
        />
        <button
          className={styles.clearSearchButton}
          onClick={() => setnameOfProdact("")}
        >
          {<FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
    </div>
  );
};
