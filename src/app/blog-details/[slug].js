// pages/blog-details/[slug].js
import React from 'react';
import GlobalApi from '@/utils/GlobalApi';
import { useRouter } from 'next/router';

const BlogDetails = ({ blog }) => {
  const router = useRouter();

  // Show a loading state while the page is being built
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="blog-details">
      <div className="container">
        <h1>{blog.attributes.title}</h1>
        <img src={blog.attributes.image_url} alt={blog.attributes.title} />
        <div dangerouslySetInnerHTML={{ __html: blog.attributes.content }} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    console.log("Fetching blog with slug:", slug);
    const res = await GlobalApi.getBlogBySlug(slug);
    console.log("API Response:", res.data);
    
    const blog = res.data?.data?.[0]; // Adjust based on actual API response
    
    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return {
      notFound: true,
    };
  }
}

export default BlogDetails;
