import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function renderNote(notes) {
  return (
    <Note
      key={notes.key}
      title={notes.title}
      content={notes.content}
     />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(renderNote)}
      <Footer />
    </div>
  );
}

export default App;
