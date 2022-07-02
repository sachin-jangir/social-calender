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
    return result[0];
}

export default function ({ data }) {
    const calendarImgWidth = 160;
    const calendarImgHeight = 100;
    console.log(CSSstring(data.card_color));
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: (calendarImgHeight / 1.2) + 'px' }}>
            <strong>
                <small className="text-uppercase mb-2"> {data.day_of_the_week} </small>
                <p className="display-3 fw-bold"> {data.day_of_the_month}</p>
            </strong>
            <div
                style={{ paddingBottom: (calendarImgHeight / 1.7) + 'px', backgroundColor: bgColor(data.card_color) }}
                className="bg-warning rounded position-relative px-3 pt-3"
            >
                <p className="fw-bold">{data.card_header}</p>
                <p>{data.card_body}</p>
                <div className="text-center">
                    <button className="btn btn-outline-light">Schedule Post</button>
                </div>
                <div
                    style={{ width: calendarImgWidth + 'px', height: calendarImgHeight + 'px', background: `url(${data.card_image})` }}
                    className="rounded position-absolute top-100 start-50 translate-middle" />
            </div>
        </div>
    );

}