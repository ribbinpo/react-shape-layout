/**
 * 
 * @param {number} [radius] distance between center and object
 * @param {number} [radian] angle in radians unit
 * @returns {[string, string]} [x, y]
 */
export const findCoordinate = (radius: number, radian: number): [x: number, y: number] => {
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);
  return [+x.toFixed(2), +y.toFixed(2)];
}