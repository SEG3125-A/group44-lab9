// This file implements the contact us button
import { useTranslation } from 'react-i18next';

function ContactUsButton() {
  const { t } = useTranslation();

  return (

    <div className="container mt-5">
      <button className="btn btn-primary position-fixed bottom-0 end-0 m-5" type="button" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse">
        {t("contactUs_button_msg")}
      </button>

      <div className="collapse mt-3 col-3 position-fixed bottom-0 end-0 m-0" id="chatFormCollapse">
        <div className="card card-body">
          <button type="button" className="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse"></button>

          <form>
            <h5>{t("contactUs_button_msg")}</h5>
            <div className="mb-3">
              {t("contactUs_msg")}
            </div>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">{t("name_label")}</label>
              <input type="text" className="form-control" id="nameInput" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">{t("email_label")}</label>
              <input type="text" className="form-control" id="emailInput" />
            </div>
            <div className="mb-3">
              <label htmlFor="questionInput" className="form-label">{t("question_label")}</label>
              <textarea className="form-control" id="questionInput" rows="3" />
            </div>
            <button type="submit" className="btn btn-primary">{t("send_button_msg")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsButton;