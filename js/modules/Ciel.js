import {AbstractForm} from './AbstractForm.js';

/**
 * Dessine un immeuble
 */
export class Ciel extends AbstractForm {

  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    // console.log(this.toString())
    // destructuring
    // const {
    //   x, y, width, height,
    //   fillColor, strokeColor, strokeWidth
    // } = this

    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()
// ceux de Droite

    ctx.beginPath();
    ctx.arc(1175, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1250, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1265, 130, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();
// toujours les rond de droite

    ctx.beginPath();
    ctx.arc(1310, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1290, 210, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,95);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(175, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(265, 210, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(265, 150, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(215, 210, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(215, 150, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(310, 180, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1230, 210, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

 //ceux du milieu

    ctx.beginPath();
    ctx.arc(675, 130, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(715, 160, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(715, 100, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(210,105);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(750, 130, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(770, 165, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(770, 100, 30, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(810, 130, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(240,75);
    ctx.fillStyle = 'gray';
    ctx.fill();
  }

  /**
   * get array of forms
   * @return {[Ciel,...]}
   */
  static buildForms() {
    let widthCase = 100;
    let max = Math.floor(Math.random() * 5) + 3
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(new Ciel(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * 400) + 10,
        Math.floor(Math.random() * (widthCase) + 20),
        Math.floor(Math.random() * (widthCase * 2) + 30),
        (i % 2 === 0) ? 'gold' : 'gray',
        'black',
        1,
        true
      ))
    }
    return forms
  }
}

