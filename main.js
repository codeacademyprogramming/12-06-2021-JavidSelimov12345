import { fetchApi } from './api/api.js';

fetchApi().
then((data)=>{
    data.map((pizza)=>{


        // console.log(pizza.category)

        document.getElementById('pizza_row').innerHTML+=`
        
        <div class="col-3">
            <div class="context-pizza">
              <div class="pizza-block">
                <img src="${pizza.image}" alt="" />
                <div class="pizza-block-inner">
                  <div class="dp-fl">
                    <h5>${pizza.category}</h5>
                    <span>43cm</span>
                  </div>
                  <div class="dp-fl">
                    <p>${pizza.name}</p>
                  </div>
                  <div class="cost-cont">
                    <span class="cost">119</span>UAH
                  </div>
                </div>

                <div class="pizza-bottom-circle">
                  <div class="inner-circle">
                    <img src="assets/img/bag.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="pizza-block-hover">
                <h3>Sizes:</h3>
                <input type="radio"value='small' name="radAnswer" /> <span>Small 20cm</span>
                <br />
                <input type="radio"value='medium' name="radAnswer" />
                <span>Medium 30cm</span> <br />
                <input type="radio"value='big' name="radAnswer" /> <span>Big 70cm</span>

                <div class="align-center">
                  <button class='butt' >Add to basket</button>
                </div>
              </div>
            </div>
          </div>
        
        `
       
        document.getElementsByClassName('butt')[pizza.id-1].addEventListener('click',function(){
            console.log('hello')
        })

    })
 


}).then(
    

    

)





let basket = document.getElementsByClassName('basket')[0]
let basket_list= document.getElementsByClassName('basket_elements')[0]
let children_list=basket_list.childElementCount
let counts=document.getElementsByClassName('counts')[0]
counts.innerText=children_list
basket.addEventListener('click',function(){
    if(basket_list.style.display==='block'){
        basket_list.style.display='none'
    }
    else{
        basket_list.style.display='block'
    }
    
})


function displayRadioValue() {
    var ele = document.getElementsByName('radAnswer');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value;
    }
}

