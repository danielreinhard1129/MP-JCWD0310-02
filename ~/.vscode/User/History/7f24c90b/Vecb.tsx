'use client'

const Write = () => {

    return (
        <RichTextEditor
        onChange={(html:string) => setFieldValue('content' , html)}/>
    )
};

export default Write;