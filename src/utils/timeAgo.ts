
const timeAgo = (time: Date | number | string, language: "En" | "Heb"): (string | Date | number | string) => {
    time = Number(time)
    switch (typeof time) {
        case "number":
            break;
        case "string":
            time = +new Date(time);
            break;
        default:
            time = +new Date();
    }
    let time_formats;
    if (language == "En") {
        time_formats = [
            [60, "seconds", 1], // 60
            [120, "one minute ago", "in a minute"], // 60*2
            [3600, "minutes", 60], // 60*60, 60
            [7200, "one hour ago", "in a hour"], // 60*60*2
            [86400, "hours", 3600], // 60*60*24, 60*60
            [172800, "yesterday", "tomorrow"], // 60*60*24*2
            [604800, "days", 86400], // 60*60*24*7, 60*60*24
            [1209600, "week ago", "next week"], // 60*60*24*7*4*2
            [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
            [4838400, "month ago", "next month"], // 60*60*24*7*4*2
            [29030400, "two month", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
            [58060800, "year ago", "next year"], // 60*60*24*7*4*12*2
            [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
            [5806080000, "the last century", "next century"], // 60*60*24*7*4*12*100*2
            [58060800000, "century", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
    }
    if (language == "Heb") {
        time_formats = [
            [60, "שניות", 1], // 60
            [120, "לפני דקה 1", "בעוד דקה"], // 60*2
            [3600, "דקות", 60], // 60*60, 60
            [7200, "לפני שעה אחת", "בעוד שעה"], // 60*60*2
            [86400, "שעות", 3600], // 60*60*24, 60*60
            [172800, "אתמול", "מחר"], // 60*60*24*2
            [604800, "ימים", 86400], // 60*60*24*7, 60*60*24
            [1209600, "לפני שבוע", "שבוע הבא"], // 60*60*24*7*4*2
            [2419200, "שבועות", 604800], // 60*60*24*7*4, 60*60*24*7
            [4838400, "לפני חודש", "חודש הבא"], // 60*60*24*7*4*2
            [29030400, "חודשים", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
            [58060800, "לפני שנה", "שנה הבאה"], // 60*60*24*7*4*12*2
            [2903040000, "שנים", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
            [5806080000, "המאה הקודמת", "במאה הבאה"], // 60*60*24*7*4*12*100*2
            [58060800000, "מאות", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
    }

    let seconds = (+new Date() - time) / 1000;
    let token: string | undefined;
    if (language == "En") {
        token = "Before"
    }
    if (language == "Heb") {
        token = "לפני"
    }
    let list_choice = 1;

    if (Math.floor(seconds) === 0) {
        if (language == "En") return "At this moment";
        if (language == "Heb") return "ברגע זה"
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        if (language == "En") token = "In";;
        if (language == "Heb") token = "ב"

        list_choice = 2;
    }
    let i = 0, format;
    while ((format = time_formats[i++]))
        if (seconds < format[0]) {
            if (typeof format[2] == "string") return format[list_choice];
            else {
                return token + " " + Math.floor(seconds / format[2]) + " " + format[1];
            }
        }
    return time;
};

export default timeAgo;


