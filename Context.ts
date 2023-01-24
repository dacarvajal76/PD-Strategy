import { Strategy } from "./Strategy";

export class Context{
  private strategy: Strategy

  constructor (strategy: Strategy){
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void{
    this.strategy = strategy;
  }

  public executeStrategy(a: number, b: number):number {
    return this.strategy.execute(a,b)
  }

}