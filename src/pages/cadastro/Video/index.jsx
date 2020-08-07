import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import videosRepo from '../../../repositories/videos';
import categoriesRepo from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handleChangeInput, values } = useForm({
    category: 'Front End',
    title: 'SEO com React',
    url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
  });

  useEffect(() => {
    categoriesRepo.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <Template>
      <h1>Cadastro de vídeo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // eslint-disable-next-line no-alert
          // alert('Video Cadastrado com sucesso!!!1!');
          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.title === values.category;
          });

          const hasCategoryId = categoriaEscolhida !== undefined;

          videosRepo
            .create({
              titulo: values.title,
              url: values.url,
              categoryId: hasCategoryId ? categoriaEscolhida.id : 0,
            })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });
        }}
      >
        <FormField
          label="Titulo do vídeo"
          name="title"
          onChange={handleChangeInput}
          value={values.title}
        />
        <FormField
          label="Url do vídeo"
          name="url"
          onChange={handleChangeInput}
          value={values.url}
        />
        <FormField
          label="Categoria"
          name="category"
          onChange={handleChangeInput}
          value={values.category}
          suggestions={
            categoryTitles[0] ? categoryTitles : ['Front End', 'Back End']
          }
        />
        <Button>Cadastrar Video</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </Template>
  );
}

export default CadastroVideo;
