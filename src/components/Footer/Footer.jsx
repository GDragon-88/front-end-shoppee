import"./footer.css"

export function Footer(){
    return(<>
    <div className="footer-v">
        <footer className="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-facebook-f" />
              </a>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-twitter" />
              </a>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-google" />
              </a>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-instagram" />
              </a>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-linkedin" />
              </a>
              <a href='' className="me-4 link-secondary">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary" />SHOPII COMPANY
                  </h6>
                  <p>
                    Shopii - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan, Brazil, México, Colombia, Poland &amp; Spain. Với sự đảm bảo của Shopii, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Shopii blog</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Shopii mall</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Shopii Xu</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Shopii Book</a>
                  </p>
                </div>
                
               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary" /> Công Ty TNHH Nguyễn Mạnh Chiến</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary" />
                    Shopii@Shopii.com
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary" /> + 03 26 28 11 95</p>
                  <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
           
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Shopii.com</a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    </>)
}