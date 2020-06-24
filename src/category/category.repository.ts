import { Injectable } from '@nestjs/common';
import {DefaultCrudRepository} from "@loopback/repository";
import {Category} from "../category.model";
import {EsDataSourceService} from "../es-data-source/es-data-source.service";

@Injectable()
export class CategoryRepository extends DefaultCrudRepository<
    Category, typeof Category.prototype.id
    >{

    constructor(dataSource: EsDataSourceService) {
        super(Category, dataSource);
    }
}
