import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import axios from "axios";

function WordPage() {
  const { word } = useParams();
  const { isLoading, error, data } = useQuery([word], async () => {
    return await axios.get(`https://aws-max.noamgolani.com/${word}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  return (
    <div className="WordPage">
      {isLoading && "Loading ... "}
      {error && error.message}
      {data?.data && data.data.Items.length === 0 && (
        <b> No definition of: {word}</b>
      )}
      {data?.data?.Items &&
        data.data.Items.map(({ pos, definitions, word }) => (
          <div>
            <h2>{word}</h2>
            <br />
            <span>Part of speech: {pos}</span>
            <ul>{definitions && definitions.map((def) => <li>{def}</li>)}</ul>
          </div>
        ))}
    </div>
  );
}

export default WordPage;
