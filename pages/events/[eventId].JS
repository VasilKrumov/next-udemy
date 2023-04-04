import EventContent from '../../components/events/event-content'
import EventLogistics from '../../components/events/event-logistics'
import EventSummary from '../../components/events/event-summary'
import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import Head from 'next/head'

export default function EventDetailPage(props) {
    const event = props.event

    if (!event) {
        return <p>Loading!</p>
    }

    return (
        <>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} title={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId
    const event = await getEventById(eventId)

    return {
        props: {
            event: event,
        },
        revalidate: 30,
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()
    const paths = events.map((event) => ({ params: { eventId: event.id } }))

    return {
        paths: paths,
        fallback: 'blocking',
    }
}
