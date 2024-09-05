// Step 2: Create the Markdown Editor Component
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState("type markdown here");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        style={{ width: '100%', height: '200px', marginBottom: '20px' }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function App() {
    return (
        <div>
            <h1>Markdown Editor</h1>
            <Home />
        </div>
    );
}

const flattenedData = data.flat();
console.log(flattenedData);
const filteredData = flattenedData.filter(item => item.age > 25);
console.log(filteredData);
