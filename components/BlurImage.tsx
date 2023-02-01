'use client'

import Image from 'next/image'
import { useState } from 'react'
import cn from 'clsx'

import type { PropsWithChildren, ComponentProps } from 'react'
// import {getBlurDataURL} from "@/lib/image-utils";

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithChildren<T = {}> = T & PropsWithChildren<{}>

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithClassName<T = {}> = T & {
  className?: string
}

interface BlurImageProps extends WithClassName, ComponentProps<typeof Image> {
  alt: string
}

export default function BlurImage(props: BlurImageProps) {
  const { className, width, height, ...rest } = props
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={cn(className, `w-[${width}px] h-[${height}px]`)}>
      <Image
        {...rest}
        width={width}
        height={height}
        alt={props.alt}
        className={cn(
          'duration-900 absolute inset-0 h-full w-full object-cover ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        // placeholder="blur"
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
