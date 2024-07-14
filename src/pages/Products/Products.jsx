import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import { Pagination } from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";

import "./Products.css";
export default function Products() {
  const [page, setPage] = useState(1)
  const brojProducta = products.length
  const brojProductaPoStranici = 12
  const brojStranica = Math.ceil(brojProducta / brojProductaPoStranici)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
  <div className="producti">
    <div className="wrapper-product">
      {products.map((product) => {
        return (
          <ProductCard
            slika={product.image_url}
            description={product.short_description}
            cena={product.current_price}
          />
        );
      }).slice(
        brojProductaPoStranici * (page - 1),
        brojProductaPoStranici * page
      )}
    </div>
    <Pagination brojStranica={brojStranica} setPage={setPage} page={page} />
  </div>
  );
}