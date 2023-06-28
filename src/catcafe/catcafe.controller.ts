import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatcafeService } from './catcafe.service';
import { CreateCatCafeDto } from './dtos/create-catcafe.dto';

@Controller('catcafe')
export class CatcafeController {
    catcafeService: CatcafeService;

    constructor(){
        this.catcafeService= new CatcafeService;
    }

    @Get()
    AllFoodOrder(){
        return this.catcafeService.AllFoodOrder();
    }

    @Get('/:id')
    OrderById(@Param('id') id:string){
        return this.catcafeService.OrderById(id);
    }

    @Post()
    CreateFoodOrder(@Body() body: CreateCatCafeDto){
        return this.catcafeService.CreateFoodOrder(body);
    }
}
