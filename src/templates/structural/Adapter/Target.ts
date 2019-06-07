/**
 * Целевой класс объявляет интерфейс, с которым может работать клиентский код.
 */
export class Target {
  public request(): string {
    return 'Target: The default target\'s behavior.';
  }
}
