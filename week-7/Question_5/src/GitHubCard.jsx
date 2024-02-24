import { useRecoilState, useRecoilValue } from "recoil";
import { detailsAtom, dataAtom } from "./atom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function GitHubCard() {
  const [repos, setRepos] = useState([]);
  const [details] = useRecoilState(detailsAtom);

  useEffect(() => {
    axios
      .get(details.repos_url)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, [details.repos_url]);

  if (repos && Array.isArray(repos)) {
    const repoDetails = repos.map((repo) => ({
      name: repo.name,
      html_url: repo.html_url,
    }));
  } else {
    console.error("Invalid or missing repos data");
  }
  let repoElements;
  if (repos && Array.isArray(repos)) {
    repoElements = repos.map((repo) => (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {`${repo.name}`}
        </a>
      </li>
    ));
  } else {
    console.error("Invalid or missing repos data");
  }

  const data = useRecoilValue(dataAtom);
  return (
    <div>
      {data && <p>Github ID: {details.id}</p>}
      {data && <p>Github Name: {details.name}</p>}
      {data && <p>Github Acc Created: {details.created_at.slice(0, 10)}</p>}
      {data && <p>Github Followers: {details.followers}</p>}
      {data && <p>Github Following: {details.following}</p>}
      {data && <p>Public Repos : </p>}
      {data && <ul>{repoElements}</ul>}
      {data ? (
        details.twitter_username ? (
          <a
            href={`https://twitter.com/${details.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Twitter
          </a>
        ) : (
          "No twitter account found"
        )
      ) : (
        ""
      )}

      <br />
      <br />
      <a href={details.repos_url}></a>
      {details.url && (
        <a
          href={`https://github.com/${details.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Github
        </a>
      )}
    </div>
  );
}
