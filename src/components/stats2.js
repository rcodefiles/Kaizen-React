import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text26">
                  Students are encouraged to take ownership of their learning
                  and personal growth.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text24">Key Statistics</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text21">
                  Programs are designed to foster leadership skills and
                  self-confidence.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text23">Empowered Students</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      Students are provided with the tools and support to reach
                      their full potential.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text27">Student Engagement</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Students actively participate in decision-making processes
                      and contribute to school initiatives.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      Continuous Improvement
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text28">
                      The Kaizen process promotes a culture of ongoing
                      reflection and enhancement.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text22">Community Engagement</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Collaboration with the community enhances student
                      experiences and broadens their perspectives.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  content2: undefined,
  stat4: undefined,
  stat1: undefined,
  heading1: undefined,
  stat2Description: undefined,
  content1: undefined,
  stat2: undefined,
  stat3Description: undefined,
  stat1Description: undefined,
  stat4Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1642191027965-1a3f8effefdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzgzODg2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Empowered Students Image',
  stat3: undefined,
}

Stats2.propTypes = {
  content2: PropTypes.element,
  stat4: PropTypes.element,
  stat1: PropTypes.element,
  heading1: PropTypes.element,
  stat2Description: PropTypes.element,
  content1: PropTypes.element,
  stat2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1Description: PropTypes.element,
  stat4Description: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
}

export default Stats2
