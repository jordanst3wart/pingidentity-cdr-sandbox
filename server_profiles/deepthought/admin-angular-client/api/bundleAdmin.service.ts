/**
 * Deep Thought Administration API
 * This is the Deep Thought Administration API. You can find out more about Deep Thought at [https://github.com/bizaio/deepthought](https://github.com/bizaio/deepthought) or on the [DataRight.io Slack, #oss](https://join.slack.com/t/datarightio/shared_invite/enQtNzAyNTI2MjA2MzU1LTU1NGE4MmQ2N2JiZWI2ODA5MTQ2N2Q0NTRmYmM0OWRlM2U5YzA3NzU5NDYyODlhNjRmNzU3ZDZmNTI0MDE3NjY).
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DioProductBundle } from '../model/dioProductBundle';
import { ValidationListException } from '../model/validationListException';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BundleAdminService {

    protected basePath = 'http://localhost:8080/dio-au';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a Product to a Bundle
     * Add a Product to a Product Bundle
     * @param brandId 
     * @param bundleId 
     * @param productId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addProductToProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'body', reportProgress?: boolean): Observable<DioProductBundle>;
    public addProductToProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DioProductBundle>>;
    public addProductToProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DioProductBundle>>;
    public addProductToProductBundle(brandId: string, bundleId: string, productId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling addProductToProductBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling addProductToProductBundle.');
        }

        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling addProductToProductBundle.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<DioProductBundle>('put',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}/product/${encodeURIComponent(String(productId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a Product Bundle
     * Creates a new Product Bundle and returns it
     * @param brandId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProductBundle(brandId: string, body?: DioProductBundle, observe?: 'body', reportProgress?: boolean): Observable<DioProductBundle>;
    public createProductBundle(brandId: string, body?: DioProductBundle, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DioProductBundle>>;
    public createProductBundle(brandId: string, body?: DioProductBundle, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DioProductBundle>>;
    public createProductBundle(brandId: string, body?: DioProductBundle, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling createProductBundle.');
        }


        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<DioProductBundle>('post',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a single Product Bundle
     * Deletes a Product Bundle
     * @param brandId 
     * @param bundleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProductBundle(brandId: string, bundleId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProductBundle(brandId: string, bundleId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProductBundle(brandId: string, bundleId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProductBundle(brandId: string, bundleId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling deleteProductBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling deleteProductBundle.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove a Product from a Bundle
     * Removes a Product from a Bundle
     * @param brandId 
     * @param bundleId 
     * @param productId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProductFromProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProductFromProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProductFromProductBundle(brandId: string, bundleId: string, productId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProductFromProductBundle(brandId: string, bundleId: string, productId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling deleteProductFromProductBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling deleteProductFromProductBundle.');
        }

        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling deleteProductFromProductBundle.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}/product/${encodeURIComponent(String(productId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a single Product Bundle
     * Returns a single product bundle entry
     * @param brandId 
     * @param bundleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProductBundle(brandId: string, bundleId: string, observe?: 'body', reportProgress?: boolean): Observable<DioProductBundle>;
    public getProductBundle(brandId: string, bundleId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DioProductBundle>>;
    public getProductBundle(brandId: string, bundleId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DioProductBundle>>;
    public getProductBundle(brandId: string, bundleId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling getProductBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling getProductBundle.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<DioProductBundle>('get',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Product Bundles
     * List all Product Bundles
     * @param brandId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listProductBundles(brandId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<DioProductBundle>>;
    public listProductBundles(brandId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DioProductBundle>>>;
    public listProductBundles(brandId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DioProductBundle>>>;
    public listProductBundles(brandId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling listProductBundles.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<DioProductBundle>>('get',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List Products assigned to Bundle
     * List Products for a Bundle
     * @param brandId 
     * @param bundleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listProductsForBundle(brandId: string, bundleId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<DioProductBundle>>;
    public listProductsForBundle(brandId: string, bundleId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DioProductBundle>>>;
    public listProductsForBundle(brandId: string, bundleId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DioProductBundle>>>;
    public listProductsForBundle(brandId: string, bundleId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling listProductsForBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling listProductsForBundle.');
        }

        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<DioProductBundle>>('get',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}/product`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a single Product Bundle
     * Updates existing Product Bundle and returns it
     * @param brandId 
     * @param bundleId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProductBundle(brandId: string, bundleId: string, body?: DioProductBundle, observe?: 'body', reportProgress?: boolean): Observable<DioProductBundle>;
    public updateProductBundle(brandId: string, bundleId: string, body?: DioProductBundle, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DioProductBundle>>;
    public updateProductBundle(brandId: string, bundleId: string, body?: DioProductBundle, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DioProductBundle>>;
    public updateProductBundle(brandId: string, bundleId: string, body?: DioProductBundle, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling updateProductBundle.');
        }

        if (bundleId === null || bundleId === undefined) {
            throw new Error('Required parameter bundleId was null or undefined when calling updateProductBundle.');
        }


        let headers = this.defaultHeaders;

        // authentication (deepthought_auth) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<DioProductBundle>('put',`${this.basePath}/v1/brand/${encodeURIComponent(String(brandId))}/bundle/${encodeURIComponent(String(bundleId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
