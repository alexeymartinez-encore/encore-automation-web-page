import { useParams } from "react-router-dom";
import ProductItem from "../Automotive/ProductItem";
import { aerospace_systems } from "../../util/aerospace-systems";

export default function AerospaceProductDetail() {
  const params = useParams();
  const itemId = params.aerospaceProductId; // route identifier
  console.log(itemId);

  const item = aerospace_systems.filter((system) => system.id === itemId);
  console.log(aerospace_systems);
  console.log(item);

  if (item.length === 1) {
    return (
      <div>
        {/* <h1>{params.automotiveProductId}</h1> */}
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
