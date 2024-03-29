import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

export default function MovieCard(curElem) {
const {id,title,synopsis} = curElem.jawSummary;

  return (
    <>
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={curElem.jawSummary.backgroundImage.url}
            alt={title} height={200} width={260}
            />
        </div>
        <div className={styles.card_data}>
            <h2>{title.substring(0,18)}</h2>
            <p>
                {`${synopsis.substring(0,70)}..`}
            </p>
            <Link href={`/movie/${id}`}>
                <button>
                    Read More
                </button>
            </Link>
        </div>
    </div>
    </>
    
  )
}
