'use client'

import Image from "next/image";
import { useState } from "react";
import cn from "clsx"

import type { PropsWithChildren,ComponentProps } from "react";
// import {getBlurDataURL} from "@/lib/image-utils";

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithClassName<T = {}> = T & {
    className?: string;
};


interface BlurImageProps extends WithClassName, ComponentProps<typeof Image> {
    alt: string;
}

export default function BlurImage(props: BlurImageProps) {
    const {className, width, height,  ...rest}  =props
    const [isLoading, setLoading] = useState(true);

    return (
        <div className={cn(className, `w-[${width}px] h-[${height}px]`)}>
            <Image
                {...rest}
                width={width}
                height={height}
                alt={props.alt}
                className={cn(
                    "duration-900 ease-in-out object-cover absolute inset-0 w-full h-full",
                    isLoading
                        ? "grayscale blur-2xl scale-110"
                        : "grayscale-0 blur-0 scale-100"
                )}
                // placeholder="blur"
                onLoadingComplete={() => setLoading(false)}
            />
        </div>

    );
}
