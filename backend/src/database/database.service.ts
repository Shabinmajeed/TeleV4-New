import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma, Role } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // ─── User Operations ───────────────────────────────────────────

  async findUserById(id: string) {
    return this.user.findUnique({ where: { id } });
  }

  async findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email } });
  }

  async findUsers(where?: Prisma.UserWhereInput) {
    return this.user.findMany({ where });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.user.create({ data });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return this.user.update({ where: { id }, data });
  }

  async deleteUser(id: string) {
    return this.user.delete({ where: { id } });
  }

  async findUsersByRole(role: Role) {
    return this.user.findMany({ where: { role } });
  }

  async deactivateUser(id: string) {
    return this.user.update({ where: { id }, data: { isActive: false } });
  }

  async activateUser(id: string) {
    return this.user.update({ where: { id }, data: { isActive: true } });
  }

  // ─── Raw Query Helpers ─────────────────────────────────────────

  async executeRawQuery<T>(query: TemplateStringsArray, ...values: any[]): Promise<T> {
    return this.$queryRaw<T>(query, ...values);
  }

  async executeCommand(command: string) {
    return this.$executeRawUnsafe(command);
  }

  // ─── Transaction Helper ────────────────────────────────────────

  async transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>) {
    return this.$transaction(fn);
  }

  // ─── Health Check ──────────────────────────────────────────────

  async healthCheck(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }
}
