import { ConcreteProduct2 } from '../products/ConcreteCreator2';
import { Product } from '../products/IProduct';
import { Creator } from '../Creator';

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

