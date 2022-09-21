import { Category } from "../model/Category";

// DTO -> Data Transfer Object 
    // criar um objeto que será responsável pela transferencia de dados entre camadas
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesReporitories {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDTO): void {
        const category = new Category();
    
        //atribui as propriedades ao objeto
        Object.assign(category, {
        name,
        description,
        created_at: new Date()
    }) 

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesReporitories }