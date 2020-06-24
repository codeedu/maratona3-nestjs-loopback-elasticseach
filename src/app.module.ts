import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import {ConfigModule} from "@nestjs/config";
import { EsDataSourceService } from './es-data-source/es-data-source.service';
import {CategoryRepository} from "./category/category.repository";

@Module({
  imports: [
      ConfigModule.forRoot(),
  ],
  controllers: [AppController, CategoryController],
  providers: [
      AppService,
      EsDataSourceService,
      CategoryRepository
  ],
})
export class AppModule {

}
