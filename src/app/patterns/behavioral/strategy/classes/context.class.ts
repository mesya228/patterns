import { IStrategy } from "../interfaces/strategy.interface";

export class Context {
	private strategy: IStrategy;

	constructor(strategy: IStrategy) {
		this.strategy = strategy;
	}

	public getRoute(data: any[]) {
		const res = this.strategy.calculateRoute(data);

		console.log(res);
		return res;
	}

	public setStrategy(strategy: IStrategy) {
		this.strategy = strategy;
	}
}