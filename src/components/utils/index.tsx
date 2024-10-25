import { NumericFormat, PatternFormat } from "react-number-format"
import TextField from '@mui/material/TextField'

interface NumericFormatPriceProps {
    value?: string | number,
    label?: string,
    required?: boolean
}

interface PhoneFormatPriceProps {
    value?: string | number,
    label?: string,
    required?: boolean
}



export const NumericFormatPrice = ({ value, label, required }: NumericFormatPriceProps):JSX.Element => {
    return (
        <NumericFormat 
            value={value}
            label={label}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ " 
            customInput={TextField}
            placeholder="R$ 25,00"
            decimalScale={2}
            fixedDecimalScale={true}
            type="text"
            color="info"
            required={required}
        />
    );
};

export const PhoneNumber = ({label, value, required}: PhoneFormatPriceProps) => {
    return (
        <PatternFormat
            customInput={TextField} 
            value={value}
            format="(##) ####-####"
            label={label}
            color="info"
            required={required}
        />
    );
};