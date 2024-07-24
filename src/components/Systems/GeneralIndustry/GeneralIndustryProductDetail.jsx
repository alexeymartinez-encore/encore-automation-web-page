import { useParams } from "react-router-dom";
import { general_systems } from "../../util/general-systems";
import ProductItem from "../Automotive/ProductItem";

export default function GeneralIndustryProductDetail() {
  const params = useParams();
  const itemId = params.generalIndustryProductId; // route identifier
  console.log(itemId);
  const item = general_systems.filter((system) => system.id === itemId);
  console.log(general_systems);
  console.log(item);

  if (item.length === 1) {
    return (
      <div>
        <ProductItem item={item[0]} />
      </div>
    );
  }

  return (
    <div className="py-[10rem] text-center">
      <h1 className="text-5xl text-red-500">No Page Found</h1>
    </div>
  );
}
