import { NavLink } from "react-router-dom";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer className="main__footer">
      <div className="container">
        <div className="main_footer__inner">
          <div className="main_footer__item">
            <svg
              width={200}
              height={100}
              fill="none"
              viewBox="0 0 160 43"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M28.4104 40.7111V42.6294H6.7431C3.01861 42.6294 0.000244141 39.6111 0.000244141 35.8874V7.15433C0.000244141 3.42616 3.01861 0.408203 6.7431 0.408203H28.4104V2.3229C26.7358 2.34902 25.377 3.71555 25.377 5.39677C25.377 7.07514 26.7358 8.44167 28.4104 8.46412V10.3862C26.7358 10.4127 25.377 11.7751 25.377 13.4572C25.377 15.1392 26.7358 16.5049 28.4104 16.5278V18.4462C26.7358 18.4727 25.377 19.8351 25.377 21.5204C25.377 23.1988 26.7358 24.5649 28.4104 24.5874V26.5098C26.7358 26.5323 25.377 27.8984 25.377 29.5804C25.377 31.2584 26.7358 32.6286 28.4104 32.6515V34.5694C26.7358 34.5923 25.377 35.9584 25.377 37.6409C25.377 39.3221 26.7358 40.6886 28.4104 40.7111"
                fill="#FFDC00"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M124.469 30.4205C124.469 31.8278 123.327 32.9691 121.919 32.9691C120.512 32.9691 119.374 31.8278 119.374 30.4205C119.374 29.0123 120.512 27.8711 121.919 27.8711C123.327 27.8711 124.469 29.0123 124.469 30.4205Z"
                fill="#FFDC00"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M11.6436 32.3849H15.4317V17.1028L11.6436 18.3792V32.3849Z"
                fill="#828283"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M13.5391 10.6494C12.1313 10.6494 10.9897 11.7947 10.9897 13.1988C10.9897 14.6061 12.1313 15.7474 13.5391 15.7474C14.9468 15.7474 16.0885 14.6061 16.0885 13.1988C16.0885 11.7947 14.9468 10.6494 13.5391 10.6494Z"
                fill="#828283"
              ></path>
              <g xmlns="http://www.w3.org/2000/svg" class="text-color">
                <path
                  d="M38.7801 29.0307C38.2507 28.7414 37.9874 28.0471 37.9874 26.9585V20.1295H42.3205V17.1005H37.9874V13.1699L34.196 14.4087V17.1005H31.4099V20.1295H34.196V26.7222C34.196 30.1005 35.9303 31.5536 36.9625 32.116C37.845 32.6009 38.7947 32.796 39.7299 32.796C41.3858 32.796 43.0037 32.1805 44.1454 31.4524L42.1813 28.6209C41.0552 29.3422 39.5458 29.4507 38.7801 29.0307Z"
                  fill="#000"
                ></path>
                <path
                  d="M48.6942 10.6494C47.2864 10.6494 46.1444 11.7947 46.1444 13.1988C46.1444 14.6061 47.2864 15.7474 48.6942 15.7474C50.102 15.7474 51.2436 14.6061 51.2436 13.1988C51.2436 11.7947 50.102 10.6494 48.6942 10.6494Z"
                  fill="#000"
                ></path>
                <path
                  d="M46.7986 32.3849H50.5867V17.1028L46.7986 18.3792V32.3849Z"
                  fill="#000"
                ></path>
                <path
                  d="M61.7797 20.1442C63.5483 20.1442 65.065 21.1956 65.7744 22.6969L69.0711 20.7977C67.7005 18.1626 64.9487 16.3564 61.7797 16.3564C57.2442 16.3564 53.5573 20.043 53.5573 24.5777C53.5573 29.1087 57.2442 32.7952 61.7797 32.7952C64.9487 32.7952 67.7005 30.9895 69.0711 28.3581L65.7744 26.4548C65.065 27.9569 63.5483 29.0079 61.7797 29.0079C59.3356 29.0079 57.3495 27.0181 57.3495 24.5777C57.3495 22.134 59.3356 20.1442 61.7797 20.1442Z"
                  fill="#000"
                ></path>
                <path
                  d="M85.5175 16.9143H80.2273L75.2224 22.0498V9.95801L71.4342 11.2347V32.3845H75.2224V27.4821L76.2701 26.4119L81.2787 32.3845H86.2273L78.924 23.6825L85.5175 16.9143Z"
                  fill="#000"
                ></path>
                <path
                  d="M90.4653 22.6707C91.1788 21.1838 92.6878 20.1446 94.449 20.1446C96.2062 20.1446 97.7155 21.1838 98.4323 22.6707H90.4653ZM94.449 16.3564C89.9172 16.3564 86.2266 20.0429 86.2266 24.5776C86.2266 29.1082 89.9172 32.7952 94.449 32.7952C97.4788 32.7952 100.126 31.1433 101.553 28.6919L98.2596 26.796C97.4935 28.1103 96.0821 29.007 94.449 29.007C92.3955 29.007 90.6792 27.5956 90.1764 25.6964H102.585C102.634 25.3282 102.668 24.9568 102.668 24.5776C102.668 23.9209 102.585 23.2821 102.435 22.6707C101.575 19.0556 98.3241 16.3564 94.449 16.3564Z"
                  fill="#000"
                ></path>
                <path
                  d="M114.333 28.6206C113.206 29.3418 111.697 29.4541 110.927 29.03C110.401 28.741 110.135 28.0504 110.135 26.9614V20.1292H114.472V17.1031H110.135V13.1729L106.347 14.4116V17.1031H103.561V20.1292H106.347V26.721C106.347 30.1035 108.078 31.5524 109.11 32.1194C109.996 32.6039 110.946 32.7953 111.881 32.7953C113.537 32.7953 115.155 32.1794 116.293 31.4512L114.333 28.6206Z"
                  fill="#000"
                ></path>
              </g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M142.2,31.9h-3.9v-1.3c-1.2,1.2-2.8,1.8-4.7,1.8c-1.8,0-3.2-0.6-4.3-1.7c-1.1-1.2-1.6-2.7-1.6-4.5v-9.1h3.9v8.2 c0,1.1,0.3,1.9,0.8,2.5c0.5,0.6,1.3,1,2.2,1c2.5,0,3.7-1.7,3.7-5.1v-6.6h3.9V31.9z"
                fill="#828283"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M159.829 32.3876H146.215V29.7451L154.451 20.3741H146.43V17.0553H159.46V19.7594L151.224 29.0692H159.829V32.3876Z"
                fill="#828283"
              ></path>
            </svg>
            <div className="main_footer_item__info">
              <h3>Сервис поддержки</h3>
              <a href="tel:+998712071071">+998 712 071-071</a>
              <a href="tel:+998712072072">+998 712 072-072</a>
            </div>
          </div>
          <div className="main_footer__item">
            <ul className="main_footer__list">
              <li>
                <h3>Информация</h3>
              </li>
              <li>
                <NavLink>ЧаВо</NavLink>
              </li>
              <li>
                <NavLink>Поддержка</NavLink>
              </li>
              <li>
                <NavLink>Условия и положения</NavLink>
              </li>
              <li>
                <NavLink>Электронный билет</NavLink>
              </li>
              <li>
                <NavLink>Возврат и обмен</NavLink>
              </li>
            </ul>
          </div>
          <div className="main_footer__item">
            <ul className="main_footer__list">
              <li>
                <h3>Информация</h3>
              </li>
              <li>
                <NavLink>ЧаВо</NavLink>
              </li>
              <li>
                <NavLink>Поддержка</NavLink>
              </li>
              <li>
                <NavLink>Условия и положения</NavLink>
              </li>
              
            </ul>
          </div>
          <div className="main_footer__item">
            <ul className="main_footer__list">
              <li>
                <h3>Информация</h3>
              </li>
              <li>
                <NavLink>ЧаВо</NavLink>
              </li>
              <li>
                <NavLink>Поддержка</NavLink>
              </li>
            </ul>
            <div className="main_footer__links">
                <img src="https://iticket.uz/images/cards.svg" alt="Iticket-image" />
                <img src="https://iticket.uz/images/cards2.svg" alt="Iticket-image" />
            </div>
          </div>
        </div>
        <div className="main_footer__settings">
            <p>ITICKET® - зарегистрированная торговая марка СП ООО «ITICKET INGURUZ».</p>
            <div className="main_footer__contacts">
                <a href="">
                <svg fill="#000000"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                </a>
                <a href="">
                <svg  viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5848 8.00404L19.9507 8C16.9914 8 15.0789 9.87614 15.0789 12.78V14.9839H12.4304C12.2016 14.9839 12.0162 15.1613 12.0162 15.3801V18.5733C12.0162 18.7921 12.2018 18.9693 12.4304 18.9693H15.0789V27.0268C15.0789 27.2456 15.2642 27.4228 15.4931 27.4228H18.9486C19.1775 27.4228 19.3628 27.2454 19.3628 27.0268V18.9693H22.4595C22.6884 18.9693 22.8737 18.7921 22.8737 18.5733L22.875 15.3801C22.875 15.275 22.8312 15.1744 22.7537 15.1C22.6761 15.0257 22.5704 14.9839 22.4606 14.9839H19.3628V13.1156C19.3628 12.2176 19.5866 11.7618 20.8099 11.7618L22.5844 11.7612C22.813 11.7612 22.9984 11.5838 22.9984 11.3651V8.40008C22.9984 8.18165 22.8132 8.00445 22.5848 8.00404Z" fill="black"></path></svg>
                </a>
                <a href="">
                <svg  viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3155 7H12.6845C9.55002 7 7 9.55002 7 12.6845V22.3157C7 25.45 9.55002 28 12.6845 28H22.3157C25.45 28 28 25.45 28 22.3157V12.6845C28 9.55002 25.45 7 22.3155 7ZM17.5 23.242C14.3338 23.242 11.758 20.6662 11.758 17.5C11.758 14.3338 14.3338 11.758 17.5 11.758C20.6662 11.758 23.242 14.3338 23.242 17.5C23.242 20.6662 20.6662 23.242 17.5 23.242ZM21.6826 11.4154C21.6826 12.3511 22.4437 13.1121 23.3793 13.1121C24.315 13.1121 25.0762 12.3511 25.0762 11.4154C25.0762 10.4798 24.315 9.71857 23.3793 9.71857C22.4437 9.71857 21.6826 10.4798 21.6826 11.4154Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5001 12.9893C15.0128 12.9893 12.9891 15.0128 12.9891 17.5002C12.9891 19.9874 15.0128 22.0111 17.5001 22.0111C19.9874 22.0111 22.011 19.9874 22.011 17.5002C22.011 15.0128 19.9874 12.9893 17.5001 12.9893Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3793 10.9502C23.1226 10.9502 22.9137 11.1591 22.9137 11.4158C22.9137 11.6725 23.1226 11.8814 23.3793 11.8814C23.6361 11.8814 23.845 11.6726 23.845 11.4158C23.845 11.159 23.6361 10.9502 23.3793 10.9502Z" fill="black"></path></svg>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
