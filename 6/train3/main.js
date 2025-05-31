let button = document.getElementById("sendBtn");
let num = 1;
button.addEventListener("click", function() {
    const userNameElement = document.getElementById("userName");
    const userCommentElement = document.getElementById('userComment');
    const commentsDiv = document.getElementById("commentsDiv");
    let commentSection = document.createElement("div");
    let newComment = `
            <div class="comment">
                <div>
                    <div class="comment-info">
                        <div><span>${userNameElement.value}</span></div>
                        <div class="font-10 dash-before">1 ساعت پیش</div>
                        <div class="font-10 dash-before"><span>0</span> پاسخ</div>
                    </div>
                    <div class="comment-btns font-10">
                        <div>
                            <div><img src="pictures/like.png" alt=""></div>
                            <div>18</div>
                        </div>
                        <div>
                            <div><img src="pictures/dislike.png" alt=""></div>
                            <div>4</div>
                        </div>
                        <div>
                            <div><img src="pictures/response.png" alt=""></div>
                            <div class="response">پاسخ</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bold">${userCommentElement.value}</div>
                </div>
            </div>
        `;
        commentSection.innerHTML = newComment;
        commentsDiv.appendChild(commentSection);
        document.getElementById("userName").value = "";
        document.querySelector("#userComment").value = "";
        num++;

        commentsDiv.addEventListener("click", function(e) {
            if (e.target.classList.contains("response")) {
                const parentComment = e.target.closest(".comment");
                if (parentComment.querySelector(".reply-name")) return; // Prevent adding multiple reply boxes
        
                const replyBox = document.createElement("div");
                replyBox.innerHTML = `
                    <div class="user-comment-write-div reply-name">
                        <input type="text" placeholder="اسم خود را وارد کنید" style="">
                        <textarea 
                            name="" 
                            id="userComment" class="reply-text"
                            placeholder="دیدگاه خود را بنویسید"></textarea>

                        <button class="send-reply">ارسال</button>
                    </div>
                `;
                parentComment.appendChild(replyBox);
        
                replyBox.querySelector(".send-reply").addEventListener("click", function() {
                    const name = replyBox.querySelector(".reply-name").value;
                    const text = replyBox.querySelector(".reply-text").value;
        
                    let newReply = document.createElement("div");
                    newReply.className = "reply-div";
                    newReply.innerHTML = `
                        <div class="comment">
                            <div>
                                <div class="comment-info">
                                    <div><span>${name}</span></div>
                                    <div>1 ساعت پیش</div>
                                    <div><span>0</span> پاسخ</div>
                                </div>
                                <div class="comment-btns">
                                    <div>
                                        <div><img src="pictures/like.png" alt=""></div>
                                        <div>18</div>
                                    </div>
                                    <div>
                                        <div><img src="pictures/dislike.png" alt=""></div>
                                        <div>4</div>
                                    </div>
                                    <div>
                                        <div><img src="pictures/response.png" alt=""></div>
                                        <div class="response">پاسخ</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="bold">${text}</div>
                            </div>
                        </div>
                    `;
                    parentComment.appendChild(newReply);
                    replyBox.remove();
                });
            }
        });
        
        
});


