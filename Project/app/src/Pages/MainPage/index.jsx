import { SalesSection } from "../../components/SalesSection";
import { SmallCataloge } from "../../components/SmallCatalog";
import { CuponForm } from "../../components/CuponForm";
import { ShortSalesList } from "../../components/ShortSalesList";

export const MainPage = () => {
  return (
    <div>
      <SalesSection />
      <SmallCataloge />
      <CuponForm />
      <ShortSalesList />
    </div>
  );
};
