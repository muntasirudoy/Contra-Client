import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './clientProjectCard.css'
const ClientProjectCard = ({data}) => {
  return (   
    <section className="card-area">
        <section className="card-section">
            <div className="card">
                <div className="flip-card">
                    <div className="flip-card__container">
                        <div className="card-front">
                            <div className="card-front__tp card-front__tp--city">
                              

                           <h2 className="card-front__heading">
                            {data.projectName}
                        </h2>
                        <p className="card-front__text-price">
                           {data.address}
                        </p>
                            </div>

                            <div className="card-front__bt">
                                <p className="card-front__text-view card-front__text-view--city">
                                    View me
                                </p>
                            </div>
                        </div>
                        <div className="card-back">
                            <video className="video__container" autoPlay muted loop>
                                <source className="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

                <div className="inside-page">
                    <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                            For urban lovers
                        </h3>
                        <p className="inside-page__text">
                           As cities never sleep, there are always something going on, no matter what time!
                        </p>
                        <Link to={data.id} className="inside-page__btn inside-page__btn--city">View Details <ArrowRightOutlined /></Link>
                    </div>
                </div>
            </div>
        </section>
    </section>

  )
}

export default ClientProjectCard