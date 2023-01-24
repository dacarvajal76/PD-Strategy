import { Context } from './Context';
import { concreteStrategyAdd, concreteStrategyMultiply, concreteStrategySubtract } from './Strategy';
  
  function main(): void {
    const context = new Context(new concreteStrategyAdd());
    
    const a: number = 5;
    const b: number = 15;
    const action: string = 'multiply';

    if (action == 'addition') {      
      context.setStrategy(new concreteStrategyAdd())
    }

    if (action == 'substract') {      
      context.setStrategy(new concreteStrategySubtract())
    }

    if (action == 'multiply') {      
      context.setStrategy(new concreteStrategyMultiply())
    }

    const result = context.executeStrategy(a,b);
    console.log(result);
  }


main();