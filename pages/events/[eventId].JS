import { useRouter } from 'next/router'
import EventContent from '../../components/events/event-detail/event-content'
import EventLogistics from '../../components/events/event-detail/event-logistics'
import EventSummary from '../../components/events/event-detail/event-summary'
import { getEventById } from '../../dummy-data'

export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)

    if (!event) {
        return <p>No event found!</p>
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} title={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}
