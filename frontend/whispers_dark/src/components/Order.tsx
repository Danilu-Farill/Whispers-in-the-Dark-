// import { useState } from "react";
import '../styles/CategoryStructure.css';

interface OrderProps {
  selectedOrder: string;
  setSelectedOrder: (order: string) => void;
}

export const Order: React.FC<OrderProps> = ({ selectedOrder, setSelectedOrder }) => {
//   const [selectedOrder, setSelectedOrder] = useState("");
  const orders = [
    {label: "Seleccionar", value: ""},
    { label: "Ascendente", value: "asc" },
    { label: "Descendente", value: "desc" },
  ];
  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(event.target.value); // Actualiza el estado
  };
  return (
    <div>
      <label htmlFor="order-select" className='iconArrowText'>Ordenar </label>
      <select id="order-select" value={selectedOrder} onChange={handleOrderChange}>
        {orders.map((order) => (
          <option key={order.value} value={order.value}>
            {order.label}
          </option>
        ))}
      </select>
    </div>
  );
};
