/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return product ? acc + product.price * item.qty : acc;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table className="table-auto text-left border-separate border-spacing-x-5">
            <thead>
                <tr>
                    <th className="w-400px">Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 &&
                    cart.map((item) => {
                        const product = products.find((product) => product.id === item.id);
                        if (!product) return null; // Ensure product exists before rendering

                        return (
                            <tr key={item.id}>
                                <td>{product.title}</td>
                                <td>
                                    Rp
                                    {product.price.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR",
                                    })}
                                </td>
                                <td>{item.qty}</td>
                                <td>
                                    Rp
                                    {(product.price * item.qty).toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR",
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                <tr ref={totalPriceRef}>
                    <td colSpan={3} className="font-bold">
                        Total Price
                    </td>
                    <td className="font-bold">
                        Rp{totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableCart;
