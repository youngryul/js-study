const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join('D:\\js-study\\js-study')));

// 어떤 요청이 오든 index.html로 넘겨주는 역할
app.get('/*', (req, res) => {
    res.sendFile(path.join('D:\\js-study\\js-study', 'index.html'));
});

app.listen(PORT, () => {
    console.log('START SERVER')
})