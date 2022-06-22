const formatDate = (date) => {
    return date.toISOString().slice(0, 10);
};
function getDayName(date, locale = "ru-RU") {
    return date.toLocaleDateString(locale, { weekday: "short" });
}

export { formatDate, getDayName };
