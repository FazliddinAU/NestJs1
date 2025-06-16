import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Partner } from './entities/partner.entity';

@Injectable()
export class PartnersService {
  partnerRepo : Partner
  constructor(){
    this.partnerRepo = new Partner()
  }
  create(createPartnerDto: CreatePartnerDto) {
    return this.partnerRepo.create(createPartnerDto as any);
  }

  findAll() {
    return this.partnerRepo.find();
  }

  findOne(id: number) {
    return this.partnerRepo.findById(id);
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return this.partnerRepo.update(id, updatePartnerDto);
  }

  remove(id: number) {
    return this.partnerRepo.delete(id);
  }
}
