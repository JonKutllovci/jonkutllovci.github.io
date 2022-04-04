
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

var options = {
  strings: [" Web Developer.", " Web Designer.", " UI/UX Designer."],
  typeSpeed: 40,
  backSpeed: 60,
  smartBackspace: false,
  shuffle: true,
  loop: true,
  loopCount: Infinity,
};

var typed = new Typed('#type1', options);

