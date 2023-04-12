## Server-Side Rendering
É possível realizar requisições SSR, executadas em build-time, tornando o componente react assíncrono e utilizando a função
fetch nativa do nextJs `fetch()`, com algumas importantes adições em sua sintaxe em relação à nativa de Javascript.

```javascript
// revalidação dos dados por página ou componente (30s)
export const revalidate = 30;
```
```javascript
// revalidação dos dados por requisição fetch (30s)
await fetch('https://exemplo.com', { 
    next: { 
        revalidate: 30 
    }
})
```

```javascript
// cacheamento nextjs
await fetch('https://exemplo.com', { 
    /** cache: 'force-cache' **/ // padrão nextjs
    cache: 'no-store' // não armazenar em cache (globalmente)
})
```

## Requisições HTTP
O NextJs trata todas as chamadas HTTP em componentes no mesmo nível (inclusive componentes dependentes), 
ou seja, não existe "request waterfall", uma vez que todas as requisições são analisadas previamente.
Além disso, requisições que dependem umas das outras são levadas em consideração e esperarão a resolução
de suas dependências para que sejam então executadas.

## SSR Streaming
Uso da SuspenseAPI do React para tratar componentes com requisições pesadas, 
permitindo que a interface seja escrita parcialmente, sem que a interface espere a requisição para sua construção

## Routering
`useRouter` agora deve ser chamado do diretório `'next/navigation'` apenas para navegação funcional.
Na versão atual, `'next/navigation'` exporta também várias funções relacionadas à rota, como:
<br>
`usePathname` - consulta path da rota;
<br>
`useSearchParams` - consulta query-params;
<br>
`useSelectedLayoutSegment` e `useSelectedLayoutSegments` - consulta layouts renderizados;
<br>

### Cache em mudança de rotas
A aplicação cria cache em memória do navegador para manter páginas já carregadas em outras rotas, 
implicando no carregamento dos dados, já que as informações em cache deve ficar "desatualizada" 
após qualquer atualização dos dados, não renderizando novamente após a mutação.
É um problema dessa versão do nextJS, no entanto, pode-se contornar essa situação 
forçando uma atualização da página ou componente importando `useRouter` de `'next/navigation'` 
e ativando o refresh do componente:

```javascript
const router = useRouter();
router.refresh();
```

## Pre-fetch de rotas
No momento em que um componente `<Link>` do NextJS estiver disponível na interface,
a sua respectiva rota começa a ser pré-carregada
(apenas em produção)

## Client-Side Components
Caso o componente ou página precisem fazer uso de funções interativas (Javascript), 
é necessário utilizar a notação 'use client' no topo do arquivo.
Essa funcionalidade permite que o componente seja hidratado com Javascript e as demais funções de interatividade
E por conta disso o componente perde a possibilidade de ser assíncrono, tornando-se um componente comum react, 
obrigando também que suas requisições HTTP sejam realizadas de forma comum.

## Metadata (SSO)
É possível descrever metadados para qualquer **página** utilizando e exportando um objeto chamado `metadata`, 
criando-o antes do início do componente da página.
Além das propriedades `title`, `description` e `licence` é possível utilizar qualquer propriedade para 
representar os metadados da página.
Também é possível concatenar metadados entre páginas utilizando as propriedades `default` e `template` para o objeto `title`:

```javascript
// Metadados estáticos
export const metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio' // Indica a concatenação de string quando possível
  }
}

// Metadados dinâmicos
export async function generateMetadata({ params }) {
  return {
    title: `Produto ${params.slug}`
  }
}
```

