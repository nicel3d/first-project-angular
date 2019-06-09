/**
 * Клиентский код поддерживает все классы, использующие целевой интерфейс.
 */
import { Target } from './Target';
import { Adaptee } from './Adaptee';
import { Adapter } from './Adapter';

function clientCode(target1: Target) {
  console.log(target1.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${Adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the adapter:');
const index = new Adapter(adaptee);
clientCode(index);
