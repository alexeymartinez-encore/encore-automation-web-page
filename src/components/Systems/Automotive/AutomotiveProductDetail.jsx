import { useParams } from "react-router-dom";

export default function AutomotiveProductDetail() {
  const params = useParams();
  //   params.automotiveProductId; // route identifier
  return (
    <div>
      <h1>{params.automotiveProductId}</h1>
    </div>
  );
}
