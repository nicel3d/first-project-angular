import { IImplementation } from '../IImplementation';

export class ConcreteImplementationB implements IImplementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}
