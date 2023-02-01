import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export type NewPageType = {
    params?: Record<string, string>;
    searchParams?: { [key: string]: string | string[] | undefined };
}
export async function getPage(context) {
    const {page} = context.params // Get Current Page No.
    const posts = await getAllPosts({onlyNewsletter: false})

    console.log({posts})
    const postsToShow = posts.slice(
        BLOG.postsPerPage * (page - 1),
        BLOG.postsPerPage * page
    )
    const totalPosts = posts.length
    const showNext = page * BLOG.postsPerPage < totalPosts
    return {
        page, // Current Page
        postsToShow,
        showNext
    }
}

const Page = async (params) => {
    console.log({params})

    const { page } = params

    const { postsToShow, showNext } = await getPage({params})

    console.log({postsToShow, showNext})

    if(!postsToShow || !page) {
        return <h1>Loading....</h1>
    }

    return (
        <Container>
            {postsToShow &&
                postsToShow.map((post) => <BlogPost key={post.id} post={post} />)}
            <Pagination page={page} showNext={showNext} />
        </Container>
    )
}

//
// export async function getStaticPaths() {
//     const posts = await getAllPosts({ onlyNewsletter: false })
//     const totalPosts = posts.length
//     const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
//     return {
//         // remove first page, we 're not gonna handle that.
//         paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
//             params: { page: '' + (i + 2) }
//         })),
//         fallback: true
//     }
// }

export default Page
