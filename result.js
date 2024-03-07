document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin kết quả từ Local Storage
    const resultHTML = localStorage.getItem('quizResult');

    // Hiển thị kết quả trên trang
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = resultHTML;

    // Xóa thông tin kết quả khỏi Local Storage
    localStorage.removeItem('quizResult');
});
