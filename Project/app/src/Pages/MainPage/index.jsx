import { SalesSection } from "../../components/SalesSection";
import { SmallCataloge } from "../../components/SmallCatalog";
import { Cupon } from "../../components/Cupon";
import { ShortSalesList } from "../../components/ShortSalesList";

export const MainPage = () => {
  return (
    <div>
      <SalesSection />
      <SmallCataloge />
      <Cupon/>
      <ShortSalesList />
    </div>
  );
};
