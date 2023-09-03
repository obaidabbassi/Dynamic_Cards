const cards=document.getElementById('cards')

const URL = 'https://picsum.photos/v2/list';

fetch(URL).
then((e)=>{

let data= e.json()

return data
}).
then((data)=>{
console.log(data);
data.forEach(element => {
    
const card= document.createElement('div');
card.classList.add('card')

card.innerHTML=`<p>Author Name :${element.author}</p>

<img class="img" src="${element.download_url}"/>

<button class="button">Visit</button>
`


cards.appendChild(card)
});

}).catch((e)=>console.log(e))

