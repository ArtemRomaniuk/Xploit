import { useState } from "react";
import styles from "./Cards.module.css";
import logitechImage from "./logitech-gprox.png";

export default function Cards() {
  const [cards, setCards] = useState([
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
    {
      image: logitechImage,
      title: "Logitech G PRO X",
      price: "19.99$",
      rating: 3,
      onWishClick: true,
      onAddClick: () => {
        console.log("item added to cart!");
      },
    },
  ]);

  return <div></div>;
}
