import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  productRepo : Product;
  constructor(){
    this.productRepo = new Product()
  }
  create(createProductDto: CreateProductDto) {
    return this.productRepo.create(CreateProductDto as any);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepo.update(id, updateProductDto)
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
