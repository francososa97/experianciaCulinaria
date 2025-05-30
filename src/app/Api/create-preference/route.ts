// src/app/api/create-preference/route.ts

import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const mp = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    debugger;
    const body = await req.json();
    const { title, price, quantity } = body;

    const preference = new Preference(mp);
    const result = await preference.create({
      body: {
        items: [
          {
            title,
            quantity: Number(quantity),
            unit_price: Number(price),
            currency_id: "ARS",
            id: ""
          },
        ],
        back_urls: {
          success: `${process.env.BASE_URL}/checkout-success`,
          failure: `${process.env.BASE_URL}/checkout-failure`,
          pending: `${process.env.BASE_URL}/checkout-pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error("Error creando preferencia:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error creando preferencia" }),
      { status: 500 }
    );
  }
}
