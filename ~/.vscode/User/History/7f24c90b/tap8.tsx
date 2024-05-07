'use client'
import FormInput from "@/components/FormInput";
// import FormTextArea
import RichTextEditor from "@/components/ui/RichTextEditor"

const Write = () => {

    return (
        <RichTextEditor
        onChange={(html:string) => setFieldValue('content' , html)}/>
    )
};

export default Write;