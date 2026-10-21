import { posts } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Blog() {
  return (
    <section className="section section--alt" id="blog">
      <div className="container">
        <SectionHead eyebrow="Writing" title="From the blog" />

        <div className="posts">
          {posts.map((post) => (
            <Reveal as="article" className="post" key={post.title}>
              <div className="post__img">
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </div>
              <div className="post__body">
                <p className="post__date">
                  <Icon name="fa-calendar-o" /> {post.date}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
