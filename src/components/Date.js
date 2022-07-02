// background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);
function bgColor(cssString) {
    if(!cssString) {
        return 'transparent';
    }
    const bgRegex = /background-color: rgba\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/;
    const result = cssString.match(bgRegex);
    if(!result) {
        return 'transparent';
    }
    return result[0].substr(18);
}

function color(cssString) {
    if(!cssString) {
        return 'black';
    }
    const bgRegex = /color: rgba\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/;
    const result = cssString.match(bgRegex);
    if(!result) {
        return 'black';
    }
    return result[0].substr(7);
}

// function dateColor(cssString) {
//     const color = bgColor(cssString);
//     return color !== 'transparent' ? color : 'lightgrey';
// }

export default function ({ data }) {
    const calendarImgWidth = 160;
    const calendarImgHeight = 100;
    const bgColorStyle = bgColor(data.card_color);
    const dateColor = bgColorStyle !== 'transparent' ? bgColorStyle : 'lightgrey';
    const btnClass = 'btn btn-outline-' + (bgColorStyle !== 'transparent' ? 'light' : 'primary');
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: (calendarImgHeight / 1.2) + 'px' }}>
            <strong>
                <small className="text-uppercase mb-2" style={{ color: dateColor }}> {data.day_of_the_week} </small>
                <p className="display-3 fw-bold" style={{ color: dateColor }}> {data.day_of_the_month}</p>
            </strong>
            <div
                style={{ paddingBottom: (calendarImgHeight / 1.7) + 'px', backgroundColor: bgColorStyle, color: color(data.card_color) }}
                className="rounded position-relative px-3 pt-3"
            >
                <p className="fw-bold">{data.card_header}</p>
                <p>{data.card_body}</p>
                <div className="text-center">
                    <button className={btnClass}>Schedule Post</button>
                </div>
                <div
                    style={{ width: calendarImgWidth + 'px', height: calendarImgHeight + 'px', background: `url(${data.card_image})` }}
                    className="rounded position-absolute top-100 start-50 translate-middle" />
            </div>
        </div>
    );

}