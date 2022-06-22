const formatDate = (date) => {
    return date.toISOString().slice(0, 10);
};
function getDayName(date, locale = "ru-RU") {
    return date.toLocaleDateString(locale, { weekday: "short" });
}

function getCurrentDate() {
    return {
        date: formatDate(new Date()),
        time:
            addZeroIfNeeded(String(new Date().getHours())) +
            ":" +
            addZeroIfNeeded(String(new Date().getMinutes())),
    };
}

function addZeroIfNeeded(str) {
    return str.length > 1 ? str : "0" + str;
}

export { formatDate, getDayName, getCurrentDate };
