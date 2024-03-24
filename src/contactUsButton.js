import Accordion from 'react-bootstrap/Accordion';
import "./styles.css";

function ContactUsButton() {
  return (

    <div class="container mt-5">
      <button class="btn btn-primary position-fixed bottom-0 end-0 m-5" type="button" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse">
        Contact Us
      </button>

      <div class="collapse mt-3 col-3 position-fixed bottom-0 end-0 m-0" id="chatFormCollapse">
        <div class="card card-body">
          <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse"></button>

          <form>
            <h5>Contact Us</h5>
            <div class="mb-3">
              Call 613-888-8888 OR send us your questions below and we will help you as soon as we can :)
            </div>
            <div class="mb-3">
              <label for="nameInput" class="form-label">Name</label>
              <input type="text" class="form-control" id="nameInput" />
            </div>
            <div class="mb-3">
              <label for="emailInput" class="form-label">Email</label>
              <input type="text" class="form-control" id="emailInput" />
            </div>
            <div class="mb-3">
              <label for="questionInput" class="form-label">Question</label>
              <textarea class="form-control" id="questionInput" rows="3" />
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsButton;