import { Injectable, NotFoundException } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { PrismaService } from './database/PrismaService';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async getUserId(userId: string) {
    const userTransactions = await this.prisma.transaction.findMany({
      where: { userId: userId },
    });
    if (!clerkClient) {
      throw new Error('Clerk client is not initialized');
    }
    if (!userId) {
      throw new Error('User ID is required');
    }
    if (!userTransactions || userTransactions.length === 0) {
      throw new NotFoundException(`No transactions found for user ${userId}`);
    }
    return clerkClient.users.getUser(userId);
  }
}
