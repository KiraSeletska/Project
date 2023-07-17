import styles from "./productPage.module.css";
import { useParams } from 'react-router-dom'
import { useGetOneProductByCategoryQuery } from "../../redux/apiSlice";
import { useDispatch } from 'react-redux'

export const PropductPage = () => {

    const { id } = useParams();
    const { data, isLoading } =  useGetOneProductByCategoryQuery(id);

console.log(data)

/*
    ( <p className={styles.title}>{data.description}</p>
      <div className={styles.prodauctContainer}>
     
        <div className={styles.infoContainer}>
        <p className={styles.price}>{data.price}</p>
        <span className={styles.oldPrice}>{}</span>
        <span className={styles.procent}></span>
        <button className={styles.btnToCard}>To card</button>
        <p className={styles.describe}></p>
        </div>

      </div>)
*/



  return (
    <div className={styles.wrapper}>
            { isLoading ? <h1>LOADING...</h1> : 
 (<><p className={styles.title}>{data.description}</p>
 <div className={styles.prodauctContainer}>

          <div className={styles.infoContainer}>
            <p className={styles.price}>{data.price}</p>
            <span className={styles.oldPrice}>{data.discont_price}</span>
            <span className={styles.procent}></span>
            <button className={styles.btnToCard}>To card</button>
            <p className={styles.describe}>{data.description}</p>
          </div>

        </div></>)
      }


    </div>
  )
}
