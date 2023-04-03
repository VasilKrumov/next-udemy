import { EventList } from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/error-alert'
import { getFilteredEvents } from '../../helpers/api-util'

export default function FilteredEventsPage(props) {
    if (props.hasError) {
        return (
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
        )
    }

    if (!props.events || props.events.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(props.date.year, props.date.month - 1)

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={events} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context

    const filterData = params.slug

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: { hasError: true },
            // notFound: true,
            // redirect: {
            //   destination: '/error'
            // }
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth,
            },
        },
    }
}
