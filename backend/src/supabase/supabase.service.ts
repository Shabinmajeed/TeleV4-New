import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SupabaseService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
    private readonly database: DatabaseService,
  ) {}

  /**
   * Get the raw Supabase client for advanced queries
   */
  getClient(): SupabaseClient {
    return this.supabase;
  }

  // ─── Auth Helpers (Supabase Auth) ──────────────────────────────

  async signUpWithEmail(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  async signInWithEmail(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    return { error };
  }

  async getUser(jwt: string) {
    return this.supabase.auth.getUser(jwt);
  }

  async refreshSession(refreshToken: string) {
    return this.supabase.auth.refreshSession({ refresh_token: refreshToken });
  }

  // ─── Database Helpers (Type-safe via Prisma) ───────────────────

  get db() {
    return this.database;
  }

  // ─── Storage Helpers (Supabase Storage) ────────────────────────

  async uploadFile(bucket: string, path: string, file: Buffer, contentType?: string) {
    return this.supabase.storage.from(bucket).upload(path, file, {
      contentType,
      upsert: true,
    });
  }

  async getPublicUrl(bucket: string, path: string) {
    return this.supabase.storage.from(bucket).getPublicUrl(path);
  }

  async deleteFile(bucket: string, paths: string[]) {
    return this.supabase.storage.from(bucket).remove(paths);
  }

  async listFiles(bucket: string, path?: string) {
    return this.supabase.storage.from(bucket).list(path);
  }
}
