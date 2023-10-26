import 'bootstrap/dist/css/bootstrap.min.css'; 
import './congrats.css';

function Map() {
  return (
    <div className="congratsbackground d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png')` }}>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="siyana3">Congratulations</h2>
            <div className="card m-auto">
              <img
                className="profile img-fluid"
                src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
                alt="Profile"
                height={200} width={200}
              />
              <div className="card-body">
                <p className="card-text para1">KGisl institute of Education and Technology, Chennai</p>
                <img
                  className="watch img-fluid"
                  src="https://e7.pngegg.com/pngimages/179/880/png-clipart-apple-watch-series-3-apple-watch-series-2-b-h-video-smartwatch-smart-watch-accessory-apple-watch.png"
                  alt="Watch"
                  height={200} width={200}

                />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Map;