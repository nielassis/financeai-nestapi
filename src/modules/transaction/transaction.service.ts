import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: createTransactionDto,
    });
  }

  async deleteTransaction(id: string): Promise<void> {
    try {
      await this.prisma.transaction.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Falha ao deletar transação: ${error.message}`);
    }
  }

  async updateTransaction(id: string, updateTransactionDto: any) {
    return this.prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });
  }

  async getUserTransaction(userId: string) {
    const userTransactions = await this.prisma.transaction.findMany({
      where: { userId: userId },
    });

    if (!userTransactions || userTransactions.length === 0) {
      throw new NotFoundException(`No transactions found for user ${userId}`);
    }

    return userTransactions;
  }
}
