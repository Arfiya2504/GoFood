import React from 'react';

export default function Card(props) {
  return (
    <main className="container mt-5 pt-5">
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img src={props.ImgSrc} className="card-img-top" alt="Card image" style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text.</p>
            <div className='container w-100'>
              <select className='m-2 h-100 w-100 bg-success'>
                {Array.from({ length: 6 }, (v, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select className='m-2 h-100 w-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
