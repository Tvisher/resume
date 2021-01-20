

$(function () {
    // прелоадер
    $('.loader_wrapper').delay(1000).fadeOut('slow', function () {
        $('body').removeClass('loading');
    });
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

    //Функция подмены Src у картинок в зависимости от разрешения экрана устройства
    const substitutionSrc = () => {
        Array.from(document.querySelectorAll('.works__elem picture img')).forEach(elem => {
            let src = elem.src;
            function checkWindowWidth() {
                if (document.documentElement.clientWidth > 600) {
                    elem.src = src;
                }
                else {
                    let newSrc = src.slice(0, -4) + 'Min.png';
                    elem.src = '';
                    elem.src = newSrc;
                }
            }

            checkWindowWidth();
            $(window).resize(function () {
                checkWindowWidth();
            });

        });

        Array.from(document.querySelectorAll('.works__elem picture source')).forEach(elem => {
            let srcset = elem.srcset;

            function checkWindowWidth() {
                if (document.documentElement.clientWidth > 600) {
                    elem.srcset = srcset;
                }
                else {
                    let NewSrcset = srcset.slice(0, -5) + 'Min' + srcset.slice(-5, srcset.length);
                    elem.srcset = '';
                    elem.srcset = NewSrcset;
                }
            }
            checkWindowWidth();
            $(window).resize(function () {
                checkWindowWidth();
            });
        });
    };
    substitutionSrc();



    if (document.documentElement.clientWidth > 768) {
        //функция отртсовки лампочек с рандомной позицией
        const ballsPlay = (addClass, counter, elem) => {
            for (let i = 0; i < counter; i++) {
                let ball = document.createElement('span');
                ball.classList.add('ball');
                ball.classList.add(addClass);
                ball.style.left = (Math.random() * 100) + `%`;
                ball.style.top = (Math.random() * 100) + `%`;
                // ball.style.opacity = 0;
                elem.append(ball);
            }
        };

        let ballsWrapper = Array.from(document.querySelectorAll('.bals-wrapper'));
        ballsWrapper.forEach(item => {

            ballsPlay('ball-r-b', 5, item);
            ballsPlay('ball-r-s', 5, item);
            ballsPlay('ball-y-b', 5, item);
            ballsPlay('ball-y-s', 5, item);
            ballsPlay('ball-g-s', 5, item);
            ballsPlay('ball-g-b', 5, item);
        });
    }

    //выпадающий текст из секции about:
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
        let loaded = window.pageYOffset;
        return loaded / load * 100;
    }
    update(loader());

    //прокрутка к верху экрана
    document.querySelector('.bottomTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener('scroll', () => {
        let procent = loader();
        update(procent);
    });

});
























