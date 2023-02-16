import { EventItem } from './event-item'

export const EventList = ({ items }) => {
    return (
        <ul>
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    id={event.id}
                />
            ))}
        </ul>
    )
}
