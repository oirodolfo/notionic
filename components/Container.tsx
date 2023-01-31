'use client'

import SEO from '@/components/Common/SEO'
import BLOG from '@/blog.config'
import type {ReactNode} from "react";

type ContainerType = {
    children?: ReactNode
    fullWidth?: boolean
} | Record<string, string | number>;

const Container = ({children, fullWidth, ...customMeta}: ContainerType) => {
    const meta = {
        title: BLOG.title,
        type: 'website',
        ...customMeta
    }
    return (
        <>
            <SEO meta={meta}/>
            <main
                className={`m-auto w-full flex-grow transition-all ${
                    !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
                }`}
            >
                {children}
            </main>
        </>
    )
}

export default Container
