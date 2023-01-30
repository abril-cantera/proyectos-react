import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    inFollowing: true,
  },
  {
    userName: "Abril.24",
    name: "Abril Melanie Gonzalez",
    inFollowing: false,
  },
  {
    userName: "Melanie.24",
    name: "Melanie Gonzalez",
    inFollowing: true,
  },
  {
    userName: "papita.24",
    name: "Papita Azides",
    inFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
