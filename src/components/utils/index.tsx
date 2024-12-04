import { NumericFormat, PatternFormat } from "react-number-format"
import TextField from '@mui/material/TextField'
import { ChangeEvent } from "react";

interface NumericFormatPriceProps {
    value?: string | number,
    label?: string,
    required?: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface PhoneFormatPriceProps {
    value?: string | number,
    label?: string,
    required?: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}



export const NumericFormatPrice = ({ handleChange, value, label, required }: NumericFormatPriceProps):JSX.Element => {
    return (
        <NumericFormat 
            value={value}
            label={label}
            name='price'
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ " 
            onChange={handleChange}
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

export const PhoneNumber = ({label, value, required, handleChange}: PhoneFormatPriceProps) => {
    return (
        <PatternFormat
            customInput={TextField} 
            value={value}
            format="(##) ####-####"
            label={label}
            onChange={handleChange}
            name="phone"
            color="info"
            required={required}
        />
    );
};