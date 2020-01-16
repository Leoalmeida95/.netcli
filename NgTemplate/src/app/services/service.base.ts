import { HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

export abstract class ServiceBase {

    protected UrlServiceV1: string = "http://localhost:8285/api/v1/";

    protected ObterHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected extractData(response: any){
        return response.data || {};
    }

    protected serviceError(error: Response | any){
        let errMsg: string;

        if (error instanceof Response) {

            errMsg = `${error.status} - ${error.statusText || ''}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(error);
        return throwError(error);
    }

}