Shery.mouseFollower()

Shery.imageEffect("#back",{
  style:5,
  config:{
    a:{ value: 1.49, range:[0,39]},
    b:{ value : -0.98, range: [-1,1]},
    aspect: {value: 1.8},
    gooey:{value:true},
    infiniteGooey:{value:true},
    durationOut:{value:0.5, range: [0.1,5]},
    durationIn:{value: 0.5,range:[0.1,5]},
    displaceAmount:{value:0.8},
    masker:{value:true},
    maskVal:{value:1.33,range:[1,5]},
    scrollType:{value:0},
    geoVertex:{range:[1,64],value:1},
    noEffectGooey:{value:false},
    onMouse:{value:1},
    noise_speed:{value:1.59,range:[0,10]},
    metaball:{value: 0.21, range:[0,2]},
    discard_threshold:{value: 0.8, range:[0,1]},
    antialias_threshold:{value:0 , range:[0,0.1]},
    noise_height:{value: 0.47, range:[0,2]},
    noise_scale:{value:12.15 , range:[0,100]},
  },
  gooey:true,
})
var elems = document.querySelectorAll('.elem')

elems.forEach(function(elem){
  var h1s = elem.querySelectorAll("h1")
var index = 0

document.querySelector("#main").addEventListener('click',()=>{
  

    gsap.to(h1s[index],{
      top:'-=100%',
      ease: Expo.easeOut,
      duration:0.8,
      onComplete: function(){
        gsap.set(this._targets[0],{
          top:'100%'
        })

      }
    })
    index === h1s.length-1?index = 0 : index++;
  gsap.to(h1s[index],{
    top:'-=100%',
    ease: Expo.easeOut,
    duration:0.8,
  })
})
})


