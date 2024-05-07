'use client'
import FormInput from "@/components/FormInput";
// import FormTextArea
import RichTextEditor from "@/components/ui/RichTextEditor"
import { error } from "console";
import { Formik } from "formik";

const Write = () => {

    const {} = Formik({
        initialValues : {},
        onSubmit : (values) => {
            
        },
    })

    return (
        <RichTextEditor
        onChange={(html:string) => setFieldValue('content' , html)}
        label="Content"
        value={values.content}
        isError={Boolean(errors.content)}/>
    )
};

export default Write;