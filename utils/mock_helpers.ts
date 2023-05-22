import { NavbarDBTexts } from "../types"
import { Idiomas_CardData } from "../types"

export const MOCK_DATA: Idiomas_CardData = {
    /** Dados mockados para abastecimento dos cards da seção Detalhes */
    PT: [
        {
            imgPath: "icon-trilhas",
            imgAlt: "icon-trilhas",
            cardTitle: "Trilhas e Etapas",
            cardText: "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."
        },
        {
            imgPath: "icon-playlists",
            imgAlt: "icon-playlists",
            cardTitle: "Playlists",
            cardText: "Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline."
        },
        {
            imgPath: "icon-folder",
            imgAlt: "icon-playlists",
            cardTitle: "Coleções",
            cardText: "Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência."
        }
    ],
    EN: [
        {
            imgPath: "icon-trilhas",
            imgAlt: "icon-trilhas",
            cardTitle: "Stages and Learning pathways",
            cardText: "Create study plans by specifying lessons and/or courses and defining the order in which your students should study."
        },
        {
            imgPath: "icon-playlists",
            imgAlt: "icon-playlists",
            cardTitle: "Playlists",
            cardText: "Transform a collection into a playlist to be able to view videos and audios in sequence offline."
        },
        {
            imgPath: "icon-folder",
            imgAlt: "icon-playlists",
            cardTitle: "Collections",
            cardText: "Create collections, add content, rearrange items, and customize everything to enhance the experience."
        }
    ],
    ES: [
        {
            imgPath: "icon-trilhas",
            imgAlt: "icon-trilhas",
            cardTitle: "Etapas y Caminos de Aprendizaje",
            cardText: "Crea planes de estudio especificando clases y/o cursos y definiendo el orden en el que tus estudiantes deben estudiar."
        },
        {
            imgPath: "icon-playlists",
            imgAlt: "icon-playlists",
            cardTitle: "Listas de reproducción",
            cardText: "Transforma una colección en una lista de reproducción para poder ver videos y audios en secuencia sin conexión."
        },
        {
            imgPath: "icon-folder",
            imgAlt: "icon-playlists",
            cardTitle: "Colecciones",
            cardText: "Crea colecciones, añade contenido, reorganiza elementos y personaliza todo para mejorar la experiencia."
        }
    ]
}

export const MOCK_NAVBAR_TEXTS: NavbarDBTexts =
/** Dados mockados para abastecimento dos textos do navbar */
{
    PT: {
        solucoes: 'Soluções',
        precos: 'Preços',
        academy: 'Academy',
        blog: 'Blog',
        contato: 'Contato',
        carreiras: 'Carreiras',
        buttonText: { primary: 'Começar agora', secundary: 'Entrar' },
        modal: {
            title1: 'Crie uma Escola Online',
            title2: 'Comunidade e rede social',
            title3: 'Gamificação',
            title4: 'Aplicativo Mobile'
        },
        submenu: [
            {
                idioma: 'EN',
                imgAlt: 'USA FLAG',
                imgPath: 'usaFlag'
            },
            {
                idioma: 'ES',
                imgAlt: "SPAIN FLAG",
                imgPath: 'spainFlag'
            },
            {
                idioma: 'PT',
                imgAlt: "BRASIL FLAG",
                imgPath: "brFlag"
            }
        ]
    },
    EN: {
        solucoes: 'Soluctions',
        precos: 'Prices',
        academy: 'Academy',
        blog: 'Blog',
        contato: 'Contact',
        carreiras: 'Carees',
        buttonText: { primary: 'Start now', secundary: 'Log in' },
        modal: {
            title1: 'Create an Online School',
            title2: 'Community and Social Network',
            title3: 'Gamification',
            title4: 'Mobile Application'

        },
        submenu: [
            {
                idioma: 'EN',
                imgAlt: 'USA FLAG',
                imgPath: 'usaFlag'
            },
            {
                idioma: 'ES',
                imgAlt: "SPAIN FLAG",
                imgPath: 'spainFlag'
            },
            {
                idioma: 'PT',
                imgAlt: "BRASIL FLAG",
                imgPath: "brFlag"
            }
        ]
    },
    ES: {
        solucoes: 'Soluciones',
        precos: 'Precios',
        academy: 'Academia',
        blog: 'Blog',
        contato: 'Contacto',
        carreiras: 'Carreras',
        buttonText: { primary: 'Comenzar ahora', secundary: 'Entrar' },
        modal: {
            title1: 'Crea una Escuela en Línea',
            title2: 'Comunidad y Red Social',
            title3: 'Gamificación',
            title4: 'Aplicación Móvil'

        },
        submenu: [
            {
                idioma: 'EN',
                imgAlt: 'USA FLAG',
                imgPath: 'usaFlag'
            },
            {
                idioma: 'ES',
                imgAlt: "SPAIN FLAG",
                imgPath: 'spainFlag'
            },
            {
                idioma: 'PT',
                imgAlt: "BRASIL FLAG",
                imgPath: "brFlag"
            }
        ]
    }
}