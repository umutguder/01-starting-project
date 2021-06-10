import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Milk Chocolate",
    description: "Contains 10 to 40 percent cacao mixed with sugar and milk",
    price: 9.99,
  },
  {
    id: "2",
    name: "White Chocolate",
    description:
      "Does not contain chocolate liquor or any other cocoa products besides cocoa butter",
    price: 8.5,
  },
  {
    id: "3",
    name: "Dark Chocolate",
    description:
      "Amount of cocoa in dark chocolate bars ranges from 30 percent all the way up to 80 percent",
    price: 7.99,
  },
  {
    id: "4",
    name: "Cocoa Powder",
    description:
      "100 percent cacao with no sugar, but has had the cocoa butter extracted out",
    price: 6.66,
  },

  {
    id: "5",
    name: "Couverture Chocolate",
    description:
      "Contains a higher percentage of cocoa butter than other varieties",
    price: 5.55,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
