/**
 * За исключением этапа инициализации, когда объект Абстракции связывается с
 * определённым объектом Реализации, клиентский код должен зависеть только от
 * класса Абстракции. Таким образом, клиентский код может поддерживать любую
 * комбинацию абстракции и реализации.
 */
import { ExtendedAbstraction } from './ExtendedAbstraction';
import { ConcreteImplementationB } from './Implementations/ConcreteImplementationB';
import { Abstraction } from './Abstraction';
import { ConcreteImplementationA } from './Implementations/ConcreteImplementationA';

function clientCode(abstraction1: Abstraction) {
  // ..

  console.log(abstraction1.operation());

  // ..
}

/**
 * Клиентский код должен работать с любой предварительно сконфигурированной
 * комбинацией абстракции и реализации.
 */
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
