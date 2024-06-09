import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BlogCard = ({ post }) => {
  const image = getImage(post.postImage);

  return (
    <Post key={`post.slug`}>
      <PostLink to={post.slug}>
        <section>
          <Image image={image} alt="developers-setup" />
        </section>
        <TextSection>
          <Title>{post.title}</Title>
          <ByDate>
            {post.date} {post.author}
          </ByDate>
          <Intro>{post.intro}</Intro>
          {' '}
          <ReadMore>Read more...</ReadMore>
        </TextSection>
      </PostLink>
    </Post>
  );
};

export default BlogCard;

const Post = styled.section`
  width: 400px;
  height: 420px;
  margin: 20px;
  cursor: pointer;
  border-radius: 4px;

  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray);
  height: 100%;
`;

const TextSection = styled.section`
  padding: 10px;
  height: inherit;
  flex-direction: column;
  flex-grow: 1;
`;

const Image = styled(GatsbyImage)`
  height: 260px;
  border-radius: 4px 4px 0 0;
`;

const Title = styled.header`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  color: var(--black-color);
`;

const ByDate = styled.p`
  color: var(--dark-gray-color);
  font-size: 12px;
  font-weight: 200;
  margin-bottom: 6px;
`;

const Intro = styled.span`
  text-align: justify;
  font-size: 15px;
  color: var(--dark-gray);
  margin: 0;
`;

const ReadMore = styled.span`
  color: var(--red-color);
  font-size: 15px;
`;
