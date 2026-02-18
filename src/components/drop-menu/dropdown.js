export function activateHamburger(){
  const hamburger = document.querySelector('.hamburger');
  const hamburgerContainer = document.querySelector('.HamburgerContainer');
  
  hamburger.addEventListener('click', ()=>{
    hamburgerContainer.classList.add('active');
  });
};

export function closeWindow(){
   const closeWindow = document.querySelector('.closeWin');
   const hamburgerContainer = document.querySelector('.HamburgerContainer');

   closeWindow.addEventListener('click', ()=>{
    hamburgerContainer.classList.remove('active');
  });
};