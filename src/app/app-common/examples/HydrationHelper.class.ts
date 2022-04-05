/**
 * Classe com métodos auxiliares
 *
 * @author Tcharles Michael Moraes
 * @since 01/12/2021
 */
export class HydrationHelper {

  /**
   * Realizar o hydration de um objeto com base em mapeamentos
   * @param mappings Mapeamentos para o hydration
   * @param object Objeto que será base para o hydration
   */
  public static hydration<T>(mappings: {[K in string]: string}, object: Object): T {
    let destiny = {};
    for (let mappingKey of Reflect.ownKeys(mappings)) {

      mappingKey = String(mappingKey);
      let keySplitted = mappingKey.split(".");

      let mappingValue = Reflect.get(mappings, mappingKey);
      // console.log(mappingValue);
      Reflect.set(this.getPropertyInPath(destiny, mappingKey, true), keySplitted[keySplitted.length - 1], this.getPropertyInPath(object, mappingValue))
    }

    return destiny as T;
  }

  /**
   * Buscar o valor de uma propriedade nested dentro de um objeto
   * @param object Objeto alvo
   * @param path Caminho a ser buscado
   * @param isSetter Flag que indica se será utilizado para um Reflect.set
   */
  public static getPropertyInPath(object: Object, path: string, isSetter?: boolean) {
    let currentObject = object;
    let pathSplitted = path.split(".");

    if (isSetter) {
      pathSplitted.pop();
    }

    for (let property of pathSplitted) {
      if (isSetter && !Reflect.has(currentObject, property)) {
        Reflect.set(currentObject, property, {});
      }
      currentObject = currentObject != null && Reflect.has(currentObject, property) ? Reflect.get(currentObject, property) : null;
    }

    return currentObject;
  }
}
