// 미션 1 : api 호출
function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 2000);
    });
}

// api 호출 시에는 에러 발생이 있을 수 있으므로 항상 에러 처리 하기!
const fetchUserData = async () => {
    try {
        const response = await fakeApiCall();
        console.log("사용자 이름 : ", response.name);
    }
    catch{
        console.log("에러 발생");
    }

};

fetchUserData();


// 미션 2 : 포켓몬 정보 가져오기
const API_URL = 'https://pokemon-api-ecru-eta.vercel.app';

const pokemonApi = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        let result = []
        data.data.forEach(pokemon => {
            if(pokemon.color === 'green'){
               result.push(pokemon);
            }
        });
        console.log("result", result);
    }
    catch (error) {
        console.log("api 호출 시 에러가 발생했습니다.", error)
    }
}

pokemonApi();