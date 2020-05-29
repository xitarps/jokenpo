window.onload = ()=>{
  set_image_visibility_listenner()
}

function fetch_images(){
  return document.querySelectorAll('img')
}
function set_image_visibility_listenner(){
  let images = fetch_images()

  images.forEach(element => {
    element.style.opacity = 0.5
  });
  
  images.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
      element.style.opacity = 1;
    })
    element.addEventListener('mouseleave',(event)=>{
      element.style.opacity = 0.5;
    })
  });
}