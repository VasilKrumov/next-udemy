import Head from 'next/head'
import { useRouter } from 'next/router'
import { EventList } from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { getAllEvents } from '../../helpers/api-util'

export default function AllEventsPage(props) {
    const router = useRouter()
    const { events } = props

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <>
            <Head>
                <title>All Events</title>
                <meta name="description" content={'Find a lot a events'} />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents()

    return {
        props: {
            events,
        },
        revalidate: 60,
    }
}
