import { DialogTrigger } from "@radix-ui/react-dialog";
import LogoLg from "../../assets/icons/d.svg?react";
import { Spots } from "../spots/spots";
import style from "./app-footer.module.css";

export const AppFooter = () => {
  const navigateToSection = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.logoContainer}>
          <LogoLg className={style.logo} />
          <div className={style.secondary}>
            <p>Thanks for stopping by ^^</p>
          </div>
        </div>
        <div className={style.links}>
          <span>Links</span>
          <div>
            <button type="button" onClick={navigateToSection("showcase")}>
              Selected work
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("resume-trigger")?.click()}
            >
              See my resume
            </button>
            <DialogTrigger>Get in touch</DialogTrigger>
          </div>
        </div>
        <span className={`${style.secondary} ${style.copy}`}>
          <div>&copy; {new Date().getFullYear()} Ophir Bucai. All Rights Reserved.</div>
        </span>
      </div>
      <Spots side="bottom" />
    </footer>
  );
};
