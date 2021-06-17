// Задача 10 - Регулярные выражения

// (https?:\/\/[a-zA-Z0-9-_.]*)(\/.*\/)?(\?[\w=&]*)?(#.*\/?) -regex101.com


let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

let parsUrl = function (url) {
    let arr = [],
        regExp = /(https?:\/\/[a-zA-Z0-9-_.]*)(\/.*\/)?(\?[\w=&]*)?(#.*\/?)/,
        parsUrlArr = url.match(regExp)

        for(let i = 1; i <=parsUrlArr.length; i++ ) {
            arr.push(parsUrlArr[i])
        }

        return arr
}
console.log (parsUrl(url));

// Задача 8 - Регулярные выражения

let number = '+375292222222';

let testnumber = (str)=>{
    let expReg = /\+375\s?\(?[0-9]{2}\)?\s?-?\d{3}\s?-?\d{2}\s?-?\d{2}/,
        result = expReg.test(str);

        return result
}

console.log(testnumber(number));

// Задача 12 - ФУнкции

let firstName = "Алексей",
    secondName = "Агеев",
    lastName = "Викторович",
    groupNumber = "fe110";

let createofPrint = (firtsName,secondName,lastName,groupNumber) => {
    let strOfHomeWork = `* Домашняя работа: «Функции» `,
        informationOfStudents = `* Выполнил: студент гр. W4017`,
        fio = `* ${secondName} ${firtsName} ${lastName}`,
        arrData = [strOfHomeWork,informationOfStudents,fio],
        max = 0,
        maxStr = '',
        stars = '';

        for(let i = 0; i < arrData.length; i++) {
            if(max < arrData[i].length ) {
                max = arrData[i].length;
                maxStr = arrData[i]
            }
        }
        for(let i = 0; i <= maxStr.length+1; i++) {
            stars +='*'
        }

        for(let i = 0; i < arrData.length; i++) {
            for(let j = 0; j <= maxStr.length; j++) {
                if(arrData[i][j] == undefined) {
                    arrData[i] += ' '
                }
            }
        }

        console.log(stars)
        console.log(arrData[0]+'*');
        console.log(arrData[1]+'*');
        console.log(arrData[2]+'*');
        console.log(stars)
}

createofPrint(firstName, secondName, lastName, groupNumber )

//Задача 13 - Функции

let email = 'tАest@gmail.com' 

let cheack = (email) => {
    email = email.toLowerCase();
    let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];

    let cheackAplphabet = false;

    for (let i = 0;i < email.length; i++) {
        if (arr_ru.includes(email[i])){
            console.log(`рус = ${email[i]}`)
            cheackAplphabet = true;
            break;
        }
    }
    
    if (cheackAplphabet) {return}
    else {}

    return cheackAplphabet 
}

console.log(cheack(email));