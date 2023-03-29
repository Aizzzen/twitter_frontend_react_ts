import formatDistance from 'date-fns/formatDistance'
import ru from 'date-fns/locale/ru'

export const formatDate = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
        {locale: ru}
    )
}