import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { automotive_systems } from "../../util/automotive-systems";

export default function AutomotiveProductDetail() {
  const params = useParams();
  const itemId = params.automotiveProductId; // route identifier
  console.log(itemId);

  const item = automotive_systems.filter((system) => system.id === itemId);
  console.log(automotive_systems);
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
