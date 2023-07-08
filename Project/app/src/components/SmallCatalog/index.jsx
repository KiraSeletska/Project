import  styles from './styles.module.css'

export const SmallCataloge = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Catalog</h2>
<button>All cataloges</button>
<div className={styles.categoriesWrapper}>
    <div>
      <div className={styles.img}></div>
        <p>Fertilizer</p>
    </div>
    <div>
    <div className={styles.img}></div>
        <p>Protective products and septic tanks</p>
    </div>
    <div>
    <div className={styles.img}></div>
        <p>Planting material	</p>
    </div>
    <div>
    <div className={styles.img}></div>
        <p>Tools and Inventor</p>
    </div>
</div>
        </div>
    )
}