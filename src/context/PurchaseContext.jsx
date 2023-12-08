import { createContext, useContext, useState } from "react";

const PurchaseContext = createContext();

export const usePurchaseContext = () => {
  return useContext(PurchaseContext);
};

export const PurchaseProvider = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState({
    amount: null,
    id: null,
    code: null,
    wallet: null,
    full_name: null,
    identification: null,
    email: null,
    phone: null,
    percentage: null,
  });

  const updatePurchaseData = (newData) => {
    setPurchaseData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <PurchaseContext.Provider value={{ purchaseData, updatePurchaseData }}>
      {children}
    </PurchaseContext.Provider>
  );
};
