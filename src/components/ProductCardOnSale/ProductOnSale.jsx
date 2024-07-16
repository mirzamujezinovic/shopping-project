import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductOnSale.css";

export default function ProductCardOnSale({ slika, description, cena }) {
  // Oduzimanje 20% od cene
  const cenaSaPopustom = parseFloat(cena) * 0.8; 

  return (
    <div className="productcard">
      <Card
        shadow="sm"
        padding="xl"
        component="a"
        target="_blank"
        className="product"
      >
        <div className="popust">
          <img src="https://www.rentacaroasis.com/fx/desconto_20.png" alt="popust" className="discount-img" />
        </div>
        <Card.Section>
          <Image className="img" src={slika} alt="No way!" />
        </Card.Section>

        <Text className="product-description">
          {description}
        </Text>
        <Text className="stara-product-price">
          <del>{cena} RSD</del> 
          
        </Text>
        <Text className="nova-product-price">
          {cenaSaPopustom.toFixed(3)} RSD 
          
        </Text>
        
        <Button fullWidth mt="md" radius="md" className="product-btn" >
          Add To Cart
        </Button>
      </Card>
    </div>
  );
}
