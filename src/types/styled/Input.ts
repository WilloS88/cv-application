export type InputProps = {
  heading: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText: string;
  type?: string;
  min?: string;
  max?: string;
};
