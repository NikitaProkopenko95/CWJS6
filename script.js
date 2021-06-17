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