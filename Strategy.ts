export interface Strategy{
  execute(a: number, b:number): number;
}

export class concreteStrategyAdd implements Strategy{
  execute (a: number, b:number): number{
    return a + b
  }
}

export class concreteStrategySubtract implements Strategy{
  execute (a: number, b:number): number{
    return a - b
  }
}

export class concreteStrategyMultiply implements Strategy{
  execute (a: number, b:number): number{
    return a * b
  }
}