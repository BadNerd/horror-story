const image = document.querySelector('.image img');
const textbox = document.querySelector('.text');
const text = textbox.children[0];
var sound = new Howl({
  src: ['script/sound1.mp3'],
  volume: 0.1
});

let processing = true;
let scene = 1;
let active = true;
// scene 1 start
text.style.color = '#df2020';
image.classList.toggle('effect')
loadText('Gently weaving it\'s way through trees and bushes, lightly caressing every marsh, puddle and stream it comes across, the wind calls. It enchants it\'s prey, luring them deeper within the thick folds of Anwir forest.')

setTimeout(function(){
  image.classList.toggle('effect');
},1000)

// scene 1 end

document.addEventListener('keydown',function(e){
  if(e.key == 'Enter' && processing)
  {
    processing = false;
    console.log(processing);

  }else if(e.key == 'Enter' && !processing)
  {
    
    scene++;
    processing = true;
    textbox.children[1].style.display = 'none'
  switch(scene){
    case 2 :
      loadText('The words whispered differ depending on the person, but they all serve the same purpose, to decieve it\'s listener.Some say they hear the voices of young children,others a deceased loved one, all beckoning them to step closer, to enter.These are of course the accounts of those wise enough to not have adhered to the calls of the wind.Even so, it seems one is damned in one way or another the moment they lay foot on the forest floor.')
      break;
    case 3 :
      loadText('So the new rumor says anyway.')
      break;
    case 4 :
      image.src = 'img/village.jpg';
      text.style.color = 'rgb(202, 202, 202)';
      image.classList.toggle('effect');
      loadText('I live in a small village called Monakowah, about 10 miles or so from Akowah. Last week I had caught wind of a terrifying tale winding through the streets of our tiny village. One that told of a dark, desolate forest that doomed those who dare enter it. ')

      setTimeout(function(){
        image.classList.toggle('effect');
      },1000);

      break;
      case 5:
        loadText(' Almost every member of my community was left petrified from tales spoken of the \'Anwir Forest\' of Akowah.  People started cutting contact with loved ones they had in Akowah, We even stopped doing trades with them.');
        break;
    case 6 : 
      loadText('Now, I had always been a sceptic to all things supernatural, and thus, I got into the business of debunking them. I wanted to show my community that there was nothing for them to be scared of, they were all just overreacting to what some kid thought they heard . So I called up a couple of my buddies, Tim and Jay, to arrange a road trip for Akowah.')
      break;
    case 7 :
      image.classList.toggle('effect')
      image.src = 'img/picking-up.jpg'
      loadText('I called up a couple buddies at 4 AM the next morning on July 7th of 1980.I set out with my bestfriends, Tim and Jack')
      
      setTimeout(function(){
        image.classList.toggle('effect');
      },1000);

      break;
    case 8 :
      loadText('We arrived at Akowah a few days later, excited and just as determined to find answers as we were when we first set out.We met up with a friend of mine there, who agreed to take us there, and way too soon it seemed, we found ourselves facing the infamous forest.')
      break;
    case 9 :
      image.classList.toggle('effect')
      image.src = 'img/me-and-the-boys.jpg'
      loadText('The air was thick and the atmosphere tense, but we had come too far to weasel out now! So with heart\'s pounding, chests puffed and  heads held high, we pressed on and entered Awir.')

      setTimeout(function(){
        image.classList.toggle('effect');
      },1000);

      break;
    case 10:
      loadText('To be continue...')
  }
  console.log(processing);
  }
  
})

function loadText(txt){
  sound.play();
  text.innerHTML = '';
  let max = txt.length;
  let i = 0;
  let loadChar = null;
  loadChar = setInterval(function(){
    sound.play();
    text.innerHTML += txt[i];
    i++;
  
    if(i == max || !processing){
      textbox.children[1].style.display = 'block'
      text.innerHTML = txt;
      clearInterval(loadChar);
    }
  },50)
}


