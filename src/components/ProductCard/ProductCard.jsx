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
      <Button  fullWidth mt="md" radius="md" className="product-btn">
        Add To Cart
      </Button>
    </Card>
  );
}