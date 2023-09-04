import React, { useState, useEffect } from "react";

import CartIcon from "../../assets/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBump, setIsBump] = useState(false);

  useEffect(() => {
    if (props.mealAmount() > 0) {
      // 식사 메뉴가 추가되면 뱃지를 bump 클래스로 추가
      setIsBump(true);

      // 300ms 후에 bump 클래스를 제거
      setTimeout(() => {
        setIsBump(false);
      }, 300);
    }
  }, [props.mealAmount]);

  return (
    <div>
      <button className={classes.button} type="button" onClick={props.onOpen}>
        <CartIcon className={classes.icon} />
        Your Cart
        <div className={`${classes.badge} ${isBump ? classes.bump : ""}`}>
          {props.mealAmount()}
        </div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
