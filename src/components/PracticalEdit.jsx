import { useState } from 'react';

export default function Practical({ formValues, updateForm }) {
    const [resp, setResp] = useState("");
    const [resps, setResps] = useState([]);

    function updateRes(e) {
        setResp(e.target.value);
    }

    function clearResp() { // send back a single responsibility
        if (resp.length > 0) {
            updateForm("resp", resp);
            setResps((prevVals) => ([...prevVals, resp]));
            setResp(""); 
        }
    }


    return (
        <div className="form">
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
                <br></br>
                <div style={{ maxWidth: "100%", display: "flex", gap: "8px", justifyContent: "center" }}>
                    <input
                        required
                        placeholder="Enter your key responsibilities"
                        value={formValues.resp}
                        onChange={updateRes}
                    />
                    <button onClick={clearResp} style={{ 
                        width: "40px", height: "25px", textAlign: "centre", display: "flex", justifyContent: "center",
                        alignItems: "center" }}>  
                        +
                    </button>
                </div>
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
                <div className="list">
                    {resps.length > 0 && 
                        <ul>
                            {resps.map(x => <li>{x}</li>)}
                        </ul>
                    }
                </div>
            </form>
        </div>
    );
}