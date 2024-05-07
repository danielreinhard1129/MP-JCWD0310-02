'use client';

import { FC } from 'react';
// import Quill

interface RichTextEditorProps {
  onChange: (value: string) => void;
  value: string;
  isError: string;
  label: string;
}

const RichTextEditor: FC<RichTextEditorProps> = ({
  onChange,
  isError,
  label,
  value,
}) => {
  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ['bold', 'italic']],
  };
  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  return (
    <div className="space-y-1.5">
      <label className={isError ? "text-red-500" : ""}>{label}</label>
      <QuillEditor
        value={value}
        onChange={onChange}
        formats={quillFormats}
        className="h-[300px] overflow-hidden"
      />
      {isError && <div>{label} is Required</div>}
    </div>
  );
};
