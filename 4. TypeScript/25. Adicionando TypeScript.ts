/* 
    Agora, adicionaremos o TYPESCRIPT no projeto

    1. Comando no terminal:
    "npm install typescript --save-dev"

    (Caso já esteja instalado globalmente)


    2. Comando no terminal para iniciar TS no projeto criando o arquivo 'tsconfig.json'
    "tsc --init"

    3. Copiar configurações da aula para o tsconfig.json e salvar:


{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src"
  ]
}




*/