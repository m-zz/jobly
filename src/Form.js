import { useState } from "react";
import { useHistory } from "react-router";

function Form({ defaultData, formElements, updateData }) {
  const history = useHistory();
  defaultData = defaultData || formElements.reduce((o, p) => ({ ...o, [p]: "" }), {});
  const [formData, setFormData] = useState(defaultData);
  const [valid, setValid] = useState(true);

  function handleSubmit(evt) {
    validate();
    evt.preventDefault();
    if (valid) {
      updateData(formData);
      // setFormData(defaultData);
      // history.push('/')
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  function validate() {
    setValid(!Object.values(formData).includes(""));
  }

  function camelCaseToLabel(str) {
    let strArr = str.split('');
    for (let i in strArr){
      if (strArr[i].toUpperCase() === strArr[i]) {
        strArr[i] = " " + strArr[i];
      }
    }
    return strArr[0].toUpperCase() + strArr.join("").slice(1);
  }

  return (
    <div className="default-form">
      <form onSubmit={handleSubmit} className="Form">
        {formElements.map(l => (
          <div key={l} className="mb-2">
            <label className="form-label" htmlFor={l}>
              {camelCaseToLabel(l)}
            </label><br />
            <input
              className="form-control"
              onChange={handleChange}
              type={l === "password" ? "password" : "text"}
              name={l}
              value={formData[l]} />
          </div>))}
          <button className="btn btn-primary" type="submit">Submit</button>
          {!valid && <p style={{ color: "red" }}>Not Valid!</p>}
      </form>
    </div>
  )
}

export default Form;