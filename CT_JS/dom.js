// let b = document.getElementById('one')
// console.log(b);


// let h1 = document.getElementsByTagName('h1')
//  for(let item of h1){
//     item.style.color='red'
//  }
// console.log(h1);

// let h2 = document.getElementsByClassName('one')
// console.log(h2);


// console.log(document);

// let a = document.querySelector('#one')
// let b = document.querySelectorAll('h1')
// let c = document.getElementsByClassName('one')

// console.log(c );


//  let hi = document.querySelector('a')
// console.log(hi.getAttribute('href'));
// hi.setAttribute('href', 'abcccccsdf')
//  console.log(hi.getAttribute('href'));

// let a = document.querySelector(img)
// setInterval(()=>{
//     console.log('hhhhh');
// },200)

// const arr = [
//     // "D:\SC WebDev\CT_JS\image\ali-sedigh-moghadam--coHuTi1AOA-unsplash.jpg",
//     // "D:\SC WebDev\CT_JS\image\birhat-jiyad-OMGORs5og5M-unsplash.jpg",
//     // "D:\SC WebDev\CT_JS\image\kristaps-ungurs-F1UCZOnvlmY-unsplash.jpg",
//     // "D:\SC WebDev\CT_JS\image\remy_loz-8nMmwZTxKiU-unsplash.jpg",
//     // "D:\SC WebDev\CT_JS\image\strvnge-films-1yZGse4zMGQ-unsplash.jpg",

//    "https://images.unsplash.com/photo-1705078368218-6252bc56a644?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
//    "https://images.unsplash.com/photo-1704002631457-9a14d58464cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1703514881823-eda837e5fbbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
   
// ]

// const imageEl = document.querySelector('img');

// let num = 0;

// setInterval(function(){
//     imageEl.setAttribute('src',arr[num]);
//     num = (num + 1) % arr.length;
// },2000);

//CREATE ELEMENT BY USING DIV

// let div = document.querySelector('div')
// let h1 = document.createElement('h1')
// h1.innerText ='hello'
// div.appendChild(h1)

// console.log(div)
// div.remove(h1)


//EVENT

// function fun1(){
//     console.log('Hellooooo');
// }

//  let btn = document.querySelector('button')
//  btn.onclick=function(){
//     console.log("hellooooooo");
//  }

// EVENTLISTNER

// let btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     console.log('Wooooooooow');
// })

// let inp = document.querySelector('input')
// inp.addEventListener('input', function(){
//     console.log('Wooooooooow');
// })

// let inp = document.querySelector('input')
// inp.addEventListener('input', function(e){
//     console.log(e.target.value);
// })


// let inp = document.querySelector('input')
// let div = document.querySelector('div')
// inp.addEventListener('input', function(e){
//     div.innerText = e.target.value
// })

// let inp = document.querySelector('input')
// let div = document.querySelector('div')
// inp.addEventListener('input', function(e){
//    div.innerText = e.target.value

// })

//SELECT INPUT ELEMENT
const titleEl = document.getElementById('title');

//SELECT LIST ELEMENT
const listEl = document.getElementById('list');

//SELECT BUTTON ELEMENT
const addButtonEl = document.getElementById('add-button');

//ADDING "CLICK" EVENT LISTENER ON BUTTON ELEMENT
addButtonEl.addEventListener('click', function(){

    // GETTING THE VALUE OF THE INPUT FIELD
    const titleText = titleEl.value;
    // console.log(titleEl,"rr")

    // CREATING AND LI ELEMENT AND ADDING INNER TEXT
    const li = document.createElement('li');
    li.innerText = titleText;

    //add the newly created li element to the list
    listEl.appendChild(li);

    // clear the input field after adding li to the list
    titleEl.Value='';

    // remove li when it is clicked
    // li.addEventListener('click',function(){
    //     li.remove();
    // })
})

