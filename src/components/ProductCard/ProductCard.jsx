import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductCard.css";

export default function ProductCard({ slika, description, cena }) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
      className="product"
    >
      <Card.Section>
        <Image className="img" src={slika} alt="No way!" />
      </Card.Section>

      <Text  className="product-description">
        {description}
      </Text>
      <Text  className="product-price">
        {cena} RSD
      </Text>
      <Button className="product-btn" mt="md" radius="md" >
          Add To Cart
        </Button>
    </Card>
  );
}