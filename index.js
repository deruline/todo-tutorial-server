var express = require('express') // node_modules 내 express 관련 코드를 가져온다
var app = express()

//사용자가 localhost:5000/hello URL 주소로 접근헀을때
app.get('/hello', (req, res) => { // URL 응답 테스트
    res.send('hello world !') // 응답을 브라우저로 보내줌
})

app.listen(5000, () => { // 5000 포트로 서버 오픈
    console.log('server is running on port 5000 ...')
})