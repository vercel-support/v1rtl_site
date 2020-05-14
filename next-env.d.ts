/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
    }
  }
}
