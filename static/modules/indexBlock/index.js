async function IndexBlock(){
    let element = document.createElement('div');
    element.innerHTML = `    <header class="header">
        <div class="container">
           <!-- Header content -->
            <div class="header-row">

                <div class="header-content" data-aos="fade-up">
                    <h1 class="header-heading">FIIT Express<br>Учебная платформа</h1>
                    <p>Учись чему-то новому или делись знаними с другими, а мы поможем! <br> Сайт для репетиторов и учеников</p>
                </div>

                <div class="header-img" data-aos="fade-left">

                    <picture>
                        <source media="(max-width: 799px)" srcset="../static/img//header/hero-mobile.png">
                        <img src="../static/img//header/hero.png" alt="">
                    </picture>

                </div>
            </div>
        </div>
    </header>

    <section class="services">
        <div class="container">
            <div class="services-row">

                <div class="service-card" data-aos="fade-down">
                    <img class="service-card-img" src="../static/img//services/01.svg" alt="UI/UX Design">
                    <h3 class="service-card-title">Репетиторство</h3>
                    <p>Хорошо разбираешься в чем-то? Есть желание поделиться своими знаниями с другими? Здесь ты можешь стать репетитором/помогать другим.</p>
                </div>

                <div class="service-card" data-aos="fade-down">
                    <img class="service-card-img" src="../static/img//services/02.svg" alt="UI/UX Design">
                    <h3 class="service-card-title">Получение знаний</h3>
                    <p>Проблемы с учебой? Плохо разобрался в новой теме? Не можешь осилить сложную домашку? -Тут тебе помогут заполнить пробелы в знаниях.</p>
                </div>

                <div class="service-card" data-aos="fade-down">
                    <img class="service-card-img" src="../static/img/services/03.svg" alt="UI/UX Design">
                    <h3 class="service-card-title">Удобный интерфейс</h3>
                    <p>Сайт прост и понятен - легко создать свой продукт/разместить объявление или найти то, что тебе нужно. Удобная сортировка и фильтрация.</p>
                </div>


            </div>
        </div>
    </section>

    <section class="portfolio">
        <div class="container">
            <div class="portfolio-title">
                <h2 class="title-1">Самое популярное</h2>
            </div>

            <div class="project" data-aos="flip-up">
                <img src="../static/img/portfolio/01.jpg" alt="Online fashion store" class="project-img">
                <h3 class="project-title"><a href="#!">Шур по скидке</a></h3>
            </div>

            <div class="project" data-aos="flip-up">
                <img src="../static/img/portfolio/02.jpg" alt="Reebok Store" class="project-img">
                <h3 class="project-title"><a href="#!">Дискретка за копейки</a></h3>
            </div>

            <div class="project" data-aos="flip-up">
                <img src="../static/img/portfolio/03.jpg" alt="Braun Landing Page" class="project-img">
                <h3 class="project-title"><a href="#!">Приват от Волкова</a></h3>
            </div>

        </div>
    </section>`
    return element;
}