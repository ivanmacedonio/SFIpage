const validateFormData = (data) => {
    var errors = ''

    if (!/^0x[a-fA-F0-9]{40}$/.test(data)) {
        errors = 'Por favor, ingresa una dirección válida de billetera de la red Ethereum';
    }
    
    return errors;
}

export default validateFormData
