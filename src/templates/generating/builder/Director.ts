/**
 * Директор отвечает только за выполнение шагов построения в определённой
 * последовательности. Это полезно при производстве продуктов в определённом
 * порядке или особой конфигурации. Строго говоря, класс Директор необязателен,
 * так как клиент может напрямую управлять строителями.
 */
import { IBuilder } from './IBuilder';

export class Director {
  private builder: IBuilder;

  /**
   * Директор работает с любым экземпляром строителя, который передаётся ему
   * клиентским кодом. Таким образом, клиентский код может изменить конечный
   * тип вновь собираемого продукта.
   */
  public setBuilder(builder: IBuilder): void {
    this.builder = builder;
  }

  /**
   * Директор может строить несколько вариаций продукта, используя одинаковые
   * шаги построения.
   */
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
