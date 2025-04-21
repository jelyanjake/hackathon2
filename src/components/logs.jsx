import './logs.css';

function HistPage() {
    return (
      <section id="users">
        <div className="container">
          <div className="section-title">
            <div className="userlog">
            <h2>Interview Statistics</h2>
              <div class="parent">
                <div class="div1">
                  <p>5</p>
                  <p>Interviews Sessions</p>
                </div>
                <div class="div2">
                <p>2</p>
                <p>Likes</p>
                </div>
                <div class="div3">
                <p>5</p>
                <p>Dislikes</p>
                </div>
                <div class="div4">
                <p>Search Bar</p>
                </div>
              </div>
              <hr />
            <p>Use Analytics</p>
            <p>History of Interviews</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default HistPage;