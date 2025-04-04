let count = 0;

//date
function dateCustomed() {
    const today = new Date();

    //dd/mm/yyyy
    let day = today.getDate();
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();


    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;


    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

//time
function localTimeCustomed() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

//delete task 
function deleteTask(btn) {
    const task = btn.closest(".task");
    let delText = "deleteBtn";
    let id = btn.closest("div").id;
    let num = id.split(delText).join('');
    if (document.getElementById(`li${num}`)) {
        document.getElementById(`li${num}`).remove();
    }    
    count--;
    task.remove();
    updateIds();
}

///mohemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
//updat4e ID
function updateIds() {
    const tasks = document.querySelectorAll(".task");
    count = tasks.length; // Update count

    tasks.forEach((task, index) => {
        task.querySelector("textarea").id = `text${index}`;
        task.querySelector("select").id = `select${index}`;
        task.querySelector(".delete-btn-div").id = `deleteBtn${index}`;
        task.querySelector(".done-btn-div button").id = `doneBtn${index}`;
        task.querySelector(".task-creation-date").id = `date${index}`;
    });
}


//done task
function doneTask(btn) {
    let delText = "doneBtn";
    let id = btn.id;
    let num = id.split(delText).join('');
    let text = document.getElementById("text" + num);
    console.log(text);

    text.style.textDecoration = "line-through";
    text.style.color = "gray";

    btn.style.color = "gray";
    let createdDate = document.getElementById(`date${num}`);
    createdDate.innerText = "ended " + dateCustomed();
    document.getElementById(`li${num}`).remove();
    updateIds();
}


//add task
function addTask() {
    let div = document.createElement("div");
    let date = dateCustomed();
    div.innerHTML = `
    <div class="task">
        <div class="delete-btn-div" id="deleteBtn${count}">
            <button onclick="deleteTask(this)">
                ❌
            </button>
        </div>
        <div class="txtarea-div">
            <textarea class="task-text" name="text" id="text${count}" placeholder="..."></textarea>
            <div class="select-date-div">
                <select class="importance" name="" id="select${count}">
                <option value="3">low</option>
                <option value="2">medium</option>
                    <option value="1">high</option> 
                </select>
                <div class="task-creation-date" id="date${count}">${date}</div>
            </div>
        </div>
        <div class="done-btn-div" id="doneBtn${count}">
            <button id="doneBtn${count}" onclick="doneTask(this)" style="color: green;font-weight:bolder;font-size:17px">
                ✔
            </button>
        </div>
    </div>
    `;
    count++;
    const tasksDiv = document.getElementById("tasks");
    tasksDiv.appendChild(div);
}

//priorities 
// function prioritiesFunc() {
//     let arrOpt = [];
//     for (let i = 0; i < count; i++) {
//         arrOpt[i] = document.getElementById(`select${i}`).value;
//     }
//     for (let i = 0; i < count-1; i++) {
//         let swapped = false;
//         for (let j = 0; j < count- i-1; j++) {
//             if (arrOpt[j] > arrOpt[j+1]) {
//                 [arrOpt[j], arrOpt[j + 1]] = [arrOpt[j + 1], arrOpt[j]];
//                 swapped = true;
//             }
//             if (!swapped) break;
//         }
//     }
//     console.log(arrOpt)
// }
//codam nemidunestam chejuri dorost konam ke kar kone
//CODE GPT EFTEZAH BUD KHODAM BENEVISAM BEHTARE

//sort priorities
function sortPriorities() {
    console.log(count);

    let normalArr = [];
    
    for (let i = 0; i < count; i++) {
        let select = document.getElementById(`select${i}`).value;
        let textValue = document.getElementById(`text${i}`).value;
        normalArr.push([i, select, textValue]); 
    }

    console.log("Before sorting:", normalArr);


    normalArr.sort((a, b) => a[1] - b[1]);

    console.log("After sorting:", normalArr);

    let sortedTasksDiv = document.getElementById("sortedTasks");
    sortedTasksDiv.innerHTML = ""; 

    normalArr.forEach(([id, priority, textValue]) => {
        let taskDiv = document.createElement("div");


        taskDiv.innerHTML = `
            <li id="li${id}" style="padding:5px">
            <div style="word-break: break-all;"><span style="margin-right: 5px; font-size: 17px;">o</span>${textValue}</div>
            </li>
        `;

        sortedTasksDiv.appendChild(taskDiv);
    });
}



//delete everything 
function reset() {
    const tasksDiv = document.getElementById("tasks");
    const sortedTasksDiv = document.getElementById("sortedTasks");

    sortedTasksDiv.innerHTML = "";
    tasksDiv.innerHTML = "";
    count = 0;
}