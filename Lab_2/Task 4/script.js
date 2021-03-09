const books = [
    {
        bookName:'Хоббіт',
        author:'Дж. Р. Р. Толкієн',
        publishingYear:'21.09.1937'
    },
    {
        bookName:'Майстер і Маргарита',
        author:'М. Булгаков',
        publishingYear:'1966'
    },
    {
        bookName:'Хрещений Батько',
        author:'М. П`юзо',
        publishingYear:'1969'
    },
    {
        bookName:'Граф Монте-Крісто',
        author:'А. Дюма',
        publishingYear:'1844'
    },
    {
        bookName:'Місто',
        author:'В. Підмогильний',
        publishingYear:'1928'
    },
]

const list = document.createElement('ol')

const createBookList = (bookArray) =>{
    bookArray.forEach(element => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <p>${element.bookName}</p>
            <p>${element.author}</p>
            <p>${element.publishingYear}</p>`

        list.append(listItem)
    });
    document.body.append(list)
}

const addLinks = ()=>{
    const listItems = list.querySelectorAll('li')
    listItems.forEach(item =>{
        item.innerHTML +='<a href="#">Посилання на книгу</a>'
    })
}

createBookList(books)
addLinks()