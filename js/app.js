// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let detailAlert = document.querySelector('#details');
detailAlert.addEventListener('click', addAlert);

function addAlert(){
    alert('Not Available in Hawaii');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let name1Desc = document.querySelector('#name1');
name1Desc.addEventListener('mouseover', showDesc1);

function showDesc1(){
   if (descrip1.style.display === 'block'){
       descrip1.style.display = 'none';
   }else {
       descrip1.style.display = 'block';
   }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

let div2 = document.createElement('div');

div2.id = 'descrip2';

div2.textContent = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";

name2.appendChild(div2);

let name2Desc = document.querySelector('#name2');
name2Desc.addEventListener('click', showDesc2);

function showDesc2(){
    if (div2.style.display === 'block'){
        div2.style.display = 'none';
    }else{
        div2.style.display = 'block';
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let thumbsUp = document.querySelectorAll('.fa-thumbs-up');
// console.log(thumbsUp);

for (let i = 0; i< thumbsUp.length; i++){
    thumbsUp[i].addEventListener('click',counter)
    let countCont = document.createElement('div');
    countCont.className = 'likeCounter';
    thumbsUp[i].appendChild(countCont);
}

function counter(){
    // console.log(this);
    let finalCount = this.querySelector('.likeCounter');
    finalCount.innerHTML++;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let plusSign = document.querySelector('#increase');

plusSign.addEventListener('click', priceUp);

function priceUp(){
    let priceText = document.querySelector('#price4');
    console.log(priceText.childNodes);
    priceText.childNodes[0].nodeValue++;
}


//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
