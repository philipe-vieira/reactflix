import React, { useState } from 'react'
import Template from '../../../components/Template'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initialValues = {
    name: '',
    describe: '',
    color: '#',
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChangeInput(event) {
    const { value } = event.target
    const name = event.target.getAttribute('name')

    setValue(name, value)
  }
  return (
    <Template>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          setCategories([...categories, values])
          setValues(initialValues)
        }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            name="name"
            onChange={handleChangeInput}
            value={values.name}
            type="text"
          />
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              id="describe"
              name="describe"
              value={values.describe}
              onChange={handleChangeInput}
              cols="15"
              rows="2"
            />
          </label>
        </div>
        <div>
          <FormField
            label="Cor"
            name="color"
            onChange={handleChangeInput}
            value={values.color}
            type="color"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Voltar para a Home</Link>
    </Template>
  )
}

export default CadastroCategoria
