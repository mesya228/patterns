import { Prototype } from "./prototype.class";

export class ComponentWithBackReference {
	public prototype;

	constructor(prototype: Prototype) {
			this.prototype = prototype;
	}
}