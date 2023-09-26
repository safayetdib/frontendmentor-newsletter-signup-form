const container = document.querySelector('body');

container.innerHTML = `
  <section class="newsletter-container">
    <div class="newsletter-contents-wrapper">
      <h2 class="newsletter-title">Stay Updated!</h2>
      <p class="newsletter-subtitle">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul class="newsletter-updates-list">
        <li>
          <img src="./assets/images/icon-list.svg" alt="" />
          Product discovery and building what matters
        </li>
        <li>
          <img src="./assets/images/icon-list.svg" alt="" />
          Measuring to ensure updates are a
          success
        </li>
        <li>
          <img src="./assets/images/icon-list.svg" alt="" />
          And much more!
        </li>
      </ul>

      <form class="newsletter-form">
        <div class="newsletter-input-label-wrapper">
          <label for="email">Email address</label>
          <p class="newsletter-input-warning">Valid email required</p>
        </div>
        <input class="newsletter-input" type="email" id="email" name="email" placeholder="email@company.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
        <button type="submit" class="newsletter-subscription-button">Subscribe to monthly newsletter</button>
      </form>

    </div>
    <div class="newsletter-image-wrapper">
      <img src="./assets/images/illustration-sign-up-mobile.svg" alt="Illustration Sign Up" />
    </div>
  </section>
`;
