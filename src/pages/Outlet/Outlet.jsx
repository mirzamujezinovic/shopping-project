import ProductCardOnSale from "../../components/ProductCardOnSale/ProductOnSale";
import productsOnSale from "../../common/productsOnSale.json";
import { Pagination } from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";
import "./Outlet.css";


export default function Outlet() {
    const [page, setPage] = useState(1)
  const brojProducta = productsOnSale.length
  const brojProductaPoStranici = 6
  const brojStranica = Math.ceil(brojProducta / brojProductaPoStranici)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <>
  <div className="producti">
    <div className="onsale-wrapper-product">
      {productsOnSale.map((product) => {
        return (
          <ProductCardOnSale
            slika={product.image_url}
            description={product.short_description}
            cena={product.current_price}
            onClick={()=>addToCart(product)}
          />
        );
      }).slice(
        brojProductaPoStranici * (page - 1),
        brojProductaPoStranici * page
      )}
    </div>
    <Pagination brojStranica={brojStranica} setPage={setPage} page={page} />
  </div>
  ;

    </>
    );
  }