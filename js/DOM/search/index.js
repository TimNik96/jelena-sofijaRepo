const divIspis = document.querySelector('.post-container')
const inputSearch = document.querySelector('#search')

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

const ispisPostova = (postovi) => {
    divIspis.textContent = ''
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
        
        button.addEventListener('click', (event) => {
            // console.log(event.target.parentElement.parentElement.children[2].textContent);
            let post = postovi.find(el => el.postName === event.target.parentElement.parentElement.children[2].textContent);
            post.numLikes += 1
            postovi.splice(postovi.findIndex(el => el.postName === post.postName), 1, post)
            postovi.sort((a, b) => b.numLikes - a.numLikes)
            ispisPostova(postovi)
        })

        div.append(img,divLike,pPostName)
        divIspis.appendChild(div)
    })
}

postovi.sort((a, b) => b.numLikes - a.numLikes)
ispisPostova(postovi)

inputSearch.addEventListener('keyup', () => {
    let rezultatPretrage = postovi.filter(el => el.postName.includes(inputSearch.value))    
    ispisPostova(rezultatPretrage)
})