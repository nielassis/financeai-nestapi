import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
  Get,
} from '@nestjs/common';
import { TransactionsService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { DeleteTransactionDto } from './dto/delete-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    if (createTransactionDto.userId == '') {
      throw new Error('userId is required');
    }
    return this.transactionsService.create(createTransactionDto);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async DeleteTransaction(@Body() body: DeleteTransactionDto) {
    await this.transactionsService.deleteTransaction(body.id);
  }

  @Post('/update')
  async updateTransaction(@Body() body: any) {
    return this.transactionsService.updateTransaction(body.id, body);
  }

  @Get()
  async getTransactions() {
    return this.transactionsService.getTransactions();
  }
}
