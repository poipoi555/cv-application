export default function EducationEdit({ formValues, updateForm }) {

    return (
        <div className="form">
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    required
                    placeholder="Enter school name"
                    value={formValues.school}
                    onChange={(e) => updateForm("school", e.target.value)}
                />
                <input
                    required
                    placeholder="Enter your title"
                    value={formValues.title}
                    onChange={(e) => updateForm("title", e.target.value)}
                />
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
            </form>
        </div>
    );
}