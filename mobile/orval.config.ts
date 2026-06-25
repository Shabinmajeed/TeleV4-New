import { defineConfig } from 'orval';

export default defineConfig({
  telev4: {
    input: {
      target: '../backend/swagger.json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/api',
      schemas: 'src/api/model',
      client: 'react-query',
      override: {
        mutator: {
          path: '/home/azureuser/TeleV4/mobile/src/utils/api.ts',
          name: 'apiFetch',
        },
        query: {
          useQuery: true,
          useMutation: true,
          signal: true,
        },
      },
    },
  },
});
