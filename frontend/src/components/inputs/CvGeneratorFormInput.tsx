import React from "react";

interface CVFormInputProps {
    label: string
    value: string
    type: string,
    setValue: (newValue: string) => void
    className?: string
}

const CvFormInput: React.FunctionComponent<{ props: CVFormInputProps }> = ({props}) => {
    return (<div>
        <p>
            <label>
                {`${props.label}:`}
            </label>
        </p>
        {
            props.type==='textarea' &&
            <textarea 
                className={`bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        }
        {
            props.type==='casual' &&
            <input 
                className={`bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        }

    </div>)
}
export default CvFormInput