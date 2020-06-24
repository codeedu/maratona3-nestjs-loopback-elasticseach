import { Injectable } from '@nestjs/common';
import {juggler} from "@loopback/repository";

@Injectable()
export class EsDataSourceService extends juggler.DataSource{
    static dataSourceName = 'esv7';

    constructor() {
        super(EsDataSourceService.config());
    }

    static config(){
        return {
            "name": "esv7",
            "connector": "esv6",
            "index": "my_index",
            "version": 7,
            "debug": true,
            "defaultSize": 50,
            "configuration": {
                "node": 'http://elasticsearch:9200',
                "requestTimeout": 30000,
                "pingTimeout": 3000
            },
            "mappingProperties": {
                "docType": {
                    "type": "keyword"
                }
            }
        }
    }
}

//Node debug
