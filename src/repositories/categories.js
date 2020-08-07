import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/category`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });
}

function getAllWithVideo() {
  return fetch(`${URL_CATEGORIES}?_embed=video`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    }
  );
}

export default {
  getAllWithVideo,
  getAll,
};
