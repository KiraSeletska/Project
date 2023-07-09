import  styles from './styles.module.css'
import { useGetAllCategoriesQuery } from "../../redux/apiSlice";
import { baseUrl } from "../../redux/apiSlice";
import { Category } from "../Category";

export const SmallCataloge = () => {
    const { data } = useGetAllCategoriesQuery();

    return (
        <div className={styles.wrapper}>
            <h2>Catalog</h2>
<button>All cataloges</button>
<div className={styles.categoriesWrapper}>
{data && data.map((el) => ( el.id <= 4 &&
        <Category key={el.id} title={el.title} image={baseUrl + el.image}/>
      ))}
</div>
        </div>
    )
}