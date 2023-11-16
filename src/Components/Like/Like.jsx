import { Context, Like as StyledLike, setLike, setNotLike } from "../../Settings";
import NotLike from "../../Settings/assets/images/Not_Like.png";
import LikeImage from "../../Settings/assets/images/Like.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { useRef } from "react";
import { Popular } from "../Popular";
import { Kultur } from "../Kultur";
export const Like = ({ tovar }) => {
  const { likeTovars } = useSelector(({ Reducer }) => Reducer);
  const { likeTovar, setLikeTovar } = useContext(Context);
  const dispatch = useDispatch();
  const likeRef = useRef();
  function goodLike(){
    setLikeTovar(true)
    likeRef.current.checked = true
  }
  function thisLike(){
    setLikeTovar(false)
    likeRef.current.checked = false
  }
  const handleReturnTovar = () => {
    let filter = {};
    filter = Popular.find(
      (item) => item.id === tovar.id && tovar.parentId === item.parentId
    );
    if (!filter?.id) {
      filter = Kultur.find(
        (item) => item.id === tovar.id && item.parentId === tovar.parentId
      );
    }
    return filter
  }
  const handleIncLudeTovar = () => {
    const filter = handleReturnTovar()
    let type = likeTovars.find(item => filter.id === item.id  && filter.parentId === item.parentId)
    if(type){
        goodLike()
    }else{
        thisLike()
    }
  };
  const handleChange = (event) => {
    let filter = handleReturnTovar()
    if (event.target.checked) {
        dispatch(setLike(filter));
        goodLike()
    } else {
        dispatch(setNotLike(filter))
        thisLike()
    }
  };
  useEffect(() => {
    handleIncLudeTovar();
  }, [tovar.id]);
  return (
    <StyledLike
    className="like__tovar"
    ref={likeRef}
      type="checkbox"
      defaultChecked={likeTovar}
      checked={likeTovar}
      onChange={handleChange}
      style={{ backgroundImage: `url(${likeTovar ? LikeImage : NotLike})` }}
    />
  );
};
