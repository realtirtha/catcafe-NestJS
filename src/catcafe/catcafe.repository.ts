import { readFile, writeFile } from "fs/promises";

export class CatCafeRepository{
    async AllFoodOrder(){
        const contents = await readFile('catcafe.json','utf8'); //reading the contents of the file as a string
        const catcafe = JSON.parse(contents); //converting raw data to json
        return catcafe;
    }

    async OrderById(id: string){
        const contents = await readFile('catcafe.json','utf8');
        const catcafe = JSON.parse(contents);
        return catcafe[id];
    }

    async CreateFoodOrder(customer_name: string, customer_id:string, customer_order:string, customer_orderQ:string){
        const contents = await readFile('catcafe', 'utf8');
        const catcafe = JSON.parse(contents);
        
        //create new json
        const newcatcafe = {
            name: customer_name,
            id: customer_id,
            order: customer_order,
            quantity: customer_orderQ
        }
        catcafe[newcatcafe.id]= newcatcafe;

        //store json
        await writeFile('catcafe.json', JSON.stringify(catcafe));
    }
}