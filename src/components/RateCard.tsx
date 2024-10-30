"use client";

import React from "react";
export default function RateCard() {

    const plan =   {
        "name": "1 неделя",
        "price": 699,
        "lengthInDays": 0,
        "isPopular": true,
        "isEndless": false,
        "isDiscount": false,
        "nonDiscountId": null,
        "id": "9d9d90ad-db27-4283-ab74-d4c018854c8c",
        "ownerId": "00000000-0000-0000-0000-000000000000",
        "statusId": null,
        "creationDateTime": "2024-10-30T23:14:12.6953265+03:00",
        "deleted": false
      }
    
  // , isColumn, isDiscount
  const isColumn = false;
  const isDiscount = true;
  const currentPrice = plan.price;
  const oldPrice = plan.price;
  const comment = "Чтобы просто начать 👍🏻"

  return (
    <div className="flex flex-col gap-5 py-5 border-greyAccent border rounded-3xl" >
        {isDiscount &&    <div></div>}
   
      <p className="font-bebas text-secondaryText text-3xl leading-8 uppercase">{plan.name}</p>
      <p className="font-ptRootUI text-mainText text-5xl font-bold">{currentPrice} ₽</p>
      {isDiscount && <p className="font-ptRootUI text-greyAccent text-2xl leading-8 font-medium line-through">{oldPrice} ₽</p>}
      <p className="font-ptRootUI text-icon text-base leading-5 font-medium">{comment}</p>
    </div>

    
  );
}
