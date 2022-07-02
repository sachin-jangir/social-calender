export default function (props) {
    const calendarImgWidth = 100;
    const calendarImgHeight = 100;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <strong>
                <small className="text-uppercase mb-2">Mon</small>
                <p className="display-3 fw-bold">22</p>
            </strong>
            <div 
            style={{ paddingBottom: (calendarImgHeight / 1.7) + 'px' }}
            className="bg-warning rounded position-relative px-3 pt-3">
                <p className="fw-bold">Viro Horiscope</p>
                <p>I am very noob at coding, but I will code</p>
                <div className="text-center">
                    <button className="btn btn-outline-light">Schedule Post</button>
                </div>
                <div
                    style={{ width: calendarImgWidth + 'px', height: calendarImgHeight + 'px' }}
                    className="bg-primary rounded position-absolute top-100 start-50 translate-middle">
                    andshand
                </div>
            </div>
        </div>
    );
}