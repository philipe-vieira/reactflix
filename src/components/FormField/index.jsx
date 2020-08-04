import React from 'react';
import PropTypes from 'prop-types';

function FormField({ label, name, onChange, type, value }) {
  const fieldId = `id_${name}`
  const isTextarea = type === 'textarea'
  const tag = isTextarea ? "textarea" : "input"
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}:{' '}
        <input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default React.memo(FormField);
