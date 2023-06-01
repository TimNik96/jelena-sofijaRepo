const postovi = [
    {
        postName: "Post 1",
        numLikes: 7,
        img: 'Abstract-Triangle-Transparent-PNG.png',
    },
    {
        postName: "Post 2",
        numLikes: 3,
        img: 'PNG_transparency_demonstration_1.png',
    },
    {
        postName: "Post 3",
        numLikes: 10,
        img: 'Abstract-Triangle-Transparent-PNG.png',
    }
]

postovi.sort((a, b) => b.numLikes - a.numLikes)

console.log(postovi)

displayPost()