export type LoadingType = "bar" | "dot" | "file" | "pulse" | "spin";

export interface LoadingProps {
  visible?: boolean;
  type?: LoadingType;
  wrapped?: boolean;
}
