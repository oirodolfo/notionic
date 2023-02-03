'use client'

import {ReactNode, RefObject, useEffect, useRef, useState} from 'react'

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
}

function useIntersectionObserver(
    elementRef: RefObject<Element>,
    {
        threshold = 0,
        root = null,
        rootMargin = '0%',
        freezeOnceVisible = false,
    }: Args,
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>()

    const frozen = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry)
    }

    useEffect(() => {
        const node = elementRef?.current // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver

        if (!hasIOSupport || frozen || !node) return

        const observerParams = {threshold, root, rootMargin}
        const observer = new IntersectionObserver(updateEntry, observerParams)

        observer.observe(node)

        return () => observer.disconnect()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen])

    return entry
}

export default useIntersectionObserver
export const LazyLoad = (props: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting

    console.log(`Render Section lazy`, { isVisible, ...entry })

    return isVisible ?
        <div
            ref={ref}
            style={{
                minHeight: '100vh',
                display: 'flex',
                border: '1px dashed #000',
                fontSize: '2rem',
            }}
        >
            <div style={{margin: 'auto'}}>{props.children}</div>
        </div> : null
}

