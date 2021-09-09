const image = document.querySelector('.image img');
const textbox = document.querySelector('.text');
const text = textbox.children[0];

let scene = 1;
document.addEventListener('keyup',function(e){
  if(e.key == 'Enter')
  {
    scene++
  switch(scene){
    case 2 :
      text.innerHTML = 'The words whispered differ depending on the person, but they all serve the same purpose, to decieve it\'s listener.Some say they hear the voices of young children,others a deceased loved one, all beckoning them to step closer, to enter.These are of course the accounts of those wise enough to not have adhered to the calls of the wind.Even so, it seems one is damned in one way or another the moment they lay foot on the forest floor.';
      break;
    case 3 :
      text.innerHTML = 'So the new rumor says anyway.'
      break;
    case 4 :
      image.src = 'img/village.jpg'
      text.innerHTML = 'I live in a small village called Manokawah, about 10 miles or so from Akowah, where the Anwir forest is supposedly situated.'
      break;
    case 5 : 
      text.innerHTML = 'I had always been a sceptic of all things supernatural, and thus, I got into the business of debunking them.So when I\'d caught on to this new rumor spreading around town, it undoubtedly sparked an interest.'
      break;
    case 6 :
      image.src = 'img/picking-up.jpg'
      text.innerHTML = 'I called up a couple buddies at 4 AM the next morning on July 7th of 1980.I set out with my bestfriends, Tim and Jack'
      break;
    case 7 :
      text.innerHTML = 'We arrived at Akowah a few days later, excited and just as determined to find answers as we were when we first set out.We met up with a friend of mine there, who agreed to take us there, and way too soon it seemed, we found ourselves facing the infamous forest.'
    case 8 :
      image.src = 'img/me-and-the-boys.jpg'
      text.innerHTML = 'The air was thick and the atmosphere tense, but we had come too far to weasel out now! So with heart\'s pounding, chests puffed and  heads held high, we pressed on and entered Awir.'
  }
  }
  
})