/**
 * Конкретные Создатели переопределяют фабричный метод для того, чтобы изменить
 * тип результирующего продукта.
 */
import { ConcreteProduct1 } from '../products/ConcreteCreator1';
import { Creator } from '../Creator';
import { Product } from '../products/IProduct';

export class ConcreteCreator1 extends Creator {
  /**
   * Обратите внимание, что сигнатура метода по-прежнему использует тип
   * абстрактного продукта, хотя фактически из метода возвращается конкретный
   * продукт. Таким образом, Создатель может оставаться независимым от
   * конкретных классов продуктов.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
