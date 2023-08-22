import "./slice.css"
export function Slide() {

    return (<>
        <div className="slice">
            <div className="slice-item">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cf.shopee.vn/file/vn-50009109-1f6badc0070798ef613c97f88de92977_xxhdpi" className="d-block w-100" alt="..." />

                        </div>
                        <div className="carousel-item">
                            <img src="https://cf.shopee.vn/file/vn-50009109-1ebe2fd8519daa0177f33ef4250a7bb8_xxhdpi" className="d-block w-100" alt="..." />

                        </div>
                        <div className="carousel-item">
                            <img src="https://cf.shopee.vn/file/vn-50009109-da1d6767f11590ea56d1395ec47586a1_xxhdpi" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="slide-baner">
                <img src="https://cf.shopee.vn/file/vn-50009109-d5805972982d5c9ca7b371a91aaeb235_xhdpi" alt="" />
            </div>
            <div className="slide-show">
                <img src="https://cf.shopee.vn/file/vn-50009109-0cd58cd583ef9ac07fa0f9c231fe3fd0_xhdpi" alt="" />
            </div>
        </div>
    </>)
}