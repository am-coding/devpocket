import React from 'react'
// import Articles from '../components/Articles';
import Hero from '../components/Hero';

import { ArticleProvider } from '../components/articleWrapper'

export default function Page() {

  return (
    <ArticleProvider>
      <div>
        {/* <Articles /> */}
        <Hero />
      </div>
    </ArticleProvider>
   
  )
}