import { Module } from '@nestjs/common';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transaction.service';
import { PrismaService } from '../../database/PrismaService';
@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService],
})
export class TransactionModule {}
