export default function GeneralEdit({ countryCodes, formValues, updateForm }) {
    return (
        <div className="form">
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    placeholder="Enter name"
                    value={formValues.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                />
                <input
                    placeholder="abc@youremail.com"
                    value={formValues.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                />
                <div>
                    <select onChange={(e) => updateForm("phoneNo", e.target.value)}>
                        <option value="placeholder" key="placeholder"></option>
                        {countryCodes.map(cCode => 
                                <option 
                                    value={cCode.code}
                                    key={cCode.code}>
                                        {cCode.country + " " + cCode.code}
                                </option>)}
                    </select>
                    <input 
                        placeholder="88889999"
                        value={formValues.phoneNo}
                        onChange={(e) => updateForm("phoneNo", e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}