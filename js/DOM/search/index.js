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

const divIspis = document.querySelector('.post-container')

// const ispisPostova = (postovi) =>{
    //     postovi.forEech(post =>{
        
        //         const noviDiv = document.createElement('div')
        
        //         const pPostName = document.createElement('p')
        //         pPostName.textContent = post.postName
        
        //         const pNumLikes = document.createElement('p')
//         pNumLikes.textContent = post.numLikes

//         const img = document.createElement('img')
//         img.value = post.img
        
//         noviDiv.append(pPostName,pNumLikes,img)
//         divIspis.appendChild(noviDiv)

//     })
// }

const ispisPostova = (postovi) => {
    postovi.forEach(post => {

        const div = document.createElement('div')
        div.className = 'post'
        
        const img = document.createElement('img')
        img.src = post.img
        
        const divLike = document.createElement('div')
        divLike.className = 'likes'
        
        const pNumLikes = document.createElement('p')
        pNumLikes.textContent = post.numLikes
        pNumLikes.className = 'post-name'
        
        const button = document.createElement('button')
        button.textContent = 'Like'
        button.className = 'btnLike'
        
        divLike.append(pNumLikes,button)
        
        const pPostName = document.createElement('p')
        pPostName.textContent = post.postName

        function like (pNumLikes){
            pNumLikes = +pNumLikes.textContent + 1
            return pNumLikes
        }
        
        button.addEventListener('click', () => {
            pNumLikes.textContent = like(pNumLikes)
            // post.numLikes.sort((a,b)=> b.numLikes - a.numLikes)
            // ispisPostova(postovi)
        })

        div.append(img,divLike,pPostName)
        divIspis.appendChild(div)
    })
}
ispisPostova(postovi)


// ispisPostova(postovi)


// console.log(postovi)

// displayPost()