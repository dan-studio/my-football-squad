import React from 'react';

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

export default Form;