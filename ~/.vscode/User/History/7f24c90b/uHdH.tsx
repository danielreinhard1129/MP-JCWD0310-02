'use client'
import FormInput from "@/components/FormInput";
// import FormTextArea
import RichTextEditor from "@/components/ui/RichTextEditor"
import { error } from "console";

const Write = () => {

    

    return (
        <RichTextEditor
        onChange={(html:string) => setFieldValue('content' , html)}
        label="Content"
        value={values.content}
        isError={Boolean(errors.content)}/>
    )
};

export default Write;