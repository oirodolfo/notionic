'use client'

import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider } from 'sanity'

export default function SanityComponent({ children }) {
    return <>
        <NextStudio config={config}>
            <StudioProvider config={config}>
                {children}
                <StudioLayout/>
            </StudioProvider>
        </NextStudio>
    </>
}
