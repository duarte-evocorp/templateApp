import { parseISO, format, formatRelative, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export function formattedDate(firstDate, dataFormat) {
    return format(
        parseISO(firstDate),
        dataFormat || "'Dia' dd 'de' MMMM', às 'HH:mm'h'",
        { locale: ptBR }
    );
}
// Dia 01 de Abril às 16:00h

export function distance(firstDate, secondDate) {
    return formatDistance(
        firstDate,
        parseISO(secondDate),
        { locale: ptBR }
    );
}
// 24 horas

export function relative(firstDate, secondDate) {
    return formatRelative(
        parseISO(firstDate),
        secondDate,
        { locale: ptBR }
    );
}
// Ontem às 16h