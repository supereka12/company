import { CKEditor } from 'ckeditor4-react';

const CustomCKEditor = ({ value, onChange }) => {
    return (
        <CKEditor
            initData={value}
            onChange={(event) => onChange(event.editor.getData())}
            config={{
                extraPlugins: 'uploadimage,image2',
                filebrowserUploadUrl: '/upload-image',
                filebrowserUploadMethod: 'form'
            }}
        />
    );
};

export default CustomCKEditor;
