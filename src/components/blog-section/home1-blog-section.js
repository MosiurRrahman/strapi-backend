"use client"
import GlobalApi from '@/utils/GlobalApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Home1BlogSection = () => {
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
      const res = await GlobalApi.getBlog();
      console.log("Full API Response: ", res);  // Log the full response
      const blogSection = res.data?.data?.attributes?.blog_section;
      console.log("Blog Section: ", blogSection);
      setBlogData(blogSection);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const { section_title, section_subtitle, blogs, short_description } = blogData || {};

  // Transform blogs?.data into an array if it's an object
  const blogEntries = blogs?.data ? Object.values(blogs.data) : [];
  console.log(blogEntries);

  return (
    <div className="home1-blog-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-30">
          <div className="col-lg-12">
            <div className="section-title text-animation">
              <h2>{section_title} <br /><span>{section_subtitle}</span>
              </h2>
              <div className="dash-and-paragraph three">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 64">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM787 3L787.165 3.47208L787 2.5V3ZM726.137 64L729.557 59.3484L723.818 58.7125L726.137 64ZM3 3.5H787V2.5H3V3.5ZM786.835 2.52792C774.481 6.83921 760.535 13.0389 749.066 22.1679C737.59 31.3017 728.573 43.3858 726.138 59.453L727.127 59.6028C729.514 43.8512 738.351 31.9742 749.689 22.9503C761.032 13.9214 774.859 7.7666 787.165 3.47208L786.835 2.52792Z" />
                </svg>
                <div className="btn-and-paragraph">
                  <Link href="/blog-grid">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                  <p>{short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-lg-4 gy-5">
          {blogEntries.length > 0 ? (
            blogEntries.map((blog) => {


              return <div className="col-lg-4 col-md-6" key={blog.id}>
                <div className="blog-card1 magnetic-item">
                  <Link href={`/blog-details/${blog.attributes.slug}`} className="blog-img">
                    <img src={process.env.NEXT_PUBLIC_STRAPI_API_URL + blog?.attributes?.cover_image?.data?.attributes?.url} alt={blog.attributes.title} />
                  </Link>
                  <div className="blog-content">
                    <ul className="mete">
                      <li><Link href={`/blog-category/${blog.attributes.slug}`}>{blog.attributes.category}</Link></li>
                      <li>{blog.attributes.date}</li>
                    </ul>
                    <h4><Link href={`/blog-details/${blog.attributes.slug}`}>{blog.attributes.title}</Link></h4>
                  </div>
                </div>
              </div>
            }

            )
          ) : (
            <div>No blogs found.</div>
          )}
          {/* all blog  */}
          {/* <div className="col-lg-4 col-md-6">
            <div className="blog-card1 magnetic-item">
              <Link href="/blog-details" className="blog-img">
                <img src="assets/img/home1/blog-img-03.jpg" alt="blog-img-03" />
              </Link>
              <div className="blog-content">
                <ul className="mete">
                  <li><Link href="/blog-grid">Marketing</Link></li>
                  <li><Link href="/blog-grid">05 March, 2023</Link></li>
                </ul>
                <h4><Link href="/blog-details">Leads the Way in Digital Transformation.</Link>
                </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home1BlogSection
