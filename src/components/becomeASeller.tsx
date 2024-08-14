import React, { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const BecomeASeller = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    original_price: 899,
    offer_price: 599,
    images: [],
    size: [],
    type: "",
    isOnSale: false,
    fabric: "",
    userId: "66bae28c710d90b3d93bc2ce",
  });

  const OnchangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div>
      <form className="my-2 flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="productName">Produt Name</Label>
          <Input
            type="text"
            id="productName"
            placeholder="US Polo (Check Shirt)"
            onChange={OnchangeText}
          />
        </div>
        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="type">Type : </Label>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <Checkbox id="terms" />
              <Label htmlFor="size">T-SHIRT</Label>
            </div>
            <div className="flex gap-1 items-center">
              <Checkbox id="terms" />
              <Label htmlFor="size">SHIRT</Label>
            </div>
            <div className="flex gap-1 items-center">
              <Checkbox id="terms" />
              <Label htmlFor="size">PANT</Label>
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            placeholder="US Polo (Check Shirt)"
            onChange={OnchangeText}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="original_price">Original Price</Label>
          <Input
            type="number"
            id="original_price"
            placeholder=""
            onChange={OnchangeText}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="offer_price">Offer Price</Label>
          <Input
            type="number"
            id="offer_price"
            placeholder=""
            onChange={OnchangeText}
          />
        </div>{" "}
        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="size">Size : </Label>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label>S</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label>M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label>L</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label>XL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label>XXL</Label>
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fabric">Fabric</Label>
          <Input
            type="text"
            id="fabric"
            placeholder="cotton"
            onChange={OnchangeText}
          />
        </div>
        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Checkbox id="terms" />
          <Label htmlFor="size">Is On Sale</Label>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pictures">Images</Label>
          <Input id="pictures" accept="image/*" type="file" multiple />
        </div>
        <Button className="bg-red-500 hover:bg-red-600">CREATE PRODUCT</Button>
      </form>
    </div>
  );
};

export default BecomeASeller;
