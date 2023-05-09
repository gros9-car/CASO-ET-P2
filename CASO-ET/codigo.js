const aplicacion = document.querySelector('.container')
const url = ' https://perenual.com/api/species-list?page=1&key=sk-l0Po6459a25c599f7821'
fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(nombre => {
        console.log(nombre.common_name)
        document.createElement('p')
        p.innerHTML = nombre.common_name
        aplicacion.appendChild(p)
    });
})
.catch(err => console.log(err))