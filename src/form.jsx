import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64';
export default function Form({ addMentor }) {
    const { register, handleSubmit } = useForm()
    let [mentor, setMentor] = useState({});
    const onSubmit = data => {
        addMentor({ ...data, ...mentor })
        // console.log('mentor',mentor);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" placeholder='name' ref={register} />
            <input name="occupation" placeholder='occupation' ref={register} />
            <input name="collage" placeholder='collage' ref={register} />

            <FileBase64
                ref={register}
                multiple={false}
                onDone={(files) => setMentor({ files })} />
            <input type="submit" />
        </form>
    );
}