import React from "react";
import TopNav from "./TopNav";
import { useGlobalContext } from "../context/context";

const Cart = () => {
  const { cart, removeFromCart } = useGlobalContext();
  console.log(cart);
  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + +currentValue.price.substring(1) * currentValue.count;
  }, 0);

  const {incriseItem,decriseItem} = useGlobalContext();


  if (cart.length === 0) {
    return (
      <>
        <TopNav />
        <div className=" pt-28  text-center">
          <h1>Add Items to cart</h1>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <TopNav />
      <div>
      <h4 className="text-center pt-28 pl-[200px]">Total  :${totalPrice}</h4>

      </div>
      {cart.map((item) => {
        return (
          <div className=" pt-4">
            <div className=" flex items-center justify-between w-[1000px] ">
              <table>
                <tr className="">
                  <td className=" pl-5 object-cover">
                    <img
                      src={item.img}
                      alt=""
                      className="w-20 h-20 rounded-md mr-10"
                    />
                  </td>
                  <td className="px-11 ">
                    <h3 className="">{item.title}</h3>
                  </td>
                  <td className="px-11">
                    <p className="pt-3">{+(item.price).substring(1) * item.count}</p>
                  </td>
                  <td className="px-11">
                    <button onClick={()=>decriseItem(item.id)} className=" rounded-md">-</button>
                    <span className=" px-2">{item.count}</span>
                    <button onClick={()=>{incriseItem(item.id)}} className=" rounded-md">+</button>
                  </td>
                  <td>
                    <button
                      className="ml-10 rounded-md"
                      onClick={() => removeFromCart(item.id)}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Cart;
