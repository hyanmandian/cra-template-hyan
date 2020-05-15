import React from "react";
import { Helmet, HelmetProps } from "react-helmet";

export type Props = HelmetProps & {
  lang?: string;
  title?: string;
  description?: string;
};

export const Meta: React.FC<Props> = ({
  lang = "en",
  title,
  children,
  description,
  defaultTitle = "React App",
  titleTemplate = "%s - React App",
  ...props
}) => {
  return (
    <Helmet {...props}>
      {lang && <html lang={lang} />}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
};
