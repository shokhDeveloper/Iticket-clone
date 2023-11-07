import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./searchbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBox, setUserServer } from "../../Settings";
import axios from "axios";
export const SearchBox = () => {
  const { searchBox, users } = useSelector(({ Reducer }) => Reducer);
  const dispatch = useDispatch();
  const handleKey = (event) => {
    if(event.target.value.length){
        const rejex = new RegExp(event.target.value, "gi")
        const filter = users.filter(item => item.name.match(rejex))
        dispatch(setUserServer(filter))
    }else{
        dispatch(setUserServer([]))
    }
  }
  const handleDeleteUser = (id) => {
    axios.delete(process.env.REACT_APP_USER_SERVER + `/${id}`).then(response => {
        if(response.status === 200){
            const idx = users.findIndex(item => item.id === id)
            let clone = JSON.stringify(users)
            let slice_clone = JSON.parse(clone)
            slice_clone.splice(idx, 1)
            dispatch(setUserServer(slice_clone))
        }
    })
  }
  return (
    <div
      className="main__searchbox overlay"
      style={{ display: searchBox ? "block" : "none" }}
    >
      <div className="main_searchbox__inner">
        <form className="main_searchbox__form">
          <label className="searchbox__input" htmlFor="searchbox">
            <BsSearch color="#635d5d" />
            <input
            onKeyUp={handleKey}
              className="border-transparent"
              type="text"
              placeholder="Поиск"
              id="searchbox"
            />
          </label>
          <button
            type="button"
            className="border-transparent"
            onClick={() => {
              dispatch(setSearchBox(false));
            }}
          >
            <AiOutlineClose />
          </button>
        </form>
        <ul className="main_searchbox__user">
          <li className=".main_searchbox_user__item main_searchbox_user__item--title">
            <p>События</p>
          </li>
          {users?.map((item) => {
            if (item.id % 2 === 0) {
              return (
                <li className="main_searchbox_user__item" key={item.id}>
                  <p>{item.name}</p>
                  <button onClick={() => handleDeleteUser(item.id)} className="main_searchbix_user__btn border-transparent"><AiOutlineClose/></button>
                </li>
              );
            }
          })}
          <li className="main_searchbox_user__item--title">
            <p>Места</p>
          </li>
          {users?.map((item) => {
            if (item.id % 3 === 0) {
              return (
                <li  className="main_searchbox_user__item" key={item.id}>
                  <p>{item.name}</p>
                  <button onClick={() => handleDeleteUser(item.id)} className="main_searchbix_user__btn border-transparent"><AiOutlineClose/></button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      .
    </div>
  );
};
