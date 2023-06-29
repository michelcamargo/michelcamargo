import { CustomContent } from "@/lib/custom-content";

export type PageData = {
  head: {
    title: string,
    description: string
  },
  body: {
    sessions: Array<CustomContent>
  }
}