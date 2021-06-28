/*let user = {
    name: "Alex",
    sayHello: function (year, month){
        console.log("hello " + this.name + year + month)
    }
}

let nik = {
    name: 'Nike'
}*/

//user.sayHello.bind(nik)(' 2021.24.06')

//user.sayHello.apply(nik, [2021,07])

//user.sayHello.call(nik, 2021, 07)

/*let a = {
    ab: '123',
    ac: '145'
}

console.log(a)

let b = {
}

b = {...a}

console.log(b)

delete b.ac
console.log( a)*/

/*let contactsBook = function() {
    let contactArr = []

    this.add = function(name, phone, email) {
        let user = {
            name,
            phone,
            email
        }
        contactArr.push(user)
    }

    this.delete = function(id){
        if(contactArr[id]) {
            contactArr.splice(id)
        }
    }

    this.show = function () {
        return contactArr
    }
}


let book = new contactsBook()

console.log(book)*/

//созд 3 метода. 1 доб массив. 2 функ показывает что лежит в записной книжке. 3 метод удалить объект из массива

/*let todo = function () {
    let todoArr = []

    this.add = function(todo) {
        let task = {
            todo:todo,
            flag:true
        }
    todoArr.push(task)
    this.show()
    }
    this.show = function() {
        console.log(todoAdd)
    }
    this.checked = function(id) {
        if(todoArr[id]) {
            todoArr[id].flag = false;
            this.show
        }
    }
}

let tod = new Todo();

tod.add('learn js');*/

let contactBook = function () {
    let contactArr = [];

    document.write(`<h2 class="h2_title"> Список пуст </h2>`)

    let create = function(name, phone, email) {
        let contactUser = {name,phone,email}
        return contactUser
    }
    this.add = function () {
        contactArr.push(create(prompt('Имя'), 
        prompt('Телефон'),
        prompt('Email')))

        this.show();
    }

    this.delete = function (id) {
        contactArr.splice(id,1)
        if (contactArr.length == 0) {
            let removeUl = document.querySelector('.lists')
            removeUl.remove()
            document.write(`<h2 class="h2_title"> Список пуст </h2>`)
            return
        }
        this.show()
    }

    this.show = function () {
        let elementUl = document.querySelector('.lists')

        if(!elementUl) {
            let h2 = document.querySelector('.h2_title')
            h2.remove();

            elementUl = document.createElement('ul')
            elementUl.classList.add('lists')
            document.body.appendChild(elementUl);
        }

        console.log(elementUl)

        elementUl.innerHTML=''

        contactArr.forEach(function(items,index){
            let elementLi = document.createElement('li')
            elementLi.innerHTML = `<strong>Имя:</strong> ${items.name}<br> <strong> Телефон:</strong> ${items.phone}<br>  <strong> Email:</strong> ${items.email} <br> <button id='${i}'> Delete ${items.name}</button>`

            elementUl.appendChild(elementLi)
        })

        /*let elementUl = document.createElement('ul')
        document.body.appendChild(elementUl);*/

        /*for( let i = 0; i < contactArr.length; i++) {
            let elementLi = document.createElement('li')
            elementLi.innerHTML = `<strong>Имя:</strong> ${contactArr[i].name}<br> <strong> Телефон:</strong> ${contactArr[i].phone}<br>  <strong> Email:</strong> ${contactArr[i].email} <br> <button id='${i}'> Delete ${contactArr[i].name}</button>`

            elementUl.appendChild(elementLi)   
        }
    }
}*/
//let book = new contactBook();