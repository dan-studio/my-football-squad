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
      nationality: "๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ ENG",
    },
    {
      id: 2,
      firstname: "Ngolo",
      lastname: "Kante",
      position: "MF",
      club: "Chelsea",
      nationality: "๐ซ๐ท FRA",
    },
    {
      id: 3,
      firstname: "Virgil",
      lastname: "Van Dijk",
      position: "DF",
      club: "Liverpool",
      nationality: "๐ณ๐ฑ NLD",
    },
    {
      id: 4,
      firstname: "David",
      lastname: "De Gea",
      position: "GK",
      club: "Manchester United",
      nationality: "๐ช๐ธ SPA",
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
    //๋น์นธ ํ์ธ
    if (!firstname || !lastname || !position || !club || !nationality) return;
    const num = lists.length;
    //๋ฑ๋ก ํ์
    const list = {
      id: num + 1,
      firstname,
      lastname,
      position,
      club,
      nationality,
    };
    //Lists๋ฐฐ์ด์ ๊ฐ ์ถ๊ฐ
    setLists(lists.concat(list));

    // const unCheck = () => {

    //์๋ ฅ์๋ฃ ํ input๋ฆฌ์
    setInput({
      firstname: "",
      lastname: "",
      club: "",
      nationality: "",
    });
  };

  //์ญ์ 
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
      }}>โ๏ธ</button>
      <Lists lists={lists} remove={remove} />
    </div>
  );
};
export default Layout;

//๋ฉ์๋๋ฅผ ์ฌ์ฉํ  ๋ ์๊ดํธ ์ค๊ดํธ๋ฅผ ํผ๋ํ์ง ๋ง์.(๋ฏธ์ธํ ์ฐจ์ด(์ค๋ฅ)๊ฐ ๋ฐ๋ชฉ์ก๋๋ค.)
// onChangeHandler์์ name๊ณผ value์ ์๋ฏธ:
//https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean
