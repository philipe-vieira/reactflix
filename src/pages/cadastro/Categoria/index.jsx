import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    describe: '',
    color: '#ffffff',
  };

  const { values, handleChangeInput, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://phlix.herokuapp.com/categorias';

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
      });
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
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="title"
          onChange={handleChangeInput}
          value={values.title}
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

      {categories.length === 0 && <div>Loading...</div>}
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
