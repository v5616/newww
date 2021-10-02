import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/NewsItem.module.css";
import moment from "moment";

export default function NewsItem({ news }) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={news.image ? news.image.formats.thumbnail.url : "No Image"}
          width={150}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {moment(news.date).format("yyyy-MM-DD")} / 
           {moment(news.time).format("hh:mm ")}
        
        </span>
        <h3>{news.name}</h3>
        <p>{news.skill}</p>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${news.slug}`}>
          <a className="btn">Read More</a>
        </Link>
        {/* <Link href={news.link} >
          <a className="btn" target="_blank" >Apply</a>
        </Link> */}
      </div>
    </div>
  );
}
