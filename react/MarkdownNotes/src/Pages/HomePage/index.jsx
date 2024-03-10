/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import markdownit from "markdown-it";

const HomePage = () => {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });
  const [notes, setNotes] = useState(() => {
    const storageNotes = localStorage.getItem("notes");
    if (!storageNotes) {
      return [];
    }
    return JSON.parse(storageNotes);
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  function handleDelete(name) {
    setNotes((prevNotes) => {
      return prevNotes.filter((e) => e.name != name);
    });
  }
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
      `}
    >
      <div
        css={css`
          border: black solid 2px;
          border-radius: 10px;
          width: 97%;
          height: 95%;
          background-color: #dddddd;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 92%;
            height: 85%;
          `}
        >
          <div
            css={css`
              display: flex;
              gap: 30px;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <button
              css={css`
                font-size: large;
                padding: 1em 3em;
                border-radius: 10px;
                cursor: pointer;
                visibility: hidden;
              `}
            >
              New
            </button>
            <h2
              css={css`
                font-size: 50px;
                margin: 0;
              `}
            >
              {" "}
              Notes{" "}
            </h2>
            <Link
              to={"note"}
              css={css`
                font-size: large;
                padding: 1em 3em;
                border-radius: 10px;
                cursor: pointer;
                text-decoration: none;
                background-color: #c3c3c3;
                &:hover {
                  background-color: #b1b1b1;
                  border: black solid 1px;
                }
              `}
            >
              New
            </Link>
          </div>
          <hr />
          <div
            css={css`
              display: flex;
              width: 100%;
              gap: 20px;
              margin-top: 20px;
              flex-wrap: wrap;
            `}
          >
            {notes.map((note, i) => (
              <div
                key={i}
                css={css`
                  height: 250px;
                  width: 32.2%;
                  background-color: #c8c8c8;
                  border-radius: 10px;
                  border: black solid 1px;
                  overflow: hidden;
                  margin: 0;
                  text-decoration: none;
                  color: black;
                  position: relative;
                  cursor: pointer;
                  @media screen and (max-width: 1500px) {
                    width: 47%;
                  }
                  @media screen and (max-width: 600px) {
                    width: 100%;
                  }
                `}
              >
                <svg
                  onClick={() => handleDelete(note.name)}
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                  strokeWidth="1.5"
                  css={css`
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
                    &:hover {
                      transform: scale(1.1);
                    }
                  `}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.70164 8.64124C9.40875 8.34835 8.93388 8.34835 8.64098 8.64124C8.34809 8.93414 8.34809 9.40901 8.64098 9.7019L10.9391 12L8.64098 14.2981C8.34809 14.591 8.34809 15.0659 8.64098 15.3588C8.93388 15.6517 9.40875 15.6517 9.70164 15.3588L11.9997 13.0607L14.2978 15.3588C14.5907 15.6517 15.0656 15.6517 15.3585 15.3588C15.6514 15.0659 15.6514 14.591 15.3585 14.2981L13.0604 12L15.3585 9.7019C15.6514 9.40901 15.6514 8.93414 15.3585 8.64124C15.0656 8.34835 14.5907 8.34835 14.2978 8.64124L11.9997 10.9393L9.70164 8.64124Z"
                    fill="#000000"
                  ></path>
                </svg>
                <Link
                  to={`/note?name=${note.name}`}
                  css={css`
                    text-decoration: none;
                    color: black;
                  `}
                >
                  <div
                    css={css`
                      margin: 0 1em;
                      height: 100%;
                      overflow: hidden;
                      text-decoration: none;
                      color: black;
                    `}
                    dangerouslySetInnerHTML={{ __html: md.render(note.body) }}
                  ></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
