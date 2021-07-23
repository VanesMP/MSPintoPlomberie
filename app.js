// TODO : creation d une animation danss le syle goutte d'eau pour le cureur de l' utilisateur.
window.addEventListener('click', (e) => {

    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.top = `${e.pageX - 50}px`;
    document.body.appendChild(rond);
})



//