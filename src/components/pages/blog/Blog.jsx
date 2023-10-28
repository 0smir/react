import styles from './Blog.module.css'

function Blog() {
    return(
        <div className="page blog-page">
            <h1 className="title">Blog</h1>
            <article className={styles.item}>
                <img className={styles.image} src="/images/nature.jpg" alt="nature" />
                <h2>About Nature</h2>
                <p>Nature is so beautiful!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore ex ducimus! Omnis officiis veritatis totam sint. Illo, eos quaerat perspiciatis, provident aliquam aspernatur mollitia eligendi soluta corrupti culpa modi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore ex ducimus! Omnis officiis veritatis totam sint. Illo, eos quaerat perspiciatis, provident aliquam aspernatur mollitia eligendi soluta corrupti culpa modi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore ex ducimus! Omnis officiis veritatis totam sint. Illo, eos quaerat perspiciatis, provident aliquam aspernatur mollitia eligendi soluta corrupti culpa modi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore ex ducimus! Omnis officiis veritatis totam sint. Illo, eos quaerat perspiciatis, provident aliquam aspernatur mollitia eligendi soluta corrupti culpa modi.</p>
            </article>
        </div>
    );
}

export default Blog