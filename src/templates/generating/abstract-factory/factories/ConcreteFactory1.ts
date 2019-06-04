/**
 * Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика
 * гарантирует совместимость полученных продуктов. Обратите внимание, что
 * сигнатуры методов Конкретной Фабрики возвращают абстрактный продукт, в то
 * время как внутри метода создается экземпляр конкретного продукта.
 */
import { IAbstractFactory, AbstractProductA, AbstractProductB } from '../IAbstractFactory';
import { ConcreteProductA1 } from '../products/ConcreteProductA1';
import { ConcreteProductB1 } from '../products/ConcreteProductB1';

export class ConcreteFactory1 implements IAbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
