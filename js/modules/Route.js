import { AbstractForm } from './AbstractForm.js';

/**

Dessine une route
*/
export class Route extends AbstractForm {
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
super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
}
/**

Dessine la forme spécifique à cette classe
@param ctx contexte 2D du canvas
@param canvas référence au canvas HTML5
@param routeHeight la hauteur de la route
*/
draw(ctx, canvas, routeHeight) {
ctx.save();
ctx.fillStyle = '#696969';
arduino

// Dessin de la route
ctx.beginPath();
ctx.moveTo(0, canvas.height);
ctx.lineTo(0, canvas.height - routeHeight);
ctx.quadraticCurveTo(canvas.width / 2, canvas.height - routeHeight - 100, canvas.width, canvas.height - routeHeight);
ctx.lineTo(canvas.width, canvas.height);
ctx.closePath();
ctx.fill();

ctx.stroke();
ctx.restore();
}

/**

Retourne un tableau de routes
@param numRoutes le nombre de routes à générer
@param canvas référence au canvas HTML5
@param minHeight la hauteur minimale de la route
@param maxHeight la hauteur maximale de la route
@return {[Route,...]}
*/
static buildRoutes(numRoutes, canvas, minHeight, maxHeight) {
const widthCase = 100;
const routes = [];
css

for (let i = 0; i < numRoutes; i++) {
less

  routes.push(new Route(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * (canvas.height - minHeight)) + minHeight,
    Math.floor(Math.random() * (widthCase) + 20),
    Math.floor(Math.random() * (maxHeight - minHeight) + minHeight),
    (i % 2 === 0) ? 'gold' : 'gray',
    'black',
    1,
    true
  ));
}

return routes;
}
}