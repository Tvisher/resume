
$(function () {

    //вращающийся текс на первом экране
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elements);
    }
    $$('.circular').forEach(function (el) {
        var NS = "http://www.w3.org/2000/svg";

        var svg = document.createElementNS(NS, "svg");
        svg.setAttribute("viewBox", "0 0 100 100");

        var circle = document.createElementNS(NS, "path");
        circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
        circle.setAttribute("id", "circle");

        var text = document.createElementNS(NS, "text");
        var textPath = document.createElementNS(NS, "textPath");
        textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
        textPath.textContent = el.textContent;
        text.appendChild(textPath);

        svg.appendChild(circle);
        svg.appendChild(text);

        el.textContent = '';
        el.appendChild(svg);
    });





    // if (document.documentElement.clientWidth > 768) {
    //     //функция отртсовки лампочек с рандомной позицией
    //     const ballsPlay = (addClass, counter, elem) => {
    //         for (let i = 0; i < counter; i++) {
    //             let ball = document.createElement('span');
    //             ball.classList.add('ball');
    //             ball.classList.add(addClass);
    //             ball.style.left = (Math.random() * 100) + `%`;
    //             ball.style.top = (Math.random() * 100) + `%`;
    //             // ball.style.opacity = 0;
    //             elem.append(ball);
    //         }
    //     }

    //     let ballsWrapper = Array.from(document.querySelectorAll('.bals-wrapper'));
    //     ballsWrapper.forEach(item => {

    //         ballsPlay('ball-r-b', 5, item);
    //         ballsPlay('ball-r-s', 5, item);
    //         ballsPlay('ball-y-b', 5, item);
    //         ballsPlay('ball-y-s', 5, item);
    //         ballsPlay('ball-g-s', 5, item);
    //         ballsPlay('ball-g-b', 5, item);
    //     });
    // }

    //выпадающий текст из секции:
    $(".block__top").on('click', function () {
        $(this).parent().find('.block__drop').slideToggle(200);
        $(this).find('.block__btn').toggleClass('active');
        $(this).parent().find('.block__drop').toggleClass('active');
    });


    //зарисовка круга прокрутки страницы
    var $progress = $('.e-c-progress'),
        $indi = $('#e-indicator'),
        len = Math.PI * 2 * 100;
    $progress.css('stroke-dasharray', len);
    function update(v) {
        $indi.text(v);
        var offset = - len - len * v / 100;
        $progress.css('stroke-dashoffset', offset);
    }

    //вычисление процента прокрутки страницы
    function loader() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let load = scrollHeight - document.documentElement.clientHeight;
        let loaded = pageYOffset;
        return loaded / load * 100;
    }
    update(loader());

    //прокрутка к верху экрана
    document.querySelector('.bottomTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })



    // функция анимации элементов при прокрутке
    // const animated = (data) => {
    //     Array.from(document.querySelectorAll(`${data.selector}`)).forEach((item, i) => {
    //         if (item.classList.contains("animate__animated")) {
    //             return;
    //         }
    //         item.style.opacity = 0;
    //         let ElemPos = item.getBoundingClientRect().top;
    //         let topOfWindow = ElemPos - document.documentElement.clientHeight;
    //         let thirdHeight = document.documentElement.clientHeight / 4;
    //         let actuationHeight = Number(`${data.height}`);
    //         if (!actuationHeight) {
    //             actuationHeight = thirdHeight;
    //         }
    //         if ((topOfWindow + actuationHeight) < 0) {
    //             setTimeout(() => {
    //                 item.classList.add("animate__animated");
    //                 item.classList.add(`${data.animation}`);
    //                 item.style.opacity = 1;
    //             }, ++i * `${data.delay}` || 1);
    //         } else { return; }

    //     });
    // };



    window.addEventListener('scroll', () => {
        let procent = loader();
        update(procent);
        // animated({
        //     selector: '.ball',
        //     animation: 'animate__fadeInUp',
        //     height: 50,
        //     delay: 50,
        // });

        // animated({
        //     selector: '.section__title',
        //     animation: 'animate__fadeInUp',
        //     height: 1,
        //     delay: 50,
        // });

        // animated({
        //     selector: '.works__elem',
        //     animation: 'animate__fadeInUp',
        //     height: 1,
        //     delay: 50,
        // });

        // animated({
        //     selector: '.skills__elem',
        //     animation: 'animate__flipInX',
        //     delay: 20,
        //     height: 1,
        // });

        // animated({
        //     selector: '.section__subtitle',
        //     animation: 'animate__fadeInUp',
        //     delay: 50,
        //     height: 1,
        // });


        // animated({
        //     selector: '.contacts__form *',
        //     animation: 'animate__fadeInUp',
        //     // delay: 100,
        //     height: 1,
        // });
        // animated({
        //     selector: '.elements__item',
        //     animation: 'animate__fadeInUp',
        //     // delay: 100,
        //     height: 1,
        // });
        // animated({
        //     selector: '.elements__item p',
        //     animation: 'animate__fadeInUp',
        //     delay: 50,
        //     height: 1,
        // });

        // animated({
        //     selector: '.about__block',
        //     animation: 'animate__fadeInUp',
        //     delay: 50,
        //     height: 1,
        // });

    });


    //статичная анимация
    // animated({
    //     selector: '.info__title',
    //     animation: 'animate__fadeInUp',
    //     height: 50,
    //     delay: 450,
    // });

    // animated({
    //     selector: '.info__subtitle',
    //     animation: 'animate__fadeInUp',
    //     height: 50,
    //     delay: 0,
    // });

    // animated({
    //     selector: '.info__text',
    //     animation: 'animate__fadeInUp',
    //     height: 50,
    //     delay: 900,
    // });
    // animated({
    //     selector: '.circulars',
    //     animation: 'animate__fadeInUp',
    //     height: 50,
    //     delay: 900,
    // });


});




















