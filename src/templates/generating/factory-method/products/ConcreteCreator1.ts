/**
 * Конкретные Продукты предоставляют различные реализации интерфейса Продукта.
 */
export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
