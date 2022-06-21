function init() {
    load();
    render();
}

// render website #################################

function render() {
    let newpost = document.getElementById('postcontainer');
    newpost.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        newpost.innerHTML += newBlock(i, post);
        renderNewComments(i);
    }
    
}

// render new comment ##############################

function renderNewComments(i) {
    let comments = document.getElementById(`newComment${i}`);
    comments.innerHTML = '';
    for (let j = 0; j < posts[i]['comments'].length; j++) {
        const newComments = posts[i]['comments'][j];
        comments.innerHTML += newComment(userId, newComments, i, j);
    }
    save();
}

// add new comment ##############################

function addComment(i) {
    let input = document.getElementById(`inputfield${i}`);
    if (input.value.length == 0) {
        alert('Bitte etwas eingeben!')
    } else {
        posts[i]['comments'].push(input.value);
    }
    input.value = '';
    save();
    renderNewComments(i);
}

// delete comment #########################

function deletePost(i, j) {
    let newpost = posts[i]['comments'];
    newpost.splice(j, 1);

    save();
    renderNewComments(i)
}

// save new post #########################

function save() {
    let comments = JSON.stringify(posts);
    localStorage.setItem('posts', comments);

}


// load post at render #########################

function load() {
    let comments = localStorage.getItem('posts');
    if (comments) {
        posts = JSON.parse(comments);
    }
}

// likebutton ##############################

function likeButton(i) {
    let like = document.getElementById(`likebutton${i}`);
    like.classList.toggle('heart-full');

}

// favourite button ##############################

function favourite(i) {
    let fav = document.getElementById(`favourite${i}`);
    fav.classList.toggle('favourite-full');
}

// open Responsive Nav ############################

function openResponsive() {
    document.getElementById('responsive-nav').classList.remove('d-none');
    document.getElementById('hamburger').classList.add('d-none');
    document.getElementById('close-responsive').classList.remove('d-none');

}

function closeResponsive() {
    document.getElementById('responsive-nav').classList.add('d-none');
    document.getElementById('close-responsive').classList.add('d-none');
    document.getElementById('hamburger').classList.remove('d-none');
}


function openDetails() {
    document.getElementById('hidden-details').classList.remove('d-none');

}

function closeDetails() {
    document.getElementById('hidden-details').classList.add('d-none');
}


function openHidden() {
    document.getElementById('hidden-add').classList.remove('d-none');
}

function closeHidden() {
    document.getElementById('hidden-add').classList.add('d-none');
}


function inConstruction() {
    alert(`in Construction - more infos soon!`);
}