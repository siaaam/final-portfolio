import { CodeBlock, dracula } from "react-code-blocks";

const HTMLRenderer = () => {
  const htmlString =
    '<p>Variables in JavaScript are...</p><pre><code class="language-javascript">let name = "John Doe"; \nconsole.log(name);</code></pre><p>Another code example:</p><pre><code class="language-javascript">let age = 25; \nconsole.log(age);</code></pre>';

  const renderHTML = () => {
    const codeRegex = /<pre><code[^>]*>(.*?)<\/code><\/pre>/gs;
    const codeMatches = htmlString.matchAll(codeRegex);

    return Array.from(codeMatches, (match, index) => {
      const codeContent = match[1].replace(/<\/?[^>]+(>|$)/g, "");
      return (
        <CodeBlock
          key={index}
          text={codeContent}
          language="javascript"
          showLineNumbers={false}
          theme={dracula}
        />
      );
    });
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: htmlString }}></p>
    </div>
  );
};

export default HTMLRenderer;
