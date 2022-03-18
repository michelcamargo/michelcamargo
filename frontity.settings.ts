import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "./packages/camargo-theme/types";

const settings: Settings<Theme | WpSource> = {
  "name": "michelcamargo",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Michel Camargo",
      "description": "Portifolio"
    }
  },
  "packages": [
    {
      "name": "camargo-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Início",
              "/"
            ],
            [
              "Blog",
              "/blog"
            ],
            [
              "Contato",
              "/contato"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
