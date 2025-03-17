import { useState, useRef } from 'react';
import PracticalEdit from './PracticalEdit.jsx'


export default function Practical() {
    const [isEdit, setIsEdit] = useState(false);
    const [formValues, setFormValues] = useState(
        { company: "", position: "", start: "", end: "", fvResps: [] }
    );
    let nextId = useRef(0);
    let respId = useRef(0);
    const [experiences, setExperiences] = useState([]); // array of objects
    const [currErrors, setCurrErrors] = useState({});

    function openForm() {
        setIsEdit(true);
    }
    
    function closeForm() {
        const errors = validateDate(formValues);
        setCurrErrors(errors);

        // if no errors : 
        if (Object.keys(errors).length === 0) {
            setIsEdit(false);
            setExperiences([...experiences, { id: nextId.current++, company: formValues.company, 
                position: formValues.position, startDate: formValues.start, endDate: formValues.end, 
                expResps: formValues.fvResps }
            ]);

            setFormValues({ company: "", position: "", start: "", end: "", fvResps: [] });
        }
    }

    function validateDate(formValues) {
        let errors = {};
        if (formValues.company.length === 0) {
            errors.company = "Company cannot be empty!";
        }
        if (formValues.position.length === 0) {
            errors.position = "Position cannot be empty!";
        } 

        let startDate = new Date(formValues.start);
        let endDate = new Date(formValues.end);
        if (startDate > endDate) {
            errors.date = "Start date cannot be greater than end date";
        }
        return errors;
    }
    
    function updateForm(field, updatedVal) {
        if (field === "resp") { // a resp is sent back
            setFormValues((prevVals) => ({...prevVals, fvResps: [...prevVals.fvResps, 
                    { id: respId.current++, responsibility: updatedVal }
                ]
            }));
        } else {
            setFormValues((prevVals) => ({...prevVals, [field]: updatedVal}));
        }
    }
    
    return (
        <section>
            <h3>Practical Experience</h3>
            <button onClick={openForm}>Create</button>
            <button onClick={closeForm}>Submit</button>
            <hr />
            {isEdit && <PracticalEdit 
                            formValues={formValues}
                            updateForm={updateForm}
                        />}
            <div>
                {Object.keys(currErrors).length > 0 && Object.values(currErrors).map(err => 
                    <div style={{ color: "red" }}>Error: {err}</div>
                )}
            </div>

            <div>
                {experiences.map(experience => 
                    <div key={experience.id} style={{ border: "1px solid gray" }}>
                        <div>Company Name: {experience.company}</div>
                        <div>Position at Company: {experience.position}</div>
                        <div>Date: {experience.startDate} to {experience.endDate}</div>
                        <div>Key Responsibilities: 
                            <ul>
                                {experience.expResps.map(x => 
                                    <li>{x.responsibility}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}