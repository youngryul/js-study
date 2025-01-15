// 미션 1 switch case문 작성하기
let animal = 'cat';

switch (animal) {
    case 'cat':
        console.log('고양이');
        break;
    case 'dog':
        console.log('개');
        break;
    case 'tiger':
        console.log('호랑이');
        break;
    case 'lion':
        console.log('사자');
        break;
    default:
        console.log("해당 사항이 없습니다.")
        break;
}

// 미션 2 함수 작성하기
let answer = '';

function connenctStrings(str1, str2) {
    answer = str1 + str2;
    return answer;
}

connenctStrings('hello', 'world');

console.log(answer);
