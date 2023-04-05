let number = Math.floor(Math.random() * 15) + 1
console.log(number)
let count = 3

document.getElementById('chek').onclick = function f1(){
    if (count > 1) {
        let out = document.getElementById('out')
        let user = document.getElementById('num').value
        user = parseInt(user)

        if (user == number){
            out.innerHTML = 'Ура, ты угадал!'
                // alert('Ты выиграл, страница будет перезагружена')

            function sayHi() {
                alert('Ты выиграл, страница будет перезагружена');
                location.reload()
            }
            setTimeout(sayHi, 1000);

        }
        else if(user > number){
            out.innerHTML = 'Слишком большое число'
        }
        else if(user < number){
            out.innerHTML = 'Как-то маловато'
        }
        count = count-1
        document.getElementById('count').innerHTML = 'Осталось попыток: ' + count
    }
    else {
        document.getElementById('count').innerHTML = 'Осталось попыток: ' + '0'
        let out1 = document.getElementById('out1')
        out1.innerHTML = 'Сорян, ты продул!'
        function sayHi1() {
            alert('Ты проиграл, страница будет перезагружена');
            location.reload()
        }
        setTimeout(sayHi1, 1000)
            // alert('Ты проиграл, страница будет перезагружена');
            // location.reload()
    }
}