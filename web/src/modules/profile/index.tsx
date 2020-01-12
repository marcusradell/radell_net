import React from "react";
import s from "./styles.module.css";
import { Title } from "../views/title";
import { Card } from "../views/card";
import { ReactComponent as JsLogo } from "./js-logo.svg";

export type Props = {
  name: string;
  title: string;
  imageUrl: string;
  notify: (m: string) => void;
};

export type Profile = {
  View: React.FC;
};

export type ProfileFactory = (p: Props) => Profile;

export const profileFactory: ProfileFactory = p => {
  const copy = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.currentTarget.select();
    document.execCommand("copy");
    e.currentTarget.focus();
    p.notify("Copied to clipboard.");
  };

  const View = () => {
    return (
      <>
        <Title title={p.title} />

        <Card>
          <div className={s.body}>
            <div className={s.image_container}>
              <img className={s.image} src={p.imageUrl} alt="profile" />
              <div className={s.years}>-08</div>
              <JsLogo className={s.language} />
            </div>
            <ul className={s.data}>
              <li>Modular code</li>
              <li>Microservices</li>
              <li>RxJS</li>
              <li>TypeScript</li>
              <li>Lean|Agile|XP</li>
            </ul>
          </div>
          <div className={s.contact}>
            <div className={s.copy}>
              <input
                onClick={copy}
                className={`${s.email} ${s.copy}`}
                value="marcus@radell.net"
                readOnly
              />
            </div>
            <div className={s.copy}>
              <input
                onClick={copy}
                className={`${s.phone} ${s.copy}`}
                value="+46725223325"
                readOnly
              />
            </div>
            <div>
              <a className={s.link} href="https://twitter.com/marcusradell">
                <span>twitter.com</span>/marcusradell
              </a>
            </div>
            <div>
              <a className={s.link} href="https://github.com/marcusradell">
                <span>github.com</span>/marcusradell
              </a>
            </div>

            <iframe
              title="Google maps location"
              className={s.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127.6253882109395!2d17.939105254748615!3d59.384589884680366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e64729983f5%3A0xfa06aa049b048117!2sStora%20Ursvik%2C%20174%2062%20Sundbyberg!5e0!3m2!1sen!2sse!4v1576247169733!5m2!1sen!2sse"
            ></iframe>
          </div>
        </Card>
      </>
    );
  };

  return {
    View
  };
};
