const table = document.createElement('table')
table.innerHTML += '<tr><td>Назва</td><td>Країна</td><td>Висота</td></tr>'

const addRow = (mountain, country, height) =>{
    table.innerHTML += `<tr><td>${mountain}</td><td>${country}</td><td>${height}</td></tr>`
}

addRow('Еверест', 'Тибет', 12800)

document.body.append(table)