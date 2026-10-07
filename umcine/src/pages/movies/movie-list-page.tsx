import { useEffect, useState } from "react";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";
import { movies as initialMovies } from "../../data/movies";
import { readBookmarkIds, saveBookmarkIds } from "../../utils/bookmarks";

export function MovieListPage() {
  // 처음 화면을 만들 때 저장된 북마크를 읽기
  const [bookmarkIds, setBookmarkIds] = useState<number[]>(() =>
    readBookmarkIds(),
  );

  const [currentPage, setCurrentPage] = useState(1);

  // 북마크 ID 배열이 바뀌면 브라우저에 저장
  useEffect(() => {
    saveBookmarkIds(bookmarkIds);
  }, [bookmarkIds]);

  // 저장된 ID를 기준으로 각 카드의 활성 상태 결정
  const movies = initialMovies.map((movie) => ({
    ...movie,
    isBookmarked: bookmarkIds.includes(movie.id),
  }));

  function handleToggleBookmark(movieId: number) {
    setBookmarkIds((currentIds) =>
      currentIds.includes(movieId)
        ? currentIds.filter((id) => id !== movieId)
        : [...currentIds, movieId],
    );
  }

  return (
    <>
      <main className="mx-auto w-[90%] max-w-320 flex-1 py-8">
        <h1 className="mb-5 text-2xl font-bold">영화 목록</h1>

        <MovieGrid
          movies={movies}
          onToggleBookmark={handleToggleBookmark}
        />
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      />
    </>
  );
}