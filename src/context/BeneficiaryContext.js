import { createContext } from "react";

const BeneficiaryContext = createContext({
    full_name : null,
    identification: null,
    email: null,
    phone: null,
    percentage: null
})

export default BeneficiaryContext