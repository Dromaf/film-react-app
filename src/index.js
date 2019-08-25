import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

   
    
    const moviesBd = [
      {
        id: 1,
        imageFon: 'https://www.soyuz.ru/public/uploads/files/2/7355329/201906112139380d23d05b46.jpg',
        imageBg: 'https://www.soyuz.ru/public/uploads/files/2/7355329/201906112139380d23d05b46.jpg',
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
        genre:[
          'Фантастика',
          'Боевик',
          'Приключения'
        ],
      },
      {
        id: 2,
        imageFon: 'https://storage1.censor.net/images/b/4/4/7/b4475c2c6c3406b517d9086a94294433/original.jpg',
        imageBg: 'https://storage1.censor.net/images/b/4/4/7/b4475c2c6c3406b517d9086a94294433/original.jpg',
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
        genre:[
          'Фантастика',
          'Боевик',
          'Приключения'
        ],
      },
      {
        id: 3,
        imageFon: 'https://playua.net/wp-content/uploads/2019/03/715250b1084a52d56a46e985dd5d90a8.jpg',
        imageBg: 'https://playua.net/wp-content/uploads/2019/03/715250b1084a52d56a46e985dd5d90a8.jpg',
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
        genre:[
          'Фантастика',
          'Боевик',
          'Приключения'
        ],
      },
      {
        id: 4,
        imageFon: 'https://img.gazeta.ru/files3/905/11750905/mstiteli-pic905-895x505-44281.jpg',
        imageBg: 'https://img.gazeta.ru/files3/905/11750905/mstiteli-pic905-895x505-44281.jpg',
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
        genre:[
          'Фантастика',
          'Боевик',
          'Приключения'
        ],
      },
      {
        id: 5,
        imageFon: 'https://tvfeed.in/cache/72/38/7238684670c835ebf13d9a4296cf6416.jpg',
        imageBg: 'https://tvfeed.in/cache/72/38/7238684670c835ebf13d9a4296cf6416.jpg',
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
        genre:[
          'Фантастика',
          'Боевик',
          'Приключения'
        ],
      }
    
    ];
    

ReactDOM.render(<App  moviesBd={moviesBd} />, document.getElementById('root'));