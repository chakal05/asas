import * as React from "react";
import {useRouter} from 'next/router';
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  TextField,
  MenuItem,
  Button,
} from "@mui/material/";

export default function RecipeReviewCard() {
  const [city, setCity] = React.useState("All over Djibouti");
  const [product, setProduct] = React.useState("");
  const router = useRouter();

  const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    switch (product) {
      case "":
        {
          console.log("product empty");
          console.log(city);
        }
        break;
      case product:
        {
          setProduct("");
          setCity("All over Djibouti");
            router.push('/annonser')
        }
        break;
    }
  };

  const cities = [
    "Djibouti City",
    "Ali-Sabieh",
    "Dikhil",
    "Tadjoura",
    "Arta",
    "Obock",
    "All over Djibouti",
  ];

  return (
    <Card sx={{ maxWidth: 345 }} elevation={5} >
      <CardHeader
        title="Welcom to Asas"
        subheader={`Date: ${new Date().toISOString().substring(0, 10)}`}
      />
      <CardContent>
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="What are you looking for?"
            variant="outlined"
            value={product}
            onChange={handleProduct}
          />
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="Choose city"
            helperText="Please select your city"
            value={city}
            onChange={handleCity}
          >
            {cities.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleSubmit} variant="outlined">
          Search
        </Button>
      </CardActions>
    </Card>
  );
}