import { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

const VisitButton: FC = (): ReactElement => {
  // Localisation hook
  const { t } = useTranslation();

  return (
    <button className="pic__footer__open-btn">{t("postInfoCard.visit")}</button>
  );
};

export default VisitButton;
