import React, { useState } from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import { LuCheck, LuClipboard } from 'react-icons/lu';
import { Example } from './example';

export default function CodeBlock(props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(props.children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', borderRadius: '5px' }}>
      <Example {...props} />
    </div>
  );
}
