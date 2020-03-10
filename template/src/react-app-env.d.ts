/// <reference types="react-scripts" />
/// <reference types="@testing-library/jest-dom/extend-expect" />

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const url: string;

  export default url;
  export const ReactComponent: SvgrComponent;
}
