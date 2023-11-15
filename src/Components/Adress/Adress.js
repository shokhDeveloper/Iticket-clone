import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Adress = () => {
  const { resultTovarPage } = useSelector(({ Reducer }) => Reducer);
  useEffect(() => {
        console.log(resultTovarPage)
  },[resultTovarPage])
  return (
    <div className="about__adress">
      {resultTovarPage?.length && (
        <div className="about_adress__infos">
          {resultTovarPage?.map((item) => {
              
            return (
              <>
                <div className="about_adress__info">
                  <h3 className="about_adress__data">
                    {item.name}
                  </h3>
                  <h4 className="about_adress__key">{item.vanue}</h4>
                </div>
                <div className="about_adress__info">
                  <h3 className="about_adress__key">Дата</h3>
                  <h4 className="about_adress__data">
                    {item.date}
                  </h4>
                </div>
                <div className="about_adress__info">
                  <h3 className="about_adress__key">Цена</h3>
                  <h4 className="about_adress__data">
                    {item.price}
                  </h4>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
