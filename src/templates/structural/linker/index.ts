/**
 * Клиентский код работает со всеми компонентами через базовый интерфейс.
 */
import { Component } from './ComponentAbstraction';
import { Composite } from './Component';
import { Leaf } from './Leaf';

function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * Таким образом, клиентский код может поддерживать простые компоненты-листья...
 */
const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...а также сложные контейнеры.
 */
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

/**
 * Благодаря тому, что операции управления потомками объявлены в базовом классе
 * Компонента, клиентский код может работать как с простыми, так и со сложными
 * компонентами, вне зависимости от их конкретных классов.
 */
function clientCode2(component1: Component, component2: Component) {
  // ...

  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);

  // ...
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);
