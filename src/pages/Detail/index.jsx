import React, { useEffect, useState} from "react";
import { Nav } from "../../components/Nav";
import { Header } from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { getMovieDetail } from "../../services/getDetail";

export const Detail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id: movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    let newId = movieId.split(":")[1];
 
    fetchMovie(newId);
  }, [movieId]);
//   function uppercase(title) {
//     return title.split("")[0].toUpperCase() + title.slice(1);
//   }
  function uppercase(title) {
    if (title === undefined) {
    return "No information";
    }
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
  


  async function fetchMovie(id) {
    try {
      setLoading(true);
      let data = await getMovieDetail(id);
      setDetail(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Nav />
      <main className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-5 p-5">
        {!loading ? (
          <>
            <div className="w-50 d-flex align-items-center justify-content-center justify-content-lg-start">
              <img style={{height:"450px",maxWidth:"350px"}}
                src={
                
                  detail.Poster === "N/A"
                    ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.59acm7M8zfvbkDUNHr6KdQAAAA%26pid%3DApi&f=1&ipt=1b157c711dfa4dbe4661d356503dcdf535da84ef3b6a9ec61a49c6566f7f49f8&ipo=images"
                    : detail.Poster
                }
                alt=""
              />
            </div>
            <div className="text-secondary fs-3 w-50 ">
              <p>Title: {detail.Title}</p>
              <p>
                Type: {detail.Type==="N/A" ?  "No information"  :uppercase(detail.Type)}
                
              </p>
              <p>Year: {detail.Year==="N/A" ? "No information": detail.Year  }</p>
              <p>IMDB: {detail.imdbRating==="N/A"?"No information":detail.imdbRating}</p>
              <p>Runtime: {detail.Runtime=="N/A" ?"No information" : detail.Runtime }</p>
              <p>Country: {detail.Country==="N/A" ? "No information" : detail.Country }</p>
              <p>Director: {detail.Director==="N/A" ? "No information" : detail.Director }</p>
              <p>Actors: {detail.Actors==="N/A" ? "No information" : detail.Actors}</p>
              <p>{detail.Plot==="N/A" ? "No information"  :detail.Plot }</p>
            </div>
          </>
        ) : (
          <div className="text-center w-100 p-5 text-primary fs-1">Loading...</div>
        )}
      </main>
    </>
  );
};
