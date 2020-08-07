import React, { useEffect, useState } from 'react';
import Template from '../../components/Template';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepo from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepo
      .getAllWithVideo()
      .then((categoriasComVideos) => {
        setInitialData(categoriasComVideos);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, []);

  return (
    <Template paddingAll={0}>
      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].video[0].title}
                url={initialData[0].video[0].url}
                videoDescription={initialData[0].video[0].description}
              />
              <Carousel
                ignoreFirstVideo
                key={categoria.id}
                category={initialData[0]}
              />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </Template>
  );
}

export default Home;
