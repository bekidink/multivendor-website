import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";


export default function Filters({slug}) {
 

  return (
    <div>
    <PriceFilter slug={slug}/> 
    <BrandFilter/>   
    </div>
  )
}
