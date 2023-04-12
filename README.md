## Server-Side Rendering
É possível realizar requisições SSR, executadas em build-time, tornando o componente react assíncrono e utilizando a função
fetch nativa do nextJs `fetch()`, com algumas importantes adições em sua sintaxe em relação à nativa de Javascript.

```
# revalidação dos dados por página ou componente (30s)

export const revalidate = 30;
```
```
# revalidação dos dados por requisição fetch (30s)

await fetch('https://exemplo.com', { 
    next: { 
        revalidate: 30 
    }
})
```

```
# cacheamento nextjs

await fetch('https://exemplo.com', { 
    /** cache: 'force-cache' **/ // padrão nextjs
    cache: 'no-store' // não armazenar em cache (globalmente, para todos)
})
```


## Requisições HTTP
O NextJs trata todas as chamadas HTTP em componentes no mesmo nível (inclusive componentes dependentes), 
ou seja, não existe "request waterfall", uma vez que todas as requisições são analisadas previamente.
Além disso, requisições que dependem umas das outras são levadas em consideração e esperarão a resolução
de suas dependências para que sejam então executadas.