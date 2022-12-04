import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface OfferInputProps {
    label: string
    value: string
    setValue: (newValue: string) => void
    className?: string
    fullWidth?: boolean
}

const OfferFormInput: React.FunctionComponent<{ props: OfferInputProps }> = ({props}) => {
    return (
        <div className={`${props.className}`}>
            <p>
                <label>
                    {`${props.label}:`}
                </label>
            </p>
            <ReactQuill
                className={``}
                theme={"snow"}
                value={props.value}
                onChange={props.setValue}/>
        </div>)
}
export default OfferFormInput
