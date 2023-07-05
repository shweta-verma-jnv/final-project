import "./memories.scss";
import Ribbon from '../../assets/ribbon.png';

const Memories = () => {
  return (
    <div className="memories">
        <div className="title">
            <img src={Ribbon} className="ribbon" alt="" />
            <p style={{padding: '10px', textAlign: 'center'}}>
                We hope that you enjoy looking back and sharing your memories on Facebook, from the most recent to those long ago.
            </p>
        </div>
        <div className="memory">
            <div>
                <h4>4 years of friendship with Pappu</h4>
                <p>Celebrate your friendship with this post, or create a collage of the memories you've shared.</p>
            </div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.K8azxUpg2q4auHSMimIJPAHaFj&pid=Api&P=0&h=180" alt="" />
            <div>
                <p className="notice">&#x1F512; Only you can see this unless you share it</p>
                <div className="buttons">
                    <button style={{flex: 1}}>Create collage</button>
                    <button style={{flex: 1}}>Share</button>
                </div>
            </div>
        </div>
        <div className="title">
            <img src={Ribbon} className="ribbon" alt="" />
            <div>
                <h4>You've completely caught up</h4>
                <p>Check again tomorrow to see more of your memories!</p>
            </div>
        </div>
    </div>
  );
};

export default Memories;
