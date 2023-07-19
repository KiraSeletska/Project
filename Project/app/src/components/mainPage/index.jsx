import { SalesSection } from "../SalesSection";
import { SmallCataloge } from "../SmallCatalog";
import { CuponForm } from "../CuponForm";
import { ShortSalesList } from "../ShortSalesList";

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
