/* =========================================
   INFORMACIÓN DEL ÁRBOL
========================================= */

const information = {

    familia: {
        icon: "👨‍👩‍👧‍👦",
        title: "Familia",
        text: "Nuestra familia puede ser una de las primeras raíces de nuestra historia. Allí aprendemos valores, costumbres, formas de relacionarnos y muchas de las experiencias que nos acompañan durante nuestra vida."
    },

    infancia: {
        icon: "🧸",
        title: "Infancia",
        text: "La infancia está llena de experiencias que ayudan a formar nuestra personalidad. Los juegos, los aprendizajes, los lugares y las experiencias de esos años pueden permanecer en nuestra memoria."
    },

    recuerdos: {
        icon: "📸",
        title: "Recuerdos",
        text: "Los recuerdos conectan nuestro pasado con nuestro presente. Algunos pueden hacernos sonreír, otros enseñarnos algo y todos forman parte de nuestra historia."
    },

    personas: {
        icon: "🤝",
        title: "Personas importantes",
        text: "A lo largo de nuestra vida encontramos personas que dejan una huella en nosotros. Familiares, amigos, profesores y otras personas pueden influir en nuestras decisiones y aprendizajes."
    },

    tronco: {
        icon: "🌳",
        title: "El tronco",
        text: "El tronco representa aquello que sostiene nuestra identidad. Aquí encontramos conceptos como la voluntad, la inteligencia, la libertad y nuestra capacidad para construir quiénes somos."
    },

    decisiones: {
        icon: "🛤️",
        title: "Decisiones",
        text: "Cada decisión puede abrir diferentes posibilidades. No todas las decisiones tienen grandes consecuencias, pero todas forman parte del camino que construimos."
    },

    caminos: {
        icon: "🧭",
        title: "Caminos",
        text: "La vida puede tener diferentes caminos. Podemos cambiar de dirección, aprender de nuestros errores y elegir nuevas posibilidades."
    },

    pregunta1: {
        icon: "🍃",
        title: "¿Quién soy?",
        text: "Conocernos implica observar nuestras experiencias, nuestros valores, nuestros pensamientos y aquello que consideramos importante."
    },

    pregunta2: {
        icon: "🍃",
        title: "¿Qué quiero ser?",
        text: "Nuestro futuro no está completamente definido. Podemos imaginar diferentes posibilidades y trabajar para construir el camino que queremos seguir."
    },

    pregunta3: {
        icon: "🍃",
        title: "¿Qué me hace feliz?",
        text: "Reconocer aquello que nos hace sentir bien puede ayudarnos a comprender mejor nuestros intereses, relaciones y objetivos."
    },

    pregunta4: {
        icon: "🍃",
        title: "¿Qué quiero cambiar?",
        text: "Conocernos también significa reconocer aquello que queremos mejorar. Los cambios pueden formar parte de nuestro crecimiento."
    },

    experiencia: {
        icon: "🍎",
        title: "Experiencia",
        text: "Las experiencias son los acontecimientos que vivimos. De ellas podemos obtener aprendizajes que influyen en nuestras decisiones futuras."
    },

    conocimiento: {
        icon: "📚",
        title: "Conocimiento",
        text: "El conocimiento se construye a través del aprendizaje, la observación, las preguntas y las experiencias que acumulamos."
    },

    "identidad-fruto": {
        icon: "🍎",
        title: "Identidad",
        text: "Nuestra identidad es el resultado de muchos elementos: nuestras raíces, nuestras experiencias, nuestras decisiones, nuestras relaciones y la forma en que nos entendemos a nosotros mismos."
    }

};


/* =========================================
   ELEMENTOS
========================================= */

const loader =
    document.getElementById("loader");

const treeContainer =
    document.getElementById("tree-container");

const tree =
    document.getElementById("tree");

const treeParts =
    document.querySelectorAll(".tree-part");

const introSection =
    document.getElementById("inicio");

const sections =
    document.querySelectorAll(
        ".journey-section[data-active-part]"
    );

const modal =
    document.getElementById("modal");

const modalIcon =
    document.getElementById("modal-icon");

const modalTitle =
    document.getElementById("modal-title");

const modalText =
    document.getElementById("modal-text");

const closeModal =
    document.getElementById("close-modal");

const progressBar =
    document.getElementById("progress-bar");

const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");


/* =========================================
   ESTADO INICIAL
========================================= */

treeContainer.classList.add(
    "tree-hidden"
);


/* =========================================
   LOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader.classList.add(
                    "hidden"
                );

            },
            1200
        );

    }
);


/* =========================================
   MOSTRAR ÁRBOL
========================================= */

function showTree() {

    treeContainer.classList.remove(
        "tree-hidden"
    );

    treeContainer.classList.add(
        "tree-visible"
    );

}


/* =========================================
   OCULTAR ÁRBOL
========================================= */

function hideTree() {

    treeContainer.classList.remove(
        "tree-visible"
    );

    treeContainer.classList.add(
        "tree-hidden"
    );

}


/* =========================================
   CAMBIAR PARTE ACTIVA
========================================= */

function setActivePart(part) {

    treeParts.forEach(
        treePart => {

            treePart.classList.remove(
                "active"
            );

            if (
                treePart.dataset.part === part
            ) {

                treePart.classList.add(
                    "active"
                );

            }

        }
    );

    showTree();

}


/* =========================================
   OBSERVER DEL SCROLL
========================================= */

const observerOptions = {
    threshold: 0.55
};


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    const part =
                        entry.target.dataset.activePart;

                    setActivePart(part);

                }
            );

        },
        observerOptions
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================
   OBSERVER DEL INICIO
========================================= */

const introObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        hideTree();

                        treeParts.forEach(
                            treePart => {

                                treePart.classList.remove(
                                    "active"
                                );

                            }
                        );

                    } else {

                        showTree();

                    }

                }
            );

        },
        {
            threshold: 0.5
        }
    );


introObserver.observe(
    introSection
);


/* =========================================
   ABRIR MODAL
========================================= */

function openModal(infoKey) {

    const data =
        information[infoKey];

    if (!data) {
        return;
    }

    modalIcon.textContent =
        data.icon;

    modalTitle.textContent =
        data.title;

    modalText.textContent =
        data.text;

    modal.classList.add(
        "show"
    );

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModalFunction() {

    modal.classList.remove(
        "show"
    );

}


closeModal.addEventListener(
    "click",
    closeModalFunction
);


/* =========================================
   CERRAR MODAL FUERA
========================================= */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModalFunction();

        }

    }
);


/* =========================================
   ESC PARA CERRAR
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModalFunction();

        }

    }
);


/* =========================================
   ELEMENTOS DEL ÁRBOL
========================================= */

document.addEventListener(
    "click",
    event => {

        const element =
            event.target.closest(
                "[data-info]"
            );

        if (!element) {
            return;
        }

        const parentPart =
            element.closest(
                ".tree-part"
            );

        if (
            parentPart &&
            !parentPart.classList.contains(
                "active"
            )
        ) {
            return;
        }

        const info =
            element.dataset.info;

        openModal(info);

    }
);


/* =========================================
   BOTONES DE CONCEPTOS
========================================= */

const concepts =
    document.querySelectorAll(
        ".concept"
    );


concepts.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const concept =
                    button.dataset.concept;

                const conceptInformation = {

                    voluntad: {
                        icon: "🧠",
                        title: "Voluntad",
                        text: "La voluntad es nuestra capacidad para decidir y actuar de acuerdo con nuestros objetivos, incluso cuando existen dificultades."
                    },

                    inteligencia: {
                        icon: "💡",
                        title: "Inteligencia",
                        text: "La inteligencia nos permite comprender, aprender, resolver problemas y reflexionar sobre nuestras experiencias."
                    },

                    libertad: {
                        icon: "🕊️",
                        title: "Libertad",
                        text: "La libertad está relacionada con nuestra capacidad de tomar decisiones y asumir responsabilidad por ellas."
                    },

                    identidad: {
                        icon: "🪞",
                        title: "Identidad",
                        text: "La identidad reúne diferentes aspectos de nuestra vida y nos permite construir una idea de quiénes somos."
                    }

                };


                const data =
                    conceptInformation[concept];


                modalIcon.textContent =
                    data.icon;

                modalTitle.textContent =
                    data.title;

                modalText.textContent =
                    data.text;

                modal.classList.add(
                    "show"
                );

            }
        );

    }
);


/* =========================================
   PROGRESO DEL SCROLL
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            `${percentage}%`;

    }
);


/* =========================================
   BOTÓN COMENZAR
========================================= */

startButton.addEventListener(
    "click",
    () => {

        document
            .getElementById(
                "raices-section"
            )
            .scrollIntoView({

                behavior: "smooth"

            });

    }
);


/* =========================================
   REINICIAR EXPERIENCIA
========================================= */

function resetJourney() {

    if (studentSection) {

        studentSection.classList.remove(
            "unlocked"
        );

    }

    appleHasFallen = false;


    if (specialApple) {

        specialApple.classList.remove(
            "falling",
            "fallen"
        );

    }


    const message =
        document.querySelector(
            ".apple-message"
        );


    if (message) {

        message.classList.remove(
            "show"
        );

    }


    closeModalFunction();

}


/* =========================================
   BOTÓN REINICIAR
========================================= */

restartButton.addEventListener(
    "click",
    () => {

        resetJourney();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        hideTree();

    }
);
/* =========================================
   PARALLAX SUAVE DEL ÁRBOL
========================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            treeContainer.classList.contains(
                "tree-hidden"
            )
        ) {
            return;
        }

        const scroll =
            window.scrollY;

        const movement =
            Math.sin(
                scroll * 0.002
            ) * 4;

        tree.style.transform =
            `translateY(${movement}px)`;

    }
);


/* =========================================
   🍎 MANZANA ESPECIAL
   CONEXIÓN CON EL ESTUDIANTE
========================================= */

const specialApple =
    document.querySelector(
        ".special-fruit"
    );

const fruitsSection =
    document.getElementById(
        "frutos-section"
    );

const studentSection =
    document.getElementById(
        "student-section"
    );


let appleHasFallen = false;

let appleFallTimer = null;


/* =========================================
   DETECTAR CUANDO LLEGAMOS A FRUTOS
========================================= */

function checkFruitsSection() {

    if (!fruitsSection) {
        return;
    }

    if (appleHasFallen) {
        return;
    }

    const rect =
        fruitsSection.getBoundingClientRect();


    /*
       Activamos la caída cuando la sección
       de Frutos entra en la pantalla.

       No esperamos a que esté al 55%,
       solamente necesitamos que haya
       empezado a aparecer.
    */

    const sectionIsVisible =
        rect.top <
        window.innerHeight * 0.75
        &&
        rect.bottom > 0;


    if (sectionIsVisible) {

        appleHasFallen = true;


        /*
           Esperamos 1.5 segundos para que
           primero se vean las tres manzanas.
        */

        appleFallTimer =
            setTimeout(
                () => {

                    makeAppleFall();

                },
                1500
            );

    }

}


/* =========================================
   DETECTAR SCROLL
========================================= */

window.addEventListener(
    "scroll",
    checkFruitsSection
);


/* También comprobamos al cargar */

window.addEventListener(
    "load",
    checkFruitsSection
);


/* =========================================
   HACER CAER LA MANZANA
========================================= */

function makeAppleFall() {

    if (!specialApple) {
        return;
    }


    /*
       Si ya está cayendo o ya cayó,
       no hacemos nada.
    */

    if (
        specialApple.classList.contains(
            "falling"
        )
        ||
        specialApple.classList.contains(
            "fallen"
        )
    ) {

        return;

    }


    /*
       Iniciamos la animación.
    */

    specialApple.classList.add(
        "falling"
    );


    /*
       Cuando termina la animación,
       quitamos "falling" y ponemos
       "fallen".
    */

    specialApple.addEventListener(
        "animationend",
        () => {

            specialApple.classList.remove(
                "falling"
            );


            specialApple.classList.add(
                "fallen"
            );


            showAppleMessage();

        },
        {
            once: true
        }
    );

}


/* =========================================
   MENSAJE DE LA MANZANA
========================================= */

function showAppleMessage() {

    let message =
        document.querySelector(
            ".apple-message"
        );


    if (!message) {

        message =
            document.createElement(
                "div"
            );


        message.className =
            "apple-message";


        message.textContent =
            "🍎 Haz clic en la manzana...";


        const treeElement =
            document.getElementById(
                "tree"
            );


        if (treeElement) {

            treeElement.appendChild(
                message
            );

        }

    }


    message.classList.add(
        "show"
    );

}


/* =========================================
   CLICK EN LA MANZANA CAÍDA
========================================= */

if (specialApple) {

    specialApple.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            /*
               La manzana solamente funciona
               después de haber terminado
               la caída.
            */

            if (
                !specialApple.classList.contains(
                    "fallen"
                )
            ) {

                return;

            }


            /*
               Ocultamos el mensaje.
            */

            const message =
                document.querySelector(
                    ".apple-message"
                );


            if (message) {

                message.classList.remove(
                    "show"
                );

            }


            /*
               Cerramos cualquier modal.
            */

            closeModalFunction();


            /*
               DESBLOQUEAMOS
               "EL ESTUDIANTE".
            */

            if (studentSection) {

                studentSection.classList.add(
                    "unlocked"
                );


                /*
                   Ahora sí podemos desplazarnos
                   hasta la sección.
                */

                studentSection.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}


/* =========================================
   REINICIAR EXPERIENCIA
========================================= */

function resetJourney() {


    /*
       Cancelamos cualquier temporizador
       pendiente de la manzana.
    */

    if (appleFallTimer) {

        clearTimeout(
            appleFallTimer
        );

        appleFallTimer = null;

    }


    /*
       Bloqueamos nuevamente
       "El estudiante".
    */

    if (studentSection) {

        studentSection.classList.remove(
            "unlocked"
        );

    }


    /*
       Permitimos que la manzana
       vuelva a caer.
    */

    appleHasFallen = false;


    /*
       Devolvemos la manzana
       a su estado original.
    */

    if (specialApple) {

        specialApple.classList.remove(
            "falling",
            "fallen"
        );

    }


    /*
       Ocultamos el mensaje.
    */

    const message =
        document.querySelector(
            ".apple-message"
        );


    if (message) {

        message.classList.remove(
            "show"
        );

    }


    /*
       Cerramos cualquier modal.
    */

    closeModalFunction();

}