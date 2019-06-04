import { AbstractProductA, AbstractProductB } from '../IAbstractFactory';

export class ConcreteProductB2 implements AbstractProductB {

  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  /**
   * Продукт B2 может корректно работать только с Продуктом A2. Тем не менее,
   * он принимает любой экземпляр Абстрактного Продукта А в качестве
   * аргумента.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}
