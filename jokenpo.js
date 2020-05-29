window.onload = ()=>{
  set_image_visibility_listenner()
}

function fetch_images(selector){
  return document.querySelectorAll(selector)
}

function set_image_visibility_listenner(){
  let images = fetch_images('.choosable')

  set_images_to_not_selected()
  
  images.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
      element.style.opacity = 1;
    })
    element.addEventListener('mouseleave',(event)=>{
      element.style.opacity = 0.5;
    })
  });
}

function set_images_to_not_selected(){
  let images = fetch_images('img')
  images.forEach(element => {
    element.style.opacity = 0.5
  });
}