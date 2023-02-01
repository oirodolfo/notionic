import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Hero from '@/components/Hero/Home'
import Pagination from '@/components/Pagination'
// import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import {Suspense} from "react";

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export function Loading() {
    return (
        <div className="grid grid-cols-6 gap-x-6 gap-y-3">
            <div className="col-span-full space-y-3 lg:col-span-4">
                <div className={`h-8 rounded-lg bg-gray-700 ${shimmer}`} />
                <div className={`h-[72px] rounded-lg bg-gray-800 ${shimmer}`} />
            </div>
            <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
                <div className={`space-y-3 rounded-lg bg-gray-900 p-3 ${shimmer}`}>
                    <div className="h-5 rounded-lg bg-gray-700 lg:h-10"></div>
                    <div className="h-6 w-16 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>
    );
}

// export const runtime = 'experimental-edge';

//
//  export async function generateStaticParams() {
//
//     try{
//      const [posts, heros] = await Promise.all([
//          getAllPosts({ onlyPost: true }),
//          getAllPosts({ onlyHidden: true }) ]
//      )
//
//
//      const hero = heros.find((t) => t.slug === 'index')
//
//     console.log({posts, heros, hero})
//
//     let blockMap
//     try {
//         blockMap = await getPostBlocks(hero.id)
//     } catch (err) {
//         console.error(err)
//         return  { post: null, blockMap: null, error: true, errorObj: err }
//     }
//
//     const postsToShow = posts.slice(0, BLOG.postsPerPage)
//     const totalPosts = posts.length
//     const showNext = totalPosts > BLOG.postsPerPage
//     return {
//             page: 1, // current page is 1
//             postsToShow,
//             showNext,
//             blockMap
//         }
//     }catch(e) {
//         return {
//             post: null,
//             blockMap: null,
//         }
//     }
// }

type Params = {
    postsToShow?: any,
    page?: any,
    showNext?: any,
    blockMap?: any
}

const RootPage = async ({params}) => {
    // const segment = useSelectedLayoutSegment();

    console.log({params})

    const { postsToShow, page, showNext, blockMap } = params as Params

    if(!postsToShow || !page || !blockMap) {
        return <section><Loading /></section>
    }

    return (
        <>
        <Container title={BLOG.title} description={BLOG.description}>
            <Hero blockMap={blockMap} />
            <Suspense fallback={<Loading />}>
            {postsToShow.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
            {showNext && <Pagination page={page} showNext={showNext} />}
            </Suspense>

        </Container>
        </>
    )
}

export default RootPage
