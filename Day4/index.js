// 미션 1 : 배열, 객체, 반복문
let foods = [
    { name: 'Burger', calories: 800 },
    { name: 'Apple', calories: 52 },
    { name: 'Pizza', calories: 550 },
    { name: 'Salad', calories: 150 },
];

const fillerFood = foods.filter((elm) => elm.calories >= 500);

if(fillerFood.length !== 0) {
    for(food in fillerFood) {
        console.log(fillerFood[food].name)
    }
}

// 미션 2 : 생성자 함수
function Animal(type, sound){
    this.type = type;
    this.sound = sound;
    this.makeSound = function () {
        return `${this.type}이(가) ${this.sound} 소리를 냅니다.`
    }
}

const dog = new Animal('개', '멍멍');
console.log(dog.makeSound());

const cat = new Animal('고양이', '야옹');
console.log(cat.makeSound());