import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  /**
   * Get the raw Supabase client for advanced queries
   */
  getClient(): SupabaseClient {
    return this.supabase;
  }

  /**
   * Auth helpers
   */
  async signUpWithEmail(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  async signInWithEmail(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut(jwt: string) {
    const { error } = await this.supabase.auth.signOut();
    return { error };
  }

  async getUser(jwt: string) {
    return this.supabase.auth.getUser(jwt);
  }

  /**
   * Database helpers (PostgREST)
   */
  async find(table: string, query?: Record<string, any>) {
    let builder = this.supabase.from(table).select('*');
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        builder = builder.eq(key, value);
      });
    }
    return builder;
  }

  async findOne(table: string, query: Record<string, any>) {
    return this.supabase.from(table).select('*').match(query).single();
  }

  async insert(table: string, data: any) {
    return this.supabase.from(table).insert(data).select();
  }

  async update(table: string, data: any, query: Record<string, any>) {
    let builder = this.supabase.from(table).update(data);
    Object.entries(query).forEach(([key, value]) => {
      builder = builder.eq(key, value);
    });
    return builder.select();
  }

  async delete(table: string, query: Record<string, any>) {
    let builder = this.supabase.from(table).delete();
    Object.entries(query).forEach(([key, value]) => {
      builder = builder.eq(key, value);
    });
    return builder;
  }

  /**
   * Storage helpers
   */
  async uploadFile(bucket: string, path: string, file: File | Buffer) {
    return this.supabase.storage.from(bucket).upload(path, file);
  }

  async getPublicUrl(bucket: string, path: string) {
    return this.supabase.storage.from(bucket).getPublicUrl(path);
  }

  async deleteFile(bucket: string, paths: string[]) {
    return this.supabase.storage.from(bucket).remove(paths);
  }
}
