'use client'
import { useState } from "react";

export default function upload(){
    const [file,setFile] =useState()

    const onSubmit =async(error) =>{
        error.preventDefault()
        if(!file ) return

        try{
            const data =new FormData()
            data.set('file',file)

            const res =await fetch('/api/upload',{
                method:'POST',
                body:data
            })
            if(!res.ok) throw new Error(await res.text())
        }catch (e){
    console.error(e)}
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input
                type='file'
                name="file"
                onChange={(e)=> setFile(e.target.files?.[0])}
            />
           <input type="submit" value="Upload"/>
        </form>
        </>
    )

}