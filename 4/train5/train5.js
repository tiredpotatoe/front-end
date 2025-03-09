let id = 2;
function addComment(button) {
    const postComment = document.getElementById("post-comment");
    postComment.style.boxShadow = "";
    const comment  = document.getElementById('user-comment');
    const commentsDiv = document.getElementById("comments");
    if (comment.value) {
        commentsDiv.innerHTML += `
            <div id="${id}" class="comment-div">
              <div class="pfp-text-container">
                <div class="comment-pfp">
                  <img src="pictures/evil-larry-larry.png" alt="" />
                </div>
                <div class="comment-text">
                  <span>فلانی بهمانی</span>
                  <p class="gray">
                    ${comment.value}
                  </p>
                </div>
              </div>
              <div class="heart comment-heart">&#9825;</div>
            </div>
    `;
    id++;
    console.log(id)
    } else {
        postComment.style.boxShadow = "0 0 3px red";
    }
    comment.value= "";
}