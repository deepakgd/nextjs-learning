import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './styles.module.css';

export default function BlogBanner({ image }){

    const myLoader=({src})=>{
        return image;
      }

    return (
        <div className={styles.bannerImage}>
            {/* <Image loader={myLoader} src={image} alt="Image not found" layout="fill" className={styles.image} /> */}
            <img src={image} className={styles.image} />
        </div>
    );
}

BlogBanner.propTypes = {
    image: PropTypes.string.isRequired
}