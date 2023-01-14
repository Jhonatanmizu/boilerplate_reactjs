interface Props {
  text?: string;
}
export default function Heading({ text }: Props) {
  return <h1>{text}</h1>;
}
