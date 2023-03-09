const cardContainer=document.querySelector('.card-container')

function fetchApiData()
{
const url='https://fakestoreapi.com/products?sort=desc'
fetch(url)
.then(response =>{
 return response.json();
}).then(data=>{
    console.log(data)
    createCard(data)
})


}
fetchApiData()

function createCard(data){
    data.forEach((val)=>{
    const card=document.createElement('div')
    const img=document.createElement('img')
    const heading1=document.createElement('h1')
    const heading6=document.createElement('h6')
    const paragraph=document.createElement('p')
    const ratings=document.createElement('h5')
    ratings.innerHTML=val.rating.rate
    img.src=val.image
    heading1.innerHTML=val.category
    heading6.innerHTML=val.price
    card.classList.add('card')
    img.classList.add('image-design')
    paragraph.innerHTML=val.title
    card.appendChild(heading1)
    card.appendChild(img)
    card.appendChild(ratings)
    card.appendChild(paragraph)
    card.appendChild(heading6)
    
    cardContainer.append(card)
    })
}