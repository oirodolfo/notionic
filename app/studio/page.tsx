// import { NextStudio } from 'next-sanity/studio'
// import { StudioLayout, StudioProvider } from 'sanity'
// import config from '../../sanity.config'
// import { createGlobalStyle } from 'styled-components'
import SanityComponent from '@/components/SanityComponent'
//
// const GlobalStyle = createGlobalStyle(({ theme }) => ({
//     html: { backgroundColor: theme.sanity.color.base.bg }
// }))

export default function StudioPage() {
    return (
        <>
            <SanityComponent />
                {/* <GlobalStyle /> */}
            {/* </SanityComponent> */}
        </>
    )
}
