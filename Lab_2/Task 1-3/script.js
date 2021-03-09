const elements = document.getElementsByTagName('a');

const showLinks = ()=>{
    const lastElem = elements.length-1;
    return `${elements.length} - кількість посиланнь. ${elements[0].text} - текст першого. ${elements[lastElem].text} - текст останнього`
}

const changeElemColor = (element, color) =>{
    const elems = document.querySelectorAll(`${element}`)
    elems.forEach(item =>{
        item.style.color = color
    })
}

const list = document.querySelector('.cityList')
console.log(list)

const configureLines = ()=>{
    const lines = list.querySelectorAll('li');
    lines.forEach(item =>{
        item.style.color = 'red'
        item.style.fontFamily='Arial'
    })
}

const addNewLine = (text)=>{
    const newLine = document.createElement('li');
    newLine.innerText = text;
    list.append(newLine);
    configureLines()
}
const removeLine = ()=>{
    list.removeChild(list.lastChild)
}

console.log(showLinks());
changeElemColor('p', 'blue')
configureLines()
addNewLine('Київ')
removeLine()