/**
 * Конкретные продукты создаются соответствующими Конкретными Фабриками.
 */
import { AbstractProductA } from '../IAbstractFactory';

export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}
