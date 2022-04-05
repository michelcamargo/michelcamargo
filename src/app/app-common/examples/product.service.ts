import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
// import { Product, ProductImage } from "../types/product";
import { HydrationHelper } from "./HydrationHelper.class";

@Injectable({
  providedIn: "root"
})

export class ProductsService {
  /**
   * Serviço para realizar chamadas HTTP do Angular.
   * @injected
   */
  private readonly httpClient: HttpClient;

  /**
   * URL do recurso (lista / catalog)
   */
  private readonly resourceUrl: string;

  /**
   * Mapeamento de propriedades de produto oriundos de Search VTEX
   * @private
   */
  private productMappings = {
    "title": "productTitle",
    "id": "productId",
    "categoryId": "categoryId",
    "category": "Categoria.0",
    "link": "link",
    "values.price": "items.0.sellers.0.commertialOffer.Price",
    "values.listPrice": "items.0.sellers.0.commertialOffer.ListPrice",
    "values.unitMultiplier": "items.0.unitMultiplier",
    "values.measurementUnit": "items.0.measurementUnit",
    "values.installments": "items.0.sellers.0.commertialOffer.Installments",
    "availableQuantity": "items.0.sellers.0.commertialOffer.AvailableQuantity",
    "isAvailable": "items.0.sellers.0.commertialOffer.IsAvailable",
    "specificationGroups": "allSpecificationsGroups",
    "details.Modo de usar": "Modo de usar.0",
    "details.Composição": "Composição.0",
    "details.description": "description"
  }

  /**
   * Cabeçalho para requisições
   * @private
   */
  private readonly httpHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  /**
   * Construtor
   * @param httpClient
   */
  constructor(httpClient: HttpClient) {
    // Injectables
    this.httpClient = httpClient;

    // Privates api/catalog/pvt/product
    // this.resourceUrl = `https://${environment.apiUrl}`;
    this.resourceUrl = `https://api.nomics.com/v1`;
  }

  /**
   * Filtra informações de parcelamento
   * @param product
   */
  public getInstallmentInfo(product: any) {
    let maxInstallments = 0;
    let maxInstallmentValue = 0;

    for(let installment of product.values.installments){
      if(installment.NumberOfInstallments > maxInstallments) {
        maxInstallments = installment.NumberOfInstallments;
        maxInstallmentValue = installment.Value;
      }
    }

    return [maxInstallments, maxInstallmentValue];
  }

  /**
   * Define estrutura padrão do produto para tipagem
   * @param responseProduct
   * @param mappings Mapeamento de produto
   */
  public hydrateProduct(responseProduct: any, mappings?: any) {
    mappings = mappings ? mappings : this.productMappings;

    let product: any = HydrationHelper.hydration<any>(mappings, responseProduct);

    product.values.discountPercent = Math.floor((1 - product.values.price / product.values.listPrice) * 100);
    [product.values.maxInstallments, product.values.maxInstallmentValue] = this.getInstallmentInfo(product);
    // product.images = this.getProductImages(responseProduct);

    return product as any;
  }

  /**
   * Busca todos os produtos disponíveis
   */
  public fetchAll(): Observable<Array<any>> {
    let url: string = `${this.resourceUrl}/products/search`;

    return this.httpClient.get<any>(url, {headers: this.httpHeaders}).pipe(
      map(res => {
        let hydratedData = [];
        for(let item of res) {
          hydratedData.push(this.hydrateProduct(item));
        }
        return hydratedData;
      })
    )
  }

  /**
   * Busca produtos por Id do produto
   * @param productId
   */
  public fetchProductById(productId: number): Observable<any> {
    let url: string = `${this.resourceUrl}/products/search?fq=productId:${productId}`;

    return (this.httpClient.get<any>(url, {headers: this.httpHeaders})
      .pipe(map(response => {
        return this.hydrateProduct(response[0]);
    })));
  }

  /**
   * Busca produtos por Id de coleção
   * @param productClusterId
   */
  public fetchProductsByCollectionId(productClusterId: number): Observable<Array<any>> {
    let url: string = `${this.resourceUrl}/products/search?fq=productClusterIds${productClusterId}`;

    return this.httpClient.get<any>(url, {headers: this.httpHeaders}).pipe(
      map(res => {
        let hydratedData = [];
        for(let item of res) {
          hydratedData.push(this.hydrateProduct(item));
        }
        return hydratedData;
      })
    )
  }

  /**
   * Buscar lista de produtos com filtragem avançada
   * @param searchQuery Parâmetros URI de pesquisa
   */
  public fetchByParams(searchQuery: string): Observable<Array<any>> {
    let url: string = `${this.resourceUrl}/products/search?${searchQuery}`;

    return this.httpClient.get<any>(url, {headers: this.httpHeaders}).pipe(
      map(res => {
        let hydratedData = [];
        for(let item of res) {
          hydratedData.push(this.hydrateProduct(item));
        }
        return hydratedData;
      })
    )
  }

  /**
   * Buscar lista de categorias disponíveis
   * @param levels nível de profundidade das categorias
   */
  public fetchAvailableCategories(levels?: any): Observable<Array<any>> {
    levels ? levels = levels.toString() : levels = "1";
    let url: string = `${this.resourceUrl}/products/categories/${levels}`;

    return (this.httpClient.get<any>(url, {headers: this.httpHeaders}));
  }

}
