import styles from './styles.module.css'
import img from "../../images/image2.svg"

export const Sales = () => {

    return(
        <section className={styles.salesContainer}>
            <div className={styles.textContainer}>
            <h1>Sale <br/>
            <span>New season</span>
            </h1>
            <div className={styles.btnContainer}>
            <button className={styles.btn + ' ' + styles.sales}>Sale</button>
            </div>
            </div>

<div className={styles.imgContainer}><img src={img} alt="" /></div>
     
        </section>
    )
}