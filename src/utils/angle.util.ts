/**
 * 
 * @param {number} [degree] angle in degree unit (0 - 180)
 * @returns {number} [radian]
 */
export const degreeToRadian = (degree: number): number => (degree * Math.PI) / 180;

/**
 * 
 * @param {number} [radian] angle in degree unit (0 - 2π)
 * @returns {number} [degree]
 */
export const radianToDegree = (radian: number): number => (radian * 180) / Math.PI;