/**
 * Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
import { AbstractProductA, AbstractProductB } from '../IAbstractFactory';

export class ConcreteProductB1 implements AbstractProductB {

  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  /**
   * Продукт B1 может корректно работать только с Продуктом A1. Тем не менее,
   * он принимает любой экземпляр Абстрактного Продукта А в качестве
   * аргумента.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}
