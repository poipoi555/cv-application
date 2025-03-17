import { useState } from 'react';

export default function Practical({ formValues, updateForm }) {
    const [resp, setResp] = useState("");
    const [resps, setResps] = useState([]);

    function updateRes(e) {
        setResp(e.target.value);
    }

    function clearResp() { // send back a single responsibility
        updateForm("resp", resp);
        setResps((prevVals) => ([...prevVals, resp]));
        setResp(""); 
    }


    return (
        <form onSubmit={e => e.preventDefault()}>
            <input 
                required
                placeholder="Enter company name"
                value={formValues.company}
                onChange={(e) => updateForm("company", e.target.value)}
            />
            <input
                required
                placeholder="Enter your position"
                value={formValues.position}
                onChange={(e) => updateForm("position", e.target.value)}
            />
            <input
                required
                placeholder="Enter your key responsibilities"
                value={formValues.resp}
                onChange={updateRes}
            />
            <button onClick={clearResp}>  
                +
            </button>
            <div>
                <input 
                    type="date" id="start"
                    required
                    placeholder="Start date (dd-MM-yyyy)"
                    value={formValues.start}
                    onChange={(e) => updateForm("start", e.target.value)}
                />
                <input 
                    type="date" id="end"
                    required
                    placeholder="End date (dd-MM-yyyy)"
                    value={formValues.end}
                    onChange={(e) => updateForm("end", e.target.value)}
                />
            </div>
            <div>
                {resps.length > 0 && 
                    <ul>
                        {resps.map(x => <li>{x}</li>)}
                    </ul>
                }
            </div>
        </form>
    );
}