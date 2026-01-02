module.exports = {
  testEnvironment: "node",

  // Configuração do SWC para transformação
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            decorators: true,
            dynamicImport: true,
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
          target: "es2021",
          baseUrl: ".",
          paths: {
            "@/*": ["src/*"],
          },
        },
        module: {
          type: "commonjs",
        },
        sourceMaps: true,
      },
    ],
  },

  // Extensões de arquivo suportadas
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Padrão para encontrar arquivos de teste
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js|jsx)",
    "**/*.(test|spec).(ts|tsx|js|jsx)",
  ],

  // Mapeamento de paths (alias)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Diretórios raiz
  roots: ["<rootDir>/src"],

  // Configuração de cobertura de código
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/__tests__/**",
    "!src/**/*.spec.ts",
    "!src/**/*.test.ts",
  ],

  // Limpar mocks entre testes
  clearMocks: true,

  // Restaurar mocks após cada teste
  restoreMocks: true,

  // Mostrar cobertura de código
  coverageReporters: ["text", "lcov", "html"],

  // Configuração para arquivos de setup
  setupFilesAfterEnv: [],

  // Ignorar padrões
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  // Timeout para testes
  testTimeout: 10000,
};
