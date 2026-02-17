import SpecialCard from "../components/SpecialCard";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    image: "/Images/greek_salad_lg.jpg",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: "/Images/bruchetta_lg.jpg",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    image: "/Images/lemon_dessert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

export default function Specials() {
    return (
        <>
            {specials.map(item => (
                <SpecialCard key={item.title} {...item} />
            ))}
        </>
    )
}