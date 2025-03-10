import { useState } from "react";
import { OrderModel } from "@/models/OrderModel";

export function useOrderViewModel() {
    const [order, setOrder] = useState<OrderModel>({
        shape: "Emperor",
        scale: '25.5"-27"',
        pickups: "Fokian",
        inlays: "Точки",
        wiring: "1 громкость, 1 тон, 3 позиции",
        totalPrice: "166456 р.",
    });

    const [cardNumber, setCardNumber] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvv, setCvv] = useState("");

    const submitPayment = () => {
        console.log("Оплата проведена:", {
            order,
            cardNumber,
            expiration,
            cvv,
        });
    };

    return {
        order,
        cardNumber,
        expiration,
        cvv,
        setCardNumber,
        setExpiration,
        setCvv,
        submitPayment,
    };
}
