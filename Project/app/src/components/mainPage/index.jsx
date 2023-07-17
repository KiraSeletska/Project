import { Sales } from "../Sales"
import { SmallCataloge } from "../SmallCatalog"
import { CuponForm } from "../CuponForm"
import { ShortSalesList} from '../ShortSalesList'

export const MainPage = () => {
    return (
<div>
<Sales/>
<SmallCataloge/>
  <CuponForm/>
  < ShortSalesList/>
</div>
    )
    }