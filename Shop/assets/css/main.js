const images = document.querySelector('.content__img-one img')
const prev = document.querySelector('.content__img-one-left')
const next = document.querySelector('.content__img-one-right')

let CurrentIndex = 0
function update(){
    images[CurrentIndex]
}
images.forEach((item, index) =>{
    item.addEvenListener('click', function(){
        CurrentIndex = index
    })
})

prev.addEventListener('click', function(){
    if(CurrentIndex > 0){
        CurrentIndex--
    }
})
next.addEventListener('click', function(){
    if(CurrentIndex < images.lenghth -1){
        CurrentIndex++
    }
})

/*----------modal-------------*/
//modal-login

const btnOpen = document.querySelector('.header__navbar-login')
const modal = document.querySelector('.modal__login')
const btnclose = document.querySelector('.modal__can-button')
const iconClose = document.querySelector('.modal__icon-close')

function toggleModal(){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', function(){
    modal.classList.remove('hide')
})
iconClose.addEventListener('click', toggleModal)
btnclose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})


//modal-sign
const btnsign = document.querySelector('.header__navbar-sign')
const btnCancel = document.querySelector('.modal__sign-footer p')
const modalSign = document.querySelector('.modal__sign')

function toggleSign(){
    modalSign.classList.toggle('hide')
}

btnsign.addEventListener('click', function(){
    modalSign.classList.remove('hide')
})
btnCancel.addEventListener('click', toggleSign)
modalSign.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleSign()
    }
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        toggleSign()
    }
})
