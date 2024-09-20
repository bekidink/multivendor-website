import React from 'react'
import parse from "html-react-parser"
export default function TrainingHtml({content}) {
  return (
  <article>
    {parse(`${content}`)}
  </article>
  )
}
