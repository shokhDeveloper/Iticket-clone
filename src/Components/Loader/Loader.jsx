import { useSelector } from "react-redux";
import "./loader.scss";
import { TailSpin } from "react-loader-spinner";
export const Loader = () => {
  const {loader} = useSelector(({Reducer}) => Reducer)

  return (
    // SITE LOADER START
    <section className="loader" style={{display: loader ? "flex": "none"}}>
        <TailSpin className="loader__child" color="#fd0" height={80} width={80} />
    </section>
    // SITE LOADER FINISH
  );
};
