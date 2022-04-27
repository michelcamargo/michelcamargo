
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


//   /**
//    * Define estrutura padrão do produto para tipagem
//    * @param responseProduct
//    * @param mappings Mapeamento de produto
//    */
//   public hydrateProduct(responseProduct: any, mappings?: any) {
//     mappings = mappings ? mappings : this.productMappings;
//
//     let product: any = HydrationHelper.hydration<any>(mappings, responseProduct);//
//     return product as any;
//   }

//   /**
//    * Mapeamento de propriedades
//    * @private
//    */
//   private productMappings = {
//     "title": "productTitle",
//     "id": "productId",
//     "categoryId": "categoryId",
//     "category": "Categoria.0",
//     "link": "link",
//     "values.price": "items.0.sellers.0.commertialOffer.Price",
//     "values.listPrice": "items.0.sellers.0.commertialOffer.ListPrice",
//     "values.unitMultiplier": "items.0.unitMultiplier",
//     "values.measurementUnit": "items.0.measurementUnit",
//     "values.installments": "items.0.sellers.0.commertialOffer.Installments",
//     "availableQuantity": "items.0.sellers.0.commertialOffer.AvailableQuantity",
//     "isAvailable": "items.0.sellers.0.commertialOffer.IsAvailable",
//     "specificationGroups": "allSpecificationsGroups",
//     "details.Modo de usar": "Modo de usar.0",
//     "details.Composição": "Composição.0",
//     "details.description": "description"
//   };
