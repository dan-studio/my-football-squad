import React, { useState } from "react";
import Form from "./Form";
import Lists from "./Lists";
import "../style.css";

const Layout = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      firstname: "Harry",
      lastname: "Kane",
      position: "FW",
      club: "Tottenham",
      nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG",
    },
    {
      id: 2,
      firstname: "Ngolo",
      lastname: "Kante",
      position: "MF",
      club: "Chelsea",
      nationality: "🇫🇷 FRA",
    },
    {
      id: 3,
      firstname: "Virgil",
      lastname: "Van Dijk",
      position: "DF",
      club: "Liverpool",
      nationality: "🇳🇱 NLD",
    },
    {
      id: 4,
      firstname: "David",
      lastname: "De Gea",
      position: "GK",
      club: "Manchester United",
      nationality: "🇪🇸 SPA",
    },
  ]);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    position: "",
    club: "",
    nationality: ""
  });
  const { firstname, lastname, position, club, nationality } = input;



  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //빈칸 확인
    if (!firstname || !lastname || !position || !club || !nationality) return;
    const num = lists.length;
    //등록 형식
    const list = {
      id: num + 1,
      firstname,
      lastname,
      position,
      club,
      nationality,
    };
    //Lists배열에 값 추가
    setLists(lists.concat(list));

    // const unCheck = () => {

    //입력완료 후 input리셋
    setInput({
      firstname: "",
      lastname: "",
      club: "",
      nationality: "",
    });
  };

  //삭제
  const remove = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

    const [toggle, setToggle] = useState(true)
  return (
    <div>
      <h1>My Football Squad</h1>
      {toggle?<Form
        input={input}
        firstname={firstname}
        lastname={lastname}
        club={club}
        position={position}
        nationality={nationality}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />:null}
      <button onClick={()=>{
        setToggle(!toggle)
      }}>↕️</button>
      <Lists lists={lists} remove={remove} />
    </div>
  );
};
export default Layout;

//메서드를 사용할 때 소괄호 중괄호를 혼동하지 말자.(미세한 차이(오류)가 발목잡는다.)
// onChangeHandler에서 name과 value의 의미:
//https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean
