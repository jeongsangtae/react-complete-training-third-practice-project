import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const AddClickHandler = () => {
    props.onAdd(props.id);
  };

  const RemoveClickHandler = () => {
    props.onRemove(props.id);
  };

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
        <button type="button" onClick={RemoveClickHandler}>
          −
        </button>
        <button type="button" onClick={AddClickHandler}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
