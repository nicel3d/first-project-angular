/**
 * Интерфейс Строителя объявляет создающие методы для различных частей объектов
 * Продуктов.
 */
export interface IBuilder {
  producePartA(): void;

  producePartB(): void;

  producePartC(): void;
}

