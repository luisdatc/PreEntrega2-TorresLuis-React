import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  //estado para guardar un producto
  const { pid } = useParams;

  console.log( pid);
  //useeffect para llamar a la api o json para traer un producto  por id y luego guardar en el estado

  return (
    <div>
      <ItemDetail

      //product={product}
      />
    </div>
  );
};

export default ItemDetailContainer;
