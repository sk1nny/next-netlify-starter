import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/https://yago-luiz-hillesheim-81lzw.chat.blip.ai/?appKey=dHJhbnNib3JkbzQ1cGVnd3RzcWF5dWhqOXduYm06MWVlODhiNmUtMThlYS00ODlmLWI4MWYtMmI5ZWJhN2UxZjlk" />
   
      </Head>
    

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    
      </main>
 
                                

      <Footer />
    </div>
  )
}
