/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import markdownit from "markdown-it";
import { useSearchParams, useNavigate } from "react-router-dom";

const NotePage = () => {
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // Get a specific query parameter
  const noteNameQuery = searchParams.get("name");
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });
  // This state will be used for the Markdown text
  let [markdownText, setMarkDownText] = useState(() => {
    if (noteNameQuery) {
      const note = JSON.parse(localStorage.getItem("notes")).filter(
        (note) => note.name == noteNameQuery
      );
      console.log(note);
      return note[0].body;
    }
    return "";
  });

  // This state will be used for the rendered HTML
  let [renderedHTML, setRenderedHTML] = useState("");
  const [nameInput, setNameInput] = useState("");
  useEffect(() => {
    let renderedHTML = md.render(markdownText);
    setRenderedHTML(renderedHTML);
  }, [markdownText]);
  useEffect(() => {
    if (noteNameQuery) {
      setNameInput(noteNameQuery);
    }
  }, []);

  function handleWriting(e) {
    setMarkDownText(e.target.value);
    // Initialize a MarkdownIt instance
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
    const notes = JSON.parse(localStorage.getItem("notes"));
    let newNameInput = nameInput;

    if (notes.find((e) => e.name == nameInput) && !noteNameQuery) {
      console.log("burası ");
      let randomInt = Math.floor(Math.random() * 100); // generates a random integer between 0 and 99
      newNameInput = `${nameInput}-${randomInt}`;

      localStorage.setItem(
        "notes",
        JSON.stringify([...notes, { name: newNameInput, body: markdownText }])
      );
    }
    if (notes.find((e) => e.name == nameInput && noteNameQuery == nameInput)) {
      const newNotes = notes.map((e) => {
        if (e.name == nameInput) {
          e.body = markdownText;
        }
        return e;
      });
      console.log(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
    }
    if (!notes.find((e) => e.name == nameInput)) {
      localStorage.setItem(
        "notes",
        JSON.stringify([...notes, { name: newNameInput, body: markdownText }])
      );
    }
    console.log(localStorage.getItem("notes"));
    navigate("/");
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      css={css`
        background-color: #eee;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        gap: 20px;
      `}
    >
      <div
        css={css`
          margin-left: 20px;
          height: 95%;
          width: 40%;
          border: 2px solid black;
          border-radius: 7px;
          background-color: #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <textarea
          onChange={(e) => handleWriting(e)}
          value={markdownText}
          css={css`
            width: 90%;
            height: 90%;
            font-size: x-large;
            border: none;
            outline: none;
            background-color: transparent;
          `}
          placeholder="Markdown note"
        ></textarea>
      </div>
      <div
        css={css`
          height: 95%;
          width: 40%;
          border: 2px solid black;
          border-radius: 7px;
          background-color: #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          contentEditable={false}
          css={css`
            width: 90%;
            height: 90%;
            border: none;
            outline: none;
            background-color: transparent;
          `}
          dangerouslySetInnerHTML={{ __html: renderedHTML }}
        ></div>
      </div>
      <div
        css={css`
          margin-right: 20px;
          height: 95%;
          width: 20%;
          border: 2px solid black;
          border-radius: 7px;
          background-color: #ddd;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        `}
      >
        <h2
          css={css`
            margin-top: 20px;
            font-size: x-large;
            font-weight: 600;
          `}
        >
          Save the Note{" "}
        </h2>
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          name="naming"
          placeholder="name"
          css={css`
            font-size: large;
            margin-top: 30px;
            width: 70%;
            border: none;
            border-radius: 7px;
            padding: 0.5em 1em;
          `}
        />
        <button
          css={css`
            border: none;
            width: 80%;
            height: 60px;
            border-radius: 8px;
            cursor: pointer;
            font-size: large;
            font-weight: 600;
            margin-top: 20px;
          `}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default NotePage;
