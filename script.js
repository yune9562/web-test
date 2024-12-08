// color 버튼을 누르면 main에 배경색을 변경하도록 코드를 작성
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF6347', '#7FFFD4', '#FFD700', '#8A2BE2', '#DC143C'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// 사용자가 이름을 입력하고 버튼 클릭시 인사말과 함께 입력값이 출력되도록 코드를 작성 
document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = name ? `안녕하세요, ${name}!` : '이름을 입력해주세요.';
    document.getElementById('greeting').textContent = greetingMessage;
});