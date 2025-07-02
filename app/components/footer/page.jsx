"use client"

export default function Footer(){
    return(

        <footer className="footer">
        <div className="container">
            <div className="footer-links">
                <a href="https://help.cfainstitute.org/s/" target="_blank">Contact Us</a>
                <a href="https://www.cfainstitute.org/en/utility/accessibility" target="_blank">Accessibility</a>
                <a href="https://www.cfainstitute.org/en/about/governance/policies/privacy-policy" target="_blank">Privacy Policy</a>
                <a href="https://www.cfainstitute.org/en/about/governance/policies/terms-conditions" target="_blank">Terms & Conditions</a>
            </div>

            <div className="copyright">
                © 2025 CFA Institute. All Rights Reserved.
            </div>

                <div className="social-links">
                    <a href="http://www.linkedin.com/company/cfainstitute" className="social-link" target="_blank">
                        <img src={'/linkedin-inverted.svg'}/>
                    </a>
                    <a href="http://www.facebook.com/CFAInstitute" className="social-link" target="_blank">
                     <img src={'/facebook-inverted.svg'}/>
                    </a>
                    <a href="https://twitter.com/cfainstitute" className="social-link" target="_blank">
                         <img src={'/twitter-inverted.svg'}/>
                    </a>
                    <a href="https://www.cfainstitute.org/utility/wechat" className="social-link" target="_blank">
                        <img src={'/wechat-inverted.svg'}/>
                    </a>
                    <a href="https://weibo.com/p/1006062671773971/home?from=page_100606&mod=TAB&is_hot=1#place" className="social-link" target="_blank">
                         <img src={'/weibo-inverted.svg'}/>
                    </a>
                </div>
        </div>
    </footer>
    )
}