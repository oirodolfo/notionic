import * as React from "react";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
    const { base64, img } = await getPlaiceholder("/path-to-your-image.jpg");

    return {
        props: {
            imageProps: {
                ...img,
                blurDataURL: base64,
            },
        },
    };
};

const PlaiceHolder: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
                                                                            imageProps,
                                                                        }) => (
    <div>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Image {...imageProps} placeholder="blur" />
    </div>
);

export default PlaiceHolder;

