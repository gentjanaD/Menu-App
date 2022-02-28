import { useState } from "react";
import NavBarWrapper from "./NavBarWrapper";
import { MdShoppingCart } from "react-icons/md";
import { Item } from "../../types/menuTypes";
import { Modal } from "../modal/Modal";
import { count } from "console";
interface NavBarProps {
  basketList: Item[];
  counts?: { name: string; quantity: number };
}
export default function NavBar({ basketList }: NavBarProps) {
  const [onClick, setOnClick] = useState(false);
  const openModal = () => {
    setOnClick(true);
  };
  const closeModal = () => {
    setOnClick(false);
  };
  let totalItems: number[] = [];
  basketList.forEach((item) => {
    totalItems.push(item.quantity);
  });
  console.log("ite", totalItems);
  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <h2>From the oven</h2>
        <div className="nav-bar__right">
          <input placeholder="search"></input>
          <div className="nav_basket">
            {onClick && (
              <Modal
                basketList={basketList}
                onClick={onClick}
                closeModal={closeModal}
              />
            )}

            <div className="basket_icon">
              <p style={{ marginBottom: "-4px" }}>
                {basketList.length > 0 && totalItems.reduce((a, b) => a + b, 0)}
              </p>
              <MdShoppingCart size={50} onClick={openModal} />
            </div>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
}
