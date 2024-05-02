import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CreateQuote from "../CreateQuote/CreateQuote";

function CustomDrawer({
  placement,
  open,
  onClose,
  totalQuantitySum,
  subtotalSum,
  cartItems,
  updateQuantity,
  removeItemFromCart,
  clearCart,
}) {
  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleScroll = (event) => {
    const container = event.target;
    if (
      container.scrollHeight - container.scrollTop ===
      container.clientHeight
    ) {
      console.log("Cargando mas elementos...");
    }
  };

  return (
    <Drawer placement={placement} open={open} onClose={onClose} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          {totalQuantitySum} productos en el carrito
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
        Subtotal: ${formatNumberWithCommas(subtotalSum)} MXN
      </Typography>
      <div className="flex">
        <Button
          className="mr-2"
          size="sm"
          variant="outlined"
          disabled={cartItems.length === 0}
        >
          Ver y editar carrito
        </Button>
        <PDFDownloadLink document={<CreateQuote />} fileName="cotizacion.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Cargando documento..."
            ) : (
              <Button
                size="sm"
                variant="outlined"
                disabled={cartItems.length === 0}
              >
                Crear cotización
              </Button>
            )
          }
        </PDFDownloadLink>
        {/* <Button
          size="sm"
          variant="outlined"
          disabled={cartItems.length === 0}
        >
          Crear cotización
        </Button> */}
      </div>
      <div
        className="mt-4 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
        onScroll={handleScroll}
        style={{ maxHeight: "calc(100vh - 300px)" }}
      >
        {cartItems.map((item) => (
          <div key={item.product.id} className="flex gap-4">
            <img
              src={item.product.images[0]}
              alt={item.product.images[0]}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <Typography variant="h6">{item.product.name}</Typography>
              <Typography color="gray">${item.product.price} MXN</Typography>
              <div className="flex items-center gap-1">
                <Typography color="gray">Cantidad:</Typography>
                <input
                  type="number"
                  value={item.product.quantity}
                  className="w-16 rounded-md border border-blue-gray-300 px-2 py-1"
                  onChange={(e) =>
                    updateQuantity(item.product.id, parseInt(e.target.value))
                  }
                />
                <IconButton
                  variant="text"
                  color="red"
                  onClick={() => removeItemFromCart(item.product.id)}
                >
                  <TrashIcon className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          color="red"
          size="lg"
          onClick={() => clearCart()}
          disabled={cartItems.length === 0}
        >
          Limpiar el carrito
        </Button>
      </div>
    </Drawer>
  );
}

export default CustomDrawer;