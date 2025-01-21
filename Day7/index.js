// 미션 1 DOM API
let $text = document.getElementById('text');
let $changeTextButton = document.querySelector('button#changeTextButton');

$changeTextButton.addEventListener('click', (event) => {
    $text.textContent = '변경된 텍스트';
});

// 미션 2 DOM API & Select Tag
let $app = document.getElementById('app');

let $select = document.createElement('select');
$select.id = 'skills'

let $optionJs = document.createElement('option');
let $optionNext = document.createElement('option');
let $optionReact = document.createElement('option');
let $optionTs = document.createElement('option');

$optionJs.value = 'javascript';
$optionNext.value = 'next';
$optionReact.value = 'react';
$optionTs.value = 'typescript';

let $textJs = document.createTextNode('Javascript');
let $textNext = document.createTextNode('Next.js');
let $textReact = document.createTextNode('React.js');
let $textTs = document.createTextNode('TypeScript');


$app.appendChild($select);
$select.appendChild($optionJs);
$optionJs.appendChild($textJs);
$select.appendChild($optionNext);
$optionNext.appendChild($textNext);
$select.appendChild($optionReact);
$optionReact.appendChild($textReact);
$select.appendChild($optionTs);
$optionTs.appendChild($textTs);

$select.addEventListener('change', (event) => {
    console.log("값 출력 : ", event.target.value)
})