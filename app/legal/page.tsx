import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="blog-post-container">
      <h1 className="post-title">
        <span className="highlighted">Legal information</span>
      </h1>

      <div className="post-content">
        <p>
          Lino Bertschinger<br />
          Bertschikerstrasse 42<br />
          8620 Wetzikon<br /><br />
          Mail: lino@linoo.ch<br />
        </p>
      </div>

      <Link href="/" className="back-button">
        &#129044; Go back
      </Link>
    </div>
  );
}
