const container = document.querySelector('body');

container.innerHTML = `
  <section>
    <div>
      <h2>Stay Updated</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>
          Product discovery and building what matters
        </li>
        <li>
          Measuring to ensure updates are a
          success
        </li>
        <li>
          And much more!
        </li>
      </ul>

      <form>
        <div>
          <label for="email">Email address</label>
          <p>Valid email required</p>
        </div>
        <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>

    </div>
    <div>
      <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Illustration Sign Up" />
    </div>
  </section>
`;
