import { useRouter } from 'next/router'

export default function BlogPostPage() {
    const router = useRouter()
    console.log(router)
    return <div>Home</div>
}
