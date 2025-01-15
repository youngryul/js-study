// 미션1 : 화살표 함수 작성하기
const multiply = (a, b) => {return a*b}

console.log(multiply(3,4))


// 미션2 : 함수 작성하기
const book = {
    title : "소년이 온다",
    author : "한강",
    getSummary: function() {return `책 이름은 ${book.title}, 작가는 ${book.author}입니다.`}
}

console.log(book.getSummary())

// 미션3 : 스코프와 함수
function sumNumbers(a, b) {
    function addFive(number) {
        return number + 5
    }

    return addFive(b) + a
}

console.log(sumNumbers(3, 7));
console.log(sumNumbers(10, 5));

