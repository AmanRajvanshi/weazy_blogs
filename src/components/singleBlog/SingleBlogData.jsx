import Sidebar from '@/components/common/Sidebar';
import Comments from '@/components/singleBlog/Comments';
import moment from 'moment';
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import Link from 'next/link';

function SingleBlogData({ data }) {
  return (
    <div className="container-xl">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href={'/category/' + data.category.path}>
              {data.category.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {data.page_name}
          </li>
        </ol>
      </nav>

      <div className="row gy-4">
        <div className="col-lg-8">
          <div className="post post-single">
            <div className="post-header">
              <h1 className="title mt-0 mb-3">{data.page_title}</h1>
              <div className="row">
                <div className="col-md-8">
                  <ul className="meta list-inline mb-0">
                    <li className="list-inline-item">
                      <Link href={'/authorDetails/' + data.author.path}>
                        {data.author.upload_image != null && (
                          <img
                            src={global.img_link + data.author.upload_image}
                            className="author"
                            alt="author"
                          />
                        )}
                        {data.author.author_name}
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      {moment(data.created_at).format('MMMM DD, YYYY')}
                    </li>
                    {data.total_views > 0 && (
                      <li className="list-inline-item d-inline-flex align-items-center">
                        <i className="icon-eyeglass me-2" />
                        {data.total_views}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
                    <li className="list-inline-item">
                      <FacebookShareButton
                        url={
                          'https://blogs.weazy.in/singleBlogDetails/' +
                          data.path
                        }
                        quote={data.page_title}
                        hashtag={'#nextshare'}
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </li>
                    <li className="list-inline-item">
                      <WhatsappShareButton
                        url={
                          'https://blogs.weazy.in/singleBlogDetails/' +
                          data.path
                        }
                        title={data.page_title}
                        separator=":: "
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="featured-image">
              <img
                src={global.img_link + data.upload_image}
                alt={data.image_text}
              />
            </div>
            <div className="post-content clearfix">
              <p>{data.first_peragraph}</p>
            </div>
            <div
              className="post-content clearfix"
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></div>
          </div>
          <div className="about-author my-4 padding-30 rounded row">
            {data.author.upload_image != null && (
              <div className="col-md-2 col-sm-2 thumb d-flex justify-content-center align-items-center">
                <img
                  src={global.img_link + data.author.upload_image}
                  className="author"
                  alt="author"
                />
              </div>
            )}
            <div
              className={
                data.author.upload_image != null
                  ? 'col-md-10 col-sm-10 details'
                  : 'col-md-12 col-sm-12 details'
              }
            >
              <h4 className="name mb-0">
                <Link href={'/authorDetails/' + data.author.path}>
                  {data.author.author_name}
                </Link>
              </h4>
              {data.author.description != null && (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{
                    __html: data.author.description,
                  }}
                />
              )}
            </div>
          </div>
          <Comments title={data} />
        </div>
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default SingleBlogData;
