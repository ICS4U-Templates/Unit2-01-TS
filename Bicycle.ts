/**
 * The Bicycle Class.
 * author  Mr Coxall
 * version 1.0
 * since   2020-01-01
 */

export class Bicycle {
  // the Bicycle class has
  // three fields
  cadence: number;
  gear: number;
  speed: number;

  // and 1 method
  applyBrake(decrement: number): void {
    this.speed -= decrement;
  }
}
