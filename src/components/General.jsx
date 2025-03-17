import { useState } from 'react';
import GeneralEdit from './GeneralEdit.jsx'

const countryCodes = [
    { country: "Singapore", code: "+65" },
    { country: "USA", code: "+1" },
    { country: "UK", code: "+44" },
    { country: "Japan", code: "+81" },
    { country: "India", code: "+91" }
];


export default function General() {
    const [isEdit, setIsEdit] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "", email: "", phoneNo: ""
    });

    function openForm() {
        setIsEdit(true);
    }
    
    function closeForm() {
        setIsEdit(false);
    }
    
    function updateForm(field, updatedVal) {
        setFormValues((prevVals) => ({...prevVals, [field]: updatedVal}));
    }

    
    return (
        <section>
            <h3>General Information</h3>
            <button onClick={openForm}>Edit</button>
            <button onClick={closeForm}>Submit</button>
            <hr />
            {isEdit && <GeneralEdit 
                            countryCodes={countryCodes} 
                            formValues={formValues}
                            updateForm={updateForm}
                        />}
            {!isEdit && 
                <div>
                    <div>Name: {formValues.name}</div>
                    <div>Email: {formValues.email}</div>
                    <div>Phone Number: {formValues.phoneNo}</div>
                </div>
            }
        </section>
    );
}