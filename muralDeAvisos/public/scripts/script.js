document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://localhost:3000/api/all")
        .then(res => { return res.json() })
        .then(json => {
            let postElements = '';
            let posts = JSON.parse(json);

            posts.forEach(post => {
                let postElement = `<div id=${post.id} class="card">
                                        <div class="card-header">
                                            <h5 class="card-title">${post.title}</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>${post.description}</p>
                                        </div>
                                    </div>`;

                postElements += postElement;
            });

            document.getElementById("posts-container").innerHTML = postElements;
        })
}

function newPost() {
    let title = document.getElementById("input-title").value;
    let description = document.getElementById("input-description").value;
    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options)
        .then(() => {
            updatePosts()
            document.getElementById("input-title").value = "";
            document.getElementById("input-description").value = "";
        });

}