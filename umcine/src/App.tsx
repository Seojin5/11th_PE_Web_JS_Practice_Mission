type MovieCardProps = {
  title: string;
  releaseDate: string;
  isBookmarked: boolean;
};

function Header() {
  return <h1>영화 목록</h1>;
}

function MovieCard({ title, releaseDate, isBookmarked }: MovieCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{isBookmarked ? "북마크됨" : "북마크 안 됨"}</p>
    </article>
  );
}

function MovieList() {
  return (
    <section>
      <MovieCard
        title="오디세이"
        releaseDate="2026.08.05"
        isBookmarked={true}
      />
      <MovieCard
        title="슈퍼맨"
        releaseDate="2026.07.11"
        isBookmarked={false}
      />
      <MovieCard
        title="F1 더 무비"
        releaseDate="2026.06.25"
        isBookmarked={true}
      />
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
}