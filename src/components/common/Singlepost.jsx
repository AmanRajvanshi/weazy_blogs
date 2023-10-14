import moment from 'moment';
import Link from 'next/link';
import React from 'react';

function Singlepost({ item }) {
  return (
    // <div className="post post-grid rounded bordered">
    //   <div className="thumb top-rounded">
    //     <Link href={'/singleBlogDetails/' + item.path}>
    //       <div className="inner">
    //         <img
    //           src={global.img_link + item.upload_image}
    //           alt="post-title"
    //           className="cat_blog_img"
    //         />
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="details">
    //     <ul className="meta list-inline mb-0">
    //       <li className="list-inline-item">
    //         <Link href={'/authorDetails/' + item.author.path}>
    //           {item.author.upload_image != null && (
    //             <img
    //               src={global.img_link + item.author.upload_image}
    //               className="author"
    //               alt="author"
    //             />
    //           )}
    //           {item.author.author_name}
    //         </Link>
    //       </li>
    //       <li className="list-inline-item">
    //         {moment(item.created_at).format('MMM DD, YYYY')}
    //       </li>
    //     </ul>
    //     <h5 className="post-title mb-3 mt-3">
    //       <Link href={'/singleBlogDetails/' + item.path}>
    //         {item.page_title}
    //       </Link>
    //     </h5>
    //   </div>
    // </div>
    <div className="col-md-12 col-sm-6">
      <div className="post post-list clearfix">
        <div className="thumb rounded">
          <Link href={'/singleBlogDetails/' + item.path}>
            <div className="inner">
              <img src={global.img_link + item.upload_image} alt="post-title" />
            </div>
          </Link>
        </div>
        <div className="details">
          <h5 className="post-title">
            <Link href={'/singleBlogDetails/' + item.path}>
              {item.page_title}
            </Link>
          </h5>
          <ul className="meta list-inline mb-3">
            <li className="list-inline-item">
              <Link href={'/authorDetails/' + item?.author?.path}>
                {item?.author?.upload_image != null && (
                  <img
                    src={global.img_link + item?.author?.upload_image}
                    className="author"
                    alt="author"
                  />
                )}
                {item?.author?.author_name}
              </Link>
            </li>
            <li className="list-inline-item">
              {moment(item.created_at).format('MMM DD, YYYY')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Singlepost;
