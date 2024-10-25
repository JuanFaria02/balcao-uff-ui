import { NumericFormat, PatternFormat } from "react-number-format"
import TextField from '@mui/material/TextField'

interface NumericFormatPriceProps {
    value?: string | number
}


export const NumericFormatPrice = ({ value }: NumericFormatPriceProps):JSX.Element => {
    return (
        <NumericFormat 
            value={value}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ " 
            customInput={TextField}
            placeholder="R$ 25,00"
            decimalScale={2}
            fixedDecimalScale={true}
            type="text"
            color="info"
        />
    );
};

export const PhoneNumber = () => {
    return (
        <PatternFormat
            customInput={TextField} 
            format="(##) ####-####"
            label="Informações de contato"
            color="info"

        />
    );
};