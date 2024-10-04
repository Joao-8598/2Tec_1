let currentColor = 0;
const vermelhoTempo = 3000;
const amareloTempo = 1000;
const verdeTempo = 3000;

function trocarCor() {
    const luzes = document.querySelectorAll('.luz');

    luzes.forEach(luz => luz.classList.remove('active'));

    if (currentColor === 0) {
        luzes[0].classList.add('active');
        setTimeout(trocarCor, vermelhoTempo);
        currentColor = 1;
    } else if (currentColor === 1) {
        luzes[1].classList.add('active');
        setTimeout(trocarCor, amareloTempo);
        currentColor = 2;
    } else {
        luzes[2].classList.add('active');
        setTimeout(trocarCor, verdeTempo);
        currentColor = 0;
    }
}

trocarCor();
