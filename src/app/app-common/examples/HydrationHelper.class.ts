
// export class HydrationHelper {
//
//   /**
//    * Hidratação de objeto com base em mapeamento
//    * @param mappings Mapeamentos para a hidratação
//    * @param object Objeto base
//    */
//   public static hydration<T>(mappings: {[K in string]: string}, object: Object): T {
//     let hydratedObject = {};
//     for (let mappingKey of Reflect.ownKeys(mappings)) {
//
//       mappingKey = String(mappingKey);
//       let keySplitted = mappingKey.split(".");
//
//       let mappingValue = Reflect.get(mappings, mappingKey);
//       // console.log(mappingValue);
//       Reflect.set(this.getPropertyInPath(hydratedObject, mappingKey, true), keySplitted[keySplitted.length - 1], this.getPropertyInPath(object, mappingValue))
//     }
//
//     return hydratedObject as T;
//   }
//
//   /**
//    * Busca valor de propriedade nested em objeto
//    * @param object Alvo
//    * @param path Caminho a ser buscado
//    * @param isSetter Flag que indica se será utilizado para um Reflect.set
//    */
//   public static getPropertyInPath(object: Object, path: string, isSetter?: boolean) {
//     let currentObject = object;
//     let pathSplitted = path.split(".");
//
//     if (isSetter) {
//       pathSplitted.pop();
//     }
//
//     for (let property of pathSplitted) {
//       if (isSetter && !Reflect.has(currentObject, property)) {
//         Reflect.set(currentObject, property, {});
//       }
//       currentObject = currentObject != null && Reflect.has(currentObject, property) ? Reflect.get(currentObject, property) : null;
//     }
//
//     return currentObject;
//   }
// }
