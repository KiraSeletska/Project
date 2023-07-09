import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";

export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
 // console.log(data);

  return (
    <div>
        IM propducts!
      {data &&
        data.map((el) => (
          <Product
            key={el.id}
            image={baseUrl + el.image}
            price={el.price}
            discont_price={el.discont_price}
            title={el.title}
          />
        ))}
    </div>
  );
};
