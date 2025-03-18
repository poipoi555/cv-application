import { useState, useRef } from 'react';
import EducationEdit from './EducationEdit.jsx'


export default function Education() {
    const [isEdit, setIsEdit] = useState(false);
    const [formValues, setFormValues] = useState(
        { school: "", title: "", start: "", end: "" }
    );
    let nextId = useRef(0);
    const [educations, setEducations] = useState([]);
    const [currErrors, setCurrErrors] = useState({});

    function openForm() {
        setIsEdit(true);
    }
    
    function closeForm() {
        const errors = validateDate(formValues);
        setCurrErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsEdit(false);
            setEducations([...educations, { id: nextId++, school: formValues.school, title: formValues.title, startDate: formValues.start, endDate: formValues.end }
            ]);
        }
    }

    function validateDate(formValues) {
        let errors = {};
        if (formValues.school.length === 0) {
            errors.school = "School cannot be empty!";
        }
        if (formValues.title.length === 0) {
            errors.title = "Title cannot be empty!";
        } 

        let startDate = new Date(formValues.start);
        let endDate = new Date(formValues.end);
        if (startDate > endDate) {
            errors.date = "Start date cannot be greater than end date!";
        }
        return errors;
    }
    
    function updateForm(field, updatedVal) {
        setFormValues((prevVals) => ({...prevVals, [field]: updatedVal}));
    }
    
    return (
        <section>
            <div className="head">
                <h2 className="header">Educational Information</h2>
                <div className="buttons">
                    <button onClick={openForm}>Create</button>
                    <button onClick={closeForm}>Submit</button>
                </div>
            </div>
            <hr />
            {isEdit && <EducationEdit 
                            formValues={formValues}
                            updateForm={updateForm}
                        />}
            <div>
                {Object.keys(currErrors).length > 0 && Object.values(currErrors).map(err => 
                    <div style={{ color: "red" }}>Error: {err}</div>
                )}
            </div>

            <div style={{ padding: "12px" }}>
                {educations.map(education => 
                    <div key={education.id} style={{ border: "1px solid gray", padding: "12px", backgroundColor: "#e2f8fb", margin: "8px" }}>
                        <div>School Name: {education.school}</div>
                        <div>Title: {education.title}</div>
                        <div>Date: {education.startDate} to {education.endDate}</div>
                    </div>
                )}
            </div>
            <hr color="lightgray" />
        </section>
    );
}