import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  
  companyRepo : Company
  constructor(){
    this.companyRepo = new Company()
  }
  create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepo.create(createCompanyDto as any);
  }

  findAll() {
    return this.companyRepo.find();
  }

  findOne(id: number) {
    return this.companyRepo.findById(id);
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.companyRepo.update(id, updateCompanyDto);
  }

  remove(id: number) {
    return this.companyRepo.delete(id);
  }
}
