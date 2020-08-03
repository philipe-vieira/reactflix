import React from 'react'

function FormField({ label, name, onChange, type, value }) {
  return (
    <label>
      {label}:{' '}
      <input type={type} value={value} name={name} onChange={onChange} />
    </label>
  )
}

export default React.memo(FormField)
