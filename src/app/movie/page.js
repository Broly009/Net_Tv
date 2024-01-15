import Link from "next/link"
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const  Movie = async () => {

    await new Promise( resolve => setTimeout(resolve, 2000));
 
const url = process.env.RAPID_KEY
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '40882c77bdmsha980eb26d7f4716p1f1e12jsn1f3bb4e3e6fb',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

    const res = await fetch(url,options);
    const data = await res.json()
    const mainData = data.titles;
  return (
    <>
    <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series & Movie</h1>
            <div className={styles.card_section}>
                {
                    mainData.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
</>
  )
}

export default Movie