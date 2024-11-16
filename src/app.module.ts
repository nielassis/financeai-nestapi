import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './database/db.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PrismaService } from './database/PrismaService';

@Module({
  controllers: [AppController],
  imports: [DbModule, TransactionModule, ConfigModule.forRoot()],
  providers: [AppService, PrismaService],
})
export class AppModule {}
