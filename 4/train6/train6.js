//increase time
function increaseMinute() {
    const current = document.getElementById("min");
    let currentTime = current.innerText;
    currentTime++;
    current.innerText= currentTime;
}

//decrease time
function decreaseMinute() {
    const current = document.getElementById("min");
    let currentTime = current.innerText;
    if (currentTime!= 0) {
        currentTime--;
        current.innerText= currentTime;
    }
}

//notif time
function getNotifTime() {
    const current = document.getElementById("min");
    let currentTime = current.innerText;
    return currentTime;
}

//date
function getDate() {
    const now = new Date();

    //inke farsi beshe calender ro az gpt gereftam
    const persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(now);

    const persianTime = now.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return `رزرو در تاریخ ${persianDate} و در ساعت ${persianTime} ثبت شد.`;
}

//code rahgiri
function getCode() {
    const randomPart = Math.floor(Math.random() * 1000000000); 
    const timestampPart = Date.now(); 
    return `${timestampPart}${randomPart}`.slice(0, 15);
    // age faqd ba math.rand mizadam qaedatan ye ehtemal ziadi vojud
    // dasht ke code ha tekrari beshe search kardam didam date ro ba
    // rand qati konam ehtemalesh kamtar mishe ye crypto nmd chichi bud
    // un sakht bud yad nagereftam
}

function getExp() {
    const textElement = document.getElementById("exp-ta");
    let text=textElement.value;
    return text;
}
//main func
function getInfo() {
    let text = "رزرو شما با موفقیت ثبت شد."

    let textDate = getDate();
    let textCode = getCode();
    let textExp = getExp();
    let textNotifTime = getNotifTime();

    document.getElementById("result").innerHTML = `
        <div classs="success-msg" style="font-size:30px; font-weight: 600">رزرو نوبت شما با موفقیت ثبت شد</div>
        <div class="date-msg">${textDate}</div>
        <div class="code-msg">
            <div>کد رهگیری:</div>
            <div>${textCode}</div>
        </div>
        <div class="exp-msg">
            <div>توضیحات:</div>
            <div style="font-size: 12px; word-break: break-all;">${textExp}</div>
        </div>
        <div class="notif-msg">
            <div>یادآوری:</div>
            <div>${textNotifTime}</div>
        </div>
    `
                
}

