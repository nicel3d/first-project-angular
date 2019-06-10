/**
 * Класс Контейнер содержит сложные компоненты, которые могут иметь вложенные
 * компоненты. Обычно объекты Контейнеры делегируют фактическую работу своим
 * детям, а затем «суммируют» результат.
 */
import { Component } from './ComponentAbstraction';

export class Composite extends Component {
  protected children: Component[] = [];

  /**
   * Объект контейнера может как добавлять компоненты в свой список вложенных
   * компонентов, так и удалять их, как простые, так и сложные.
   */
  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * Контейнер выполняет свою основную логику особым образом. Он проходит
   * рекурсивно через всех своих детей, собирая и суммируя их результаты.
   * Поскольку потомки контейнера передают эти вызовы своим потомкам и так
   * далее, в результате обходится всё дерево объектов.
   */
  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
  }
}
