import classes from "./CartItem.module.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>
          {" "}
          <RemoveIcon fontSize="small" />
        </button>
        <button onClick={props.onAdd}>
          {" "}
          <AddIcon fontSize="small" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
