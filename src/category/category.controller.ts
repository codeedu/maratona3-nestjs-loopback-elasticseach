import {Controller, Get, Post, Render, Req, Request} from '@nestjs/common';
import {CategoryRepository} from "./category.repository";

@Controller('categories')
export class CategoryController {

    constructor(
        private categoryRepo: CategoryRepository
    ) {
    }

    @Get() //API Rest - JSON
    index() {
        return this.categoryRepo.find({
            where: {
                name: 'category'
            }
        });
    }
    //
    // @Get('list')
    // @Render('category_list')
    // async category_list(){
    //     const categories = await this.categoryRepo.find();
    //     return {layout: false, categories};
    // }
    //
    @Get('create')
    category_create() {
        return this.categoryRepo.create({name: 'category teste'});
    }
    //
    // @Post()
    // async store(@Req() request: Request){
    //     const category = await this.categoryRepo.create(request.body as any)
    //     return this.categoryRepo.save(category);
    // }

}
