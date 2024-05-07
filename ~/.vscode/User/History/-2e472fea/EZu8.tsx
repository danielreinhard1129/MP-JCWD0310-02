'use client';

import { FC } from "react";

interface RichTextEditorProps {
    onChange : (value:string) => void;
    value:string;
    isError:string;
    label:string;
}

const RichTextEditor : FC<RichTextEditorProps> = ({
    isError,
    label,
    value,
})=>{
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
            <label className="">{label}</label>
        </div>
      )
};