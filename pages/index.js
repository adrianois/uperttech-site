import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uperttech | Soluções inteligentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo.svg" alt="Uperttech Logo" width="150" />
        <h3>Em breve</h3>
      </main>

      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        * {
          font-family: 'Montserrat', sans-serif;
        }

        h3 {
          color: #01619d;
          font-variant: all-petite-caps;
        }
      `}</style>
    </>
  )
}
