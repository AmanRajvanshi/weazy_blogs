import Loader from '@/components/loader/Loader';
import SingleBlogData from '@/components/singleBlog/SingleBlogData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function singleBlogDetails({ data }) {
  const router = useRouter();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData(router.query.singleBlogLink);
  }, [router.query.singleBlogLink]);

  const fetchData = (e) => {
    fetch(global.api + 'singleblogdata?blog_path=' + e)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          update_views(data.data[0].id);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const update_views = (id) => {
    fetch(global.api + 'update_blog_view', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blog_id: id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/fav.png" type="image/x-icon" />
        <title>{data.page_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keyword} />
        <meta name="author" content="Weazy Infotech Pvt. Ltd." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={data.page_title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={'https://blogs.weazy.in/singleBlogDetails' + data.path}
        />
        <meta
          property="og:image"
          content={global.img_link + data.upload_image}
        />
        <meta property="og:site_name" content="Weazy Blogs" />
        <meta property="og:description" content={data.meta_description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://blogs.weazy.in" />
        <meta name="twitter:creator" content="Weazy Blogs" />
        <meta name="twitter:title" content={data.page_title} />
        <meta name="twitter:description" content={data.meta_description} />
        <meta
          name="twitter:image"
          content={global.img_link + data.upload_image}
        />
      </Head>
      <section className="main-content mt-4">
        {loader ? <Loader /> : <SingleBlogData data={data} />}
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { singleBlogLink } = context.query;
  const res = await fetch(
    global.api + 'singleblogdata?blog_path=' + singleBlogLink
  );
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data?.data[0],
    },
  };
}

export default singleBlogDetails;
