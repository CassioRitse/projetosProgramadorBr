module.exports = {
    posts: [
        {
            id: "100abc",
            title: "Teste do Mural",
            description: "Descrição Teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}
