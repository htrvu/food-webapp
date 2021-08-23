import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined"
import MailIcon from "@material-ui/icons/Mail"
import DomainIcon from "@material-ui/icons/Domain"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <div className="footer__schedule">
                  <div className="footer__schedule-col schedule__date">
                    <p>Sunday</p>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                  </div>
                  <div className="footer__schedule-col schedule__divider">
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                    <p>
                      <MoreHorizIcon />
                    </p>
                  </div>
                  <div className="footer__schedule-col schedule__hour">
                    <p>Closed</p>
                    <p>8.00 - 20.00</p>
                    <p>10.00 - 5.00</p>
                    <p>12.00 - 9.00</p>
                    <p>7.00 - 1.00</p>
                    <p>9.00 - 12.00</p>
                    <p>14.00 - 17.00</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="footer__address">
                  <p className="footer__address__heading">Address</p>
                  <div className="footer__address-info__wrapper">
                    <div className="footer__address-info">
                      <PhoneInTalkOutlinedIcon className="footer__address-icon" />
                      <p>0947 124 559</p>
                    </div>
                    <div className="footer__address-info">
                      <MailIcon className="footer__address-icon" />
                      <p>trongvulqd@gmail.com</p>
                    </div>
                    <div className="footer__address-info">
                      <DomainIcon className="footer__address-icon" />
                      <p>Dong Ha, Quang Tri, Viet Nam</p>
                    </div>
                  </div>
                  <div className="footer__social">
                    <FacebookIcon className="footer__social facebook" />
                    <TwitterIcon className="footer__social twitter" />
                    <InstagramIcon className="footer__social instagram" />
                    <YouTubeIcon className="footer__social youtube" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4} xs={12}>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.4567859906688!2d107.08393745803887!3d16.830643197103626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140ef45955fea81%3A0x3c54af8fbaab6775!2zxJDDtG5nIFRoYW5oLCDEkMO0bmcgSMOgLCBRdeG6o25nIFRy4buLIFByb3ZpbmNlLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1628951996064!5m2!1sen!2sus"
                width="600"
                height="450"
                title="Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
