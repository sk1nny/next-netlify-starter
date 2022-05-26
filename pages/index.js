import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
       <script src="https://unpkg.com/blip-chat-widget" type="text/javascript">
</script>
<script>
    (function () {
        window.onload = function () {
            new BlipChat()
            .withAppKey('dHJhbnNib3JkbzQ1cGVnd3RzcWF5dWhqOXduYm06MWVlODhiNmUtMThlYS00ODlmLWI4MWYtMmI5ZWJhN2UxZjlk')
            .withButton({"color":"#2CC3D5","icon":"https://blipmediastore.blob.core.windows.net/public-medias/Media_214b44af-a72b-4736-939e-3cf8c62e4332"})
            .withCustomCommonUrl('https://yago-luiz-hillesheim-81lzw.chat.blip.ai/')
            .build();
        }
    })();
</script>
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
