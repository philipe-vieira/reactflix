import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    describe: '',
    color: '#ffffff',
  };

  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3333/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategories(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        })
        .catch((error) => {
          return { error, msg: 'Não foi possível pegar os dados' };
        })
    }
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([...categories, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="name"
          onChange={handleChangeInput}
          value={values.name}
        />
        <FormField
          type="textarea"
          label="Descrição"
          name="describe"
          onChange={handleChangeInput}
          value={values.describe}
        />
        <FormField
          label="Cor"
          name="color"
          onChange={handleChangeInput}
          value={values.color}
          type="color"
        />

        <Button>Cadastrar</Button>
      </form>

      {
        categories.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }
      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{category.title}</li>
        ))}
      </ul>

      <Link to="/">Voltar para a Home</Link>
    </Template>
  );
}

export default CadastroCategoria;
