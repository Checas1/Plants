let smth = `
Выполненные пункты:
  1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной
  2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг
  3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur
  4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым
  5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается
  6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе
  7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу`

console.log(smth)


const nav = document.querySelector('#header_nav')
const navBtn = document.querySelector('#nav_button')
const navBtnImg = document.querySelector('#nav_button-img')
const navLink  = document.querySelectorAll('#nav_link')
const navList  = document.querySelector('#nav_list')
const headerLine = document.querySelector('#welcome_headline')

navBtn.onclick = () => {
  if(nav.classList.toggle('open')){
    navBtnImg.src = './img/nav_close.svg'; 
    headerLine.classList.toggle('open')
    navList.style.animation = 'example 1s ease-in-out';
  }else {
    navBtnImg.src = './img/burger.svg';
    headerLine.classList.remove('open')
    navList.style.animation = 'close 1s ease-in-out';
  }
}


for (let span of document.querySelectorAll('#nav_list li')) {
  span.onclick = () => {
    if(nav.classList.toggle('open')){
      navBtnImg.src = './img/nav_close.svg';
      headerLine.classList.toggle('open')
    }else {
      navBtnImg.src = './img/burger.svg';
      headerLine.classList.remove('open')
    }
  }       
}

// Service

const firstBtn = document.querySelector('#first_btn')
const secondBtn = document.querySelector('#second_btn')
const thirdBtn = document.querySelector('#third_btn')
const firstGroup =  document.querySelectorAll('#first_group')
const secondGroup =  document.querySelector('#second_group')
const thirdGroup =  document.querySelectorAll('#third_group')

firstBtn.onclick = () => {
  firstBtn.classList.toggle('active')
  if (firstBtn.classList.contains('active') && secondBtn.classList.contains('active')) {
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
    for(let item of firstGroup){
      item.style.filter = ''
    }
    secondGroup.style.filter = ''
    thirdBtn.disabled = true
  }else if (firstBtn.classList.contains('active') && thirdBtn.classList.contains('active')) {
    secondGroup.style.filter = 'blur(4px)'
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    for(let item of firstGroup){
      item.style.filter = ''
    }
    secondBtn.disabled = true
  }else if (firstBtn.classList.contains('active')){
    secondGroup.style.filter = 'blur(4px)'
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
  }else if(secondBtn.classList.contains('active')){
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
    for(let item of firstGroup){
      item.style.filter = 'blur(4px)'
    }
    thirdBtn.disabled = false
  }else if(thirdBtn.classList.contains('active')){
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    for(let item of firstGroup){
      item.style.filter = 'blur(4px)'
    }
    secondGroup.style.filter = 'blur(4px)'
    secondBtn.disabled = false
  }else{
    for(let item of firstGroup){
      item.style.filter = ''
    }
    secondGroup.style.filter = ''
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    secondBtn.disabled = false
    thirdBtn.disabled = false
  }
}

secondBtn.onclick = () => {
  secondBtn.classList.toggle('active')
  if (firstBtn.classList.contains('active') && secondBtn.classList.contains('active')) {
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
    for(let item of firstGroup){
      item.style.filter = ''
    }
    secondGroup.style.filter = ''
    thirdBtn.disabled = true

  }else if (secondBtn.classList.contains('active') && thirdBtn.classList.contains('active')) {
    for(let item of firstGroup){
      item.style.filter = 'blur(4px)'
    }
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    secondGroup.style.filter = ''
    firstBtn.disabled = true
  }else if (secondBtn.classList.contains('active')){
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
    for(let item of firstGroup){
      item.style.filter = 'blur(4px)'
    }
    secondGroup.style.filter = ''
  }else if (firstBtn.classList.contains('active')){
    for(let item of thirdGroup){
      item.style.filter = 'blur(4px)'
    }
    secondGroup.style.filter = 'blur(4px)'
    thirdBtn.disabled = false
  } else if(thirdBtn.classList.contains('active')){
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    for(let item of firstGroup){
      item.style.filter = 'blur(4px)'
    }
    secondGroup.style.filter = 'blur(4px)'
    firstBtn.disabled = false
  }else {
    secondGroup.style.filter = ''
    for(let item of thirdGroup){
      item.style.filter = ''
    }
    for(let item of firstGroup){
      item.style.filter = ''
    }
    firstBtn.disabled = false
    thirdBtn.disabled = false
  }
}


  thirdBtn.onclick = () => {
    thirdBtn.classList.toggle('active')
    if (firstBtn.classList.contains('active') && thirdBtn.classList.contains('active')) {
      for(let item of thirdGroup){
        item.style.filter = ''
      }
      for(let item of firstGroup){
        item.style.filter = ''
      }
      secondGroup.style.filter = 'blur(4px)'
      secondBtn.disabled = true
    }else if (secondBtn.classList.contains('active') && thirdBtn.classList.contains('active')) {
      for(let item of firstGroup){
        item.style.filter = 'blur(4px)'
      }
      for(let item of thirdGroup){
        item.style.filter = ''
      }
      secondGroup.style.filter = ''
      firstBtn.disabled = true
    }else if (secondBtn.classList.contains('active')){
      for(let item of thirdGroup){
        item.style.filter = 'blur(4px)'
      }
      for(let item of firstGroup){
        item.style.filter = 'blur(4px)'
      }
      secondGroup.style.filter = ''
      firstBtn.disabled = false
    }else if (firstBtn.classList.contains('active')){
      for(let item of thirdGroup){
        item.style.filter = 'blur(4px)'
      }
      secondGroup.style.filter = 'blur(4px)'
      secondBtn.disabled = false
    } else if (thirdBtn.classList.contains('active')){
      for(let item of thirdGroup){
        item.style.filter = ''
      }
      for(let item of firstGroup){
        item.style.filter = 'blur(4px)'
      }
      secondGroup.style.filter = 'blur(4px)'
    }else {
      for(let item of firstGroup){
        item.style.filter = ''
      }
      secondGroup.style.filter = ''
      for(let item of thirdGroup){
        item.style.filter = ''
      }
      firstBtn.disabled = false
      secondBtn.disabled = false
    }  
  }



  // Prices

  const detailFirst = document.querySelector('#detail_first')
  const detailSecond = document.querySelector('#detail_second')
  const detailThird = document.querySelector('#detail_third')
  const summaryFirst = document.querySelector('#summary_first')
  const summarySecond = document.querySelector('#summary_second')
  const summaryThird = document.querySelector('#summary_third')
  const summaryImgFirst = document.querySelector('#details_img-first')
  const summaryImgSecond = document.querySelector('#details_img-second')
  const summaryImgThird = document.querySelector('#details_img-third')

  summaryFirst.onclick = () => {
    if(summaryFirst.classList.toggle('active')){
      detailSecond['open'] = ''
      summarySecond.classList.remove('active')
      detailThird['open'] = ''
      summaryThird.classList.remove('active')
      summaryImgFirst.src = './img/up_arrow.svg'
      summaryImgSecond.src = './img/select_arrow.svg'
      summaryImgThird.src = './img/select_arrow.svg'
    }else{
      summaryFirst.classList.remove('active')
      summaryImgFirst.src = './img/select_arrow.svg'
     }
  }


  summarySecond.onclick = () => {
    if(summarySecond.classList.toggle('active')){
      detailFirst['open'] = ''
      summaryFirst.classList.remove('active')
      detailThird['open'] = ''
      summaryThird.classList.remove('active')
      summaryImgFirst.src = './img/select_arrow.svg'
      summaryImgSecond.src = './img/up_arrow.svg'
      summaryImgThird.src = './img/select_arrow.svg'
    }else{
      summarySecond.classList.remove('active')
      summaryImgSecond.src = './img/select_arrow.svg'
     }
    }


  summaryThird.onclick = () => {
    if(summaryThird.classList.toggle('active')){
      detailFirst['open'] = ''
      summaryFirst.classList.remove('active')
      detailSecond['open'] = ''
      summarySecond.classList.remove('active')
      summaryImgFirst.src = './img/select_arrow.svg'
      summaryImgSecond.src = './img/select_arrow.svg'
      summaryImgThird.src = './img/up_arrow.svg'
    }else{
      summaryThird.classList.remove('active')
      summaryImgThird.src = './img/select_arrow.svg'
     }
    }


    // Select

    function select () {
      let selectHeader = document.querySelectorAll('.select__header');
      let selectItem = document.querySelectorAll('.select__item');
      let headerAcrive = document.querySelector('.select__header')
      let selectImg = document.querySelector('.select_arrow')
      let itemFirst = document.querySelector('.item_first')
      let itemSecond = document.querySelector('.item_second')
      let itemThird = document.querySelector('.item_third')
      let itemFourth = document.querySelector('.item_fourth')

      selectHeader.forEach(item => {
          item.addEventListener('click', selectToggle)
      });
  
      selectItem.forEach(item => {
          item.addEventListener('click', selectChoose)
      });
  
      function selectToggle() {
          this.parentElement.classList.toggle('is-active');
          headerAcrive.classList.toggle('active')
          selectImg.src = './img/up_arrow.svg'
          headerAcrive.classList.remove('actives')
          let adress = document.querySelectorAll('.adress')
          for(let item of adress){
            item.classList.remove('active')
          }
          this.classList.toggle('mobile')
          document.querySelector('.contacts_img').classList.remove('open')
          document.querySelector('.contacts_img').classList.remove('mobile_none')
          if(this.classList.contains('mobile')){
            document.querySelector('.contacts_img').classList.toggle('mobile')
          }else{
            document.querySelector('.contacts_img').classList.remove('mobile')
          }
      }
  
      function selectChoose() {
          let text = this.innerText
          let select = this.closest('.select')
          let currentText = document.querySelector('.select__current')
          currentText.innerText = text
          select.classList.remove('is-active')
          selectImg.src = './img/city_arrow.svg'
          headerAcrive.classList.toggle('actives')
          document.querySelector('.contacts_img').classList.toggle('open')
          document.querySelector('.contacts_img').classList.toggle('mobile_none')
          document.querySelector('.contacts_img').classList.remove('mobile')
          headerAcrive.classList.remove('mobile')
      }

      itemFirst.onclick = () => {
       document.querySelector('.adress_first').classList.toggle('active')
      }
      
      itemSecond.onclick = () => {
        document.querySelector('.adress_second').classList.toggle('active')
      }
      
      itemThird.onclick = () => {
        document.querySelector('.adress_third').classList.toggle('active')
      }
      
      itemFourth.onclick = () => {
        document.querySelector('.adress_fourth').classList.toggle('active')
      }
  };
  
  select();