interface MarkdownProps {
  children: React.ReactNode;
}

export default function Markdown(props: MarkdownProps) {
  return <>{props.children}</>;
}
