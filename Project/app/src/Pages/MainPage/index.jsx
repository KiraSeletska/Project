import { SalesSection } from "../../components/SalesSection";
import { SmallCataloge } from "../../components/SmallCatalog";
import { Cupon } from "../../components/Cupon";
import { ShortSalesList2 } from "../../components/ShortSalesList2";

export const MainPage = () => {
  return (
    <div>
      <SalesSection />
      <SmallCataloge />
      <Cupon/>
      <ShortSalesList2 />
    </div>
  );
};
