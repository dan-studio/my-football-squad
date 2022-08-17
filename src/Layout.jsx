import React, { useState } from "react";
import "./style.css";

const Player = ({ list, remove }) => {
  const { id, firstname, lastname, position, club, nationality } = list;
  return (
    <div className="player">
      <div className={position}>
        <h4>{position}</h4>
      </div>
      <h4>
        Name: {firstname.toUpperCase()} {lastname.toUpperCase()}
      </h4>
      <h4>Club: {club.toUpperCase()}</h4>
      <h4>Nationality: {nationality}</h4>
      <hr></hr>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};
const Form = ({
  firstname,
  lastname,
  club,
  position,
  nationality,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <div>
      <form>
        <div className="form">
          <label>first name: </label>
          <input
            name="firstname"
            type="text"
            placeholder="first name"
            value={firstname}
            onChange={onChangeHandler}
          />
          <label> last name: </label>
          <input
            name="lastname"
            type="text"
            placeholder="last name"
            value={lastname}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form">
          <label>position: </label>
          <input
            checked={position==='FW'?true:false}
            type="radio"
            id="forward"
            name="position"
            value="FW"
            onChange={onChangeHandler}
          />
          <label for="forward">Forward</label>
          <input
            checked={position==='MF'?true:false}
            type="radio"
            id="midfilder"
            name="position"
            value="MF"
            onChange={onChangeHandler}
          />
          <label for="midfilder">Midfilder</label>
          <input
            checked={position==='DF'?true:false}
            type="radio"
            id="defender"
            name="position"
            value="DF"
            onChange={onChangeHandler}
          />
          <label for="defender">Defender</label>
          <input
            checked={position==='GK'?true:false}
            type="radio"
            id="goalkeeper"
            name="position"
            value="GK"
            onChange={onChangeHandler}
          />
          <label for="goalkeeper">Goalkeeper</label>
        </div>
        <div className="form">
          <label>Club: </label>
          <input
            name="club"
            type="club"
            placeholder="club"
            value={club}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form">
          <label for="nationality">Nationality: </label>
          <select
            name="nationality"
            id="nationality"
            value={nationality}
            onChange={onChangeHandler}
          >
            <option>Choose Nationality</option>
            <option value="🇦🇷 ARG">Argentina</option>
            <option value="🇧🇷 BRA">Brazil</option>
            <option value="🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG">England</option>
            <option value="🇫🇷 FRA">France</option>
            <option value="🇩🇪 GER">Germany</option>
            <option value="🇮🇹 ITA">Italy</option>
            <option value="🇳🇱 NLD">Netherlands</option>
            <option value="🇰🇷 KOR">Republic of Korea</option>
            <option value="🇵🇹 POR">Portugal</option>
            <option value="🇪🇸 SPA">Spain</option>
            <option value="🌍 ETC">Others</option>
          </select>
        </div>
        <div className="form">
          <button id="submit" type="submit" onClick={onSubmitHandler}>
            register
          </button>
        </div>
      </form>
    </div>
  );
};

const Lists = ({ lists, remove }) => {
  return (
    <div className="field">
      <h2>Your Squad is
      </h2>
      <h1>
        {lists.filter((list) => list.position === "DF").length}-
        {lists.filter((list) => list.position === "MF").length}-
        {lists.filter((list) => list.position === "FW").length}
      </h1>
      <h2>Formation
      </h2>
      {/* <h2 className="forward">Forward</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "FW")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="midfielder">Midfilder</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "MF")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="defender">Defender</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "DF")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="goalkeeper">GoalKeeper</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "GK")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
    </div>
  );
};

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
    //   document.querySelectorAll("input[type='radio'][checked=true][name='position']").prop('checked',false)
    // }
    // unCheck()

    //입력완료 후 input리셋
    setInput({
      firstname: "",
      lastname: "",
      position: "",
      club: "",
      nationality: "",
    });
  };

  //삭제
  const remove = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <div>
      <h1>My Football Squad</h1>
      <Form
        input={input}
        firstname={firstname}
        lastname={lastname}
        club={club}
        position={position}
        nationality={nationality}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <Lists lists={lists} remove={remove} />
    </div>
  );
};
export default Layout;

//메서드를 사용할 때 소괄호 중괄호를 혼동하지 말자.(미세한 차이(오류)가 발목잡는다.)
// onChangeHandler에서 name과 value의 의미:
//https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean
