// import { useNavigate } from "react-router-dom";
export const NowPlayingCard = ({ movie }) => {
  //   const navigate = useNavigate();
  const id = movie.id;
  const title = movie.title;
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const rating = movie.vote_average;

  return (
    <div>
      <a>
        <img src={imgSrc} alt={title} />
      </a>
      <h4 className="swiper-rating">
        <i className="fas fa-star text-secondary"></i> {rating} / 10
      </h4>
    </div>
  );
};
