function newBlock(i, post) {
    return /*html*/ `
       
    <div class="newpost">
        <div class="block-headline">
            <div class="block-topline">
                <img class="profilepic" src="${post['profilepic']}"> 
                <div class="block-name-location">
                    <div><b>${post['author']}</b></div> 
                    <div>${post['location']}</div>
                </div> 
            </div>
            <div class="details">
                <img src="img/more.png" id="details" onclick="openDetails()">  
            </div>
        </div>
        <div class="block-image">
            <img class="post-image" src="${post['image']}">
        </div>
        <div class="rating-section">
            <div class="buttons">
                <img src="img/heart.png" id="likebutton${i}" onclick="likeButton(${i})">
                <img src="img/chat.png" href="#inputfield${i}">
                <img src="img/send.png" onclick="inConstruction()">
            </div>
            <div class="favourite">
                <img src="img/favourite.png" id="favourite${i}" onclick="favourite(${i})">
            </div>
        </div>
        <div class="likes"><b>Gefällt ${posts[i]['likes']} Mal</b></div>
        <div class="block-description"><b>${post['author']}</b> ${post['description']}</div>
    
         <!-- new comments -->
        
        <div id="newComment${i}" class="comments"></div>

        <!-- Inputfield for new comments -->

        <div class="comment-section">
            <img class="smiley" src="img/happy.png" onclick="inConstruction()">
            <input id="inputfield${i}" class="inputfield" type="text" placeholder="Kommentieren ..."><div class="posten" onclick="addComment(${i})">Posten</div>           
        </div>    


    </div>     
  
`;

}

function newComment(userId, newComments, i, j) {
    return /*html*/ `
        <div class="comments">
            <div class="newComment">
                <div>
                    <span><b>${userId}</b></span>
                    <span>${newComments}</span>
                </div>
                <button onclick="deletePost(${i},${j})" class="deleteButton">X</button>
            </div>       
        </div>
        `;
}

