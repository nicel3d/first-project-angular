/**
 * Конкретные Продукты предоставляют различные реализации интерфейса Продукта.
 */
import { Product } from './IProduct';

export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
