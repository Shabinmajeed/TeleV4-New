import { Injectable, OnModuleInit, Global, Module } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';

@Global()
@Module({
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (): SupabaseClient => {
        const supabaseUrl = process.env.SUPABASE_URL!;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
        return createClient(supabaseUrl, supabaseKey, {
          auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
          },
        });
      },
    },
    SupabaseService,
  ],
  exports: ['SUPABASE_CLIENT', SupabaseService],
})
export class SupabaseModule implements OnModuleInit {
  onModuleInit() {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error(
        'Missing required Supabase environment variables: SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY',
      );
    }
  }
}
