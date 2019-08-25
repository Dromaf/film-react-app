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
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bd/Spider-Man_Far_From_Home_poster.jpg/230px-Spider-Man_Far_From_Home_poster.jpg',
        title: 'Человек-паук: Вдали от дома',
        directed: 'Джон Уоттс',
        producer: 'Кевин Файги, Эми Паскаль, Виктория Алонсо',
        juicedBy: 'Spider-Man: Far from Home',
        starringImg: [
          'https://image.tmdb.org/t/p/w138_and_h175_face/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/92sBuFC8tWPG7IqGDJNxysT7tIF.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/qjYcO8jKNlb7lnJ05vh2U7lNt8r.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/rOVBKURoR7TrG8MYxTuNUFj3E68.jpg'
        ],
        starring: 'Том Холланд, Сэмюэл Л. Джексон, Джейк Джилленхол, Зендея, Коби Смолдерс, Мариса Томей, Джон Фавро, Джейкоб Баталон,      Тони Револори, Энгаури Райс',	
        music: 'Майкл Джаккино',
        production: 'Marvel Studios',
        time: '129 мин.',
        releaseDate: '26 июня 2019',
        year: '2019',
        description:'Питер Паркер вместе с друзьями отправляется на летние каникулы в Европу. Однако...',
        country: 'США',
        language: 'английский',
        budget:'160 млн $',
        boxOffice: '$1 111 407 071 $',
        raiting:'7.5',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a4/The_Avengers_Endgame_Poster.jpg/267px-The_Avengers_Endgame_Poster.jpg',
        title: 'Мстители: Финал',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Кевин Файги',
        juicedBy: '«Avenge the fallen»',
        starringImg: [
          'https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/lrhth7yK9p3vy6p7AabDUM1THKl.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/8CgFKCZJVwZxa1F88n8drEux0vT.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg'
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
        raiting:'7.7',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/07/Captain_Marvel_film_logo.jpg/230px-Captain_Marvel_film_logo.jpg',
        title: 'Капитан Марвел',
        directed: 'Анна Боден, Райан Флек',
        producer: 'Виктория Алонсо, Луис Д’Эспозито, Кевин Файги',
        juicedBy: '«Быстрее. Выше. Сильнее»',
        starringImg: [
          'https://image.tmdb.org/t/p/w138_and_h175_face/4ZgxRd2ADYVm2gd5yQJa1emtMl5.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/qjYcO8jKNlb7lnJ05vh2U7lNt8r.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/vjHKwoQKnwQKtYzyD8sHYXJSO2D.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/4077Cyuo1mw53u1gNjLyQkqeZN0.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/vVAvoiE6FQ4couqaB0ogaHR6Ef7.jpg'
        ],
        starring: 'Бри Ларсон, Сэмюэл Л. Джексон,  Бен Мендельсон, Джуд Лоу, Аннетт Бенинг, Джимон Хонсу, Ли Пейс, Лашана Линч, Джемма Чан, Кларк Грегг',	
        music: 'Пинар Топрак',
        production: 'Marvel Studios',
        time: '123 мин.',
        releaseDate: '27 февраля 2019',
        year: '2019',
        description:'После столкновения с враждующими инопланетными расами, пилот военно-воздушных сил Кэрол Дэнверс обретает...',
        country: 'США',
        language: 'английский',
        budget:'427 млн $',
        boxOffice: '1 128 274 794 $',
        raiting:'6.5',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 4,
        image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest/scale-to-width-down/324?cb=20180316141550',
        title: 'Мстители: Война бесконечности',
        directed: 'Энтони Руссо, Джо Руссо',
        producer: 'Виктория Алонсо, Митчелл Белл, Эри Коста',
        juicedBy: '«An entire universe. Once and for all»',	
        language: 'английский',
        starringImg: [
          'https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/lrhth7yK9p3vy6p7AabDUM1THKl.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/8CgFKCZJVwZxa1F88n8drEux0vT.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Хемсворт, Марк Руффало, Крис Эванс, Скарлетт Йоханссон, Дон Чидл, Бенедикт Камбербэтч,        Том Холланд, Чедвик Боузман, Зои Салдана',	
        music: 'Алан Сильвестри',
        production: 'Marvel Studios',
        time: '149 мин.',
        releaseDate: '23 апреля 2018',
        year: '2018',
        description:'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы ...',
        country: 'США',
        budget:'$321 млн $',
        boxOffice: '1 369 544 272 $',
        raiting:'7.8',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      },
      {
        id: 5,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/04/The_Avengers_Age_of_Ultron_poster.jpg/267px-The_Avengers_Age_of_Ultron_poster.jpg',
        title: 'Мстители: Эра Альтрона',
        directed: 'Джосс Уидон',
        producer: 'Кевин Файги, Виктория Алонсо, Митчелл Белл',
        juicedBy: '«A new age begins»',
        starringImg: [
          'https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/lrhth7yK9p3vy6p7AabDUM1THKl.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/8CgFKCZJVwZxa1F88n8drEux0vT.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg',
          'https://image.tmdb.org/t/p/w138_and_h175_face/tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg'
        ],
        starring: 'Роберт Дауни мл., Крис Хемсворт, Марк Руффало, Крис Эванс, Скарлетт Йоханссон, Дон Чидл, Бенедикт Камбербэтч,        Том Холланд, Чедвик Боузман, Зои Салдана',
        music: 'Дэнни Элфман, Брайан Тайлер',
        production: 'Marvel Studios',
        time: '141 мин.',
        releaseDate: '13 апреля 2015',
        year: '2015',
        description:'Человечество на грани уничтожения. На этот раз людям угрожает Альтрон — искусственный интеллект, ранее созданный для...',
        country: 'США',
        language: 'английский',
        budget:'250 млн $',
        boxOffice: '1 405 403 694 $',
        raiting:'7.3',
        trailer:'https://www.youtube.com/watch?v=cSqi-8kAMmM',
        genre:'Фантастика'
      }
    
    ];
    

ReactDOM.render(<App  moviesBd={moviesBd}  movies={movies} />, document.getElementById('root'));