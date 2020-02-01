import React, {useEffect, useState} from "react";

const Component = () => {

  const [messages, setMessages] = useState(["mounted"]);

  useEffect(() => {
    messages.push("updated");
  });

  useEffect(() => {
    return () => {
      setMessages("unmounting");
    }
  }, []);

  messages.push("rendered");

  return (
    <div>
      I use "lifecycle hooks" under the covers.
      <ul>
        {messages.map((message, i) => {
          return <li key={i}>{message}</li>;
        })}
      </ul>
      <button onClick={() => setMessages([...messages])}>Refresh</button>
    </div>
  );
};

export default function Exercise() {
  return (
    <>
      <div>
        <h2>Functional Component</h2>
        <p>
          The goal of this exercise is to convert the class component in this
          file into a functional component.
        </p>
      </div>
      <div className="exercise">
        <Component/>
      </div>
    </>
  );
}