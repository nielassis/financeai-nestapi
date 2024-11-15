import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './database/db.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  controllers: [AppController],
  imports: [DbModule, TransactionModule],
})
export class AppModule {}
