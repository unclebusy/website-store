import {ShopContext} from "../context";
import { useEffect, useContext } from "react";

function Alert() {
  const { alertName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    if (alertName) {
      const timerId = setTimeout(closeAlert, 3000);

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [alertName, closeAlert]);

  return (
      <div className="toast-container">
        <div className="toast">
          {alertName} add to cart!
        </div>
      </div>
  )
}

export default Alert;
