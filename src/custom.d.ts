declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";

// Provide a typed default export for image imports
declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
