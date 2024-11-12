module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Mapeamento para arquivos estáticos como CSS e imagens
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    // Transpilar arquivos TypeScript usando ts-jest
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
