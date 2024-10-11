---
title: Visão Geral
description: Um guia para configurar o sistema de temas do Ditto.
---

## Arquitetura

Aqui está uma visão geral rápida de como o sistema é estruturado para fornecer um sistema de estilização performático e extensível:

- Defina a configuração do sistema de estilização usando a função `defineConfig`
- Crie o motor de estilização usando a função `createSystem`
- Passe o motor de estilização para o componente `DittoProvider`

```tsx
import { DittoProvider, createSystem } from '@ditto/react';

const config = defineConfig({
  theme: {
    colors: {},
  },
});

const system = createSystem(config);

export default function App() {
  return (
    <DittoProvider value={system}>
      <Box>Olá mundo</Box>
    </DittoProvider>
  );
}
```

## Configuração

O sistema é configurado usando a função `defineConfig`. Esta função aceita um objeto de configuração que permite personalizar o comportamento do sistema de estilização.

Após uma configuração ser definida, ela é passada para a função `createSystem` para criar o motor de estilização.

### `cssVarsRoot`

`cssVarsRoot` é o elemento raiz onde as variáveis CSS de tokens serão aplicadas.

```jsx
const config = defineConfig({
  cssVarsRoot: ':where(:root, :host)',
});

export default createSystem(config);
```

### `cssVarsPrefix`

`cssVarsPrefix` é o prefixo usado para as variáveis CSS dos tokens.

```jsx
const config = defineConfig({
  cssVarsPrefix: 'ditto',
});

export default createSystem(config);
```

### `globalCss`

`globalCss` é usado para aplicar estilos globais ao sistema.

```jsx
const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
  },
});

export default createSystem(config);
```

### `theme`

Use a propriedade de configuração `theme` para definir o tema do sistema. Esta propriedade aceita as seguintes propriedades:

- `breakpoints`: para definir breakpoints
- `keyframes`: para definir animações css keyframes
- `tokens`: para definir tokens
- `semanticTokens`: para definir tokens semânticos
- `textStyles`: para definir estilos tipográficos
- `layerStyles`: para definir estilos de camada
- `animationStyles`: para definir estilos de animação
- `recipes`: para definir receitas de componentes
- `slotRecipes`: para definir receitas de slots de componentes

```jsx
const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      colors: {
        red: '#EE0F0F',
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: '{colors.red}' },
      },
    },
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
});

export default createSystem(config);
```

### `conditions`

Use a propriedade de configuração `conditions` para definir seletores personalizados e condições de media query para uso no sistema.

```jsx
const config = defineConfig({
  conditions: {
    cqSm: '@container(min-width: 320px)',
    child: '& > *',
  },
});

export default createSystem(config);
```

Exemplo de uso:

```jsx
<Box mt="40px" _cqSm={{ mt: '0px' }}>
  <Box>Olá mundo</Box>
</Box>
```

### `strictTokens`

Use a propriedade de configuração `strictTokens` para aplicar o uso de apenas tokens de design. Isso lançará um erro TS se você tentar usar um token que não esteja definido no tema.

```jsx
const config = defineConfig({
  strictTokens: true,
});

export default createSystem(config);
```

```jsx
// ❌ Isso lançará um erro TS
<Box color="#4f343e">Olá mundo</Box>

// ✅ Isso funcionará
<Box color="red.400">Olá mundo</Box>
```

## TypeScript

Quando você configura as propriedades do sistema (como `colors`, `space`, `fonts`, etc.), a CLI pode ser usada para gerar definições de tipos para elas.

```bash
npx @ditto/cli@next typegen ./theme.ts
```

Isso atualizará os tipos internos no pacote `@ditto/react`, garantindo que estejam sincronizados com o tema. Fornecendo uma API segura por tipo e uma experiência agradável para desenvolvedores.

## Sistema

Após uma configuração ser definida, ela é passada para a função `createSystem` para criar o motor de estilização. O `system` retornado é um motor de estilização JavaScript agnóstico de framework, que pode ser usado para estilizar componentes.

```jsx
const system = createSystem(config);
```

O sistema inclui as seguintes propriedades:

### `token`

A função token é usada para obter um valor bruto de token ou uma variável CSS.

```jsx
const system = createSystem(config);

// token bruto
system.token('colors.red.200');
// => "#EE0F0F"

// token com fallback
system.token('colors.pink.240', '#000');
// => "#000"
```

Use a função `token.var` para obter a variável css:

```jsx
// variável css
system.token.var('colors.red.200');
// => "var(--ditto-colors-red-200)"

// token com fallback
system.token.var('colors.pink.240', 'colors.red.200');
// => "var(--ditto-colors-red-200)"
```

É importante notar que `semanticTokens` sempre retornam uma variável css, independentemente de você usar `token` ou `token.var`. Isso ocorre porque tokens semânticos mudam com base no tema.

```jsx
// token semântico
system.token('colors.danger');
// => "var(--ditto-colors-danger)"

system.token.var('colors.danger');
// => "var(--ditto-colors-danger)"
```

### `tokens`

```jsx
const system = createSystem(config);

system.tokens.getVar('colors.red.200');
// => "var(--ditto-colors-red-200)"

system.tokens.expandReferenceInValue('3px solid {colors.red.200}');
// => "3px solid var(--ditto-colors-red-200)"

system.tokens.cssVarMap;
// => Map { "colors": Map { "red.200": "var(--ditto-colors-red-200)" } }

system.flatMap;
// => Map { "colors.red.200": "var(--ditto-colors-red-200)" }
```

### `css`

A função `css` é usada para converter objetos de estilo em objetos de estilo CSS que podem ser passados para `emotion` ou `styled-components` ou qualquer outra biblioteca de estilização.

```jsx
const system = createSystem(config);

system.css({
  color: 'red.200',
  bg: 'blue.200',
});

// => { color: "var(--ditto-colors-red-200)", background: "var(--ditto-colors-blue-200)" }
```

### `cva`

A função `cva` é usada para criar receitas de componentes. Ela retorna uma função que, quando chamada com um conjunto de props, retorna um objeto de estilo.

```jsx
const system = createSystem(config);

const button = system.cva({
  base: {
    color: 'white',
    bg: 'blue.500',
  },
  variants: {
    outline: {
      color: 'blue.500',
      bg: 'transparent',
      border: '1px solid',
    },
  },
});

button({ variant: 'outline' });
// => { color: "blue.500", bg: "transparent", border: "1px solid" }
```

### `sva`

A função `sva` é usada para criar receitas de slots de componentes. Ela retorna uma função que, quando chamada com um conjunto de props, retorna um objeto de estilo para cada slot.

```jsx
const system = createSystem(config);

const alert = system.sva({
  slots: ['title', 'description', 'icon'],
  base: {
    title: { color: 'white' },
    description: { color: 'white' },
    icon: { color: 'white' },
  },
  variants: {
    status: {
      info: {
        title: { color: 'blue.500' },
        description: { color: 'blue.500' },
        icon: { color: 'blue.500' },
      },
    },
  },
});

alert({ status: 'info' });
// => { title: { color: "blue.500" }, description: { color: "blue.500" }, icon: { color: "blue.500" } }
```

### `isValidProperty`

A função `isValidProperty` é usada para verificar se uma propriedade é válida.

```jsx
const system = createSystem(config);

system.isValidProperty('color');
// => true

system.isValidProperty('background');
// => true

system.isValidProperty('invalid');
// => false
```

### `splitCssProps`

A função `splitCssProps` é usada para dividir as props em props css e props não-css.

```jsx
const system = createSystem(config);

system.splitCssProps({
  color: 'red.200',
  bg: 'blue.200',
  'aria-label': 'Olá mundo',
});
// => [{ color: "red.200", bg: "blue.200" }, { "aria-label": "Olá mundo" }]
```

### `breakpoints`

A propriedade `breakpoints` é usada para consultar breakpoints.

```jsx
const system = createSystem(config);

system.breakpoints.up('sm');
// => "@media (min-width: 320px)"

system.breakpoints.down('sm');
// => "@media (max-width: 319px)"

system.breakpoints.only('md');
// => "@media (min-width: 320px) and (max-width: 768px)"

system.breakpoints.keys();
// => ["sm", "md", "lg", "xl"]
```

## Tokens

Para saber mais sobre tokens, consulte a seção [tokens](/theming/definitions/tokens).

## Receitas

Para saber mais sobre receitas, consulte a seção [recipes](/theming/definitions/recipes).
