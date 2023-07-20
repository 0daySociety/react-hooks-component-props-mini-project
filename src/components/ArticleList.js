import React from "react";
import Artical from "./Article";

export default function ArticleList({post}) {

  let container =post.map((element,index)=>{
   return(
    <Artical key={index} title={element.title} date={element.date} preview={element.preview}/>
   );
  })
  return (


    <main>
        {container}
    </main>
  )
}
