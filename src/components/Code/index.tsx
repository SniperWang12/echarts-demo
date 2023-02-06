import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = (props: any) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      startingLineNumber={1}
      language={props.lang}
      style={tomorrow}
      lineNumberStyle={{ color: '#ddd', fontSize: 20 }}
      wrapLines={true}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default Code;
