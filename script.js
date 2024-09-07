function pComputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';

    return 'semut';
}

function getHasil(comp, player) {
    if ( player == comp ) return 'SERI!';
    if ( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
    if ( player == 'orang' ) return ( comp == 'gajah' ) ? 'MENANG' : 'KALAH';
    if ( player == 'semut' ) return ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
}


function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval

            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100);
}



const p = document.querySelectorAll('li img');
p.forEach(function(i) {
    i.addEventListener('click', function() {
        const pilihanComputer = pComputer();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        }, 1000)

        
})
    })








































// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = pComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);


//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComputer = pComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);


//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = pComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);


//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })