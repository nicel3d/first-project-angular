/**
 * Можно расширить Абстракцию без изменения классов Реализации.
 */
import { Abstraction } from './Abstraction';

export class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}
