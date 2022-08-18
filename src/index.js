import memeMaker from '@erickwendel/meme-maker'

const options = {
    image: './img/julius.jpg',         // Required
    outfile: './img/spiderman-meme.png',  // Required
    topText: 'ME CONTA A FOFOCA',            // Required
    bottomText: 'QUER DIZER ENTÃO QUE VOCÊ NÃO PAGA A CONTA',           // Optional
  }
  
  memeMaker(options).then(_ => {
    console.log('Image saved: ' + options.outfile)
  }).catch(error => console.log(error));