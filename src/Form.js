import { useState } from "react";
import { useHistory } from "react-router";

function Form({ defaultData = {}, formElements, updateData }) {
  const history = useHistory();
  defaultData = defaultData || formElements.reduce((o, p) => ({ ...o, [p]: "" }), {});
  const [formData, setFormData] = useState(defaultData);
  const [valid, setValid] = useState(true);

  function handleSubmit(evt) {
    validate();
    evt.preventDefault();
    if (valid) {
      updateData(formData);
      setFormData(null);
      history.push('/')
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  function validate() {
    setValid(!Object.values(formData).includes(""));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="Form">
        {formElements.map(l => (
          <div>
            <label htmlFor={l}>{l[0].toUpperCase()+l.slice(1)}</label><br />
            <input onChange={handleChange} type="text" name={l} value={formData.l} />
          </div>))}
          <button type="submit">Submit</button>
          {!valid && <p style={{ color: "red" }}>Not Valid!</p>}
      </form>
    </div>
  )
}

export default Form;