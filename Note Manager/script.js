// // Lecture: Get And Manipulate On Individual Elements - Part 1

// /*
// console.log(document.getElementById('list'));

// var el = document.getElementById('list');
// console.log(el);
// console.log(typeof el);

// // var el = document.getElementById('LIST');
// // console.log(el);

// console.log(el.textContent);
// console.log(el.textContent = 'Hello');

// var heading = document.getElementById('heading').textContent;
// console.log(heading);

// var ulElement = document.getElementById('list');
// console.log(ulElement.textContent = heading);

// console.log(el.innerHTML);
// console.log(el.innerHTML = 'Hello');
// console.log(el.innerHTML = '<h1>Hello</h1>');
// console.log(el.textContent = '<h1>Hello</h1>');
// */


// // var icons = document.getElementsByClassName('fa');



// // for(i=0; i < icons.length; i++){
// //     console.log(icons[i])
// // };

// // var iconsArr = Array.from(icons);

// // console.log('Array :',iconsArr);
// // console.log('HTML :',icons);

// // iconsArr.push('Hello');
// // console.log(iconsArr);

// // var icons = document.getElementsByClassName('fa');
// // Array.from(icons).forEach(function(icon,index,arr){
// //     console.log(icon,index,arr);
// // });

// // var lis = document.getElementsByTagName('li');
// // console.log(lis)

// // var el = document.querySelectorAll('li, h2, #hide-list');
// // console.log(el);

// // el.forEach(function(li){
// //     console.log(li);
// // });

// // Array.from(el).forEach(function(li){
// //     li.textContent = ('JOker');
// // })

// // var h2 = document.querySelector('header h2');

// // h2.classList.toggle('changeBg');

// // Events important

// // var click = document.querySelector('header h2')

// // click.onclick = function(){
// //     console.log('Clicked')
// // }

// // click.onclick = function(){
// //     console.log('Clicked')
// // }

// // **********************************************
// // function a(){
// //     console.log('Clicked')
// // }

// // function b(){
// //     console.log('Mouse Over')

// var h2 = document.querySelector('header h2');

// Method 1

// h2.addEventListener('click',a)

// function a(){
//     console.log(this)
// }
// h2.addEventListener('click',b)

// function a(e){
//     console.log(e.target)
// }

// function b(){
//     console.log('clicked b')
// }

// Method 2

// h2.addEventListener('click',function(){
//     console.log('clicked by method2')
// })

// var h2 = document.querySelector('header h2')

// h2.addEventListener('click',function(){

//     a(2,5)
    
// })

// function a(x,y){
//     console.log(x * y)
// }

// var div = document.querySelector('div.wrapper');
// var header = document.querySelector('header');
// var h2 = document.querySelector('header h2');

// div.addEventListener('click',function(){
//     var delay = new Date().getTime() + 1000;
//     while(new Date() < delay){}
//     console.log('From div');
// },true);
    
// header.addEventListener('click',function(){
//     var delay = new Date().getTime() + 1000;
//     while(new Date() < delay) {}
//     console.log('From header');
// },true);

// h2.addEventListener('click',function(){
//     var delay = new Date().getTime() + 1000;
//     while(new Date < delay){}
//     console.log('From h2');
// },true);

// ****************************************

// var btn = document.getElementById('add-btn');
// var input = document.getElementById('add-input');

// btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('Hello Pranav');
// });

// *********************************************

// var btn = document.getElementById('add-btn');
// var input = document.getElementById('add-input');

// btn.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     input.setAttribute('type','submit');
//     input.setAttribute('value',input.value);
// });

 
// var listItem = document.getElementById('item-list');

// var newEl = document.createElement('button');

// var text = document.createTextNode('Click');

// newEl.appendChild(text);

// newEl.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px; background: #3498db; color: #fff;');

// var form = document.getElementById('add');

// form.appendChild(newEl);

// form.insertBefore(newEl,form.children[0]);

// form.parentElement.removeChild(newEl);
// form.removeChild(newEl)

// console.log(form);

// var ul = document.querySelector('ul');

// document.getElementById('add-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     //console.log('clicked')

//     var addInput = document.getElementById('add-input');

//     if(addInput.value !== '') {
//         var li = document.createElement('li'),
//             firstPar = document.createElement('p'),
//             secondPar = document.createElement('p'),
//             firstIcon = doucment.createElement('i'),
//             secondIcon = document.createElement('i'),
//             input = document.createElement('input');

//         firstIcon.className = "fa fa-pencil-square-o";
//         secondIcon.className = "fa fa-times";
//         input.className = "edit-note";
//         input.setAttribute('type','text');

//         firstPar.textContent = addInput.value;
        
//         secondPar.appendChild(firstIcon);
//         secondPar.appendChild(secondIcon);
//         li.appendChild(firstpar);
//         li.appendChild(secondPar);
//         li.appendChild(input);
//         ul.appendChild(li);
//         addInput.value = '';
//     }
// });

var ul = document.querySelector('ul');

//**********ADD ITEMS
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        // console.log(li);
        addInput.value = '';
    }
});

ul.addEventListener('click',function(e){
    if(e.target.classList[1] === 'fa-pencil-square-o'){

        // console.log('icon1');

        var parentpar = e.target.parentNode;
        parentpar.style.display = 'none';

        var note = parentpar.previousElementSibling;
        var input = parentpar.nextElementSibling;
        console.log(note,input);
        input.style.display = 'block';
        input.value = note.textContent;

        input.addEventListener('keypress',function(e){
            if(e.keyCode == 13){
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentpar.style.display = 'block';
                    input.style.display = 'none';

                }else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }

            }
           
        });

    }else if(e.target.classList[1]==="fa-times"){
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
    
});


// ***********************Hide Items***********

var hideItem = document.getElementById('hide')

hideItem.addEventListener('click',function(){
    var label = document.querySelector('label');

    if(hideItem.checked){
        label.textContent = 'unhide notes';
        ul.style.display = 'none';
    }else{
        label.textContent = 'hide notes';
        ul.style.display = 'block';
    }

});

// Search Note ***************************

var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup',function(e){
    var searchChar = e.target.value.toUpperCase();
    
    var notes = ul.getElementsByTagName('li');

    Array.from(notes).forEach(function(note){
        var parText = note.firstElementChild.textContent;

        if(parText.toUpperCase().indexOf(searchChar) !== -1){
            note.style.display = 'block';

        }else {
            note.style.display = 'none';
        }

    });
});







