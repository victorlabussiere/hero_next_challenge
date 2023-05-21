import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(259.95deg, #5F41D9 2.25%, #41B5D9 100.27%);        
    }

    .hidden {
        display: none;
        visibility: hidden;
    }
`