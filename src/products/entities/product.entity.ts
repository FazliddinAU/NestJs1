const products = [
    { id: 1, name: "Telefon", price: 250 },
    { id: 2, name: "Noutbuk", price: 800 },
    { id: 3, name: "Planshet", price: 400 },
    { id: 4, name: "Smart Watch", price: 150 },
    { id: 5, name: "Quloqchin", price: 50 },
    { id: 6, name: "Monitor", price: 200 },
    { id: 7, name: "Printer", price: 120 },
    { id: 8, name: "Klavitura", price: 30 },
    { id: 9, name: "Sichqoncha", price: 25 },
    { id: 10, name: "Power Bank", price: 60 }
];


export class Product {
    find(){
        return products;
    }
    findById(id : number){
        return products.find(item => item.id === id);
    }
    create(product : { id : number, name : string, price : number}){
        products.push(product)
        return product
    }
    update(id : number, updateData : Partial<{ name : string, price : number}>){
        const product = products.find(item => item.id === id);
        if(product){
            Object.assign(product, updateData)
            return product
        }
        return null;
    }
    delete(id : number){
        const index = products.findIndex(item => item.id === id);
        if(index !== -1 ){
            return products.slice(index, 1)[0], "Muvaffaqiyatli o'chirildi";
        }
        return null;
    }
}
