// Bước 1: create array to store todo list
const todoList = [];
function renderHTML() {
  let todoListHTML = "";
  // thứ nhất là lặp để lấy các phần tử trong mảng
  // dùng forEach để lặp phần tử mảng cho vào trong hàm
  todoList.forEach(function (todo, index) {
    const html = `<p>
    ${todo} 
    <button onclick="todoList.splice(${index},1);renderHTML()"
    >delete</button>
    </p>`;
    console.log(html);
    // vấn đề 2.5 là khi mình thay đổi html thì chỉ 1 phần tử thôi. nên là phải
    // có biến chứa full phần tử và lưu vào nó sẽ là string

    todoListHTML += html;
    // thứ 3 là xuất hiện biến trên html.
    document.querySelector(".display").innerHTML = todoListHTML;
  });
}
function addTodo() {
  // tìm thông tin cần lưu. lưu nó vào biến name
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  //    mình đang thắc mắc tại sao DOM bằng class thì k gọi ra property được. mà bằng tag thì được
  // add value vào array dùng push
  todoList.push(name);
  console.log(todoList);
  console.log(`${inputElement.value} cmt`);
  if (inputElement.value === "") {
    console.log("rỗng");
  } else renderHTML();
  // bước 2: sau khi thêm vào thì input ở vị trí mặc định, sau khi thêm thì set value bằng ''
  inputElement.value = "";
}
//   bước 3: hiển thị danh sách đó ra ngoài màn hình. kiểu là lặp các phần tử trong mảng cho đến hết. mỗi lần lặp thì in ra màn hình dữ liệu của nó

//   document.querySelector(".display").innerHTML = todoList;
