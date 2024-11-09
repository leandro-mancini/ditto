import { ditto } from '@dittox/react';
import { IconButton } from '@site/src/ui/icon-button';
import React from 'react';
import { useState } from 'react';
import { LuCheck, LuClipboard } from 'react-icons/lu';

interface Props {
  value: string;
}

export const CopyButton = (props: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // await navigator.clipboard.writeText(props.children);
    // setCopied(true);
    // setTimeout(() => setCopied(false), 2000);
  };

  const { value } = props;
  return <IconButton>{copied ? <LuCheck /> : <LuClipboard />}</IconButton>;
};
