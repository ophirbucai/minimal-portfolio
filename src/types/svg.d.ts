declare module "*.svg?react" {
  const ReactComponent: React.FC<React.ComponentProps<"svg">>;

  export default ReactComponent;
}
