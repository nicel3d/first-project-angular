/**
 * Каждая Конкретная Фабрика имеет соответствующую вариацию продукта.
 */
import { IAbstractFactory, AbstractProductA, AbstractProductB } from '../IAbstractFactory';
import { ConcreteProductA2 } from '../products/ConcreteProductA2';
import { ConcreteProductB2 } from '../products/ConcreteProductB2';

export class ConcreteFactory2 implements IAbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
