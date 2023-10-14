import Link from 'next/link';

function Breadcrumb(props) {
  return (
    <section className="page-header">
      <div className="container-xl">
        <div className="text-center">
          <h1 className="mt-0 mb-2">{props.pageName}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
