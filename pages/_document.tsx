import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        head: (
          [
            <title key='1'>Challenge Ensinio</title>,
            <meta key='2' name="description" content="Projeto desafio da Ensinio desenvolvido com Next.js e Typescript." />,
            <meta key='3' name="viewport" content="width=device-width, initial-scale=1" />,
          ]
        ),
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <link key="font-1" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />,
            <link key="font-2" rel="preconnect" href="https://fonts.googleapis.com" />,
            <link key="font-3" rel="preconnect" href="https://fonts.gstatic.com" />,
            <link key="font-4" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}