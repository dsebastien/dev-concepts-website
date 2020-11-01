import "react";
import "styled-components";

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: any | DefaultTheme;
  }
}

// Allow to import images
declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  import { HTMLAttributes, ComponentType } from "react";
  const value: ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any;
    }
  }
}
