import { useState } from "react";
import MovieGrid from "../../components/movies/movie-grid";
import { movies as initialMovies } from "../../data/movies";
import type { Movie } from "../../types/movie";


export function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              isBookmarked: !movie.isBookmarked,
            }
          : movie,
      ),
    );
  }

  return (
    <>
      <main className="mx-auto w-[90%] max-w-[1280px] flex-1 py-8">
        <h1 className="mb-5 text-2xl font-bold">영화 목록</h1>

        <MovieGrid
          movies={movies}
          onToggleBookmark={handleToggleBookmark}
        />
      </main>

      <div className="mb-5 flex items-center justify-center gap-1">
        <button className="flex h-8 w-8 items-center justify-center [&_img]:h-4 [&_img]:w-4">
          <img src="/movie-icons/chevron-left.svg" alt="이전 페이지" />
        </button>

        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`h-8 min-w-8 rounded px-2 ${currentPage === page ? "bg-[#2864fa] text-white" : "text-[#555]"}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button className="flex h-8 w-8 items-center justify-center [&_img]:h-4 [&_img]:w-4">
          <img src="/movie-icons/chevron-right.svg" alt="다음 페이지" />
        </button>
      </div>

</>
  );
}
