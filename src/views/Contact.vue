<template>
  <!-- ======= Contact Section ======= -->
  <div class="map-section">
    <iframe
      style="border: 0; width: 100%; height: 350px"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.030140536203!2d29.212439814619668!3d-25.868485383588354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaed48d4cd861f%3A0x5ebe642154a1f8fc!2s15%20Voortrekker%20St%2C%20Witbank%2C%20Emalahleni%2C%201035!5e0!3m2!1sen!2sza!4v1631001845263!5m2!1sen!2sza"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>

  <section id="contact" class="contact">
    <div class="container">
      <div class="row justify-content-center" data-aos="fade-up">
        <div class="col-lg-10">
          <div class="info-wrap">
            <div class="row">
              <div class="col-lg-4 info">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>15 Voortrkker Road Ext 3<br />Witbank, Mpumalanga</p>
              </div>

              <div class="col-lg-4 info mt-4 mt-lg-0">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@zithembe-projects.co.za<br /></p>
              </div>

              <div class="col-lg-4 info mt-4 mt-lg-0">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+27 73 659 3840<br />+27 13 692 3144</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 justify-content-center" data-aos="fade-up">
        <div class="col-lg-10">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form"
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<script>
export default {};
</script>

<style>
</style>