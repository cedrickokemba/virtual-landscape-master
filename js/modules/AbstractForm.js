/**
 * Modèle de base pour des formes à venir (sous-classes)
 */
class AbstractForm {
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
        // le plus petit en premier, le plus grand en dernier
        // voir la fonction buildAllForms de main.js
  ) {
    // ensure the arguments passed in are numbers
    this.x = Number(x)
    this.y = Number(y)
    this.width = Number(width)
    this.height = Number(height)
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeWidth = strokeWidth
    this.pesanteur = pesanteur
    this.ordreConstruction = ordreConstruction
  }

  // get keyword causes this method to be called
  // when you use myRectangle.area
  get area() {
    return this.wid* this.height
  }

  // gets the X position of the left side
  get left() {
    // origin is at top left so just return x
    return this.x
  }

  // get X position of right side
  get right() {
    // x is left position + the width to get end point
    return this.x + this.width
  }

  // get the Y position of top side
  get top() {
    // origin is at top left so just return y
    return this.y
  }

  // get Y position at bottom
  get bottom() {
    return this.y + this.height
  }

  /**
   * draw a rectangular form with ctx (must be override by subclasses)
   * @param ctx 2D from canvas
   */
  draw(ctx) {
 
    ctx.restore()
  }

  toString() {
    return JSON.stringify(this)
  }

  /**
   * get array of instances of this class (must be override by subclasses)
   * @return {[Object,...]}
   *
   */
  static buildForms() {
    const aForm1 = new AbstractForm(250, 70, 100, 100, 'gold', '', 2, true, 101)
    const aForm2 = new AbstractForm(250, 70, 100, 100, 'gold', '', 2, false, 101)
    return [aForm1, aForm2]
  }

}

export {AbstractForm}
