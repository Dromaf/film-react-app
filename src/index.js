import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

    const movies = [
      {
        id: 1,
        image: '/images/slide1.jpg',
        imageBg: '/images/slide1b.webp',
        title: '1983'
      },
      {
        id: 2,
        image: '/images/slide2.jpg',
        imageBg: '/images/slide2b.webp',
        title: 'Russian doll'
      },
      {
        id: 3,
        image: '/images/slide3.jpg',
        imageBg: '/images/slide3b.webp',
        title: 'The rain',
      },
      {
        id: 4,
        image: '/images/slide4.jpg',
        imageBg: '/images/slide4b.webp',
        title: 'Sex education'
      },
      {
        id: 5,
        image: '/images/slide5.jpg',
        imageBg: '/images/slide5b.webp',
        title: 'Elite'
      },
      {
        id: 6,
        image: '/images/slide6.jpg',
        imageBg: '/images/slide6b.webp',
        title: 'Black mirror'
      }
    ];
    
    const moviesBd = [
      {
        id: 1,
        image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest/scale-to-width-down/324?cb=20180316141550',
        title: 'Мстители: Финал',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Кевин Файги',
        juicedBy: 'Кевин Файги',	
        language: 'Русский',
        starringImg: [
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Эванс, Марк Руффало, Крис Хемсворт, Скарлетт Йоханссон, Джереми Реннер, Дон Чидл, Пол Радд, Бри Ларсон, Карен Гиллан, Данай Гурира, Брэдли Купер, Джош Бролин',	
        music: 'Алан Сильвестри',
        production: 'Marvel Studios',
        time: '181 мин.',
        releaseDate: 'Апрель 22, 2019',
        year: '2019',
        description:'Спустя два года после распада Мстителей во время событий фильма «Первый мститель: Танос прибывает на Землю с целью ...',
        country: 'США',
        language: 'английский',
        budget:'356 млн $',
        boxOffice: '2 795 966 475 $',
        raiting:'7.1',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a4/The_Avengers_Endgame_Poster.jpg/267px-The_Avengers_Endgame_Poster.jpg',
        title: 'Мстители: Война бесконечности',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Кевин Файги',
        juicedBy: 'Кевин Файги',	
        language: 'Русский',
        starringImg: [
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Эванс, Марк Руффало, Крис Хемсворт, Скарлетт Йоханссон, Джереми Реннер, Дон Чидл, Пол Радд, Бри Ларсон, Карен Гиллан, Данай Гурира, Брэдли Купер, Джош Бролин',	
        music: 'Алан Сильвестри',
        production: 'Marvel Studios',
        time: '181 мин.',
        releaseDate: 'Апрель 22, 2019',
        year: '2019',
        description:'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet',
        country: 'США',
        language: 'английский',
        budget:'356 млн $',
        boxOffice: '2 795 966 475 $',
        raiting:'7.1',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bd/Spider-Man_Far_From_Home_poster.jpg/230px-Spider-Man_Far_From_Home_poster.jpg',
        title: 'Человек-паук: Вдали от дома',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Кевин Файги',
        juicedBy: 'Кевин Файги',	
        language: 'Русский',
        starringImg: [
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Эванс, Марк Руффало, Крис Хемсворт, Скарлетт Йоханссон, Джереми Реннер, Дон Чидл, Пол Радд, Бри Ларсон, Карен Гиллан, Данай Гурира, Брэдли Купер, Джош Бролин',	
        music: 'Алан Сильвестри',
        production: 'Marvel Studios',
        time: '181 мин.',
        releaseDate: 'Апрель 22, 2019',
        year: '2019',
        description:'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet',
        country: 'США',
        language: 'английский',
        budget:'356 млн $',
        boxOffice: '2 795 966 475 $',
        raiting:'7.1',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 4,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/07/Captain_Marvel_film_logo.jpg/230px-Captain_Marvel_film_logo.jpg',
        title: 'Капитан Марвел',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Кевин Файги',
        juicedBy: 'Кевин Файги',	
        language: 'Русский',
        starringImg: [
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg',
          'https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Эванс, Марк Руффало, Крис Хемсворт, Скарлетт Йоханссон, Джереми Реннер, Дон Чидл, Пол Радд, Бри Ларсон, Карен Гиллан, Данай Гурира, Брэдли Купер, Джош Бролин',	
        music: 'Алан Сильвестри',
        production: 'Marvel Studios',
        time: '181 мин.',
        releaseDate: 'Апрель 22, 2019',
        year: '2019',
        description:'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet',
        country: 'США',
        language: 'английский',
        budget:'356 млн $',
        boxOffice: '2 795 966 475 $',
        raiting:'7.1',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      }
    
    ];
    

ReactDOM.render(<App  moviesBd={moviesBd}  movies={movies} />, document.getElementById('root'));