/**
 * Пример класса, имеющего возможность клонирования. Мы посмотрим как происходит
 * клонирование значений полей разных типов.
 */
export class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    // Клонирование объекта, который имеет вложенный объект с обратной
    // ссылкой, требует специального подхода. После завершения клонирования
    // вложенный объект должен указывать на клонированный объект, а не на
    // исходный объект. Для данного случая хорошо подойдёт оператор
    // расширения (spread).
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

export class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}
