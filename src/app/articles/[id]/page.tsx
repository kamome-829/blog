import React from 'react'
import Image from 'next/image'
import { getDetailArticles } from '@/blogAPI'
import DeleteButton from '@/app/compornents/DeleteButton'

const Article = async ({params}: {params: {id:string}}) => {
    const detailAricle = await getDetailArticles(params.id);

  return (
    <div className='max-w-3xl max-auto p-5'>
        <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailAricle.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailAricle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailAricle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailAricle.id} />
      </div>
    </div>
  )
}

export default Article