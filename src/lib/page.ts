type PageContent = {
  key: string,
  content: Array<PageContent>
}

export type PageData = {
  head: {
    title: string,
    description: string
  },
  body: {
    sessions: Array<any>
  }
}