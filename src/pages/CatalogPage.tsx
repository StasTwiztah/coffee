import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ItemCard } from "../components/ItemCard";

export const Catalog = () => {
  const items = [
    {
      id: "1",
      imageUrl:
        "https://ohmytea.ru/wp-content/uploads/2018/10/sencha_asamushi-380x250.jpg",
      name: "Индийский чай",
      price: 400,
    },
  ];

  const tea = [
    "Японский чай",
    "Зеленый чай",
    "Красный чай",
    "Улун",
    "Пуэр",
    "Травяной чай",
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tea.map((t) => (
          <Tab key={t} label={t} />
        ))}
      </Tabs>
      <div>
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
