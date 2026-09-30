import type { Movie } from "../../types/movie";
import { Link } from "@tanstack/react-router";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}


export default function MovieCard({
  movie,
  onToggleBookmark,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
        >
          <img
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
            className="movie-poster"
          />
        </Link>

        <button
          type="button"
          className="bookmark-button"
          aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
          aria-pressed={movie.isBookmarked}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            src={
              movie.isBookmarked
                ? "/movie-icons/bookmark.svg"
                : "/movie-icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>

      <h2 className="movie-title">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {movie.title}
        </Link>
      </h2>

      <p className="movie-date">{movie.releaseDate}</p>
    </article>
  );
}