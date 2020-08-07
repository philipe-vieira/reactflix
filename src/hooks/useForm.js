const { useState } = require('react');

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeInput(event) {
    const { value } = event.target;
    const name = event.target.getAttribute('name');

    setValue(name, value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return { values, handleChangeInput, clearForm };
}

export default useForm;
