import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    console.log(router)
    const { projectId } = router.query
    return <div>The ID is: {projectId}</div>
}
