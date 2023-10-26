import React from 'react';
import './tech.css';

export default function Tech() {
  return (
    <div id="main" className="container">
      <h1 className="mt-5">Learn 4.0 Technologies</h1>

      <p id="head">
        Technology is the application of knowledge for achieving practical
        goals in a reproducible way. The word
      </p>

      <div className="row">
        <div className="col-md-3 tech1">
          <div className="card mb-4" style={{ boxShadow: '0 4px 6px -1px #007bff' }}>
            <h2 className="card-title">Data Scientist</h2>
            <p className="card-text">A data scientist uses data to understand and explain</p>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
              className="card-img-top "
              alt="Data Scientist" width={200} height={200 }
            />
          </div>
        </div>

        <div className="col-md-3 tech2">
          <div className="card mb-4" style={{ boxShadow: '0 4px 6px -1px #28a745' }}>
            <h2 className="card-title">IOT Developer</h2>
            <p className="card-text">
              Professionals who can develop, manage, and monitor
            </p>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/girl-monitoring-house-through-futuristic-technology-8863538-7271538.png?f=webp"
              className="card-img-two"
              alt="IOT Developer" width={200} height={180}
            />
          </div>
        </div>

        <div className="col-md-3 tech3">
          <div className="card mb-4" style={{ boxShadow: '0 4px 6px -1px #dc3545' }}>
            <h2 className="card-title">VR Developer</h2>
            <p className="card-text">
              VR programmers write the code for cutting-edge game development.
            </p>
            <img
              src="https://www.svgrepo.com/show/246659/augmented-reality-virtual-reality.svg"
              className="card-img-three"
              alt="VR Developer" width={200} height={120}
            />
          </div>
        </div>

        <div className="col-md-3 tech4">
          <div className="card mb-4" style={{ boxShadow: '0 4px 6px -1px #ffc107' }}>
            <h2 className="card-title">ML Engineer</h2>
            <p className="card-text">
              A machine learning engineer (ML engineer) is a person in IT
            </p>
            <img
              src="https://img.freepik.com/premium-vector/machine-learning-using-svg-icons_960911-2219.jpg"
              className="card-img-top"
              alt="ML Engineer" width={180} height={110}
            />
          </div>
        </div>
      </div>
    </div>
  );
}