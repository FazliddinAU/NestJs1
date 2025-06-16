import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [ ProductsModule, CompaniesModule, UsersModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
