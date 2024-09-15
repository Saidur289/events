// console.log(56);
// step - 1 add event 
document.getElementById("btn-post").addEventListener("click", function(){
    // step-2 : get the comment inside the textarea 
    // step -3 :set the comment inside container 
    const commentBox = document.getElementById('new-comment');  
    const newComment = commentBox.value;
    // console.log(newComment);
    const commentContainer = document.getElementById("comment-container");
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
   commentBox.value = "";

})