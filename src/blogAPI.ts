import { notFound } from "next/navigation";
import { Ariticle } from "./types"

export const getAllArticles = async (): Promise<Ariticle[]> =>{
    const res = await fetch(`http://localhost:3001/posts`,{cache: "no-store" });

    if (!res.ok) {
        throw new Error("エラー発生");
    }
    
    await new Promise((resolve) => setTimeout(resolve,1500));

    const articles = await res.json();
    return articles;
}


export const getDetailArticles = async (id: string): Promise<Ariticle> =>{
    const res = await fetch(`http://localhost:3001/posts/${id}`, {next: { revalidate: 60 }});

    if(res.status===404){
        notFound()
    }

    if (!res.ok) {
        throw new Error("エラー発生");
    }
    
    await new Promise((resolve) => setTimeout(resolve,1500));

    const articles = await res.json();
    return articles;
}


export const createArticles = async (
    id: string,
    title: string,
    content: string
    ): Promise<Ariticle> =>{

        const currentDatetime = new Date().toISOString();

    const res = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, title, content, createAt: currentDatetime}),
    });

    if (!res.ok) {
        throw new Error("エラー発生");
    }
    
    await new Promise((resolve) => setTimeout(resolve,1000));

    const newarticles = await res.json();
    return newarticles;
}



export const deleteArticles = async (id: string,): Promise<Ariticle> =>{

    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("エラー発生");
    }
    
    await new Promise((resolve) => setTimeout(resolve,1000));

    const deletearticles = await res.json();
    return deletearticles;
}