import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import axios from "axios";

const posMap = {
  noun: "n.",
  verb: "v.",
};

function WordPOSPage() {
  const { word, pos } = useParams();
  const posCorrect = posMap[pos] || "unknown pos";
  const { isLoading, error, data } = useQuery([word, posCorrect], async () => {
    return await axios.get(
      `https://aws-max.noamgolani.com/${word}/${posCorrect}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
            <b>{word}</b>
            <br />
            <span>Part of speech: {pos}</span>
            <ul>{definitions && definitions.map((def) => <li>{def}</li>)}</ul>
          </div>
        ))}
    </div>
  );
}

export default WordPOSPage;
