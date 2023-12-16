"use client";

import React, { useState } from 'react'
import { createArticles } from '@/blogAPI'
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        await createArticles(id, title, content);
        setLoading(false);
        router.push("/")
        router.refresh();
    };

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2>ブログ新規作成</h2>
        <form className='bg-slate-200 p-5' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2'>写真URL</label>
                <input 
                type="text" 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2'>タイトル</label>
                <input 
                type="text" 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2'>本文</label>
                <textarea 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type='submit' 
            className={`py-2 px-4 border rounded-md 
            ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
            } 
            text-white font-semibold focus:outline-none`}
          disabled={loading}>投稿</button>
        </form>
    </div>
  )
}

export default CreateBlogPage