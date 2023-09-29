const MovieListItem = ({ title, release_date, poster_path, overview }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-1 cursor-pointer">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`https://image.tmdb.org/t/p/original1${poster_path}`}
        alt={`${title}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieListItem;
