import AddressIcon from '../icons/icons/address-icon'
import ArrowRightIcon from '../icons/icons/arrow-right-icon'
import DateIcon from '../icons/icons/date-icon'
import Button from '../ui/Button'

import classes from './event-item.module.css'

export const EventItem = ({ title, image, date, location, id }) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span className={classes.icon}>
                            <ArrowRightIcon />{' '}
                        </span>
                        <span>Explore Event</span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
