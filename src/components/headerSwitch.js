const devToMech = document.getElementById('dev-to-mech');
const mechToDev = document.getElementById('mech-to-dev');
// const descriptionContainer = document.querySelector('.description__container')

const switchWords = () => {
    devToMech.innerHTML = 'mechanic';
    mechToDev.innerHTML = 'developer';

    setTimeout(function () {
        devToMech.innerHTML = 'developer';
        mechToDev.innerHTML = 'mechanic';
    }, 500);
};

setInterval(switchWords, 1000);
