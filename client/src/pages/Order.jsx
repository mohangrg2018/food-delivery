import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoreContext from "@/context/StoreContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Order = () => {
  const { cartTotalAmount, delivery_fee } = useContext(StoreContext);
  return (
    <div className="container__width">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 my-12 sm:my-20">
        {/* left side */}
        <div className="w-full sm:w-1/2">
          <h1 className="font-bold text-2xl mb-4">Delivery Information</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Address" />
            <div className="flex gap-4">
              <Input type="text" placeholder="City" />
              <Input type="text" placeholder="State" />
            </div>
            <Input type="text" placeholder="Zip Code" />
          </div>
        </div>
        {/* right side */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold">Cart Total</h2>
          <div className="flex justify-between border-b pb-2 mt-4">
            <p>Subtotal</p>
            <p>{cartTotalAmount()}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Delivery Fee</p>
            <p>{delivery_fee}</p>
          </div>
          <div className="flex justify-between pb-4">
            <p>Total</p>
            <p>{cartTotalAmount() + delivery_fee}</p>
          </div>
          <Link to="/payment">
            <Button className="rounded-none">Proceed to payment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
