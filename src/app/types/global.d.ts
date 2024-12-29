declare module "*.scss" {
  const classNames: { [key: string]: string };
  export default classNames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react"
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // For use as an image source
  export { ReactComponent, src }
  export default src; // Default export as string path
}

declare const __IS__DEV__: boolean;