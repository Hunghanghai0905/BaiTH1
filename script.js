// // Khai báo biến DOM
// const quizForm = document.getElementById('quizForm');
// const questionsContainer = document.getElementById('questions');
// const submitContainer = document.getElementById('submit');
// const startButton = document.getElementById('startButton');

// // Thông tin sinh viên
// let studentInfo = {};

// // Câu hỏi demo
// const questions = [
//     { question: "Câu 1: 2+2=4. Đúng hay sai?", type: "trueFalse", answer: true },
//     { question: "Câu 2: 2+3 bằng bao nhiêu?", type: "multipleChoice", choices: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "B. 5" },
//     { question: "Câu 3: Chọn số chẵn: ", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["A. 2", "C. 4"] },
//     { question: "Câu 4: Viết công thức để tính diện tích hình tròn.", type: "essay", answer: "πr^2" }
// ];

// // Hàm để tạo câu hỏi HTML dựa trên loại câu hỏi
// function createQuestionHTML(question, index) {
//     let html = `<div class="question-container"><div class="question-number">${index + 1}</div><div class="question-content"><p>${question.question}</p>`;
//     if (question.type === "trueFalse") {
//         html += `<label><input type="radio" name="question${index}" value="true"> Đúng</label>
//                  <label><input type="radio" name="question${index}" value="false"> Sai</label>`;
//     } else if (question.type === "multipleChoice") {
//         question.choices.forEach(choice => {
//             html += `<label><input type="radio" name="question${index}" value="${choice}"> ${choice}</label>`;
//         });
//     } else if (question.type === "multipleAnswers") {
//         question.choices.forEach(choice => {
//             html += `<label><input type="checkbox" name="question${index}" value="${choice}"> ${choice}</label>`;
//         });
//     } else if (question.type === "essay") {
//         html += `<textarea name="question${index}" rows="4" cols="50"></textarea>`;
//     }
//     html += `</div></div>`;
//     return html;
// }

// // Tạo câu hỏi trên form
// questions.forEach((question, index) => {
//     questionsContainer.innerHTML += createQuestionHTML(question, index);
// });


// // Hàm để hiển thị thông tin sinh viên
// function displayStudentInfo() {
//     document.getElementById('fullNameDisplay').textContent = `Họ và tên: ${studentInfo.fullName}`;
//     document.getElementById('dobDisplay').textContent = `Ngày tháng năm sinh: ${studentInfo.dob}`;
//     document.getElementById('studentIDDisplay').textContent = `Mã sinh viên: ${studentInfo.studentID}`;
//     document.getElementById('classDisplay').textContent = `Lớp: ${studentInfo.class}`;
// }

// // Ẩn phần thông tin sinh viên và hiển thị form khi nhấn nút "Bắt đầu làm"
// startButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn form reload
    
//     // Lấy thông tin sinh viên
//     studentInfo.fullName = document.getElementById('fullName').value;
//     studentInfo.dob = document.getElementById('dob').value;
//     studentInfo.studentID = document.getElementById('studentID').value;
//     studentInfo.class = document.getElementById('class').value;

//     displayStudentInfo

//     // Ẩn phần thông tin sinh viên và hiển thị form
//     document.getElementById('studentInfo').style.display = 'none';
//     document.getElementById('quizContainer').style.display = 'block';
// });

// // Hiển thị kết quả
// function showsubmit(score) {
//     const submitDiv = document.getElementById('submit');
//     submitDiv.innerHTML = `<p><strong>Thông tin sinh viên:</strong></p>
//                            <p>Họ và tên: ${studentInfo.fullName}</p>
//                            <p>Ngày tháng năm sinh: ${studentInfo.dob}</p>
//                            <p>Mã sinh viên: ${studentInfo.studentID}</p>
//                            <p>Lớp: ${studentInfo.class}</p>
//                            <p><strong>Kết quả bài làm:</strong></p>
//                            <p>Số câu đúng: ${score}</p>`;
// }

// // Xử lý nút Submit
// quizForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Ngăn chặn form reload
    
//     const formData = new FormData(quizForm);
//     let score = 0;

//     // Kiểm tra câu trả lời
//     questions.forEach((question, index) => {
//         const answerInput = formData.get(`question${index}`);
//         if (question.type === "trueFalse" || question.type === "multipleChoice") {
//             if (answerInput === question.answer.toString()) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         } else if (question.type === "multipleAnswers") {
//             const correctAnswers = question.answer.map(String);
//             const selectedAnswers = Array.from(formData.getAll(`question${index}`));
//             const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer));
//             if (isCorrect && selectedAnswers.length === correctAnswers.length) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         } else if (question.type === "essay") {
//             const userAnswer = answerInput.trim().toLowerCase();
//             const correctAnswer = question.answer.trim().toLowerCase();
//             if (userAnswer === correctAnswer) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         }
//     });

//     // Hiển thị kết quả
//     showsubmit(score);
// });

// // Đánh dấu câu trả lời
// function markAnswer(index, isCorrect) {
//     const questionDiv = document.querySelector(`#questions .question-container:nth-child(${index + 1})`);
//     if (isCorrect) {
//         questionDiv.classList.add('correct-answer');
//     } else {
//         questionDiv.classList.add('incorrect-answer');
//     }
// }





















































const quizForm = document.getElementById('quizForm');
const questionsContainer = document.getElementById('questions');
const resultContainer = document.getElementById('result');
const reviewContainer = document.getElementById('review');




// Thông tin sinh viên
let studentInfo = {};

// Câu hỏi demo
const questions = [
    { question: "Câu 1: Iphone đẹp", type: "trueFalse", answer: true },
    { question: "Câu 2: PTIT rất tốt", type: "trueFalse", answer: true },
    { question: "Câu 3: Bạn hướng nội?", type: "trueFalse", answer: false },
    { question: "Câu 4: Bạn thông minh?", type: "trueFalse", answer: true },
    { question: "Câu 5: Bạn thích hát", type: "trueFalse", answer: false },
    { question: "Câu 6: Bạn yêu đời?", type: "trueFalse", answer: true },
    { question: "Câu 7: Bạn thích đồ Nhật", type: "trueFalse", answer: false },
    { question: "Câu 8: Bạn yêu hóa học?", type: "trueFalse", answer: true },
    { question: "Câu 9: Dơi bị mù?", type: "trueFalse", answer: false },
    { question: "Câu 10: Bạn thích động vật không", type: "trueFalse", answer: false },
    

    { question: "Câu 11: Chọn 1 số yêu thích của bạn", type: "multipleChoice", choices: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "B. 5" },
    { question: "Câu 12: Thành phố đẹp", type: "multipleChoice", choices: ["A. Thành phố Hồ Chí Minh", "B. Cần Thơ", "C. Hà Nội", "D. Bà Rịa - Vũng Tàu"], answer: "C. Hà Nội" },
    { question: "Câu 13: Tác giả ấn tượng", type: "multipleChoice", choices: ["A. Nguyễn Trãi", "B. Nguyễn Du", "C. Hồ Xuân Hương", "D. Nguyễn Đình Chiểu"], answer: "B. Nguyễn Du" },
    { question: "Câu 14: Biển đẹp", type: "multipleChoice", choices: ["A. Biển Đông", "B. Biển Tây", "C. Biển Bắc", "D. Biển Đỏ"], answer: "A. Biển Đông" },
    { question: "Câu 15: Núi cao", type: "multipleChoice", choices: ["A. Fansipan", "B. Everest", "C. Kilimanjaro", "D. Elbrus"], answer: "B. Everest" },
    { question: "Câu 16: Quốc gia nhỏ", type: "multipleChoice", choices: ["A. Vatican", "B. Monaco", "C. Nauru", "D. San Marino"], answer: "A. Vatican" },
    { question: "Câu 17: Động vật biểu tượng của nước Úc?", type: "multipleChoice", choices: ["A. Chuột túi", "B. Koala", "C. Kangaroo", "D. Thú mỏ vịt"], answer: "C. Kangaroo" },
    { question: "Câu 18: Sông dài ở Việt Nam?", type: "multipleChoice", choices: ["A. Sông Cửu Long", "B. Sông Hồng", "C. Sông Đà", "D. Sông Thu Bồn"], answer: "A. Sông Cửu Long" },
    { question: "Câu 19: Biển rộng", type: "multipleChoice", choices: ["A. Thái Bình Dương", "B. Đại Tây Dương", "C. Ấn Độ Dương", "D. Bắc Băng Dương"], answer: "A. Thái Bình Dương" },
    { question: "Câu 20: Quốc gia đáng sống", type: "multipleChoice", choices: ["A. Trung Quốc", "B. Ấn Độ", "C. Hoa Kỳ", "D. Indonesia"], answer: "B. Ấn Độ" },


    { question: "Câu 21: Mức yêu thích về truyện: ", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["A. 2", "C. 4"] },
    { question: "Câu 22: Mức yêu thích về học:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["B. 3", "D. 5"] },
    { question: "Câu 23: Mức yêu thích tình bạn:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["A. 2", "B. 3", "D. 5"] },
    { question: "Câu 24: Mức yêu thích về lập trình web:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["B. 3"] },
    { question: "Câu 25: Mức yêu thích về ptit:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["A. 2", "D. 5"] },
    { question: "Câu 26: Mức yêu thích:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: ["C. 4"] },
    { question: "Câu 27: Mức yêu thích:", type: "multipleAnswers", choices: ["A. 232", "B. 34", "C. 4", "D. 51"], answer: ["A. 232", "C. 4"] },
    { question: "Câu 28: Mức yêu thích:", type: "multipleAnswers", choices: ["A. -2", "B. -3", "C. 4", "D. 5"], answer: ["A. -2", "B. -3"] },
    { question: "Câu 29: Mức yêu thích:", type: "multipleAnswers", choices: ["A. 23,2", "B. 26", "C. 28", "D. 32"], answer: ["B. 26", "C. 28", "D. 32"] },
    { question: "Câu 30: Mức yêu thích:", type: "multipleAnswers", choices: ["A. 2", "B. 3", "C. 4", "D. 6"], answer: ['B. 3'] },




    { question: "Câu 31: Bạn thích ăn gì", type: "essay", answer: "πr^2" },
    { question: "Câu 32: Bạn thích ăn gì", type: "essay", answer: "chó" },
    { question: "Câu 33: Bạn thích chơi gì", type: "essay", answer: "mèo" },
    { question: "Câu 34: Bạn thích ăn gì", type: "essay", answer: "a" },
    { question: "Câu 35: Bạn thích ăn gì", type: "essay", answer: "b" },
    { question: "Câu 36: Bạn thích ăn gì", type: "essay", answer: "c" },
    { question: "Câu 37: Bạn thích ăn gì", type: "essay", answer: "d" },
    { question: "Câu 38: Bạn thích ăn gì", type: "essay", answer: "e" },
    { question: "Câu 39: Bạn thích ăn gì", type: "essay", answer: "f" },
    { question: "Câu 40: Bạn thích ăn gì", type: "essay", answer: "g" }

];

// Hàm để tạo câu hỏi HTML dựa trên loại câu hỏi
function createQuestionHTML(question, index) {
    let html = `<div class="question-container"><div class="question-number">${index + 1}</div><div class="question-content"><p>${question.question}</p>`;
    if (question.type === "trueFalse") {
        html += `<label><input type="radio" name="question${index}" value="true"> Đúng</label>
                 <label><input type="radio" name="question${index}" value="false"> Sai</label>`;
    } else if (question.type === "multipleChoice") {
        question.choices.forEach(choice => {
            html += `<label><input type="radio" name="question${index}" value="${choice}"> ${choice}</label>`;
        });
    } else if (question.type === "multipleAnswers") {
        question.choices.forEach(choice => {
            html += `<label><input type="checkbox" name="question${index}" value="${choice}"> ${choice}</label>`;
        });
    } else if (question.type === "essay") {
        html += `<textarea name="question${index}" rows="4" cols="50"></textarea>`;
    }
    html += `</div></div>`;
    return html;
}

// Tạo câu hỏi trên form
function displayQuestions() {
    questionsContainer.innerHTML = "";
    questions.forEach((question, index) => {
        questionsContainer.innerHTML += createQuestionHTML(question, index);
    });
}

// Hiển thị thông tin sinh viên
function displayStudentInfo() {
    document.getElementById('fullNameDisplay').innerText = `Họ và tên: ${studentInfo.fullName}`;
    document.getElementById('dobDisplay').innerText = `Ngày tháng năm sinh: ${studentInfo.dob}`;
    document.getElementById('studentIDDisplay').innerText = `Mã sinh viên: ${studentInfo.studentID}`;
    document.getElementById('classDisplay').innerText = `Lớp: ${studentInfo.class}`;
}

// Xử lý nút Bắt đầu làm
document.getElementById('startButton').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn form reload

    // Lấy thông tin sinh viên
    var fullName = "";
    var dobString = "";
    var studentID = "";
    var studentClass = "";

    try {
        fullName = document.getElementById('fullName').value.trim();
        dobString = document.getElementById('dob').value.trim();
        studentID = document.getElementById('studentID').value.trim();
        studentClass = document.getElementById('class').value.trim();

        // Kiểm tra trường thông tin trống
        if (fullName === "" || dobString === "" || studentID === "" || studentClass === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        } else {
            // Kiểm tra số căn cước có đủ 12 số và không chứa ký tự lạ
            var idPattern1 = /^\d{12}$/;
            var idPattern2 = /^\d{9}$/;
            if (!idPattern1.test(studentID) && !idPattern2.test(studentID)) {
                alert("Số căn cước không hợp lệ (CCCD phải có 9 hoặc 12 chữ số)");
                return;
            } else {
                // Kiểm tra độ tuổi
                var dob = new Date(dobString);
                var today = new Date();
                var age = today.getFullYear() - dob.getFullYear();
                var monthDiff = today.getMonth() - dob.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }

                if (age < 18) {
                    alert("Bạn chưa đủ 18 tuổi.");
                    return;
                }
            }
        }
        
        // Lấy thông tin sinh viên
        studentInfo.fullName = fullName;
        studentInfo.dob = dobString;
        studentInfo.studentID = studentID;
        studentInfo.class = studentClass;

        // Hiển thị trang thi khi nhấn nút "Bắt đầu làm"
        document.getElementById('studentInfo').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';

        displayStudentInfo();
        displayQuestions();
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
        // Thêm mã xử lý lỗi ở đây nếu cần thiết
    }



    
});



// // Đánh dấu câu trả lời
// function markAnswer(index, isCorrect) {
//     const questionDiv = document.querySelector(`#questions .question-container:nth-child(${index + 1})`);
//     if (isCorrect) {
//         questionDiv.classList.add('correct-answer');
//     } else {
//         questionDiv.classList.add('incorrect-answer');
//     }
// }



// /// Xử lý nút Submit
// quizForm.addEventListener('submit', function(event) {

//     event.preventDefault(); // Ngăn chặn form reload
//     const formData = new FormData(quizForm);
//     let score = 0;

//     // Kiểm tra câu trả lời
//     questions.forEach((question, index) => {
//         const answerInput = formData.get(`question${index}`);
//         if (question.type === "trueFalse" || question.type === "multipleChoice") {
//             if (answerInput === question.answer.toString()) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         } else if (question.type === "multipleAnswers") {
//             const correctAnswers = question.answer.map(String);
//             const selectedAnswers = Array.from(formData.getAll(`question${index}`));
//             const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer));
//             if (isCorrect && selectedAnswers.length === correctAnswers.length) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         } else if (question.type === "essay") {
//             const userAnswer = answerInput.trim().toLowerCase();
//             const correctAnswer = question.answer.trim().toLowerCase();
//             if (userAnswer === correctAnswer) {
//                 score++;
//                 markAnswer(index, true);
//             } else {
//                 markAnswer(index, false);
//             }
//         }
//     });

//     // Hiển thị kết quả
//     showResult(score);
// });


// Xử lý nút Submit
quizForm.addEventListener('submit', function(event) {

    event.preventDefault(); // Ngăn chặn form reload
    const formData = new FormData(quizForm);
    let resultHTML = "";
    

    // Hiển thị câu trả lời của người dùng
    questions.forEach((question, index) => {
        const answerInput = formData.get(`question${index}`);
        let userAnswerHTML = "";

        if (question.type === "trueFalse" || question.type === "multipleChoice") {
            userAnswerHTML = `<p>Câu trả lời của người tham gia: ${answerInput}</p>`;
        } else if (question.type === "multipleAnswers") {
            const selectedAnswers = Array.from(formData.getAll(`question${index}`));
            userAnswerHTML = `<p>Câu trả lời của người tham gia: ${selectedAnswers.join(', ')}</p>`;
        } else if (question.type === "essay") {
            userAnswerHTML = `<p>Câu trả lời của người tham gia:${answerInput}</p>`;
        }

        resultHTML += `<div class="question-result">
                            <p>${question.question}</p>
                            ${userAnswerHTML}
                       </div>`;
    });

    // Lưu kết quả vào Local Storage
    localStorage.setItem('quizResult', resultHTML);

    // Chuyển hướng sang trang hiển thị kết quả
    window.location.href = 'result.html';
});




// Hiển thị kết quả
// function showResult(score) {
//     resultContainer.style.display = 'block';
//     resultContainer.innerHTML = `
//         <h2>Kết Quả Bài Thi</h2>
//         <p><strong>Thông tin Thí sinh:</strong></p>
//         <p>Họ và tên: ${studentInfo.fullName}</p>
//         <p>Ngày tháng năm sinh: ${studentInfo.dob}</p>
//         <p>CCCD: ${studentInfo.studentID}</p>
//         <p>Địa chỉ thường trú: ${studentInfo.class}</p>
//         <p><strong>Kết quả bài làm:</strong></p>
//         <p>Số câu đúng: ${score} / ${questions.length}</p>
//         <p>Điểm số: ${Math.round(score / questions.length *1000) / 100}</p>        
//         <button id="showReviewButton">Xem đánh giá câu hỏi</button>
//     `;

//     // Xử lý nút Xem đánh giá câu hỏi
//     document.getElementById('showReviewButton').addEventListener('click', function() {
//         displayReview();
//     });
// }


// function displayReview() {
    // const reviewContent = document.getElementById('reviewContainer');
    // reviewContent.innerHTML = ""; // Xóa nội dung cũ (nếu có)

    // questions.forEach((question, index) => {
    //     let review = `<div class="question-review"><strong>Câu ${index + 1}:</strong> ${question.question}<br>`;
    //     const answerInputs = Array.from(quizForm.elements[`question${index}`]); // Chuyển sang mảng
    //     if (question.type === "trueFalse" || question.type === "multipleChoice") {
    //         const correctAnswer = question.answer;
    //         const selectedAnswer = answerInputs.find(input => input.checked);
    //         if (selectedAnswer && selectedAnswer.value === correctAnswer) {
    //             review += `<span class="correct-answer">Đáp án của bạn: ${selectedAnswer.value} (Đúng)</span>`;
    //         } else if (selectedAnswer) {
    //             review += `<span class="incorrect-answer">Đáp án của bạn: ${selectedAnswer.value} (Sai)</span>`;
    //         } else {
    //             review += `<span class="incorrect-answer">Bạn chưa chọn đáp án cho câu này</span>`;
    //         }
    //         review += `<br>Đáp án đúng: ${correctAnswer}</div>`;
    //     } else if (question.type === "multipleAnswers") {
    //         const correctAnswers = question.answer;
    //         const selectedAnswers = answerInputs.filter(input => input.checked);
    //         let isCorrect = true;
    //         selectedAnswers.forEach(selected => {
    //             if (!correctAnswers.includes(selected.value)) {
    //                 isCorrect = false;
    //             }
    //         });
    //         if (isCorrect && selectedAnswers.length === correctAnswers.length) {
    //             review += `<span class="correct-answer">Đáp án của bạn: ${selectedAnswers.map(selected => selected.value).join(', ')} (Đúng)</span>`;
    //         } else if (selectedAnswers.length > 0) {
    //             review += `<span class="incorrect-answer">Đáp án của bạn: ${selectedAnswers.map(selected => selected.value).join(', ')} (Sai)</span>`;
    //         } else {
    //             review += `<span class="incorrect-answer">Bạn chưa chọn đáp án cho câu này</span>`;
    //         }
    //         review += `<br>Đáp án đúng: ${correctAnswers.join(', ')}</div>`;
    //     } else if (question.type === "essay") {
    //         const userAnswer = answerInputs[0].value.trim().toLowerCase(); // Đây chỉ là một input, nên lấy index 0
    //         const correctAnswer = question.answer.trim().toLowerCase();
    //         if (userAnswer === correctAnswer) {
    //             review += `<span class="correct-answer">Đáp án của bạn: ${userAnswer} (Đúng)</span>`;
    //         } else if (userAnswer !== "") {
    //             review += `<span class="incorrect-answer">Đáp án của bạn: ${userAnswer} (Sai)</span>`;
    //         } else {
    //             review += `<span class="incorrect-answer">Bạn chưa nhập đáp án cho câu này</span>`;
    //         }
    //         review += `<br>Đáp án đúng: ${correctAnswer}</div>`;
    //     }
    //     reviewContent.innerHTML += review;
    // });
// }
