// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { environment } from "../../../environments/environment";
// import { Observable } from "rxjs";
// import { map } from 'rxjs/operators';
// // import { Product, ProductImage } from "../types/product";
// import { HydrationHelper } from "./HydrationHelper.class";

//
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
//
//   /**
//    * Construtor
//    * @param httpClient
//    */
//   constructor(httpClient: HttpClient) {
//     // Injectables
//     this.httpClient = httpClient;
//   }
//
//   /**
//    * Filtra informações de parcelamento
//    * @param product
//    */
//   public getInstallmentInfo(product: any) {
//     let maxInstallments = 0;
//     let maxInstallmentValue = 0;
//
//     for(let installment of product.values.installments){
//       if(installment.NumberOfInstallments > maxInstallments) {
//         maxInstallments = installment.NumberOfInstallments;
//         maxInstallmentValue = installment.Value;
//       }
//     }
//
//     return [maxInstallments, maxInstallmentValue];
//   }
//
//   /**
//    * Define estrutura padrão do produto para tipagem
//    * @param responseProduct
//    * @param mappings Mapeamento de produto
//    */
//   public hydrateProduct(responseProduct: any, mappings?: any) {
//     mappings = mappings ? mappings : this.productMappings;
//
//     let product: any = HydrationHelper.hydration<any>(mappings, responseProduct);
//
//     product.values.discountPercent = Math.floor((1 - product.values.price / product.values.listPrice) * 100);
//     [product.values.maxInstallments, product.values.maxInstallmentValue] = this.getInstallmentInfo(product);
//     // product.images = this.getProductImages(responseProduct);
//
//     return product as any;
//   }
