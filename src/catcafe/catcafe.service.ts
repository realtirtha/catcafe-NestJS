import { Injectable } from '@nestjs/common';
import { CatCafeRepository } from './catcafe.repository';
import { CreateCatCafeDto } from './dtos/create-catcafe.dto';

@Injectable()
export class CatcafeService {

    catcafeRepo:CatCafeRepository;

    constructor(){
        this.catcafeRepo = new CatCafeRepository();
    }

    AllFoodOrder(){
        return this.catcafeRepo.AllFoodOrder();
    }

    OrderById(id:string){
        return this.catcafeRepo.OrderById(id);
    }

    CreateFoodOrder(dto: CreateCatCafeDto){
        const {customer_name, customer_id, customer_order, customer_orderQ} = dto;
        return this.catcafeRepo.CreateFoodOrder(customer_name, customer_id, customer_order, customer_orderQ);
    }

}
