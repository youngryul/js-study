const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요? 생성할 객체를 가르킨다.
    },
    arrowFunction: function() {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요? 화살표 함수는 상위 스코프인 전역을 가르킨다.
    },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요) 화살표 함수는 상위 스코프인 전역을 가르킨다.