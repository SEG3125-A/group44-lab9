import { useTranslation } from 'react-i18next';

function ContactUsButton() {
  const { t } = useTranslation();

  return (

    <div class="container mt-5">
      <button class="btn btn-primary position-fixed bottom-0 end-0 m-5" type="button" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse">
        {t("contactUs_button_msg")}
      </button>

      <div class="collapse mt-3 col-3 position-fixed bottom-0 end-0 m-0" id="chatFormCollapse">
        <div class="card card-body">
          <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#chatFormCollapse" aria-expanded="false" aria-controls="chatFormCollapse"></button>

          <form>
            <h5>{t("contactUs_button_msg")}</h5>
            <div class="mb-3">
              {t("contactUs_msg")}
            </div>
            <div class="mb-3">
              <label for="nameInput" class="form-label">{t("name_label")}</label>
              <input type="text" class="form-control" id="nameInput" />
            </div>
            <div class="mb-3">
              <label for="emailInput" class="form-label">{t("email_label")}</label>
              <input type="text" class="form-control" id="emailInput" />
            </div>
            <div class="mb-3">
              <label for="questionInput" class="form-label">{t("question_label")}</label>
              <textarea class="form-control" id="questionInput" rows="3" />
            </div>
            <button type="submit" class="btn btn-primary">{t("send_button_msg")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsButton;